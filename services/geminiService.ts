import { GroundingChunk, StrategyTask, IntentRoute, DraftPreparationResult, ChatMessage, FilePart, LatLng, DailyTrend, GeneratedPost, VideoScript, PublishingStrategy, VideoTool } from '../types';

// Centralized, robust error handler for API call errors
function throwEnhancedError(error: unknown, defaultMessage: string): never {
    console.error("API Error:", error);

    let messageToParse: string;
    if (error instanceof Error) {
        messageToParse = error.message;
    } else if (typeof error === 'object' && error !== null) {
        const errorObj = error as any;
        messageToParse = errorObj.error?.message || errorObj.message || JSON.stringify(error);
    } else {
        messageToParse = String(error);
    }
    
    const lowerCaseMessage = messageToParse.toLowerCase();

    if (lowerCaseMessage.includes('quota') || lowerCaseMessage.includes('429')) {
        throw new Error('API Quota Exceeded. Please try again later. (Quota)');
    }
    if (lowerCaseMessage.includes('permission') || lowerCaseMessage.includes('key')) {
        throw new Error('API Key Error. Please check your settings.');
    }
    if (lowerCaseMessage.includes('backend connection failed')) {
        throw new Error('Backend Connection Error. Ensure the API server is running (e.g., via `wrangler pages dev`).');
    }
    if (lowerCaseMessage.includes('500')) {
        throw new Error('Server Error. The AI service is temporarily unavailable.');
    }
    if (lowerCaseMessage.includes('aborted') || lowerCaseMessage.includes('timeout')) {
        throw new Error('Request timed out. Please check your internet connection.');
    }

    throw new Error(messageToParse || defaultMessage);
}

// Generic helper function to call our backend proxy
async function callApi(body: object, timeout = 60000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    
    try {
        const response = await fetch('/api/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
            signal: controller.signal,
        });
        clearTimeout(id);

        if (!response.ok) {
            // Check if response is HTML (often means 404/500 from server/proxy, not JSON error)
            const contentType = response.headers.get('content-type');
            if (contentType && contentType.includes('text/html')) {
                throw new Error(`Backend connection failed (${response.status}). proxy/api might be offline.`);
            }

            const errorBody = await response.json().catch(() => ({ error: { message: `API request failed with status ${response.status}` } }));
            throwEnhancedError(errorBody, 'An unknown API error occurred.');
        }
        return response;
    } catch (e) {
        clearTimeout(id);
        if (e instanceof DOMException && e.name === 'AbortError') {
             throw new Error('Request timed out. The AI took too long to respond.');
        }
        throw e;
    }
}

/**
 * Safely parses JSON from text, handling Markdown code blocks.
 */
function safeJsonParse<T>(text: string, context: string): T {
    try {
        if (!text) return {} as T;
        const cleanedText = text.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '');
        return JSON.parse(cleanedText);
    } catch (e) {
        console.error(`JSON Parse Error in ${context}:`, text);
        // Attempt to find JSON array or object if surrounding text exists
        const jsonMatch = text.match(/(\{[\s\S]*\}|\[[\s\S]*\])/);
        if (jsonMatch) {
            try { return JSON.parse(jsonMatch[0]); } catch (e2) {}
        }
        // Return empty object/array as fallback to prevent crash
        return (text.trim().startsWith('[') ? [] : {}) as unknown as T;
    }
}

// --- EXPORTED SERVICES ---

export async function checkSystemHealth(): Promise<{ status: 'ok' | 'error', message: string }> {
    try {
        const response = await callApi({
            model: "gemini-2.5-flash",
            contents: [{ parts: [{ text: "Ping" }] }],
            config: { maxOutputTokens: 5 }
        }, 10000);
        const data = await response.json();
        if (data.candidates || data.text) return { status: 'ok', message: 'System Online' };
        return { status: 'error', message: 'No response data' };
    } catch (e) {
        return { status: 'error', message: String(e) };
    }
}

export async function* generateReportStream(prompt: string): AsyncGenerator<string, void, undefined> {
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        stream: true,
    }, 120000);

    if (!response.body) throw new Error('No response body');

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    try {
        while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            
            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || '';

            for (const line of lines) {
                if (line.startsWith('data:')) {
                    try {
                        const jsonStr = line.substring(5).trim();
                        if (jsonStr === '[DONE]') continue;
                        const json = JSON.parse(jsonStr);
                        const text = json.candidates?.[0]?.content?.parts?.[0]?.text;
                        if (text) yield text;
                    } catch (e) {
                        // console.warn('Stream parse error', e);
                    }
                }
            }
        }
    } finally {
        reader.releaseLock();
    }
}

export async function generateSearchQuery(documentText: string): Promise<string> {
    const prompt = `Generate a short search query (under 10 words) for: ${documentText.substring(0, 500)}...`;
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }]
    });
    const json = await response.json();
    return json.text?.trim().replace(/["']/g, "") || "";
}

// --- SEARCH & GROUNDING ---

export interface SearchResult {
  text: string;
  sources: GroundingChunk[];
}

async function performSearch(prompt: string, useThinkingMode: boolean, location?: LatLng | null): Promise<SearchResult> {
    const model = useThinkingMode ? 'gemini-2.5-flash' : 'gemini-2.5-flash';
    
    const tools: any[] = [{ googleSearch: {} }];
    let finalPrompt = prompt;
    if (location) {
        finalPrompt += ` (User Location: ${location.latitude}, ${location.longitude})`;
    }

    const config: any = { tools };

    const response = await callApi({
        model,
        contents: [{ parts: [{ text: finalPrompt }] }],
        config
    }, 60000);

    const json = await response.json();
    const rawSources = json.candidates?.[0]?.groundingMetadata?.groundingChunks || [];
    
    const sources = rawSources.map((chunk: any) => {
        if (chunk.web?.uri) return { web: { uri: chunk.web.uri, title: chunk.web.title || chunk.web.uri }};
        return null;
    }).filter(Boolean);

    return { text: json.text || "", sources };
}

export async function findLawyers(prompt: string, location?: LatLng | null) { return performSearch(prompt, false, location); }
export async function findNotaries(prompt: string, location?: LatLng | null) { return performSearch(prompt, false, location); }
export async function summarizeNews(prompt: string, thinking: boolean) { return performSearch(prompt, thinking); }
export async function analyzeWebPage(prompt: string, thinking: boolean) { return performSearch(prompt, thinking); }
export async function analyzeSiteStructure(prompt: string, thinking: boolean) { return performSearch(prompt, thinking); }
export async function askGroundedQuestion(query: string) { return performSearch(query, false); }

export async function findBestVideoTools(language: string): Promise<VideoTool[]> {
    const prompt = `List 5 best AI video tools for ${language}. Return JSON array: name, cost, farsiSupport, features, qualityRating.`;
    const res = await performSearch(prompt, false);
    return safeJsonParse(res.text, 'video tools');
}

export async function fetchDailyTrends(language: string): Promise<DailyTrend[]> {
    const region = language === 'fa' ? 'Iran' : 'Global';
    const res = await performSearch(`Identify top 5 trending topics in ${region} today. Return JSON array: title, summary, contentIdea.`, false);
    return safeJsonParse(res.text, 'trends');
}

// --- STRUCTURED GENERATION ---

export async function generateStrategy(goal: string, promptTemplate: string, thinking: boolean): Promise<StrategyTask[]> {
    const prompt = promptTemplate.replace('{goal}', goal);
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
    });
    const json = await response.json();
    return safeJsonParse(json.text, 'strategy');
}

export async function getSuggestions(query: string, contextPrompt: string): Promise<string[]> {
    const prompt = `${contextPrompt}: "${query}"`;
    try {
        const response = await callApi({
            model: "gemini-2.5-flash",
            contents: [{ parts: [{ text: prompt }] }],
            config: { responseMimeType: "application/json" }
        }, 15000);
        const json = await response.json();
        const parsed = safeJsonParse<{suggestions: string[]}>(json.text, 'suggestions');
        return parsed.suggestions || [];
    } catch { return []; }
}

export async function prepareDraftFromTask(task: StrategyTask, template: string, options: string): Promise<DraftPreparationResult> {
    const prompt = template.replace('{taskName}', task.taskName)
                           .replace('{description}', task.description)
                           .replace('{suggestedPrompt}', task.suggestedPrompt)
                           .replace('{docTypeOptions}', options);
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
    });
    const json = await response.json();
    return safeJsonParse(json.text, 'draft prep');
}

export async function routeUserIntent(goal: string, template: string): Promise<IntentRoute[]> {
    const prompt = template.replace('{goal}', goal);
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
    });
    const json = await response.json();
    return safeJsonParse(json.text, 'intent routing');
}

export async function generateChatResponse(history: ChatMessage[]): Promise<{ reply: string, suggestions: string[] }> {
    const contents = history.map(m => ({ role: m.role, parts: [{ text: m.text }] }));
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents,
        config: { 
            responseMimeType: "application/json",
            systemInstruction: { parts: [{ text: "You are Dadgar AI, a helpful legal assistant. Respond in JSON with 'reply' and 'suggestions'." }] }
        }
    });
    const json = await response.json();
    return safeJsonParse(json.text, 'chat response');
}

// --- COURT ASSISTANT FUNCTIONS ---

export async function generateLegalCitations(text: string): Promise<string> {
    const prompt = `شما یک دستیار حقوقی هوشمند هستید. متن زیر را بررسی کن و برای هر ادعا یا جمله حقوقی، شماره ماده قانونی مرتبط (از قانون مدنی، قانون مجازات اسلامی، قانون تجارت یا آیین دادرسی مدنی ایران) را پیدا کن.
    خروجی باید متن اصلی باشد که در انتهای جملات مرتبط، شماره ماده قانونی داخل پرانتز اضافه شده است.
    همچنین فرمت متن را به صورت یک لایحه حقوقی حرفه‌ای و مرتب (با استفاده از Markdown) درآور.
    
    متن ورودی:
    "${text}"`;

    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }]
    });
    const json = await response.json();
    return json.text || "";
}

export async function generateCourtResponse(
    content: { text?: string, file?: FilePart, audio?: string }, 
    persona: 'formal' | 'aggressive' | 'calm'
): Promise<string> {
    
    let systemInstruction = "";
    switch (persona) {
        case 'formal':
            systemInstruction = "You are a formal, strictly professional senior lawyer in Iran. Use precise legal terminology (Farsi). Keep responses concise and respectful.";
            break;
        case 'aggressive':
            systemInstruction = "You are a firm, assertive defense attorney in Iran. Focus on identifying loopholes, objecting to weak evidence, and protecting your client's rights aggressively but legally (in Farsi).";
            break;
        case 'calm':
            systemInstruction = "You are a calm, mediating legal advisor in Iran. Focus on de-escalation, finding common ground, and clear logical reasoning (in Farsi).";
            break;
    }

    const parts: any[] = [];
    if (content.text) parts.push({ text: content.text });
    if (content.file) parts.push({ inlineData: { mimeType: content.file.mimeType, data: content.file.data } });
    if (content.audio) parts.push({ inlineData: { mimeType: 'audio/mp3', data: content.audio } });

    // Add specific prompt context for the turn
    parts.push({ text: "\n\n(Context: We are in a live court session in Iran. The input is what the judge or opposition just said/showed. If the input is audio, transcribe it first implicitly then answer. Provide a short, immediate, and legally sound response or objection based on Iranian law.)" });

    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts }],
        config: {
            systemInstruction: { parts: [{ text: systemInstruction }] }
        }
    });
    
    const json = await response.json();
    return json.text || "";
}

export async function generateSpeech(text: string, persona: 'formal' | 'aggressive' | 'calm'): Promise<string> {
    let voiceName = 'Kore'; // Default
    if (persona === 'formal') voiceName = 'Fenrir';
    if (persona === 'calm') voiceName = 'Puck';

    const response = await callApi({
        model: "gemini-2.5-flash-preview-tts",
        contents: [{ parts: [{ text: text }] }],
        config: {
            responseModalities: ['AUDIO'],
            speechConfig: {
                voiceConfig: {
                    prebuiltVoiceConfig: { voiceName: voiceName },
                },
            },
        },
    });
    
    const json = await response.json();
    return json.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data || "";
}

// --- MEDIA & ANALYSIS ---

export async function analyzeContract(content: { file?: FilePart, text?: string }, query: string, template: string, thinking: boolean): Promise<string> {
    const userQuery = query || 'General analysis';
    const textPrompt = template.replace('{userQuery}', userQuery);
    
    const parts: any[] = [{ text: textPrompt }];
    if (content.file) {
        parts.push({ inlineData: { mimeType: content.file.mimeType, data: content.file.data } });
    }
    if (content.text) {
        parts[0].text += `\n\n${content.text}`;
    }

    const response = await callApi({
        model: thinking ? 'gemini-2.5-flash' : 'gemini-2.5-flash',
        contents: [{ parts }]
    }, 90000);
    
    const json = await response.json();
    return json.text || "No analysis generated.";
}

export async function analyzeImage(content: { file: FilePart }, query: string, template: string, thinking: boolean): Promise<string> {
    const parts = [
        { text: template.replace('{userQuery}', query) },
        { inlineData: { mimeType: content.file.mimeType, data: content.file.data } }
    ];
    const response = await callApi({
        model: 'gemini-2.5-flash',
        contents: [{ parts }]
    }, 60000);
    const json = await response.json();
    return json.text || "No analysis generated.";
}

export async function extractTextFromImage(file: FilePart): Promise<string> {
    return analyzeImage({ file }, "Extract all text.", "Extract text from this image.", false);
}

export async function generateImage(prompt: string, aspectRatio: string): Promise<string> {
    const response = await callApi({
        model: 'imagen-4.0-generate-001',
        prompt: prompt,
        config: {
            numberOfImages: 1,
            aspectRatio: aspectRatio,
            outputMimeType: 'image/jpeg',
        },
    });
    const json = await response.json();
    const base64 = json.generatedImages?.[0]?.image?.imageBytes;
    if (base64) return base64;
    throw new Error("No image returned from API");
}

export async function generateText(prompt: string): Promise<string> {
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }]
    });
    const json = await response.json();
    return json.text || "";
}

export async function generateJsonArray(prompt: string): Promise<string[]> {
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
    });
    const json = await response.json();
    return safeJsonParse(json.text, 'json array');
}

// --- CONTENT HUB GENERATORS ---

export async function generateSocialPost(topic: string, platform: string, language: string): Promise<GeneratedPost> {
    const prompt = `Write a ${platform} post about ${topic} in ${language}. JSON keys: text, imagePrompt.`;
    
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
    });
    
    const json = await response.json();
    const parsed = safeJsonParse<any>(json.text, 'social post');
    
    let imageUrl = '';
    if (parsed.imagePrompt) {
        try {
            const imgBytes = await generateImage(parsed.imagePrompt, '1:1');
            imageUrl = `data:image/jpeg;base64,${imgBytes}`;
        } catch (e) { console.warn("Image gen failed", e); }
    }

    return { platform: platform as any, text: parsed.text, imageUrl }; 
}

export async function adaptPostForWebsite(text: string, platform: string, lang: string) {
    const prompt = `Adapt this ${platform} post to a blog post in ${lang}. JSON: title, content. \n\n${text}`;
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
    });
    const json = await response.json();
    return safeJsonParse(json.text, 'adapt post');
}

export async function generateVideoConcept(topic: string, platform: string, lang: string): Promise<VideoScript> {
    const prompt = `Video script for ${platform} about ${topic} in ${lang}. JSON: title, hook, scenes (timecode, visual, voiceover, emotion, audio_cues), cta, caption, hashtags.`;
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
    });
    const json = await response.json();
    return safeJsonParse(json.text, 'video script');
}

export async function getPublishingStrategy(topic: string, platform: string, lang: string): Promise<PublishingStrategy> {
    const prompt = `Strategy for ${platform} post on ${topic} in ${lang}. JSON: bestTime, reasoning, algorithmTip, nextPostIdea.`;
    const response = await callApi({
        model: "gemini-2.5-flash",
        contents: [{ parts: [{ text: prompt }] }],
        config: { responseMimeType: "application/json" }
    });
    const json = await response.json();
    return safeJsonParse(json.text, 'strategy');
}
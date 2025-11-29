import { GoogleGenAI, GenerateContentResponse } from "@google/genai";
import { HESABRASYAR_SYSTEM_INSTRUCTION } from '../constants';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing.");
  }

  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: HESABRASYAR_SYSTEM_INSTRUCTION,
        temperature: 0.3, // Low temperature for factual auditing
      },
    });

    return response.text || "خطایی در دریافت پاسخ رخ داده است.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage, FilePart } from '../types';
import { generateLegalCitations, generateCourtResponse, generateSpeech } from '../services/geminiService';
import DocumentDisplay from './ReportDisplay';
import { useDropzone } from 'react-dropzone';
import CameraInput from './CameraInput';

type Persona = 'formal' | 'aggressive' | 'calm';

interface Message {
    id: number;
    role: 'user' | 'ai';
    text?: string;
    image?: string;
    audio?: boolean;
}

const CourtAssistant: React.FC = () => {
    const { t } = useLanguage();
    const [activeTab, setActiveTab] = useState<'citation' | 'live'>('citation');
    
    // --- CITATION GENERATOR STATE ---
    const [citationInput, setCitationInput] = useState('');
    const [citationResult, setCitationResult] = useState('');
    const [isGeneratingCitation, setIsGeneratingCitation] = useState(false);

    // --- LIVE ASSISTANT STATE ---
    const [messages, setMessages] = useState<Message[]>([]);
    const [liveInput, setLiveInput] = useState('');
    const [isProcessingLive, setIsProcessingLive] = useState(false);
    const [selectedPersona, setSelectedPersona] = useState<Persona>('formal');
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);
    const [isCameraModalOpen, setIsCameraModalOpen] = useState(false);
    
    // Audio Recording State
    const [isRecording, setIsRecording] = useState(false);
    const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
    const mediaRecorderRef = useRef<MediaRecorder | null>(null);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    // Scroll to bottom of chat
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    // --- CITATION LOGIC ---
    const handleCitationSubmit = async () => {
        if (!citationInput.trim()) return;
        setIsGeneratingCitation(true);
        try {
            const result = await generateLegalCitations(citationInput);
            setCitationResult(result);
        } catch (error) {
            console.error(error);
            alert("Error generating citations. Please try again.");
        } finally {
            setIsGeneratingCitation(false);
        }
    };

    // --- LIVE ASSISTANT AUDIO LOGIC ---
    
    const playAudioResponse = (base64Audio: string) => {
        const audio = new Audio(`data:audio/wav;base64,${base64Audio}`);
        audio.play().catch(e => console.error("Audio playback failed:", e));
    };

    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const recorder = new MediaRecorder(stream);
            const chunks: BlobPart[] = [];

            recorder.ondataavailable = (e) => chunks.push(e.data);
            recorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'audio/mp3' });
                setAudioBlob(blob);
                stream.getTracks().forEach(track => track.stop());
            };

            mediaRecorderRef.current = recorder;
            recorder.start();
            setIsRecording(true);
        } catch (e) {
            console.error("Mic access denied:", e);
            alert("Microphone access denied or not supported.");
        }
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && isRecording) {
            mediaRecorderRef.current.stop();
            setIsRecording(false);
        }
    };

    const handleLiveSubmit = async () => {
        if ((!liveInput.trim() && !uploadedFile && !audioBlob) || isProcessingLive) return;

        const newUserMsg: Message = {
            id: Date.now(),
            role: 'user',
            text: liveInput,
            image: uploadedFile ? URL.createObjectURL(uploadedFile) : undefined,
            audio: !!audioBlob
        };

        setMessages(prev => [...prev, newUserMsg]);
        setLiveInput('');
        setIsProcessingLive(true);

        try {
            let filePart: FilePart | undefined;
            if (uploadedFile) {
                const base64 = await new Promise<string>((resolve) => {
                    const reader = new FileReader();
                    reader.onload = () => resolve((reader.result as string).split(',')[1]);
                    reader.readAsDataURL(uploadedFile);
                });
                filePart = { mimeType: uploadedFile.type, data: base64 };
            }

            let audioBase64: string | undefined;
            if (audioBlob) {
                audioBase64 = await new Promise<string>((resolve) => {
                    const reader = new FileReader();
                    reader.onloadend = () => resolve((reader.result as string).split(',')[1]);
                    reader.readAsDataURL(audioBlob);
                });
            }

            // 1. Get Text Response
            const responseText = await generateCourtResponse({ 
                text: newUserMsg.text, 
                file: filePart,
                audio: audioBase64
            }, selectedPersona);
            
            const newAiMsg: Message = {
                id: Date.now() + 1,
                role: 'ai',
                text: responseText
            };
            setMessages(prev => [...prev, newAiMsg]);

            // 2. Generate Audio Response (TTS)
            try {
                const ttsAudio = await generateSpeech(responseText, selectedPersona);
                if (ttsAudio) {
                    playAudioResponse(ttsAudio);
                }
            } catch (ttsError) {
                console.error("TTS Error:", ttsError);
            }

        } catch (error) {
            console.error(error);
            const errorMsg: Message = { id: Date.now(), role: 'ai', text: "Error processing request." };
            setMessages(prev => [...prev, errorMsg]);
        } finally {
            setIsProcessingLive(false);
            setUploadedFile(null);
            setAudioBlob(null);
        }
    };

    // File Upload Handling
    const onDrop = (acceptedFiles: File[]) => {
        if (acceptedFiles.length > 0) setUploadedFile(acceptedFiles[0]);
    };
    const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: {'image/*': []}, maxFiles: 1 });

    const handleCameraCapture = (base64Data: string, mimeType: string) => {
        // Convert base64 back to File object to reuse existing upload logic
        const byteString = atob(base64Data);
        const ab = new ArrayBuffer(byteString.length);
        const ia = new Uint8Array(ab);
        for (let i = 0; i < byteString.length; i++) {
            ia[i] = byteString.charCodeAt(i);
        }
        const blob = new Blob([ab], { type: mimeType });
        const file = new File([blob], "camera-snapshot.jpg", { type: mimeType });
        setUploadedFile(file);
        setIsCameraModalOpen(false);
    };

    return (
        <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
            {/* Header / Tabs */}
            <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-10">
                <div className="max-w-4xl mx-auto flex">
                    <button 
                        onClick={() => setActiveTab('citation')}
                        className={`flex-1 py-4 text-center font-bold transition-colors ${activeTab === 'citation' ? 'text-brand-gold border-b-2 border-brand-gold bg-gray-700/50' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                        {t('courtAssistant.tabs.citation')}
                    </button>
                    <button 
                        onClick={() => setActiveTab('live')}
                        className={`flex-1 py-4 text-center font-bold transition-colors ${activeTab === 'live' ? 'text-brand-gold border-b-2 border-brand-gold bg-gray-700/50' : 'text-gray-400 hover:text-gray-200'}`}
                    >
                        {t('courtAssistant.tabs.live')}
                    </button>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4 sm:p-6">
                {activeTab === 'citation' ? (
                    <div className="space-y-6 animate-fade-in">
                        <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                            <h2 className="text-xl font-bold text-brand-gold mb-2">{t('courtAssistant.citation.title')}</h2>
                            <p className="text-gray-400 mb-4">{t('courtAssistant.citation.description')}</p>
                            <textarea 
                                value={citationInput}
                                onChange={(e) => setCitationInput(e.target.value)}
                                rows={10}
                                placeholder={t('courtAssistant.citation.placeholder')}
                                className="w-full bg-gray-900 border border-gray-600 rounded-lg p-4 text-white focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-colors"
                            />
                            <div className="mt-4 flex justify-end">
                                <button 
                                    onClick={handleCitationSubmit}
                                    disabled={isGeneratingCitation || !citationInput.trim()}
                                    className="bg-brand-gold text-gray-900 font-bold py-2 px-6 rounded-lg hover:bg-yellow-400 disabled:opacity-50 transition-colors flex items-center gap-2"
                                >
                                    {isGeneratingCitation ? (
                                        <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                                    )}
                                    {t('courtAssistant.citation.button')}
                                </button>
                            </div>
                        </div>
                        {citationResult && (
                            <div className="bg-gray-800 rounded-lg border border-gray-700 overflow-hidden shadow-xl animate-fade-in">
                                <div className="bg-gray-700 px-6 py-3 border-b border-gray-600">
                                    <h3 className="font-bold text-white">{t('courtAssistant.citation.resultTitle')}</h3>
                                </div>
                                <div className="p-6">
                                    <DocumentDisplay generatedDocument={citationResult} isLoading={false} error={null} />
                                </div>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className="flex flex-col h-[80vh] bg-gray-800 rounded-lg border border-gray-700 overflow-hidden animate-fade-in relative">
                        {/* Settings Toolbar */}
                        <div className="bg-gray-900/50 p-3 border-b border-gray-700 flex flex-wrap gap-3 items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="text-xs text-gray-400">{t('courtAssistant.live.personas.label')}</span>
                                <select 
                                    value={selectedPersona}
                                    onChange={(e) => setSelectedPersona(e.target.value as Persona)}
                                    className="bg-gray-800 text-sm text-white border border-gray-600 rounded px-2 py-1 focus:ring-brand-gold focus:border-brand-gold"
                                >
                                    <option value="formal">{t('courtAssistant.live.personas.formal')}</option>
                                    <option value="aggressive">{t('courtAssistant.live.personas.aggressive')}</option>
                                    <option value="calm">{t('courtAssistant.live.personas.calm')}</option>
                                </select>
                            </div>
                            <div className="flex gap-2 overflow-x-auto no-scrollbar">
                                {Object.entries(t('courtAssistant.live.scenarios')).map(([key, label]) => (
                                    <button 
                                        key={key}
                                        onClick={() => setLiveInput(label as string)}
                                        className="whitespace-nowrap px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded-full text-xs text-brand-gold border border-gray-600 transition-colors"
                                    >
                                        {label as string}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Chat Area */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-900/30">
                            {messages.length === 0 && (
                                <div className="h-full flex flex-col items-center justify-center text-gray-500 opacity-50">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" /></svg>
                                    <p>{t('courtAssistant.live.description')}</p>
                                </div>
                            )}
                            {messages.map(msg => (
                                <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                                    <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${msg.role === 'user' ? 'bg-brand-gold text-gray-900 rounded-br-none' : 'bg-gray-700 text-white rounded-bl-none'}`}>
                                        {msg.image && <img src={msg.image} alt="User upload" className="max-w-full rounded-lg mb-2 border border-black/10" />}
                                        {msg.audio && (
                                            <div className="flex items-center gap-2 mb-2 bg-black/10 p-2 rounded">
                                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" /></svg>
                                                <span className="text-xs font-mono">Voice Message</span>
                                            </div>
                                        )}
                                        <p className="text-sm whitespace-pre-wrap">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                            {isProcessingLive && (
                                <div className="flex justify-start">
                                    <div className="bg-gray-700 rounded-2xl rounded-bl-none px-4 py-3 flex gap-1">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="p-4 bg-gray-800 border-t border-gray-700">
                            {uploadedFile && (
                                <div className="flex items-center gap-2 mb-2 bg-gray-700/50 p-2 rounded text-xs text-gray-300">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                    {uploadedFile.name}
                                    <button onClick={() => setUploadedFile(null)} className="ml-auto hover:text-red-400">×</button>
                                </div>
                            )}
                            {audioBlob && (
                                <div className="flex items-center gap-2 mb-2 bg-gray-700/50 p-2 rounded text-xs text-gray-300">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                    Audio Recorded
                                    <button onClick={() => setAudioBlob(null)} className="ml-auto hover:text-red-400">×</button>
                                </div>
                            )}
                            <div className="flex items-end gap-2">
                                <div {...getRootProps()} className="p-3 text-gray-400 hover:text-brand-gold cursor-pointer transition-colors" title={t('courtAssistant.live.upload')}>
                                    <input {...getInputProps()} />
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                                </div>
                                <button
                                    onClick={() => setIsCameraModalOpen(true)}
                                    className="p-3 text-gray-400 hover:text-brand-gold transition-colors"
                                    title="Live Camera Snapshot"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </button>
                                <button 
                                    onMouseDown={startRecording}
                                    onMouseUp={stopRecording}
                                    onTouchStart={startRecording}
                                    onTouchEnd={stopRecording}
                                    className={`p-3 rounded-full transition-all ${isRecording ? 'bg-red-500 text-white animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]' : 'text-gray-400 hover:text-red-500'}`}
                                    title="Hold to Record Audio"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>
                                </button>
                                <textarea
                                    value={liveInput}
                                    onChange={(e) => setLiveInput(e.target.value)}
                                    onKeyDown={(e) => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleLiveSubmit(); } }}
                                    placeholder={t('courtAssistant.live.inputPlaceholder')}
                                    rows={1}
                                    className="flex-1 bg-gray-700 border-0 rounded-xl py-3 px-4 text-white placeholder-gray-500 focus:ring-2 focus:ring-brand-gold resize-none overflow-hidden"
                                    style={{ minHeight: '48px' }}
                                />
                                <button 
                                    onClick={handleLiveSubmit}
                                    disabled={(!liveInput.trim() && !uploadedFile && !audioBlob) || isProcessingLive}
                                    className="p-3 bg-brand-gold text-gray-900 rounded-xl hover:bg-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 009.172 15V4.828a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428A1 1 0 009.172 15V4.828a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428a1 1 0 00.707-1.952V4.828a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.428a1 1 0 00.707-1.952V4.828z" /></svg>
                                </button>
                            </div>
                        </div>
                        
                        {/* Camera Modal */}
                        {isCameraModalOpen && (
                            <div className="absolute inset-0 z-50 bg-gray-900/90 flex flex-col justify-center p-4">
                                <div className="bg-gray-800 rounded-lg p-4 shadow-2xl border border-gray-600">
                                    <div className="flex justify-between mb-4">
                                        <h3 className="text-white font-bold">Live Camera</h3>
                                        <button onClick={() => setIsCameraModalOpen(false)} className="text-gray-400 hover:text-white">Cancel</button>
                                    </div>
                                    <div className="rounded-lg overflow-hidden">
                                        <CameraInput onCapture={handleCameraCapture} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CourtAssistant;

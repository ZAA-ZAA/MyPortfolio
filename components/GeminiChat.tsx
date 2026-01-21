import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, Settings, Loader2 } from 'lucide-react';
import { generateResponse } from '../services/geminiService';
import { ChatMessage } from '../types';

const GeminiChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [apiKey, setApiKey] = useState<string>('');
  const [showSettings, setShowSettings] = useState(false);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { id: '1', role: 'model', text: 'Hi! I am Zoen\'s AI Assistant. Ask me anything about his projects, skills, or education!' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Try to get key from local storage on load
    const storedKey = localStorage.getItem('gemini_api_key');
    if (storedKey) setApiKey(storedKey);
    else setShowSettings(true); // Prompt for key if missing
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSaveKey = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('gemini_api_key', apiKey);
    setShowSettings(false);
  };

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (!apiKey) {
      setShowSettings(true);
      return;
    }

    const userMsg: ChatMessage = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      // Prepare history for the API
      const historyForApi = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const responseText = await generateResponse(apiKey, historyForApi, userMsg.text);
      
      const aiMsg: ChatMessage = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: responseText || "I couldn't generate a response." 
      };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
      const errorMsg: ChatMessage = { 
        id: (Date.now() + 1).toString(), 
        role: 'model', 
        text: "Error: Please check your API Key in settings. (Use a free key from aistudio.google.com)",
        isError: true
      };
      setMessages(prev => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen && (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-brand-600 hover:bg-brand-700 text-white p-4 rounded-full shadow-lg shadow-brand-500/40 transition-all transform hover:scale-110 flex items-center gap-2"
        >
          <Bot className="w-6 h-6" />
          <span className="font-semibold hidden md:inline">Ask AI about Zoen</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-white rounded-2xl shadow-2xl w-[90vw] md:w-[380px] h-[500px] flex flex-col border border-slate-200 overflow-hidden animate-fade-in-up">
          {/* Header */}
          <div className="bg-brand-600 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-5 h-5" />
              <h3 className="font-bold">Zoen's Assistant</h3>
            </div>
            <div className="flex gap-2">
                <button onClick={() => setShowSettings(!showSettings)} className="hover:bg-brand-700 p-1 rounded">
                    <Settings className="w-4 h-4" />
                </button>
                <button onClick={() => setIsOpen(false)} className="hover:bg-brand-700 p-1 rounded">
                    <X className="w-5 h-5" />
                </button>
            </div>
          </div>

          {/* Settings Overlay */}
          {showSettings && (
            <div className="absolute inset-0 bg-slate-900/95 z-20 p-6 flex flex-col justify-center text-white">
              <h4 className="text-lg font-bold mb-4">API Configuration</h4>
              <p className="text-sm text-slate-300 mb-4">
                To enable the AI chat, please enter a valid Gemini API Key. 
                <br /><br />
                <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-brand-400 underline">Get a free key here</a>.
              </p>
              <form onSubmit={handleSaveKey}>
                <input 
                  type="password" 
                  placeholder="Paste API Key here..."
                  className="w-full bg-slate-800 border border-slate-700 rounded p-3 mb-4 text-white focus:outline-none focus:border-brand-500"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                />
                <div className="flex gap-3">
                  <button type="submit" className="bg-brand-600 hover:bg-brand-700 px-4 py-2 rounded text-sm font-bold flex-1">
                    Save Key
                  </button>
                  <button type="button" onClick={() => setShowSettings(false)} className="bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded text-sm flex-1">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 bg-slate-50 space-y-4">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`
                  max-w-[80%] p-3 rounded-2xl text-sm
                  ${msg.role === 'user' 
                    ? 'bg-brand-600 text-white rounded-br-none' 
                    : 'bg-white text-slate-700 border border-slate-200 rounded-bl-none shadow-sm'}
                  ${msg.isError ? 'bg-red-50 text-red-600 border-red-200' : ''}
                `}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
               <div className="flex justify-start">
                 <div className="bg-white p-3 rounded-2xl rounded-bl-none border border-slate-200 shadow-sm">
                    <Loader2 className="w-5 h-5 animate-spin text-brand-600" />
                 </div>
               </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <form onSubmit={handleSend} className="p-3 bg-white border-t border-slate-100 flex gap-2">
            <input 
              type="text" 
              className="flex-1 bg-slate-100 border-0 rounded-full px-4 py-2 text-sm focus:ring-2 focus:ring-brand-500 focus:outline-none"
              placeholder="Ask about my capstone..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={isLoading}
            />
            <button 
              type="submit" 
              disabled={isLoading || !input.trim()}
              className="bg-brand-600 hover:bg-brand-700 text-white p-2 rounded-full disabled:opacity-50 transition"
            >
              <Send className="w-5 h-5" />
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default GeminiChat;
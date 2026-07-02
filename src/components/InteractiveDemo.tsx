import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Sparkles, Shield, Cpu, Zap } from 'lucide-react';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  timestamp: Date;
}

export const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: "Hello! I am Paramount Core AI Agent. I can help explain our software development, cloud infrastructure, SEO, and custom AI chatbot services. What would you like to build today?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const predefinedPrompts = [
    "Tell me about CRM & software development",
    "How do you build custom AI Chatbots?",
    "Can you handle cloud & IT infrastructure migration?",
    "What SEO & marketing services do you offer?",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;

    // Add user message
    const userMsg: Message = {
      sender: 'user',
      text,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');
    setIsTyping(true);

    // Simulate AI response logic
    setTimeout(() => {
      let botText = "";
      const lowerText = text.toLowerCase();

      if (lowerText.includes('crm') || lowerText.includes('software') || lowerText.includes('custom software')) {
        botText = "At Paramount India Technologies LLP, we engineer custom enterprise software and tailormade CRM integrations from scratch. We analyze your company workflow to eliminate bottlenecks and build systems utilizing modern stacks like React, Node.js, and TypeScript, backed by founder Devendra Sharma's quality standards.";
      } else if (lowerText.includes('bot') || lowerText.includes('chat') || lowerText.includes('ai') || lowerText.includes('agent')) {
        botText = "We build state-of-the-art NLP chatbots and autonomous agents designed to hook into your data systems (like CRM, databases, or API). They automate client scheduling, customer support, lead capturing, and CRM syncs in real-time.";
      } else if (lowerText.includes('cloud') || lowerText.includes('infra') || lowerText.includes('support') || lowerText.includes('migration')) {
        botText = "We offer cloud migration and setup (AWS, Azure, GCP) as well as core company network infrastructure installation. We also provide full IT Asset Management, database security, and on-site technical support migrations.";
      } else if (lowerText.includes('seo') || lowerText.includes('marketing') || lowerText.includes('digital') || lowerText.includes('email')) {
        botText = "Our marketing suites cover technical SEO optimization to drive organic traffic, data-driven email automation campaign setups, UI/UX conversions audits, and complete digital advertising campaigns tailored to your target demographics.";
      } else {
        botText = "That sounds like a exciting project! We specialize in custom software development, cloud infrastructure setup, SEO marketing, and automated AI chat agents. Would you like to schedule a consult with our founder Devendra Sharma to discuss details?";
      }

      const botMsg: Message = {
        sender: 'bot',
        text: botText,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1200);
  };

  return (
    <section id="demo" className="relative w-full py-24 px-6 md:px-12 bg-transparent overflow-visible">
      {/* Back glow decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#6366f1]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fcd34d] bg-[#fcd34d]/10 px-3 py-1 rounded-full">
            Interactive Experience
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-normal tracking-tight mt-6 mb-4">
            Test Drive Our <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">AI Agents</span>
          </h2>
          <p className="text-hero-sub text-base sm:text-lg max-w-2xl mx-auto opacity-75">
            Interact with our simulated AI core. We build, program, and connect custom autonomous chat agents to handle client workflows.
          </p>
        </div>

        {/* Dashboard and Chat Console Wrapper */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: AI Agent Specs & Info (liquid-glass) */}
          <div className="lg:col-span-4 liquid-glass rounded-2xl p-8 border border-white/5 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#a855f7]/10 flex items-center justify-center border border-[#a855f7]/30">
                  <Sparkles className="w-5 h-5 text-[#a855f7]" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">Paramount Core V2</h3>
                  <p className="text-xs text-foreground/50">Status: Active & Listening</p>
                </div>
              </div>

              <p className="text-sm text-hero-sub/90 leading-relaxed mb-6">
                Our custom AI bots interface with your operational database and CRM, acting as virtual agents capable of automating complex sequences.
              </p>

              {/* Stats */}
              <div className="flex flex-col gap-4">
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-xs text-foreground/60 flex items-center gap-2"><Cpu className="w-3.5 h-3.5" /> Language Model</span>
                  <span className="text-xs font-semibold text-white">Custom Llama / GPT API</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-xs text-foreground/60 flex items-center gap-2"><Zap className="w-3.5 h-3.5" /> Avg Response Speed</span>
                  <span className="text-xs font-semibold text-emerald-400">~1.2 seconds</span>
                </div>
                <div className="flex justify-between items-center py-2.5 border-b border-white/5">
                  <span className="text-xs text-foreground/60 flex items-center gap-2"><Shield className="w-3.5 h-3.5" /> Enterprise Security</span>
                  <span className="text-xs font-semibold text-blue-400">Fully Compliant</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/5">
              <span className="text-xs text-foreground/40 font-medium block mb-3">Quick Prompts:</span>
              <div className="flex flex-col gap-2">
                {predefinedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(prompt)}
                    className="text-left w-full text-xs py-2 px-3 bg-white/5 hover:bg-white/10 hover:text-white rounded-lg border border-white/5 transition-all duration-200"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Chat Console */}
          <div className="lg:col-span-8 liquid-glass rounded-2xl border border-white/5 flex flex-col h-[550px] overflow-hidden">
            {/* Console Header */}
            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/1">
              <div className="flex items-center gap-2.5">
                <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold tracking-tight text-white">Paramount AI Live Chat Console</span>
              </div>
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#a855f7] bg-[#a855f7]/10 px-2 py-0.5 rounded border border-[#a855f7]/25">
                Developer Mode
              </span>
            </div>

            {/* Chat Box Messages Container */}
            <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`flex gap-3 max-w-[85%] ${
                    msg.sender === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto'
                  }`}
                >
                  {/* Avatar */}
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border ${
                      msg.sender === 'user'
                        ? 'bg-white/10 border-white/20'
                        : 'bg-[#a855f7]/10 border-[#a855f7]/20 text-[#a855f7]'
                    }`}
                  >
                    {msg.sender === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`rounded-2xl p-4 text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-foreground text-background font-medium rounded-tr-none'
                        : 'bg-white/5 border border-white/5 text-foreground/90 rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 max-w-[80%] mr-auto">
                  <div className="w-8 h-8 rounded-full bg-[#a855f7]/10 border border-[#a855f7]/20 text-[#a855f7] flex items-center justify-center">
                    <Bot className="w-4 h-4" />
                  </div>
                  <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-4 flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-1.5 h-1.5 bg-foreground/60 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(inputValue);
              }}
              className="p-4 border-t border-white/5 bg-white/1 flex gap-2"
            >
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask about CRM, custom software, cloud migrations, SEO..."
                className="flex-1 bg-white/5 border border-white/5 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-white/20 transition-all text-white placeholder-foreground/40"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="bg-[#a855f7] hover:bg-[#a855f7]/90 text-white rounded-xl p-3 flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:hover:bg-[#a855f7] cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

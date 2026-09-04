import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Cpu, Zap, Shield, Sparkles, Terminal } from 'lucide-react';

const inter = "'Inter', system-ui, sans-serif";

interface Message {
  sender: 'bot' | 'user';
  text: string;
}

export const InteractiveDemo: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: "Hello! I am Paramount Core AI Agent. I can explain our software engineering, cloud infrastructure, SEO, and custom AI chatbot architectures. What would you like to explore today?" },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const predefinedPrompts = [
    "Tell me about custom enterprise software & CRM",
    "How do you deploy autonomous AI Chatbots?",
    "Can you handle cloud & IT infrastructure migration?",
    "What SEO & growth services do you provide?",
  ];

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSendMessage = (text: string) => {
    if (!text.trim()) return;
    setMessages(prev => [...prev, { sender: 'user', text }]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      let botText = "";
      const t = text.toLowerCase();
      if (t.includes('crm') || t.includes('software')) {
        botText = "At Paramount India Technologies Pvt Ltd, we engineer custom enterprise software and CRM integrations from scratch — React, Node.js, and TypeScript — tailored to your exact workflows.";
      } else if (t.includes('bot') || t.includes('chat') || t.includes('ai')) {
        botText = "We build NLP chatbots and autonomous agents that hook into your CRM and database — automating lead capture, customer support, and syncs in real-time.";
      } else if (t.includes('cloud') || t.includes('infra') || t.includes('migration')) {
        botText = "We handle cloud migrations on AWS, Azure, and GCP, plus full IT asset management, network setup, and database security audits.";
      } else if (t.includes('seo') || t.includes('marketing')) {
        botText = "Our marketing suite covers technical SEO, email automation, UI/UX conversion audits, and digital ad campaigns — with monthly ROI reporting.";
      } else {
        botText = "That sounds like an exciting project! We specialize in custom software, cloud, SEO, and AI agents. Would you like to schedule a consultation with our engineering team?";
      }
      setMessages(prev => [...prev, { sender: 'bot', text: botText }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <section 
      id="demo" 
      className="contrast-section w-full py-24 px-6 md:px-12 relative overflow-hidden" 
      style={{ 
        background: 'radial-gradient(ellipse at 50% 0%, #0d1536 0%, #060913 70%, #04060c 100%)', 
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
      }}
    >
      {/* Background Ambient Radial Glow Orbs */}
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '20%',
          left: '8%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.14) 0%, rgba(56, 189, 248, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '30%',
          right: '8%',
          width: '500px',
          height: '500px',
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.14) 0%, rgba(168, 85, 247, 0) 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div 
            className="eyebrow-tag mb-5 px-4 py-1.5 rounded-full inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'rgba(56, 189, 248, 0.1)',
              border: '1px solid rgba(56, 189, 248, 0.25)',
              color: '#38bdf8',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(56, 189, 248, 0.15)'
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Interactive Experience
          </div>

          <h2 
            style={{ 
              fontFamily: inter, 
              fontSize: 'clamp(28px, 4vw, 46px)', 
              fontWeight: 700, 
              letterSpacing: '-0.025em', 
              lineHeight: 1.12, 
              color: '#ffffff', 
              marginBottom: 14 
            }}
          >
            Test Drive Our{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #38bdf8 0%, #818cf8 50%, #c084fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 25px rgba(56, 189, 248, 0.35))'
              }}
            >
              AI Chatbot Agent
            </span>
          </h2>

          <p style={{ fontFamily: inter, fontSize: 16, fontWeight: 400, lineHeight: 1.75, color: '#cbd5e1', maxWidth: 520, margin: '0 auto' }}>
            Interact with our simulated AI core. We build, program, and connect custom autonomous chat agents to handle enterprise client workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7" style={{ alignItems: 'stretch' }}>

          {/* Left: Specs */}
          <div 
            className="lg:col-span-4 rounded-2xl p-7 flex flex-col justify-between gap-6"
            style={{
              background: 'linear-gradient(160deg, rgba(17, 25, 49, 0.85) 0%, rgba(10, 15, 30, 0.92) 100%)',
              border: '1px solid rgba(129, 140, 248, 0.22)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div 
                  className="flex items-center justify-center rounded-xl"
                  style={{ 
                    width: 44, 
                    height: 44, 
                    background: 'linear-gradient(135deg, rgba(56,189,248,0.25), rgba(99,102,241,0.15))',
                    border: '1px solid rgba(56,189,248,0.3)',
                    color: '#38bdf8',
                    boxShadow: '0 4px 15px rgba(56, 189, 248, 0.2)'
                  }}
                >
                  <Bot style={{ width: 22, height: 22 }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: inter, fontSize: 16, fontWeight: 600, color: '#ffffff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Paramount Core V2</h3>
                  <p style={{ fontFamily: inter, fontSize: 12, color: '#34d399', fontWeight: 600, marginTop: 4, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399', display: 'inline-block', animation: 'pulse 2s infinite', boxShadow: '0 0 10px #34d399' }} />
                    Active & Listening
                  </p>
                </div>
              </div>
              <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.65, color: '#cbd5e1' }}>
                Our custom AI bots interface with your operational database and CRM, acting as virtual agents capable of automating complex sequences.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[
                { icon: Cpu, label: 'Language Model', value: 'Custom LLM / GPT API', color: '#818cf8' },
                { icon: Zap, label: 'Avg Response Speed', value: '~1.2 seconds', color: '#34d399' },
                { icon: Shield, label: 'Enterprise Security', value: 'Fully Compliant', color: '#38bdf8' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div 
                  key={label} 
                  style={{ 
                    display: 'flex', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    padding: '11px 0', 
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)' 
                  }}
                >
                  <span style={{ fontFamily: inter, fontSize: 12, color: '#94a3b8', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon style={{ width: 14, height: 14, color }} /> {label}
                  </span>
                  <span style={{ fontFamily: inter, fontSize: 12, fontWeight: 600, color }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Prompts */}
            <div>
              <p style={{ fontFamily: inter, fontSize: 10, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#94a3b8', marginBottom: 12 }}>
                Quick Prompts
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {predefinedPrompts.map((prompt, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => handleSendMessage(prompt)}
                    style={{ 
                      fontFamily: inter, 
                      fontSize: 12, 
                      fontWeight: 500, 
                      color: '#e2e8f0', 
                      textAlign: 'left', 
                      padding: '10px 14px', 
                      background: 'rgba(255, 255, 255, 0.04)', 
                      border: '1px solid rgba(255, 255, 255, 0.08)', 
                      borderRadius: 10, 
                      cursor: 'pointer', 
                      transition: 'all 0.25s ease', 
                      lineHeight: 1.4 
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(56, 189, 248, 0.12)';
                      e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.35)';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.transform = 'none';
                    }}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Chat Console */}
          <div 
            className="lg:col-span-8 rounded-2xl flex flex-col overflow-hidden" 
            style={{ 
              background: 'linear-gradient(160deg, rgba(12, 24, 45, 0.9) 0%, rgba(7, 16, 32, 0.95) 100%)', 
              border: '1px solid rgba(56, 189, 248, 0.25)', 
              backdropFilter: 'blur(16px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
              height: 540
            }}
          >
            {/* Header */}
            <div 
              style={{ 
                padding: '16px 22px', 
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between', 
                background: 'rgba(255, 255, 255, 0.02)' 
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <Terminal className="w-4 h-4 text-cyan-400" />
                <span style={{ fontFamily: inter, fontSize: 14, fontWeight: 600, color: '#ffffff' }}>
                  Paramount AI Live Chat Console
                </span>
              </div>
              <span 
                style={{ 
                  fontFamily: inter, 
                  fontSize: 11, 
                  fontWeight: 600, 
                  color: '#38bdf8', 
                  background: 'rgba(56, 189, 248, 0.12)', 
                  border: '1px solid rgba(56, 189, 248, 0.25)', 
                  padding: '4px 12px', 
                  borderRadius: 100 
                }}
              >
                Sandbox Mode
              </span>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, padding: 22, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  style={{ 
                    display: 'flex', 
                    gap: 12, 
                    maxWidth: '85%', 
                    alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', 
                    flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row' 
                  }}
                >
                  <div 
                    style={{ 
                      width: 34, 
                      height: 34, 
                      borderRadius: '50%', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center', 
                      flexShrink: 0, 
                      background: msg.sender === 'user' 
                        ? 'linear-gradient(135deg, #4f46e5, #0284c7)' 
                        : 'rgba(56, 189, 248, 0.15)', 
                      border: msg.sender === 'user' 
                        ? 'none' 
                        : '1px solid rgba(56, 189, 248, 0.3)',
                      boxShadow: msg.sender === 'user'
                        ? '0 4px 14px rgba(79, 70, 229, 0.4)'
                        : 'none'
                    }}
                  >
                    {msg.sender === 'user' ? <User style={{ width: 16, height: 16, color: '#ffffff' }} /> : <Bot style={{ width: 16, height: 16, color: '#38bdf8' }} />}
                  </div>
                  <div 
                    style={{ 
                      padding: '12px 16px', 
                      borderRadius: 14, 
                      fontFamily: inter, 
                      fontSize: 13.5, 
                      fontWeight: 400, 
                      lineHeight: 1.65, 
                      background: msg.sender === 'user' 
                        ? 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)' 
                        : 'rgba(255, 255, 255, 0.04)', 
                      color: '#ffffff', 
                      border: msg.sender === 'user' ? 'none' : '1px solid rgba(255, 255, 255, 0.08)',
                      boxShadow: msg.sender === 'user' ? '0 4px 20px rgba(79, 70, 229, 0.35)' : 'none'
                    }}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div style={{ display: 'flex', gap: 12, alignSelf: 'flex-start', alignItems: 'center' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(56, 189, 248, 0.15)', border: '1px solid rgba(56, 189, 248, 0.3)' }}>
                    <Bot style={{ width: 16, height: 16, color: '#38bdf8' }} />
                  </div>
                  <div style={{ padding: '12px 16px', borderRadius: 14, background: 'rgba(255, 255, 255, 0.04)', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <div style={{ display: 'flex', gap: 5, alignItems: 'center' }}>
                      {[0,1,2].map(i => <div key={i} style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8', opacity: 0.8, animation: `pulse ${0.6 + i * 0.15}s infinite` }} />)}
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form 
              onSubmit={e => { e.preventDefault(); handleSendMessage(inputValue); }}
              style={{ 
                padding: '14px 18px', 
                borderTop: '1px solid rgba(255, 255, 255, 0.08)', 
                display: 'flex', 
                gap: 12, 
                alignItems: 'center', 
                background: 'rgba(0, 0, 0, 0.2)' 
              }}
            >
              <input 
                type="text" 
                value={inputValue} 
                onChange={e => setInputValue(e.target.value)}
                placeholder="Ask about CRM software, AI bots, or cloud setups..."
                className="neo-input" 
                style={{ 
                  flex: 1, 
                  fontSize: 13.5, 
                  background: 'rgba(255, 255, 255, 0.05)', 
                  borderColor: 'rgba(255, 255, 255, 0.12)', 
                  color: '#ffffff',
                  borderRadius: 12,
                  padding: '12px 16px'
                }} 
              />
              <button 
                type="submit" 
                className="btn-primary cursor-pointer" 
                style={{ 
                  padding: '12px 18px', 
                  borderRadius: 12, 
                  flexShrink: 0,
                  background: 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)',
                  boxShadow: '0 4px 16px rgba(79, 70, 229, 0.4)'
                }}
              >
                <Send style={{ width: 16, height: 16 }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

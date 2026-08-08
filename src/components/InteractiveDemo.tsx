import React, { useState, useEffect, useRef } from 'react';
import { Send, Bot, User, Cpu, Zap, Shield } from 'lucide-react';

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
    }, 1100);
  };

  return (
    <section id="demo" className="contrast-section w-full" style={{ background: '#0d1633', padding: '96px 0', borderTop: '1px solid rgba(129,140,248,0.16)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Interactive Experience</div>
          <h2 style={{ fontFamily: inter, fontSize: 'clamp(26px,3.8vw,42px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.12, color: '#f5f7ff', marginBottom: 14 }}>
            Test Drive Our AI Chatbot Agent
          </h2>
          <p style={{ fontFamily: inter, fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(226,232,255,0.45)', maxWidth: 480, margin: '0 auto' }}>
            Interact with our simulated AI core. We build, program, and connect custom autonomous chat agents to handle enterprise client workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6" style={{ alignItems: 'stretch' }}>

          {/* Left: Specs */}
          <div className="lg:col-span-4 surface-card" style={{ padding: 24, borderRadius: 16, display: 'flex', flexDirection: 'column', gap: 20 }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 9 }}>
                  <Bot style={{ width: 16, height: 16 }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: inter, fontSize: 15, fontWeight: 600, color: '#f5f7ff', letterSpacing: '-0.01em', lineHeight: 1.2 }}>Paramount Core V2</h3>
                  <p style={{ fontFamily: inter, fontSize: 12, color: '#00a88f', fontWeight: 500, marginTop: 3, display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00a88f', display: 'inline-block', animation: 'pulse 2s infinite' }} />
                    Active & Listening
                  </p>
                </div>
              </div>
              <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.65, color: 'rgba(226,232,255,0.42)' }}>
                Our custom AI bots interface with your operational database and CRM, acting as virtual agents capable of automating complex sequences.
              </p>
            </div>

            {/* Stats */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { icon: Cpu, label: 'Language Model', value: 'Custom LLM / GPT API', color: '#315efb' },
                { icon: Zap, label: 'Avg Response Speed', value: '~1.2 seconds', color: '#00a88f' },
                { icon: Shield, label: 'Enterprise Security', value: 'Fully Compliant', color: '#315efb' },
              ].map(({ icon: Icon, label, value, color }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: '1px solid rgba(129,140,248,0.06)' }}>
                  <span style={{ fontFamily: inter, fontSize: 12, color: 'rgba(226,232,255,0.4)', display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Icon style={{ width: 13, height: 13, color }} /> {label}
                  </span>
                  <span style={{ fontFamily: inter, fontSize: 12, fontWeight: 600, color }}>{value}</span>
                </div>
              ))}
            </div>

            {/* Prompts */}
            <div>
              <p style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(226,232,255,0.3)', marginBottom: 10 }}>Quick Prompts</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {predefinedPrompts.map((prompt, idx) => (
                  <button key={idx} onClick={() => handleSendMessage(prompt)}
                    style={{ fontFamily: inter, fontSize: 12, fontWeight: 500, color: 'rgba(226,232,255,0.55)', textAlign: 'left', padding: '8px 12px', background: 'rgba(129,140,248,0.03)', border: '1px solid rgba(129,140,248,0.07)', borderRadius: 8, cursor: 'pointer', transition: 'all 0.2s', lineHeight: 1.4 }}>
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Chat */}
          <div className="lg:col-span-8" style={{ background: '#121c3a', border: '1px solid rgba(129,140,248,0.07)', borderRadius: 16, display: 'flex', flexDirection: 'column', height: 520, overflow: 'hidden' }}>
            {/* Header */}
            <div style={{ padding: '14px 20px', borderBottom: '1px solid rgba(129,140,248,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'rgba(129,140,248,0.02)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00a88f' }} />
                <span style={{ fontFamily: inter, fontSize: 13, fontWeight: 600, color: '#f5f7ff' }}>Paramount AI Live Chat Console</span>
              </div>
              <span style={{ fontFamily: inter, fontSize: 11, fontWeight: 600, color: '#315efb', background: 'rgba(99,102,241,0.1)', border: '1px solid rgba(99,102,241,0.2)', padding: '3px 10px', borderRadius: 100 }}>
                Sandbox Mode
              </span>
            </div>

            {/* Messages */}
            <div style={{ flex: 1, padding: 20, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
              {messages.map((msg, idx) => (
                <div key={idx} style={{ display: 'flex', gap: 10, maxWidth: '80%', alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start', flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row' }}>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: msg.sender === 'user' ? '#315efb' : 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}>
                    {msg.sender === 'user' ? <User style={{ width: 14, height: 14, color: '#fff' }} /> : <Bot style={{ width: 14, height: 14, color: '#315efb' }} />}
                  </div>
                  <div style={{ padding: '10px 14px', borderRadius: 12, fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.65, background: msg.sender === 'user' ? '#315efb' : 'rgba(129,140,248,0.04)', color: msg.sender === 'user' ? '#fff' : 'rgba(226,232,255,0.75)', border: msg.sender === 'user' ? 'none' : '1px solid rgba(129,140,248,0.07)' }}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div style={{ display: 'flex', gap: 10, alignSelf: 'flex-start', alignItems: 'center' }}>
                  <div style={{ width: 30, height: 30, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(99,102,241,0.12)', border: '1px solid rgba(99,102,241,0.2)' }}>
                    <Bot style={{ width: 14, height: 14, color: '#315efb' }} />
                  </div>
                  <div style={{ padding: '10px 14px', borderRadius: 12, background: 'rgba(129,140,248,0.04)', border: '1px solid rgba(129,140,248,0.07)' }}>
                    <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
                      {[0,1,2].map(i => <div key={i} style={{ width: 5, height: 5, borderRadius: '50%', background: '#315efb', opacity: 0.6, animation: `pulse ${0.6 + i * 0.15}s infinite` }} />)}
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Input */}
            <form onSubmit={e => { e.preventDefault(); handleSendMessage(inputValue); }}
              style={{ padding: '12px 16px', borderTop: '1px solid rgba(129,140,248,0.06)', display: 'flex', gap: 10, alignItems: 'center', background: 'rgba(129,140,248,0.01)' }}>
              <input type="text" value={inputValue} onChange={e => setInputValue(e.target.value)}
                placeholder="Ask about CRM software, AI bots, or cloud setups..."
                className="neo-input" style={{ flex: 1, fontSize: 13 }} />
              <button type="submit" className="btn-primary" style={{ padding: '10px 14px', borderRadius: 10, flexShrink: 0 }}>
                <Send style={{ width: 15, height: 15 }} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

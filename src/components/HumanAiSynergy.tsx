import React, { useState } from 'react';
import { UserCheck, Bot, Cpu, ShieldCheck, Zap, CheckCircle, Sparkles } from 'lucide-react';

const humanCapabilities = [
  { title: 'Strategic System Architecture', desc: 'Principal engineers design resilient software blueprints tailored to real business goals.' },
  { title: 'Domain Logic & Compliance', desc: 'Governance ensuring zero security drift, data privacy compliance, and rigorous code reviews.' },
  { title: 'Intuitive UX/UI Craftsmanship', desc: 'Human-centric design focused on empathy, accessibility, and interface elegance.' },
];

const aiCapabilities = [
  { title: 'Instant Code Synthesis', desc: 'AI models accelerate boilerplates, complex query algorithms, and API integrations.' },
  { title: 'Autonomous 24/7 Agent Support', desc: 'Self-learning chatbots handling inquiries, lead qualification, and CRM database syncs.' },
  { title: 'Predictive Cloud Failover', desc: 'ML algorithms detecting traffic spikes to auto-scale infrastructure seamlessly.' },
];

export const HumanAiSynergy: React.FC = () => {
  const [activeMode, setActiveMode] = useState<'synergy' | 'human' | 'ai'>('synergy');

  return (
    <section 
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
          top: '15%',
          left: '12%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(99, 102, 241, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />
      <div 
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '25%',
          right: '12%',
          width: '450px',
          height: '450px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(56, 189, 248, 0) 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }} 
      />

      <div className="max-w-6xl mx-auto relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <div 
            className="eyebrow-tag mb-5 px-4 py-1.5 rounded-full inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest"
            style={{
              background: 'rgba(99, 102, 241, 0.1)',
              border: '1px solid rgba(165, 180, 252, 0.25)',
              color: '#a5b4fc',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 15px rgba(99, 102, 241, 0.15)'
            }}
          >
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            Our Approach
          </div>

          <h2 
            className="font-display font-semibold text-white tracking-tight mb-4" 
            style={{ fontSize: 'clamp(28px, 4vw, 46px)', letterSpacing: '-0.025em' }}
          >
            Human Ingenuity Meets{' '}
            <span 
              style={{
                background: 'linear-gradient(135deg, #a5b4fc 0%, #6366f1 35%, #38bdf8 70%, #2dd4bf 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 25px rgba(99, 102, 241, 0.35))'
              }}
            >
              AI Velocity
            </span>
          </h2>

          <p 
            className="text-base mx-auto font-normal leading-relaxed" 
            style={{ color: '#cbd5e1', maxWidth: 520, lineHeight: 1.75 }}
          >
            We combine principal human engineering with AI neural models to deliver software 10x faster — without compromising on quality or compliance.
          </p>

          {/* Mode switcher */}
          <div 
            className="inline-flex items-center gap-1.5 mt-9 p-1.5 rounded-xl" 
            style={{ 
              background: 'rgba(255, 255, 255, 0.04)', 
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)'
            }}
          >
            {([
              { key: 'synergy', label: '⚡ Hybrid Synergy' },
              { key: 'human', label: '👤 Human' },
              { key: 'ai', label: '🤖 AI Core' },
            ] as const).map(({ key, label }) => (
              <button 
                key={key} 
                onClick={() => setActiveMode(key)}
                className="px-5 py-2.5 rounded-lg text-xs font-semibold transition-all duration-300 cursor-pointer"
                style={{
                  background: activeMode === key 
                    ? 'linear-gradient(135deg, #4f46e5 0%, #0284c7 100%)' 
                    : 'transparent',
                  color: activeMode === key ? '#ffffff' : '#94a3b8',
                  boxShadow: activeMode === key 
                    ? '0 4px 20px rgba(79, 70, 229, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.3)' 
                    : 'none',
                  fontFamily: 'var(--font-sans)',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 mb-10">

          {/* Human card */}
          <div 
            className={`rounded-2xl p-8 transition-all duration-500 ${activeMode === 'ai' ? 'opacity-30 scale-[0.98] blur-[1px] pointer-events-none' : ''}`}
            style={{
              background: 'linear-gradient(160deg, rgba(17, 25, 49, 0.85) 0%, rgba(10, 15, 30, 0.92) 100%)',
              border: '1px solid rgba(129, 140, 248, 0.22)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
          >
            <div className="flex items-center justify-between mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex items-center gap-4">
                <div 
                  className="flex items-center justify-center rounded-xl" 
                  style={{ 
                    width: 44, 
                    height: 44, 
                    background: 'linear-gradient(135deg, rgba(99,102,241,0.25), rgba(79,70,229,0.1))',
                    border: '1px solid rgba(165,180,252,0.3)',
                    color: '#c7d2fe',
                    boxShadow: '0 4px 12px rgba(99, 102, 241, 0.2)'
                  }}
                >
                  <UserCheck style={{ width: 20, height: 20 }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>Human Architects</h3>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: '#94a3b8' }}>Strategy & Governance</p>
                </div>
              </div>
              <span 
                className="text-xs font-semibold px-3 py-1.5 rounded-full" 
                style={{ 
                  background: 'rgba(99, 102, 241, 0.12)', 
                  color: '#c7d2fe', 
                  border: '1px solid rgba(165, 180, 252, 0.25)', 
                  fontFamily: 'var(--font-sans)' 
                }}
              >
                100% Verified
              </span>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {humanCapabilities.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-4.5 rounded-xl transition-all duration-200 hover:translate-x-1" 
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <div 
                    className="p-1 rounded-md mt-0.5 flex-shrink-0"
                    style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#818cf8' }}
                  >
                    <ShieldCheck className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#cbd5e1', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>Quality Assurance</span>
              <span className="text-xs font-semibold flex items-center gap-2" style={{ color: '#818cf8' }}>
                <CheckCircle className="w-4 h-4 text-indigo-400" /> Zero-Drift Guaranteed
              </span>
            </div>
          </div>

          {/* AI card */}
          <div 
            className={`rounded-2xl p-8 transition-all duration-500 ${activeMode === 'human' ? 'opacity-30 scale-[0.98] blur-[1px] pointer-events-none' : ''}`}
            style={{
              background: 'linear-gradient(160deg, rgba(12, 29, 50, 0.85) 0%, rgba(7, 18, 33, 0.92) 100%)',
              border: '1px solid rgba(56, 189, 248, 0.22)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.08)',
            }}
          >
            <div className="flex items-center justify-between mb-8 pb-6" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <div className="flex items-center gap-4">
                <div 
                  className="flex items-center justify-center rounded-xl" 
                  style={{ 
                    width: 44, 
                    height: 44, 
                    background: 'linear-gradient(135deg, rgba(56,189,248,0.25), rgba(14,165,233,0.1))',
                    border: '1px solid rgba(56,189,248,0.3)',
                    color: '#7dd3fc',
                    boxShadow: '0 4px 12px rgba(56, 189, 248, 0.2)'
                  }}
                >
                  <Bot style={{ width: 20, height: 20 }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg" style={{ fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>AI Neural Core</h3>
                  <p className="text-xs mt-0.5 font-medium" style={{ color: '#94a3b8' }}>Autonomous Execution</p>
                </div>
              </div>
              <span 
                className="text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1.5" 
                style={{ 
                  background: 'rgba(34, 197, 94, 0.12)', 
                  color: '#4ade80', 
                  border: '1px solid rgba(34, 197, 94, 0.3)', 
                  fontFamily: 'var(--font-sans)' 
                }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                Live
              </span>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {aiCapabilities.map((item, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-4 p-4.5 rounded-xl transition-all duration-200 hover:translate-x-1" 
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.03)', 
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <div 
                    className="p-1 rounded-md mt-0.5 flex-shrink-0"
                    style={{ background: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8' }}
                  >
                    <Zap className="w-4 h-4" strokeWidth={2.2} />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1">{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: '#cbd5e1', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <span className="text-xs font-medium" style={{ color: '#94a3b8' }}>Execution Speed</span>
              <span className="text-xs font-semibold flex items-center gap-2" style={{ color: '#38bdf8' }}>
                <Cpu className="w-4 h-4 text-sky-400" /> 10× Development
              </span>
            </div>
          </div>
        </div>

        {/* Benchmark strip */}
        <div 
          className="rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ 
            background: 'linear-gradient(135deg, rgba(17, 25, 54, 0.75) 0%, rgba(12, 22, 45, 0.85) 100%)', 
            border: '1px solid rgba(255, 255, 255, 0.12)',
            backdropFilter: 'blur(16px)',
            boxShadow: '0 12px 36px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
          }}
        >
          <div>
            <p className="text-white font-semibold text-base mb-1" style={{ fontFamily: 'var(--font-display)' }}>The Paramount Hybrid Benchmark</p>
            <p className="text-xs" style={{ color: '#cbd5e1' }}>Human architects govern every line of code our AI systems generate.</p>
          </div>
          <div className="flex items-center gap-10">
            {[
              { v: '10×', l: 'Build Speed', c: 'linear-gradient(135deg, #818cf8, #38bdf8)' },
              { v: '99.9%', l: 'Code Security', c: 'linear-gradient(135deg, #c084fc, #f472b6)' },
              { v: '24/7', l: 'Bot Support', c: 'linear-gradient(135deg, #34d399, #2dd4bf)' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div 
                  className="font-display font-bold text-2xl" 
                  style={{ 
                    background: s.c,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.3))'
                  }}
                >
                  {s.v}
                </div>
                <div className="text-xs uppercase tracking-wider font-medium mt-1" style={{ color: '#94a3b8', fontSize: 10 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


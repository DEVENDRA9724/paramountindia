import React, { useState } from 'react';
import { UserCheck, Bot, Cpu, ShieldCheck, Zap, CheckCircle } from 'lucide-react';

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
    <section className="contrast-section w-full py-24 px-6 md:px-12" style={{ background: '#0d1633', borderTop: '1px solid rgba(129,140,248,0.16)', borderBottom: '1px solid rgba(129,140,248,0.16)' }}>
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="eyebrow-tag mb-5">Our Approach</div>
          <h2 className="font-display font-semibold text-white tracking-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em' }}>
            Human Ingenuity Meets <span className="text-accent-gradient">AI Velocity</span>
          </h2>
          <p className="text-sm mx-auto" style={{ color: 'rgba(226,232,255,0.45)', maxWidth: 480, lineHeight: 1.75 }}>
            We combine principal human engineering with AI neural models to deliver software 10x faster — without compromising on quality or compliance.
          </p>

          {/* Mode switcher */}
          <div className="inline-flex items-center gap-1 mt-8 p-1 rounded-lg" style={{ background: 'rgba(129,140,248,0.04)', border: '1px solid rgba(129,140,248,0.07)' }}>
            {([
              { key: 'synergy', label: '⚡ Hybrid Synergy' },
              { key: 'human', label: '👤 Human' },
              { key: 'ai', label: '🤖 AI Core' },
            ] as const).map(({ key, label }) => (
              <button key={key} onClick={() => setActiveMode(key)}
                className="px-4 py-2 rounded-md text-xs font-semibold transition-all duration-200"
                style={{
                  background: activeMode === key ? '#315efb' : 'transparent',
                  color: activeMode === key ? '#fff' : 'rgba(226,232,255,0.45)',
                  fontFamily: 'var(--font-sans)',
                }}>
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Two columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">

          {/* Human card */}
          <div className={`surface-card rounded-2xl p-8 transition-all duration-400 ${activeMode === 'ai' ? 'opacity-30 scale-[0.98] blur-[1px] pointer-events-none' : ''}`}>
            <div className="flex items-center justify-between mb-7 pb-6" style={{ borderBottom: '1px solid rgba(129,140,248,0.06)' }}>
              <div className="flex items-center gap-3.5">
                <div className="icon-box w-10 h-10 rounded-xl" style={{ width: 40, height: 40 }}>
                  <UserCheck style={{ width: 17, height: 17 }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold" style={{ fontSize: 16, fontFamily: 'var(--font-display)' }}>Human Architects</h3>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(226,232,255,0.35)' }}>Strategy & Governance</p>
                </div>
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full" style={{ background: 'rgba(129,140,248,0.04)', color: 'rgba(226,232,255,0.4)', border: '1px solid rgba(129,140,248,0.06)', fontFamily: 'var(--font-sans)' }}>
                100% Verified
              </span>
            </div>

            <div className="flex flex-col gap-4 mb-7">
              {humanCapabilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl" style={{ background: 'rgba(129,140,248,0.02)', border: '1px solid rgba(129,140,248,0.05)' }}>
                  <ShieldCheck className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-400" strokeWidth={2} />
                  <div>
                    <p className="text-white font-semibold mb-0.5" style={{ fontSize: 13 }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(226,232,255,0.4)', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(129,140,248,0.06)' }}>
              <span className="text-xs" style={{ color: 'rgba(226,232,255,0.3)' }}>Quality Assurance</span>
              <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5" /> Zero-Drift Guaranteed
              </span>
            </div>
          </div>

          {/* AI card */}
          <div className={`surface-card rounded-2xl p-8 transition-all duration-400 ${activeMode === 'human' ? 'opacity-30 scale-[0.98] blur-[1px] pointer-events-none' : ''}`}>
            <div className="flex items-center justify-between mb-7 pb-6" style={{ borderBottom: '1px solid rgba(129,140,248,0.06)' }}>
              <div className="flex items-center gap-3.5">
                <div className="icon-box w-10 h-10 rounded-xl" style={{ width: 40, height: 40 }}>
                  <Bot style={{ width: 17, height: 17 }} />
                </div>
                <div>
                  <h3 className="text-white font-semibold" style={{ fontSize: 16, fontFamily: 'var(--font-display)' }}>AI Neural Core</h3>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(226,232,255,0.35)' }}>Autonomous Execution</p>
                </div>
              </div>
              <span className="text-xs font-medium px-2.5 py-1 rounded-full animate-pulse" style={{ background: 'rgba(99,102,241,0.08)', color: '#315efb', border: '1px solid rgba(99,102,241,0.2)', fontFamily: 'var(--font-sans)' }}>
                Live
              </span>
            </div>

            <div className="flex flex-col gap-4 mb-7">
              {aiCapabilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-4 rounded-xl" style={{ background: 'rgba(129,140,248,0.02)', border: '1px solid rgba(129,140,248,0.05)' }}>
                  <Zap className="w-4 h-4 mt-0.5 flex-shrink-0 text-indigo-400" strokeWidth={2} />
                  <div>
                    <p className="text-white font-semibold mb-0.5" style={{ fontSize: 13 }}>{item.title}</p>
                    <p className="text-xs leading-relaxed" style={{ color: 'rgba(226,232,255,0.4)', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between pt-5" style={{ borderTop: '1px solid rgba(129,140,248,0.06)' }}>
              <span className="text-xs" style={{ color: 'rgba(226,232,255,0.3)' }}>Execution Speed</span>
              <span className="text-xs font-semibold text-indigo-400 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5" /> 10× Development
              </span>
            </div>
          </div>
        </div>

        {/* Benchmark strip */}
        <div className="rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-6"
          style={{ background: 'rgba(99,102,241,0.05)', border: '1px solid rgba(99,102,241,0.15)' }}>
          <div>
            <p className="text-white font-semibold mb-1" style={{ fontSize: 15, fontFamily: 'var(--font-display)' }}>The Paramount Hybrid Benchmark</p>
            <p className="text-xs" style={{ color: 'rgba(226,232,255,0.4)' }}>Human architects govern every line of code our AI systems generate.</p>
          </div>
          <div className="flex items-center gap-8">
            {[
              { v: '10×', l: 'Build Speed', c: '#315efb' },
              { v: '99.9%', l: 'Code Security', c: '#c084fc' },
              { v: '24/7', l: 'Bot Support', c: '#00a88f' },
            ].map(s => (
              <div key={s.l} className="text-center">
                <div className="font-display font-semibold" style={{ fontSize: 22, color: s.c }}>{s.v}</div>
                <div className="text-xs uppercase tracking-wider mt-1" style={{ color: 'rgba(226,232,255,0.3)', fontSize: 9 }}>{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

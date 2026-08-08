import React from 'react';
import { ShieldCheck, Award, Eye, ArrowUpRight } from 'lucide-react';

const inter = "'Inter', system-ui, sans-serif";

const VALUES = [
  { icon: ShieldCheck, title: 'Security-First Engineering', desc: 'Every system is designed with data security and compliance at its core.' },
  { icon: Award, title: 'Technical Excellence', desc: 'We follow modern software engineering principles, robust protocols, and high-availability architecture.' },
  { icon: Eye, title: 'Client Outcome Focus', desc: 'Complex business requirements translated into measurable IT outcomes with zero specification drift.' },
];

export const About: React.FC = () => (
  <section id="about" className="w-full" style={{ background: '#f7f9fc', padding: '96px 0', borderTop: '1px solid rgba(37,99,235,0.05)' }}>
    <div className="max-w-6xl mx-auto px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

        {/* Left */}
        <div className="lg:col-span-6">
          <div className="eyebrow-tag" style={{ marginBottom: 20 }}>About</div>
          <h2 style={{ fontFamily: inter, fontSize: 'clamp(24px, 3.5vw, 40px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.12, color: '#17213d', marginBottom: 20 }}>
            Engineering Excellence at the Core of Every Project
          </h2>
          <p style={{ fontFamily: inter, fontSize: 15, fontWeight: 400, lineHeight: 1.75, color: 'rgba(23,33,61,0.45)', marginBottom: 36 }}>
            Paramount India Technologies Pvt Ltd is a registered IT services company providing full-cycle technical operations — from cloud migrations and database architecture to custom AI agents and CRM integrations. Based in Ahmedabad, we serve enterprises across India and globally.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {VALUES.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 9, flexShrink: 0, marginTop: 2 }}>
                    <Icon style={{ width: 15, height: 15 }} />
                  </div>
                  <div>
                    <h4 style={{ fontFamily: inter, fontSize: 14, fontWeight: 600, color: '#17213d', marginBottom: 4, letterSpacing: '-0.01em' }}>{v.title}</h4>
                    <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.65, color: 'rgba(23,33,61,0.42)' }}>{v.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right */}
        <div className="lg:col-span-6" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Devendra */}
          <div className="surface-card" style={{ padding: 24, borderRadius: 16 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <h3 style={{ fontFamily: inter, fontSize: 17, fontWeight: 700, color: '#17213d', letterSpacing: '-0.015em', lineHeight: 1.2 }}>Devendra Sharma</h3>
                <p style={{ fontFamily: inter, fontSize: 12, fontWeight: 500, color: '#315efb', marginTop: 4, letterSpacing: '0.01em' }}>Co-Founder & Director — Software & Cloud Architect</p>
              </div>
              <ArrowUpRight style={{ width: 16, height: 16, color: 'rgba(23,33,61,0.2)', marginTop: 2, flexShrink: 0 }} />
            </div>
            <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.7, fontStyle: 'italic', color: 'rgba(23,33,61,0.42)', borderLeft: '2px solid #315efb', paddingLeft: 14 }}>
              "Our mission is to make core technology a frictionless asset for enterprise growth — from cloud infrastructure to autonomous AI systems engineered to scale."
            </p>
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(37,99,235,0.06)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: inter, fontSize: 11, color: 'rgba(23,33,61,0.28)' }}>Focus: Core Systems & Cloud Infrastructure</span>
            </div>
          </div>

          {/* Nikita */}
          <div className="surface-card" style={{ padding: 24, borderRadius: 16 }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <h3 style={{ fontFamily: inter, fontSize: 17, fontWeight: 700, color: '#17213d', letterSpacing: '-0.015em', lineHeight: 1.2 }}>Nikita Tejwani</h3>
                <p style={{ fontFamily: inter, fontSize: 12, fontWeight: 500, color: '#c084fc', marginTop: 4, letterSpacing: '0.01em' }}>Co-Founder & Director — Growth & CRO Specialist</p>
              </div>
              <ArrowUpRight style={{ width: 16, height: 16, color: 'rgba(23,33,61,0.2)', marginTop: 2, flexShrink: 0 }} />
            </div>
            <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.7, fontStyle: 'italic', color: 'rgba(23,33,61,0.42)', borderLeft: '2px solid #a855f7', paddingLeft: 14 }}>
              "Great engineering is half the equation — driving measurable ROI and client conversion is what scales a business. We ensure every platform yields top-line revenue."
            </p>
            <div style={{ marginTop: 16, paddingTop: 14, borderTop: '1px solid rgba(37,99,235,0.06)' }}>
              <span style={{ fontFamily: inter, fontSize: 11, color: 'rgba(23,33,61,0.28)' }}>Focus: Performance Marketing & CRO Systems</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: 'Pvt Ltd', label: 'Legal Status' },
              { value: '14+', label: 'IT Domains' },
              { value: '24/7', label: 'SLA Support' },
            ].map(s => (
              <div key={s.label} className="surface-card" style={{ padding: '16px 12px', borderRadius: 12, textAlign: 'center' }}>
                <div style={{ fontFamily: inter, fontSize: 18, fontWeight: 700, color: '#17213d', letterSpacing: '-0.02em', lineHeight: 1 }}>{s.value}</div>
                <div style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, color: 'rgba(23,33,61,0.3)', letterSpacing: '0.08em', textTransform: 'uppercase', marginTop: 6 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  </section>
);

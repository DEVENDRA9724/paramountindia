import React from 'react';
import { Code2, Smartphone, Globe, Layers, Bot, Cloud, Server, ShieldCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  { id: 'software-dev', icon: Code2, title: 'Enterprise Software', desc: 'Custom back-office platforms, dashboards, and workflow automation systems built with scalable architecture.', tags: ['Node.js', 'React', 'PostgreSQL'] },
  { id: 'mobile-app', icon: Smartphone, title: 'Mobile Development', desc: 'Native iOS and Android applications with high-performance animation frameworks and push notification systems.', tags: ['React Native', 'Swift', 'Kotlin'] },
  { id: 'web-dev', icon: Globe, title: 'Web Development & SEO', desc: 'High-speed, SEO-optimized websites with sub-1.5s Core Web Vitals and 99.95% host uptime.', tags: ['Next.js', 'TypeScript', 'Vite'] },
  { id: 'crm-dev', icon: Layers, title: 'CRM Integration', desc: 'End-to-end Salesforce, HubSpot, and custom CRM implementations with lead automation pipelines.', tags: ['Salesforce', 'HubSpot', 'REST'] },
  { id: 'ai-bots', icon: Bot, title: 'AI Chatbot Agents', desc: 'NLP-powered autonomous agents trained on company data for 24/7 customer support and CRM sync.', tags: ['OpenAI', 'LangChain', 'Python'] },
  { id: 'cloud-infra', icon: Cloud, title: 'Cloud Infrastructure', desc: 'Multi-zone AWS/GCP architecture, Kubernetes orchestration, and CI/CD pipelines with zero-downtime deploys.', tags: ['AWS', 'GCP', 'Docker'] },
  { id: 'it-support', icon: Server, title: 'IT Asset Management', desc: 'Enterprise network infrastructure, Active Directory setups, and database migration services.', tags: ['Active Directory', 'SIEM', 'Linux'] },
  { id: 'security', icon: ShieldCheck, title: 'Security & Compliance', desc: 'Database security audits, penetration testing, and data privacy compliance framework implementation.', tags: ['ISO 27001', 'VAPT', 'SOC2'] },
];

const CATEGORIES = ['All', 'Development', 'AI & Automation', 'Infrastructure'];

const inter = "'Inter', system-ui, sans-serif";

export const Services: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState('All');

  return (
    <section id="services" className="w-full" style={{ background: '#f7f9fc', padding: '96px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow-tag" style={{ marginBottom: 20 }}>Services</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 style={{ fontFamily: inter, fontSize: 'clamp(26px, 3.8vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.12, color: '#17213d', maxWidth: 500 }}>
              Full-Cycle IT Engineering & Automation
            </h2>
            <p style={{ fontFamily: inter, fontSize: 14, fontWeight: 400, lineHeight: 1.7, color: 'rgba(23,33,61,0.45)', maxWidth: 300 }}>
              From custom software to autonomous AI agents — engineered for enterprise scale and reliability.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              style={{
                fontFamily: inter, fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
                padding: '6px 16px', borderRadius: 100,
                background: activeFilter === cat ? '#315efb' : 'rgba(37,99,235,0.04)',
                color: activeFilter === cat ? '#fff' : 'rgba(23,33,61,0.45)',
                border: `1px solid ${activeFilter === cat ? '#315efb' : 'rgba(37,99,235,0.07)'}`,
                cursor: 'pointer', transition: 'all 0.2s',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {SERVICES.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="feature-card group cursor-pointer flex flex-col gap-4">
                <div className="icon-box" style={{ width: 38, height: 38, borderRadius: 9 }}>
                  <Icon style={{ width: 16, height: 16 }} />
                </div>
                <div>
                  <h3 style={{ fontFamily: inter, fontSize: 15, fontWeight: 600, letterSpacing: '-0.01em', color: '#17213d', marginBottom: 8, lineHeight: 1.3 }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.65, color: 'rgba(23,33,61,0.42)' }}>
                    {svc.desc}
                  </p>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'auto' }}>
                  {svc.tags.map(tag => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
          <button className="btn-secondary" style={{ gap: 8 }}>
            View All Services <ArrowRight style={{ width: 15, height: 15, opacity: 0.5 }} />
          </button>
        </div>
      </div>
    </section>
  );
};

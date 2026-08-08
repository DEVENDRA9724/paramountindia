import React from 'react';
import { Sparkles, CloudLightning, Database } from 'lucide-react';

const inter = "'Inter', system-ui, sans-serif";

interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  icon: React.ComponentType<any>;
}

export const Solutions: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'case-ai',
      title: 'Autonomous Talent Screening AI Integration',
      clientType: 'Global Recruitment Enterprise',
      metric: '82%',
      metricLabel: 'Reduction in Candidate Screening Time',
      challenge: 'Manual processing of over 10,000 engineering résumés weekly, causing recruiter burnout and candidate drop-off.',
      solution: 'Deployed a custom-trained Paramount AI agent with semantic candidate ranking and automated preliminary chat interviews.',
      icon: Sparkles,
    },
    {
      id: 'case-cloud',
      title: 'Enterprise ERP Cloud Infrastructure Migration',
      clientType: 'Logistics & Supply Chain Firm',
      metric: '99.99%',
      metricLabel: 'Operational Server Availability',
      challenge: 'Unstable legacy servers causing database lockouts and order synchronization delays during peak traffic.',
      solution: 'Re-architected client backend, migrating to AWS multi-region Kubernetes clusters with failover protection.',
      icon: CloudLightning,
    },
    {
      id: 'case-crm',
      title: 'Custom CRM & Sales Automation Pipeline',
      clientType: 'Real Estate Developer Group',
      metric: '4.2x',
      metricLabel: 'Sales Conversion Multiplier',
      challenge: 'Fragmented lead channels (web, social, calls) leading to lost inquiries and slow sales team response.',
      solution: 'Built a custom CRM syncing all leads instantly, using automated SMS/email triggers and sales readiness scoring.',
      icon: Database,
    },
  ];

  return (
    <section id="solutions" className="w-full" style={{ background: '#f7f9fc', padding: '96px 0', borderTop: '1px solid rgba(37,99,235,0.05)' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div className="eyebrow-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Real-World Impact</div>
          <h2 style={{ fontFamily: inter, fontSize: 'clamp(26px, 3.8vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.12, color: '#17213d', marginBottom: 14 }}>
            Proven Enterprise Case Studies
          </h2>
          <p style={{ fontFamily: inter, fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(23,33,61,0.45)', maxWidth: 480, margin: '0 auto' }}>
            How we translate core IT engineering into concrete business ROI and operational efficiencies.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <div key={study.id} className="surface-card" style={{ padding: 28, borderRadius: 16, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
                    <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 9 }}>
                      <Icon style={{ width: 16, height: 16 }} />
                    </div>
                    <span style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#315efb', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)', padding: '3px 10px', borderRadius: 100 }}>
                      {study.clientType}
                    </span>
                  </div>

                  <h3 style={{ fontFamily: inter, fontSize: 17, fontWeight: 600, letterSpacing: '-0.015em', lineHeight: 1.35, color: '#17213d', marginBottom: 16 }}>
                    {study.title}
                  </h3>

                  <div style={{ marginBottom: 14 }}>
                    <span style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(23,33,61,0.3)', display: 'block', marginBottom: 4 }}>
                      Challenge
                    </span>
                    <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.6, color: 'rgba(23,33,61,0.42)' }}>
                      {study.challenge}
                    </p>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <span style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#315efb', display: 'block', marginBottom: 4 }}>
                      Solution
                    </span>
                    <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.6, color: 'rgba(23,33,61,0.5)' }}>
                      {study.solution}
                    </p>
                  </div>
                </div>

                <div style={{ paddingTop: 16, borderTop: '1px solid rgba(37,99,235,0.06)', display: 'flex', alignItems: 'baseline', gap: 10, marginTop: 'auto' }}>
                  <span style={{ fontFamily: inter, fontSize: 32, fontWeight: 700, letterSpacing: '-0.03em', color: '#17213d', lineHeight: 1 }}>
                    {study.metric}
                  </span>
                  <span style={{ fontFamily: inter, fontSize: 11, fontWeight: 500, color: 'rgba(23,33,61,0.38)', lineHeight: 1.3 }}>
                    {study.metricLabel}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

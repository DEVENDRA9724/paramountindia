import React from 'react';
import { ArrowLeft, Sparkles, CloudLightning, Database } from 'lucide-react';

const inter = "'Inter', system-ui, sans-serif";

interface SolutionsPageProps {
  onBackToHome: () => void;
  onNavigateToContact: (serviceId: string, messagePrefill: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onBackToHome, onNavigateToContact }) => {
  const steps = [
    { num: '01', title: 'Discovery & Infrastructure Audit', desc: 'We audit your legacy code, office networks, cloud databases, and software workflows to isolate bottlenecks.' },
    { num: '02', title: 'Architectural Blueprinting', desc: 'Founder Devendra Sharma and core architects draft cloud setup maps, software API links, and AI database schemas.' },
    { num: '03', title: 'Sandbox Development & QA', desc: 'We build custom code elements in sandboxes, test chat intents, and run rigorous security pen-tests.' },
    { num: '04', title: 'Zero-Downtime Data Migration', desc: 'We deploy database migrations and cluster routing adjustments during off-peak windows to prevent disruptions.' },
    { num: '05', title: 'SLA Support Operations', desc: 'We establish 24/7 technical monitoring alerts, license compliance tracking, and periodic AI intent tuning.' },
  ];

  const caseStudies = [
    {
      id: 'case-ai',
      title: 'Autonomous Talent Screening Integration',
      clientType: 'GLOBAL RECRUITMENT ENTERPRISE',
      metric: '82%',
      metricLabel: 'Reduction in Screening Time',
      challenge: 'Manual processing of over 10,000 engineering résumés weekly, leading to candidate drop-off and recruiter fatigue.',
      solution: 'Deployed a custom-trained Paramount AI agent with semantic parsing that ranks candidates based on project history and runs structured preliminary chat interviews automatically.',
      architecture: ['Python / FastAPI microservices', 'OpenAI Embeddings & Vector Stores', 'Salesforce API sync modules', 'AWS Lambda serverless endpoints'],
      icon: Sparkles,
      serviceId: 'ai-bots',
    },
    {
      id: 'case-cloud',
      title: 'Enterprise ERP Cloud Infrastructure Migration',
      clientType: 'LOGISTICS & SUPPLY CHAIN FIRM',
      metric: '99.99%',
      metricLabel: 'Operational Server Availability',
      challenge: 'Unstable legacy servers causing database lockouts and order synchronization delays during peak traffic.',
      solution: 'Re-architected client backend, migrating to AWS multi-region Kubernetes clusters with failover protection.',
      architecture: ['AWS EKS Kubernetes Cluster', 'Terraform IaC configurations', 'PostgreSQL Multi-AZ Failover', 'Docker Containerization'],
      icon: CloudLightning,
      serviceId: 'cloud-infra',
    },
    {
      id: 'case-crm',
      title: 'Custom CRM & Sales Automation Pipeline',
      clientType: 'REAL ESTATE DEVELOPER GROUP',
      metric: '4.2x',
      metricLabel: 'Sales Conversion Multiplier',
      challenge: 'Fragmented lead channels (web, social, calls) leading to lost inquiries and slow sales team response.',
      solution: 'Built a custom CRM syncing all leads instantly, using automated SMS/email triggers and sales readiness scoring.',
      architecture: ['React.js + Node.js Custom Portal', 'HubSpot / Salesforce Webhooks', 'Automated Lead Distribution System', 'REST API Architecture'],
      icon: Database,
      serviceId: 'crm-dev',
    },
  ];

  return (
    <div style={{ background: '#f7f9fc', minHeight: '100vh', padding: '48px 0 96px 0', color: '#17213d' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Back button */}
        <button
          onClick={onBackToHome}
          style={{ fontFamily: inter, fontSize: 12, fontWeight: 600, color: '#315efb', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 40 }}
        >
          <ArrowLeft style={{ width: 14, height: 14 }} /> BACK TO HOMEPAGE
        </button>

        {/* Title */}
        <div style={{ marginBottom: 56 }}>
          <div className="eyebrow-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Case Studies &amp; Methodology</div>
          <h1 style={{ fontFamily: inter, fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#17213d', marginBottom: 16 }}>
            Enterprise Solutions &amp; Case Studies
          </h1>
          <p style={{ fontFamily: inter, fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(23,33,61,0.45)', maxWidth: 560 }}>
            Detailed breakdown of production systems engineered by Paramount India Technologies Pvt Ltd for global enterprises.
          </p>
        </div>

        {/* Development Methodology Steps */}
        <div style={{ marginBottom: 72 }}>
          <h2 style={{ fontFamily: inter, fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: '#17213d', marginBottom: 24 }}>
            Our 5-Step Delivery Methodology
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {steps.map((step) => (
              <div key={step.num} className="surface-card" style={{ padding: 20, borderRadius: 14 }}>
                <span style={{ fontFamily: inter, fontSize: 24, fontWeight: 800, color: '#315efb', display: 'block', marginBottom: 10, lineHeight: 1 }}>
                  {step.num}
                </span>
                <h3 style={{ fontFamily: inter, fontSize: 14, fontWeight: 600, color: '#17213d', marginBottom: 8, lineHeight: 1.3 }}>
                  {step.title}
                </h3>
                <p style={{ fontFamily: inter, fontSize: 12, fontWeight: 400, lineHeight: 1.6, color: 'rgba(23,33,61,0.4)' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Case Studies */}
        <div>
          <h2 style={{ fontFamily: inter, fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: '#17213d', marginBottom: 24 }}>
            Production Implementations
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {caseStudies.map((study) => {
              const Icon = study.icon;
              return (
                <div key={study.id} className="surface-card" style={{ padding: 32, borderRadius: 16 }}>
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    <div className="lg:col-span-8">
                      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
                        <div className="icon-box" style={{ width: 36, height: 36, borderRadius: 9 }}>
                          <Icon style={{ width: 16, height: 16 }} />
                        </div>
                        <span style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#315efb', background: 'rgba(99,102,241,0.08)', border: '1px solid rgba(99,102,241,0.18)', padding: '3px 10px', borderRadius: 100 }}>
                          {study.clientType}
                        </span>
                      </div>

                      <h3 style={{ fontFamily: inter, fontSize: 20, fontWeight: 700, letterSpacing: '-0.015em', color: '#17213d', marginBottom: 16 }}>
                        {study.title}
                      </h3>

                      <div style={{ marginBottom: 16 }}>
                        <span style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(23,33,61,0.3)', display: 'block', marginBottom: 4 }}>
                          The Operational Challenge
                        </span>
                        <p style={{ fontFamily: inter, fontSize: 14, fontWeight: 400, lineHeight: 1.65, color: 'rgba(23,33,61,0.45)' }}>
                          {study.challenge}
                        </p>
                      </div>

                      <div style={{ marginBottom: 20 }}>
                        <span style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#315efb', display: 'block', marginBottom: 4 }}>
                          Engineered Solution
                        </span>
                        <p style={{ fontFamily: inter, fontSize: 14, fontWeight: 400, lineHeight: 1.65, color: 'rgba(23,33,61,0.55)' }}>
                          {study.solution}
                        </p>
                      </div>

                      <div>
                        <span style={{ fontFamily: inter, fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(23,33,61,0.3)', display: 'block', marginBottom: 8 }}>
                          Architecture Components
                        </span>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                          {study.architecture.map((arch) => (
                            <span key={arch} style={{ fontFamily: 'monospace', fontSize: 11, fontWeight: 500, color: 'rgba(23,33,61,0.6)', background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.07)', padding: '3px 10px', borderRadius: 6 }}>
                              {arch}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="lg:col-span-4" style={{ background: 'rgba(37,99,235,0.02)', border: '1px solid rgba(37,99,235,0.06)', borderRadius: 14, padding: 24, textAlign: 'center', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <div style={{ fontFamily: inter, fontSize: 42, fontWeight: 800, letterSpacing: '-0.03em', color: '#17213d', lineHeight: 1, marginBottom: 8 }}>
                        {study.metric}
                      </div>
                      <div style={{ fontFamily: inter, fontSize: 12, fontWeight: 500, color: 'rgba(23,33,61,0.4)', marginBottom: 24 }}>
                        {study.metricLabel}
                      </div>
                      <button
                        onClick={() => onNavigateToContact(study.serviceId, `Inquiry regarding case study: "${study.title}"`)}
                        className="btn-primary"
                        style={{ width: '100%', justifyContent: 'center' }}
                      >
                        Request Similar Solution
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
};

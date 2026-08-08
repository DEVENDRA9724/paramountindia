import React, { useState } from 'react';
import { Globe, Search, Layers, MessageSquare, Mail, Code2, Smartphone, Bot, Cloud, ShieldCheck, ArrowRight } from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  desc: string;
  category: 'Development' | 'AI & Automation' | 'Marketing & CRM' | 'Infrastructure';
  tags: string[];
}

const SERVICES: ServiceItem[] = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Website Development',
    category: 'Development',
    desc: 'High-speed, responsive custom websites and enterprise web portals built with sub-1.2s Core Web Vitals and 99.95% host uptime.',
    tags: ['Next.js', 'React', 'TypeScript', 'Vite'],
  },
  {
    id: 'seo-marketing',
    icon: Search,
    title: 'SEO & Digital Marketing',
    category: 'Marketing & CRM',
    desc: 'Technical SEO audits, keyword ranking, schema markup, organic traffic acceleration, Google Ads, and Meta ad campaign management.',
    tags: ['Technical SEO', 'Google Ads', 'Meta Ads', 'Schema'],
  },
  {
    id: 'crm-dev',
    icon: Layers,
    title: 'CRM Systems & Integration',
    category: 'Marketing & CRM',
    desc: 'Custom CRM platform engineering, Salesforce and HubSpot integrations, lead scoring, and automated pipeline workflows.',
    tags: ['Salesforce', 'HubSpot', 'Custom CRM', 'REST API'],
  },
  {
    id: 'whatsapp-api',
    icon: MessageSquare,
    title: 'WhatsApp API Integration',
    category: 'AI & Automation',
    desc: 'Official Meta WhatsApp Business API integration, broadcast campaigns, interactive bot triggers, and automated lead capture.',
    tags: ['WhatsApp API', 'Webhooks', 'Meta Business', 'Node.js'],
  },
  {
    id: 'email-automation',
    icon: Mail,
    title: 'Email Automation',
    category: 'AI & Automation',
    desc: 'Drip campaign sequences, automated transactional emails, cold outreach infrastructure, DKIM/SPF deliverability, and CRM sync.',
    tags: ['SendGrid', 'Klaviyo', 'Mailchimp', 'SMTP'],
  },
  {
    id: 'software-dev',
    icon: Code2,
    title: 'Enterprise Software',
    category: 'Development',
    desc: 'Custom back-office software platforms, ERP systems, internal dashboards, and scalable REST/GraphQL API microservices.',
    tags: ['Node.js', 'React', 'PostgreSQL', 'Go'],
  },
  {
    id: 'mobile-app',
    icon: Smartphone,
    title: 'Mobile App Development',
    category: 'Development',
    desc: 'Native iOS and Android applications with high-performance animation frameworks, push notifications, and offline sync.',
    tags: ['React Native', 'Flutter', 'Swift', 'Kotlin'],
  },
  {
    id: 'ai-bots',
    icon: Bot,
    title: 'AI Chatbots & Agents',
    category: 'AI & Automation',
    desc: 'NLP-powered autonomous AI chatbots trained on custom company datasets for 24/7 client support and automatic CRM sync.',
    tags: ['OpenAI API', 'LangChain', 'Python', 'LLM'],
  },
  {
    id: 'cloud-infra',
    icon: Cloud,
    title: 'Cloud Infrastructure',
    category: 'Infrastructure',
    desc: 'Multi-zone AWS/GCP server cluster setups, Kubernetes container orchestration, CI/CD pipelines, and zero-downtime deployments.',
    tags: ['AWS', 'GCP', 'Docker', 'DevOps'],
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: 'Security & Compliance',
    category: 'Infrastructure',
    desc: 'Database security audits, penetration testing (VAPT), SSL/TLS hardening, and data privacy framework compliance.',
    tags: ['ISO 27001', 'VAPT', 'SOC2', 'SSL'],
  },
];

const CATEGORIES = ['All', 'Development', 'AI & Automation', 'Marketing & CRM', 'Infrastructure'];

const inter = "'Inter', system-ui, sans-serif";

interface ServicesProps {
  onNavigate?: (section: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredServices = activeFilter === 'All'
    ? SERVICES
    : SERVICES.filter(svc => svc.category === activeFilter);

  return (
    <section id="services" className="w-full" style={{ background: '#f7f9fc', padding: '96px 0' }}>
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        {/* Header */}
        <div style={{ marginBottom: 48 }}>
          <div className="eyebrow-tag" style={{ marginBottom: 20 }}>Services</div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2 style={{ fontFamily: inter, fontSize: 'clamp(26px, 3.8vw, 42px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.12, color: '#17213d', maxWidth: 540 }}>
              Full-Cycle Web, CRM, AI &amp; Automation Services
            </h2>
            <p style={{ fontFamily: inter, fontSize: 14, fontWeight: 400, lineHeight: 1.7, color: 'rgba(23,33,61,0.45)', maxWidth: 320 }}>
              From website development &amp; SEO to WhatsApp API, CRM, and email automation — engineered for growth.
            </p>
          </div>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 36 }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveFilter(cat)}
              style={{
                fontFamily: inter, fontSize: 12, fontWeight: 600, letterSpacing: '0.04em',
                padding: '7px 18px', borderRadius: 100,
                background: activeFilter === cat ? '#315efb' : 'rgba(37,99,235,0.04)',
                color: activeFilter === cat ? '#fff' : 'rgba(23,33,61,0.55)',
                border: `1px solid ${activeFilter === cat ? '#315efb' : 'rgba(37,99,235,0.09)'}`,
                cursor: 'pointer', transition: 'all 0.2s',
                boxShadow: activeFilter === cat ? '0 4px 14px rgba(49,94,251,0.25)' : 'none',
              }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredServices.map((svc) => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="feature-card group cursor-pointer flex flex-col gap-4"
                onClick={() => onNavigate?.('services')}>
                <div className="flex items-center justify-between">
                  <div className="icon-box" style={{ width: 40, height: 40, borderRadius: 10 }}>
                    <Icon style={{ width: 18, height: 18 }} />
                  </div>
                  <span style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(23,33,61,0.35)', fontFamily: inter }}>
                    {svc.category}
                  </span>
                </div>
                <div>
                  <h3 style={{ fontFamily: inter, fontSize: 15.5, fontWeight: 600, letterSpacing: '-0.015em', color: '#17213d', marginBottom: 8, lineHeight: 1.3 }}>
                    {svc.title}
                  </h3>
                  <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.65, color: 'rgba(23,33,61,0.48)' }}>
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
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
          <button onClick={() => onNavigate?.('services')} className="btn-secondary" style={{ gap: 8 }}>
            View Detailed Service Specs <ArrowRight style={{ width: 15, height: 15, opacity: 0.6 }} />
          </button>
        </div>
      </div>
    </section>
  );
};


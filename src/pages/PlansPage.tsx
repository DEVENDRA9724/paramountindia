import React, { useState } from 'react';
import { ArrowLeft, Check, Info } from 'lucide-react';

const inter = "'Inter', system-ui, sans-serif";

interface PlansPageProps {
  onBackToHome: () => void;
  onSelectPlan: (planName: string, serviceId: string) => void;
}

export const PlansPage: React.FC<PlansPageProps> = ({ onBackToHome, onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const plans = [
    {
      id: 'starter',
      name: 'Starter Setup',
      monthlyPrice: '₹34,999',
      annualPrice: '₹27,999',
      desc: 'For growing businesses needing a solid digital foundation.',
      serviceId: 'web-dev',
      features: [
        'Custom Website Development (React/Vite)',
        'Local SEO & Google Business Optimization',
        'Basic Email Marketing & Automation Setup',
        'NLP Support AI Chatbot (Web Widget)',
        'Chat & Email Support (9am–6pm IST)',
        'Quarterly Uptime & Performance Audits',
      ],
      isPopular: false,
    },
    {
      id: 'growth',
      name: 'Growth Suite',
      monthlyPrice: '₹99,999',
      annualPrice: '₹79,999',
      desc: 'Comprehensive stack for companies scaling their tech operations.',
      serviceId: 'custom-software',
      features: [
        'Custom Software & CRM Pipeline Integration',
        'Native Mobile App (React Native iOS/Android)',
        'Advanced AI Bots + CRM Lead Sync',
        'Technical SEO & Performance Marketing',
        'AWS/GCP Multi-Region Cloud Architecture',
        '24/7 Priority SLA Support & Incident Hotline',
        'Monthly Code Security & Compliance Audits',
      ],
      isPopular: true,
    },
    {
      id: 'enterprise',
      name: 'Enterprise Custom',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      desc: 'Full IT outsourcing, compliance, and dedicated engineering team.',
      serviceId: 'it-support',
      features: [
        'Dedicated Full-Stack Engineering Team',
        'Enterprise IT Asset Management & Licensing',
        'On-site Office Network & Active Directory Setup',
        'Full Database VAPT & Security Audits',
        'Unlimited Custom AI Agent Intent Tuning',
        'Dedicated Technical Account Manager + Custom SLA',
        'Direct Founder Escalation Window',
      ],
      isPopular: false,
    },
  ];

  const faqs = [
    {
      q: 'Are contract agreements flexible?',
      a: 'Yes. We offer both month-to-month service agreements and discounted annual terms with a 20% savings.',
    },
    {
      q: 'How does the 24/7 SLA monitoring work?',
      a: 'Growth and Enterprise tiers include automated monitoring alerts that trigger incident response protocols within 15 minutes of an anomaly.',
    },
    {
      q: 'Can we request on-site hardware support in India?',
      a: 'Absolutely. Paramount India Technologies Pvt Ltd is headquartered in Ahmedabad, Gujarat. We provide on-site network infrastructure setups and migration workshops for teams under our Growth and Enterprise agreements.',
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
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div className="eyebrow-tag" style={{ marginBottom: 16, display: 'inline-flex' }}>Pricing &amp; Agreements</div>
          <h1 style={{ fontFamily: inter, fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 700, letterSpacing: '-0.025em', lineHeight: 1.1, color: '#17213d', marginBottom: 16 }}>
            Transparent Engineering Plans
          </h1>
          <p style={{ fontFamily: inter, fontSize: 15, fontWeight: 400, lineHeight: 1.7, color: 'rgba(23,33,61,0.45)', maxWidth: 500, margin: '0 auto' }}>
            Structured service agreements designed for startups through enterprise IT operations.
          </p>

          {/* Toggle */}
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 4, marginTop: 32, padding: 4, borderRadius: 10, background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.07)' }}>
            {(['monthly', 'annual'] as const).map(cycle => (
              <button key={cycle} onClick={() => setBillingCycle(cycle)}
                style={{
                  fontFamily: inter, fontSize: 12, fontWeight: 600, padding: '8px 20px', borderRadius: 8,
                  background: billingCycle === cycle ? '#315efb' : 'transparent',
                  color: billingCycle === cycle ? '#fff' : 'rgba(23,33,61,0.45)',
                  border: 'none', cursor: 'pointer', transition: 'all 0.2s',
                }}>
                {cycle === 'monthly' ? 'Monthly Billing' : 'Annual Billing (Save 20%)'}
              </button>
            ))}
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: 72 }}>
          {plans.map(plan => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isCustom = price === 'Custom';
            return (
              <div key={plan.id} className="surface-card" style={{
                padding: 32, borderRadius: 16, display: 'flex', flexDirection: 'column',
                border: plan.isPopular ? '1px solid rgba(99,102,241,0.35)' : '1px solid rgba(37,99,235,0.07)',
                background: plan.isPopular ? 'rgba(99,102,241,0.06)' : '#ffffff',
                position: 'relative',
              }}>
                {plan.isPopular && (
                  <span style={{
                    position: 'absolute', top: -12, left: '50%', transform: 'translateX(-50%)',
                    fontFamily: inter, fontSize: 11, fontWeight: 600, color: '#fff', background: '#315efb',
                    padding: '4px 14px', borderRadius: 100,
                  }}>
                    Most Popular
                  </span>
                )}

                <span style={{ fontFamily: inter, fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(23,33,61,0.4)', marginBottom: 12 }}>
                  {plan.name}
                </span>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 10 }}>
                  <span style={{ fontFamily: inter, fontSize: 36, fontWeight: 700, letterSpacing: '-0.03em', color: '#17213d', lineHeight: 1 }}>
                    {price}
                  </span>
                  {!isCustom && <span style={{ fontFamily: inter, fontSize: 13, color: 'rgba(23,33,61,0.4)' }}>INR / month + GST</span>}
                </div>

                <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.6, color: 'rgba(23,33,61,0.45)', marginBottom: 24 }}>
                  {plan.desc}
                </p>

                <div style={{ height: 1, background: 'rgba(37,99,235,0.06)', marginBottom: 24 }} />

                <ul style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32, flex: 1 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                      <Check style={{ width: 14, height: 14, color: '#315efb', flexShrink: 0, marginTop: 3 }} />
                      <span style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.5, color: 'rgba(23,33,61,0.6)' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={() => onSelectPlan(plan.name, plan.serviceId)}
                  className={plan.isPopular ? 'btn-primary' : 'btn-secondary'}
                  style={{ width: '100%', justifyContent: 'center' }}>
                  {isCustom ? 'Request Proposal' : 'Get Started'}
                </button>

                {billingCycle === 'annual' && !isCustom && (
                  <p style={{ fontFamily: inter, fontSize: 11, color: 'rgba(23,33,61,0.3)', textAlign: 'center', marginTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 4 }}>
                    <Info style={{ width: 12, height: 12 }} /> Billed annually
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <h2 style={{ fontFamily: inter, fontSize: 20, fontWeight: 700, letterSpacing: '-0.02em', color: '#17213d', textAlign: 'center', marginBottom: 24 }}>
            Frequently Asked Questions
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {faqs.map((faq, i) => (
              <div key={i} className="surface-card" style={{ padding: 20, borderRadius: 14 }}>
                <h3 style={{ fontFamily: inter, fontSize: 15, fontWeight: 600, color: '#17213d', marginBottom: 8, letterSpacing: '-0.01em' }}>
                  {faq.q}
                </h3>
                <p style={{ fontFamily: inter, fontSize: 13, fontWeight: 400, lineHeight: 1.65, color: 'rgba(23,33,61,0.45)' }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

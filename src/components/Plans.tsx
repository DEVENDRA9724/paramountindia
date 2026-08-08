import React from 'react';
import { Check, Info } from 'lucide-react';
import { useState } from 'react';

interface PlanProps {
  onSelectPlan: (planName: string, serviceId: string) => void;
}

const plans = [
  {
    id: 'starter',
    name: 'Starter Setup',
    monthlyPrice: '₹34,999',
    annualPrice: '₹27,999',
    desc: 'For growing businesses needing a solid digital foundation.',
    serviceId: 'web-dev',
    features: [
      'Custom Website Development',
      'Local SEO & Google Business',
      'Basic Email Marketing Setup',
      'NLP Support AI Chatbot',
      'Chat Support (9am–6pm)',
    ],
    isPopular: false,
    accent: '#315efb',
  },
  {
    id: 'growth',
    name: 'Growth Suite',
    monthlyPrice: '₹99,999',
    annualPrice: '₹79,999',
    desc: 'Comprehensive stack for companies scaling their tech operations.',
    serviceId: 'custom-software',
    features: [
      'Custom Software & CRM Integration',
      'Native Mobile App (iOS/Android)',
      'Advanced AI Bots + CRM Sync',
      'Technical SEO & Digital Campaigns',
      'AWS/GCP Cloud Architecture',
      '24/7 Technical Support',
    ],
    isPopular: true,
    accent: '#315efb',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    monthlyPrice: 'Custom',
    annualPrice: 'Custom',
    desc: 'Full IT outsourcing, compliance, and dedicated engineering team.',
    serviceId: 'it-support',
    features: [
      'Dedicated Full-Stack Engineering',
      'Enterprise IT Asset Management',
      'Network & Active Directory Setup',
      'Full Database Security Audits',
      'Unlimited AI Agent Tuning',
      'Dedicated Account Manager + SLA',
    ],
    isPopular: false,
    accent: '#315efb',
  },
];

export const Plans: React.FC<PlanProps> = ({ onSelectPlan }) => {
  const [billing, setBilling] = useState<'annual' | 'monthly'>('annual');

  return (
    <section id="plans" className="w-full py-24 px-6 md:px-12" style={{ background: '#eef3ff' }}>
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="eyebrow-tag mb-5">Pricing</div>
          <h2 className="font-display font-semibold text-white tracking-tight mb-4" style={{ fontSize: 'clamp(28px, 4vw, 44px)', letterSpacing: '-0.02em' }}>
            Service Tiers & Agreements
          </h2>
          <p className="text-sm" style={{ color: 'rgba(23,33,61,0.5)', maxWidth: 440, margin: '0 auto' }}>
            Flexible monthly and annual agreements built for startups through enterprise IT operations.
          </p>

          {/* Toggle */}
          <div className="inline-flex items-center gap-1 mt-8 p-1 rounded-lg" style={{ background: 'rgba(37,99,235,0.04)', border: '1px solid rgba(37,99,235,0.07)' }}>
            {(['monthly', 'annual'] as const).map(cycle => (
              <button key={cycle} onClick={() => setBilling(cycle)}
                className="px-5 py-2 rounded-md text-xs font-semibold transition-all duration-200"
                style={{
                  background: billing === cycle ? '#315efb' : 'transparent',
                  color: billing === cycle ? '#fff' : 'rgba(23,33,61,0.5)',
                  fontFamily: 'var(--font-sans)',
                }}>
                {cycle === 'monthly' ? 'Monthly' : 'Annual · Save 20%'}
              </button>
            ))}
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map(plan => {
            const price = billing === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isCustom = price === 'Custom';
            return (
              <div key={plan.id}
                className="rounded-2xl p-7 flex flex-col relative"
                style={{
                  background: plan.isPopular ? 'rgba(99,102,241,0.07)' : '#ffffff',
                  border: `1px solid ${plan.isPopular ? 'rgba(99,102,241,0.35)' : 'rgba(37,99,235,0.07)'}`,
                }}>

                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold" style={{ background: '#315efb', color: '#fff', fontFamily: 'var(--font-sans)' }}>
                      Most Popular
                    </span>
                  </div>
                )}

                <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: 'rgba(23,33,61,0.4)', fontFamily: 'var(--font-sans)' }}>
                  {plan.name}
                </p>

                <div className="flex items-baseline gap-1.5 mb-3">
                  <span className="font-display font-semibold text-white" style={{ fontSize: 34, letterSpacing: '-0.02em' }}>
                    {price}
                  </span>
                  {!isCustom && <span className="text-xs" style={{ color: 'rgba(23,33,61,0.4)' }}>INR / month + GST</span>}
                </div>

                <p className="text-xs mb-6 leading-relaxed" style={{ color: 'rgba(23,33,61,0.45)' }}>
                  {plan.desc}
                </p>

                <div className="h-px mb-6" style={{ background: 'rgba(37,99,235,0.06)' }} />

                <ul className="flex flex-col gap-2.5 mb-8 flex-1">
                  {plan.features.map(f => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" style={{ color: '#315efb' }} strokeWidth={2.5} />
                      <span className="text-xs leading-relaxed" style={{ color: 'rgba(23,33,61,0.65)', fontFamily: 'var(--font-sans)' }}>{f}</span>
                    </li>
                  ))}
                </ul>

                <button onClick={() => onSelectPlan(plan.name, plan.serviceId)}
                  className={plan.isPopular ? 'btn-primary justify-center w-full' : 'btn-secondary justify-center w-full'}>
                  {isCustom ? 'Request Proposal' : 'Get Started'}
                </button>

                {billing === 'annual' && !isCustom && (
                  <p className="flex items-center justify-center gap-1.5 mt-3 text-xs" style={{ color: 'rgba(23,33,61,0.3)' }}>
                    <Info className="w-3 h-3" /> Billed annually
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

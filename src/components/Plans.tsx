import React, { useState } from 'react';
import { Check, Info } from 'lucide-react';

interface PlanProps {
  onSelectPlan: (planName: string, serviceId: string) => void;
}

interface PricingPlan {
  name: string;
  id: string;
  monthlyPrice: string;
  annualPrice: string;
  billingText: string;
  description: string;
  features: string[];
  serviceId: string;
  isPopular: boolean;
  glowColor: string;
}

export const Plans: React.FC<PlanProps> = ({ onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');

  const pricingPlans: PricingPlan[] = [
    {
      name: 'Starter Setup',
      id: 'plan-starter',
      monthlyPrice: '₹34,999',
      annualPrice: '₹27,999',
      billingText: '/ month',
      description: 'Essential web development, local SEO, and basic chatbot integrations for growing local businesses.',
      features: [
        'Custom Website Development (React/Vite)',
        'Local SEO & Google Business Optimization',
        'Basic Email Marketing Sequence Setups',
        'Basic NLP Customer Support AI Chatbot',
        'Email & Chat Technical Support (9am - 6pm)',
      ],
      serviceId: 'web-dev',
      isPopular: false,
      glowColor: 'from-[#6366f1]/10 to-transparent',
    },
    {
      name: 'Growth Suite',
      id: 'plan-growth',
      monthlyPrice: '₹99,999',
      annualPrice: '₹79,999',
      billingText: '/ month',
      description: 'Custom software systems, CRM integration, cloud architecture setup, and advanced bot configurations.',
      features: [
        'Custom Software & CRM Integration',
        'Native Mobile App Development (iOS/Android)',
        'Advanced AI Bots Syncing with Company CRM',
        'Technical SEO Audit & Digital Campaigns',
        'AWS/GCP Cloud Architecture Configuration',
        'On-site/Remote Technical Support (24/7)',
      ],
      serviceId: 'custom-software',
      isPopular: true,
      glowColor: 'from-[#a855f7]/20 to-[#6366f1]/20',
    },
    {
      name: 'Enterprise Operations',
      id: 'plan-enterprise',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      billingText: 'Quote',
      description: 'Fully outsourced IT operations, advanced asset management, data compliance, and dedicated developers.',
      features: [
        'Dedicated Full-Stack Software Engineering',
        'Enterprise IT Asset Management & Security Compliance',
        'Network Infrastructure & Active Directory Setups',
        'Full Database Security Audits & Migrations',
        'Unlimited AI Chatbot and NLP Agent Tuning',
        'Dedicated Account Manager & Immediate SLA Support',
      ],
      serviceId: 'it-support',
      isPopular: false,
      glowColor: 'from-[#fcd34d]/15 to-transparent',
    },
  ];

  return (
    <section id="plans" className="relative w-full py-24 px-6 md:px-12 bg-transparent overflow-visible">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#a855f7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-normal tracking-tight mt-6 mb-4">
            Service Tiers & <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">Agreements</span>
          </h2>
          <p className="text-hero-sub text-base sm:text-lg max-w-2xl mx-auto opacity-75">
            Flexible monthly and annual service agreements built to support startup launches and enterprise IT migrations.
          </p>
        </div>

        {/* Toggle Billing Cycle */}
        <div className="flex justify-center items-center gap-4 mb-16 select-none">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-foreground/50'}`}>Monthly</span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-14 h-7 rounded-full bg-white/10 p-1 flex items-center transition-all duration-300 relative border border-white/5 cursor-pointer"
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-foreground/50'}`}>Annual Billing</span>
            <span className="text-[10px] font-bold text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/25 px-2 py-0.5 rounded-full uppercase tracking-wider">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {pricingPlans.map((plan) => {
            const price = billingCycle === 'annual' ? plan.annualPrice : plan.monthlyPrice;
            const isCustom = price === 'Custom';

            return (
              <div
                key={plan.id}
                className={`liquid-glass rounded-3xl p-8 border hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between ${
                  plan.isPopular 
                    ? 'border-[#a855f7]/40 shadow-[0_0_30px_rgba(168,85,247,0.15)] scale-105 md:scale-105 z-10' 
                    : 'border-white/5 hover:border-white/20'
                }`}
              >
                {/* BACKLIGHT */}
                <div className={`absolute inset-0 bg-gradient-to-b ${plan.glowColor} opacity-50 pointer-events-none rounded-3xl`} />

                <div className="relative z-10">
                  {/* Top line */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-white tracking-tight uppercase">{plan.name}</span>
                    {plan.isPopular && (
                      <span className="text-[9px] uppercase font-mono tracking-widest text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/30 px-2.5 py-1 rounded-full">
                        Most Popular
                      </span>
                    )}
                  </div>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="font-display text-4xl sm:text-5xl font-bold text-white tracking-tight">
                      {price}
                    </span>
                    <span className="text-xs text-foreground/50 font-medium">
                      {isCustom ? '' : plan.billingText}
                    </span>
                  </div>

                  <p className="text-xs text-hero-sub/90 leading-relaxed mb-6 opacity-75 min-h-[40px]">
                    {plan.description}
                  </p>

                  <div className="w-full h-[1px] bg-white/5 mb-6" />

                  {/* Features list */}
                  <span className="text-[10px] text-[#a855f7] uppercase tracking-widest font-bold block mb-4">What's Included:</span>
                  <ul className="flex flex-col gap-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-hero-sub leading-normal opacity-85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="relative z-10">
                  <button
                    onClick={() => onSelectPlan(plan.name, plan.serviceId)}
                    className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer ${
                      plan.isPopular
                        ? 'bg-[#a855f7] text-white hover:bg-[#a855f7]/95 shadow-[0_4px_20px_rgba(168,85,247,0.3)]'
                        : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                    }`}
                  >
                    {isCustom ? 'Inquire Custom Proposal' : 'Select Plan'}
                  </button>
                  {billingCycle === 'annual' && !isCustom && (
                    <span className="text-[10px] text-foreground/45 flex items-center justify-center gap-1.5 mt-3">
                      <Info className="w-3.5 h-3.5 text-[#a855f7]" /> Billed annually contract
                    </span>
                  )}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

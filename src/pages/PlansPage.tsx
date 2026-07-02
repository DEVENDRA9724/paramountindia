import React, { useState } from 'react';
import { ArrowLeft, Check, X, ChevronDown, ChevronUp, Calendar, ShieldCheck } from 'lucide-react';

interface PlansPageProps {
  onBackToHome: () => void;
  onSelectPlan: (planName: string, serviceId: string) => void;
}

interface AccordionItem {
  q: string;
  a: string;
}

export const PlansPage: React.FC<PlansPageProps> = ({ onBackToHome, onSelectPlan }) => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const pricingTiers = [
    {
      name: 'Starter Setup',
      id: 'plan-starter',
      monthlyPrice: '₹34,999',
      annualPrice: '₹27,999',
      desc: 'Perfect for small local businesses requiring initial websites, local SEO keyword rankings, and basic customer chatbot support.',
      serviceId: 'web-dev',
      isPopular: false,
      glowColor: 'from-[#6366f1]/10 to-transparent',
    },
    {
      name: 'Growth Suite',
      id: 'plan-growth',
      monthlyPrice: '₹99,999',
      annualPrice: '₹79,999',
      desc: 'For scaling companies requiring custom back-office dashboards, mobile applications, CRM integrations, and advanced AI agents.',
      serviceId: 'custom-software',
      isPopular: true,
      glowColor: 'from-[#a855f7]/20 to-[#6366f1]/20',
    },
    {
      name: 'Enterprise Operations',
      id: 'plan-enterprise',
      monthlyPrice: 'Custom',
      annualPrice: 'Custom',
      desc: 'Designed for corporate infrastructure, database server migrations, full software licensing management, and dedicated developers.',
      serviceId: 'it-support',
      isPopular: false,
      glowColor: 'from-[#fcd34d]/15 to-transparent',
    },
  ];

  const comparisonRows = [
    { name: 'Custom React Web Development', starter: '5 Pages max', growth: 'Unlimited pages', enterprise: 'Dedicated developers' },
    { name: 'Custom CRM Pipeline Integration', starter: false, growth: 'Salesforce / HubSpot API', enterprise: 'Any custom database / API' },
    { name: 'AI Chatbot & Autonomous Agent', starter: 'Basic NLP support', growth: 'Fully trained & CRM synced', enterprise: 'Unlimited custom training models' },
    { name: 'Mobile App Development (iOS/Android)', starter: false, growth: 'React Native / Flutter', enterprise: 'Fully custom native architectures' },
    { name: 'Cloud Infrastructure Configurations', starter: 'Basic hosting setup', growth: 'AWS/GCP Auto-scaling VPC', enterprise: 'Enterprise replication & clusters' },
    { name: 'IT Asset & License Management', starter: false, growth: 'Included', enterprise: 'Full MDM Intune setups' },
    { name: 'Technical support SLA', starter: 'Next-day email/chat', growth: '4hr critical bug hotfix', enterprise: '1hr immediate support on-call' },
    { name: 'Ahmedabad On-Site Support Migrations', starter: false, growth: 'Available on request', enterprise: 'Fully included 24/7' },
  ];

  const faqs: AccordionItem[] = [
    {
      q: 'Who owns the proprietary source code and intellectual property?',
      a: 'The client holds 100% of the proprietary source code and intellectual property rights. Upon project sign-off and completion of terms, our team handovers the complete codebase repository, Docker files, and licensing keys directly to your organization.',
    },
    {
      q: 'Can we transition between service tiers or terminate agreements?',
      a: 'Yes. Agreements operate on a rolling monthly or annual timeline. You can upgrade, scale down, or transition between Starter, Growth, and Enterprise packages. Downgrades or terminations require a 30-day notice period before the next billing cycle.',
    },
    {
      q: 'Are on-site technical support migrations available in Ahmedabad?',
      a: 'Absolutely. Paramount India Technologies LLP is headquartered in Ahmedabad, Gujarat. We provide on-site network infrastructure setups, database cabinet migrations, and face-to-face training workshops for teams under our Growth and Enterprise agreements.',
    },
    {
      q: 'Which CRM databases and applications do your AI bots support?',
      a: 'We construct API connectors syncing our AI agents with Salesforce, HubSpot, custom PostgreSQL/MongoDB databases, active directories, Slack channels, and standard REST API webhooks.',
    },
  ];

  return (
    <div className="w-full min-h-screen bg-transparent relative overflow-visible py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Back navigation */}
        <button 
          onClick={onBackToHome}
          className="flex items-center gap-2 text-xs font-semibold text-[#a855f7] hover:text-white transition-colors duration-200 mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO HOMEPAGE
        </button>

        {/* Title */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full">
            Contract Terms & Pricing Matrix
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight mt-6 mb-4">
            Service Tiers & <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">Agreements</span>
          </h1>
          <p className="text-hero-sub text-base sm:text-lg max-w-3xl opacity-75 font-medium">
            Compare service features, compare database options, and review agreement parameters for startups and enterprises.
          </p>
        </div>

        {/* Billing cycle toggle */}
        <div className="flex justify-center items-center gap-4 mb-16 select-none">
          <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-white' : 'text-foreground/50'}`}>Monthly Billing</span>
          <button
            onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
            className="w-14 h-7 rounded-full bg-white/10 p-1 flex items-center transition-all duration-300 relative border border-white/5 cursor-pointer"
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-md transform transition-transform duration-300 ${billingCycle === 'annual' ? 'translate-x-7' : 'translate-x-0'}`} />
          </button>
          <div className="flex items-center gap-2">
            <span className={`text-sm font-medium ${billingCycle === 'annual' ? 'text-white' : 'text-foreground/50'}`}>Annual Billing</span>
            <span className="text-[10px] font-bold text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/25 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Save 20%
            </span>
          </div>
        </div>

        {/* Pricing Cards (Standardized) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-24">
          {pricingTiers.map((tier) => {
            const price = billingCycle === 'annual' ? tier.annualPrice : tier.monthlyPrice;
            const isCustom = price.includes('Custom');

            return (
              <div 
                key={tier.id}
                className={`liquid-glass rounded-3xl p-8 border hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between relative ${
                  tier.isPopular ? 'border-[#a855f7]/40 shadow-[0_0_30px_rgba(168,85,247,0.15)] scale-105 md:scale-105 z-10' : 'border-white/5 hover:border-white/20'
                }`}
              >
                {/* Backlight glow */}
                <div className={`absolute inset-0 bg-gradient-to-b ${tier.glowColor} opacity-50 pointer-events-none rounded-3xl`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-sm font-bold text-white uppercase tracking-tight">{tier.name}</span>
                    {tier.isPopular && <span className="text-[9px] uppercase font-mono tracking-widest text-[#a855f7] bg-[#a855f7]/10 border border-[#a855f7]/20 px-2 py-0.5 rounded">Popular</span>}
                  </div>

                  <div className="flex items-baseline gap-1.5 mb-4">
                    <span className="font-display text-4xl font-bold text-white tracking-tight">{price}</span>
                    {!isCustom && <span className="text-xs text-foreground/50 font-medium">/ month</span>}
                  </div>
                  <p className="text-xs text-hero-sub/90 leading-relaxed opacity-75 mb-8 font-medium">{tier.desc}</p>
                </div>

                <button
                  onClick={() => onSelectPlan(tier.name, tier.serviceId)}
                  className={`w-full py-3.5 px-4 rounded-xl text-xs font-semibold tracking-wider transition-all duration-300 cursor-pointer relative z-10 ${
                    tier.isPopular ? 'bg-[#a855f7] text-white hover:bg-[#a855f7]/95 shadow-[0_4px_20px_rgba(168,85,247,0.3)]' : 'bg-white/5 text-white hover:bg-white/10 border border-white/5'
                  }`}
                >
                  {isCustom ? 'Inquire Custom Terms' : 'Select Plan'}
                </button>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="mb-24 overflow-x-auto border border-white/5 rounded-2xl liquid-glass relative z-10">
          <table className="w-full min-w-[700px] border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="p-5 font-display text-xs font-bold text-white uppercase tracking-widest">Service Deliverable</th>
                <th className="p-5 font-display text-xs font-bold text-white uppercase tracking-widest">Starter Setup</th>
                <th className="p-5 font-display text-xs font-bold text-[#a855f7] uppercase tracking-widest">Growth Suite</th>
                <th className="p-5 font-display text-xs font-bold text-white uppercase tracking-widest">Enterprise Ops</th>
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row, idx) => (
                <tr key={idx} className="border-b border-white/5 hover:bg-white/[0.01] transition-colors">
                  <td className="p-5 font-semibold text-white/90 text-xs">{row.name}</td>
                  <td className="p-5 text-xs text-hero-sub font-medium">
                    {typeof row.starter === 'string' ? row.starter : row.starter ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-red-400" />}
                  </td>
                  <td className="p-5 text-xs text-[#a855f7] font-semibold">
                    {typeof row.growth === 'string' ? row.growth : row.growth ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-red-400" />}
                  </td>
                  <td className="p-5 text-xs text-hero-sub font-medium">
                    {typeof row.enterprise === 'string' ? row.enterprise : row.enterprise ? <Check className="w-4 h-4 text-emerald-400" /> : <X className="w-4 h-4 text-red-400" />}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Service Agreement FAQ (Accordion) */}
        <div className="mb-16 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full flex items-center gap-1.5 w-fit mx-auto">
              <ShieldCheck className="w-3.5 h-3.5" /> Legal & Contract FAQ
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight mt-6 mb-4">
              Agreement <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">Details & FAQs</span>
            </h2>
            <p className="text-hero-sub text-sm max-w-xl mx-auto opacity-75 font-medium">
              Read transparent clarifications about code directories handover, support terms, and locations billing parameters.
            </p>
          </div>

          <div className="max-w-3xl mx-auto flex flex-col gap-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div 
                  key={idx} 
                  className="liquid-glass rounded-xl border border-white/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 text-left flex justify-between items-center gap-4 text-white hover:text-[#a855f7] transition-colors cursor-pointer"
                  >
                    <span className="text-sm font-semibold tracking-tight">{faq.q}</span>
                    {isOpen ? <ChevronUp className="w-4 h-4 text-[#a855f7] flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-foreground/40 flex-shrink-0" />}
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-xs text-hero-sub/90 leading-relaxed border-t border-white/5 pt-4 bg-white/[0.01] animate-in fade-in duration-300 font-medium">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Callback CTA */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/[0.01] to-white/[0.03] border border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left relative overflow-hidden z-10">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#6366f1]/5 blur-[80px] rounded-full pointer-events-none" />
          <div>
            <h3 className="font-display text-2xl font-bold text-white tracking-tight mb-2 flex items-center gap-2 justify-center md:justify-start">
              <Calendar className="w-5 h-5 text-[#a855f7]" /> Need Custom Contract Layouts?
            </h3>
            <p className="text-xs text-hero-sub/90 max-w-md leading-relaxed opacity-85 font-medium">
              For businesses requesting mixed structures (e.g. Starter web design but Enterprise technical SLA support), we provide customized IT partnership covenants.
            </p>
          </div>
          <button
            onClick={() => onSelectPlan('Custom Mixed Agreement', 'it-support')}
            className="btn-hero-secondary rounded-2xl px-6 py-4 text-xs font-semibold whitespace-nowrap cursor-pointer relative z-10 animate-pulse hover:animate-none"
          >
            Draft Custom Scope &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};

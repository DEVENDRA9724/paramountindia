import React from 'react';
import { Sparkles, CloudLightning, Database } from 'lucide-react';

interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  metric: string;
  metricLabel: string;
  challenge: string;
  solution: string;
  icon: React.ComponentType<any>;
  glowColor: string;
}

export const Solutions: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'case-ai',
      title: 'Autonomous Talent Screening Integration',
      clientType: 'Global Recruitment Enterprise',
      metric: '82%',
      metricLabel: 'Reduction in Screening Time',
      challenge: 'Manual processing of over 10,000 engineering résumés weekly, leading to candidate drop-off and recruiter fatigue.',
      solution: 'Deployed a custom-trained Paramount AI agent with semantic parsing that ranks candidates based on project history and runs structured preliminary chat interviews automatically.',
      icon: Sparkles,
      glowColor: 'from-[#a855f7]/20 to-[#6366f1]/20',
    },
    {
      id: 'case-cloud',
      title: 'Enterprise ERP Cloud Infrastructure Migration',
      clientType: 'Logistics & Supply Chain Firm',
      metric: '99.99%',
      metricLabel: 'Operational Server Uptime',
      challenge: 'Unstable on-premise servers causing database lockouts and order synchronization delays during holiday surges.',
      solution: 'Re-architected client backend, migrating core systems to AWS using Kubernetes clusters, multi-zone replication, and establishing server failover protection.',
      icon: CloudLightning,
      glowColor: 'from-cyan-500/20 to-blue-500/20',
    },
    {
      id: 'case-crm',
      title: 'Custom CRM & Sales Pipeline Ecosystem',
      clientType: 'Real Estate Developer',
      metric: '4.2x',
      metricLabel: 'Sales Lead Conversion Increase',
      challenge: 'Fragmented lead channels (web, social, calls) leading to lost inquiries and delayed salesperson response times.',
      solution: 'Developed a custom CRM database syncing all leads instantly, using automated SMS/email triggers, client profile cards, and predictive sales closing scoring.',
      icon: Database,
      glowColor: 'from-amber-500/20 to-rose-500/20',
    },
  ];

  return (
    <section id="solutions" className="relative w-full py-24 px-6 md:px-12 bg-transparent overflow-visible">
      {/* Blurred glow behind */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#6366f1]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366f1] bg-[#6366f1]/10 px-3 py-1 rounded-full">
            Real-World Impact
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-normal tracking-tight mt-6 mb-4">
            Proven <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">Enterprise Solutions</span>
          </h2>
          <p className="text-hero-sub text-base sm:text-lg max-w-2xl mx-auto opacity-75">
            How we translate core IT engineering into concrete business metrics and operational efficiencies for our clients.
          </p>
        </div>

        {/* Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => {
            const Icon = study.icon;
            return (
              <div 
                key={study.id}
                className="liquid-glass group rounded-2xl p-8 border border-white/5 hover:border-white/20 transition-all duration-300 flex flex-col justify-between"
              >
                {/* BACKLIGHT */}
                <div className={`absolute inset-0 bg-gradient-to-br ${study.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl blur-md`} />

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-white/10 transition-colors">
                      <Icon className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <span className="text-[10px] text-foreground/40 font-semibold uppercase tracking-wider mt-1.5">
                      {study.clientType}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-semibold text-white mb-6 tracking-tight leading-snug">
                    {study.title}
                  </h3>

                  {/* Challenge description */}
                  <div className="mb-4">
                    <span className="text-[10px] uppercase font-semibold text-[#fcd34d] tracking-widest block mb-1">Challenge</span>
                    <p className="text-xs text-hero-sub/80 leading-relaxed">{study.challenge}</p>
                  </div>

                  {/* Solution description */}
                  <div className="mb-6">
                    <span className="text-[10px] uppercase font-semibold text-emerald-400 tracking-widest block mb-1">Solution</span>
                    <p className="text-xs text-hero-sub/80 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Metric Display */}
                <div className="relative z-10 pt-6 border-t border-white/5 flex items-center gap-4">
                  <span className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-white to-[#a855f7] bg-clip-text text-transparent">
                    {study.metric}
                  </span>
                  <div className="text-left">
                    <span className="text-[10px] text-[#a855f7] font-bold block uppercase tracking-wider">Outcome</span>
                    <span className="text-xs text-white/90 font-medium block leading-tight">{study.metricLabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

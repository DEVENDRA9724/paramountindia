import React from 'react';
import { ShieldCheck, Award, Eye, Users } from 'lucide-react';

export const About: React.FC = () => {
  const values = [
    {
      icon: ShieldCheck,
      title: 'Enterprise Security & Compliance',
      description: 'We design all solutions with data security and compliance at the core, protecting valuable intellectual property.',
    },
    {
      icon: Award,
      title: 'Technical Competency',
      description: 'Our engineering principles align with modern software frameworks, robust data protocols, and high availability systems.',
    },
    {
      icon: Eye,
      title: 'Client Vision First',
      description: 'We translate complex business requirements into tangible IT outcomes, ensuring zero drift from project specifications.',
    },
  ];

  return (
    <section id="about" className="relative w-full py-24 px-6 md:px-12 bg-transparent overflow-visible">
      {/* Glow highlight */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#a855f7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Layout split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Company Background */}
          <div className="lg:col-span-7">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full">
              Who We Are
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-normal tracking-tight mt-6 mb-6">
              Empowering Businesses via <br />
              <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">Sophisticated Engineering</span>
            </h2>
            
            <p className="text-hero-sub text-base leading-relaxed mb-6 opacity-85">
              Paramount India Technologies LLP is a premier core IT company providing full-cycle technical operations, cloud migrations, database setups, and custom AI chatbots. We specialize in building reliable, cloud-native frameworks and custom CRM integrations that streamline modern business requirements.
            </p>

            {/* Core Values grid */}
            <div className="flex flex-col gap-6 mt-8">
              {values.map((val, idx) => {
                const Icon = val.icon;
                return (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 flex-shrink-0 mt-1">
                      <Icon className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <div>
                      <h4 className="font-display text-base font-semibold text-white mb-1">{val.title}</h4>
                      <p className="text-xs text-hero-sub/80 leading-relaxed opacity-75">{val.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Founder Card (liquid-glass) */}
          <div className="lg:col-span-5 relative">
            {/* Ambient backlight */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#6366f1]/10 via-transparent to-[#a855f7]/10 rounded-3xl blur-xl" />
            
            <div className="liquid-glass relative z-10 rounded-3xl p-8 border border-white/5 flex flex-col justify-between h-full min-h-[420px]">
              <div>
                <div className="flex justify-between items-start mb-6">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#fcd34d] bg-[#fcd34d]/10 px-2.5 py-1 rounded border border-[#fcd34d]/20">
                    Founder Profile
                  </span>
                  <Users className="w-5 h-5 text-foreground/40" />
                </div>

                <h3 className="font-display text-2xl font-semibold text-white tracking-tight">
                  Devendra Sharma
                </h3>
                <p className="text-xs text-[#a855f7] font-semibold uppercase tracking-[0.1em] mt-1 mb-6">
                  Founder & Principal Director
                </p>

                <p className="text-sm text-hero-sub/90 leading-relaxed mb-6 font-medium opacity-85">
                  "At Paramount India Technologies LLP, our mission is simple: to make technology a frictionless asset for enterprise growth. We build high-performance custom CRM systems, cloud architectures, and autonomous AI agents designed to seamlessly scale with your business demands. Our approach ensures that every migration, line of code, and deployment meets strict performance parameters."
                </p>
              </div>

              {/* Stats / Details */}
              <div className="grid grid-cols-2 gap-4 pt-6 border-t border-white/5 text-center">
                <div>
                  <span className="block text-2xl font-bold font-display text-white">LLP</span>
                  <span className="text-[10px] text-foreground/50 uppercase tracking-widest">Legal Status</span>
                </div>
                <div>
                  <span className="block text-2xl font-bold font-display text-[#a855f7]">14+</span>
                  <span className="text-[10px] text-foreground/50 uppercase tracking-widest">IT Competencies</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

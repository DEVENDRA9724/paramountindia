import React, { useState } from 'react';
import { ArrowLeft, Code, ArrowRight, Sparkles, CloudLightning, Database, AlertTriangle, CheckCircle, ChevronLeft, ChevronRight, Server } from 'lucide-react';

interface SolutionsPageProps {
  onBackToHome: () => void;
  onNavigateToContact: (serviceId: string, messagePrefill: string) => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({ onBackToHome, onNavigateToContact }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  
  // Cloud Failover Simulator State
  const [isOutage, setIsOutage] = useState(false);
  const [simLogs, setSimLogs] = useState<string[]>([
    'SYSTEM: Network nodes initialized. Monitoring links...',
    'STATUS: Primary Node [Ahmedabad] active - latency 8ms.',
    'STATUS: Backup Node [Mumbai] standby - sync replication active.',
  ]);

  const steps = [
    {
      num: '01',
      title: 'Discovery & Infrastructure Audit',
      desc: 'We audit your legacy code, office networks, cloud databases, and software workflows to isolate bottlenecks.',
    },
    {
      num: '02',
      title: 'Architectural Blueprinting',
      desc: 'Founder Devendra Sharma and core architects draft cloud setup maps, software API links, and AI database schemas.',
    },
    {
      num: '03',
      title: 'Sandbox Development & QA',
      desc: 'We build custom code elements in sandboxes, test chat intents, and run rigorous security pen-tests.',
    },
    {
      num: '04',
      title: 'Zero-Downtime Data Migration',
      desc: 'We deploy database migrations and cluster routing adjustments during off-peak windows to prevent disruptions.',
    },
    {
      num: '05',
      title: 'SLA Support Operations',
      desc: 'We establish 24/7 technical monitoring alerts, license compliance tracking, and periodic AI intent tuning.',
    },
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
      glowColor: 'from-[#a855f7]/20 to-[#6366f1]/20',
      serviceId: 'ai-bots',
    },
    {
      id: 'case-cloud',
      title: 'Enterprise ERP Cloud Infrastructure Migration',
      clientType: 'LOGISTICS & SUPPLY CHAIN FIRM',
      metric: '99.99%',
      metricLabel: 'Operational Server Uptime',
      challenge: 'Unstable on-premise servers causing database lockouts and order synchronization delays during holiday surges.',
      solution: 'Re-architected client backend, migrating core systems to AWS using Kubernetes clusters, multi-zone replication, and establishing server failover protection.',
      architecture: ['AWS EC2 Auto-Scaling Groups', 'Amazon Aurora replicated databases', 'Kubernetes Docker cluster nodes', 'Terraform infrastructure config files'],
      icon: CloudLightning,
      glowColor: 'from-cyan-500/20 to-blue-500/20',
      serviceId: 'cloud-setup',
    },
    {
      id: 'case-crm',
      title: 'Custom CRM & Sales Pipeline Ecosystem',
      clientType: 'REAL ESTATE DEVELOPER',
      metric: '4.2x',
      metricLabel: 'Sales Lead Conversion Increase',
      challenge: 'Fragmented lead channels (web, social, calls) leading to lost inquiries and delayed salesperson response times.',
      solution: 'Developed a custom CRM database syncing all leads instantly, using automated SMS/email triggers, client profile cards, and predictive sales closing scoring.',
      architecture: ['RESTful API integrations', 'Zapier triggers module', 'Twilio SMS webhooks', 'PostgreSQL database sync'],
      icon: Database,
      glowColor: 'from-amber-500/20 to-rose-500/20',
      serviceId: 'crm-dev',
    },
  ];

  const testimonials = [
    {
      quote: "We contracted Paramount India Technologies to construct an automated CRM routing pipeline and cloud database setup. The team delivered the architecture blueprint within a week, and owner Devendra Sharma took active part in checking database failover testing himself. Our automated lead capture works flawlessly, saving our team hours of manual input.",
      author: "Aditya Shah",
      role: "Director, Ahmedabad Logistics Group"
    },
    {
      quote: "Integrating the Paramount AI chatbot agent on our customer support platform has been a game changer. It handles over 80% of our daily screening inquiries automatically and syncs user profiles to our HubSpot CRM. Customer satisfaction ratings improved by 45%.",
      author: "Rajesh Patel",
      role: "Co-Founder, Gujarat Retail Ecosystem"
    },
    {
      quote: "Paramount India overhauled our entire network infrastructure and migrated our core database to a high-availability cloud cluster. The migration was completed overnight with zero downtime. Their 24/7 technical support is immediate.",
      author: "Neha Sharma",
      role: "Operations Lead, Delhi TechSolutions LLP"
    }
  ];

  const triggerOutageSimulation = () => {
    if (!isOutage) {
      setIsOutage(true);
      setSimLogs(prev => [
        ...prev,
        'CRITICAL: Primary Node [Ahmedabad] unresponsive. Data link offline!',
        'ALERT: Triggering active load balancer failover protocol...',
        'SUCCESS: Traffic rerouted to Backup Node [Mumbai]. Latency: 12ms.',
        'STATUS: Backup Node active. Cloud Database online.'
      ]);
    } else {
      setIsOutage(false);
      setSimLogs(prev => [
        ...prev,
        'SYSTEM: Primary Node [Ahmedabad] restored. Syncing databases...',
        'STATUS: Database replication sync complete. Restoring primary routing...',
        'STATUS: Primary Node [Ahmedabad] active - latency 8ms.',
        'STATUS: Backup Node [Mumbai] returned to standby.'
      ]);
    }
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="w-full min-h-screen bg-transparent relative overflow-visible py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation back */}
        <button 
          onClick={onBackToHome}
          className="flex items-center gap-2 text-xs font-semibold text-[#a855f7] hover:text-white transition-colors duration-200 mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO HOMEPAGE
        </button>

        {/* Title */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6366f1] bg-[#6366f1]/10 px-3 py-1 rounded-full">
            Technical Operations Case Book
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight mt-6 mb-4">
            Proven <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">Solutions & Case Studies</span>
          </h1>
          <p className="text-hero-sub text-base sm:text-lg max-w-3xl opacity-75 font-medium">
            Discover our engineering frameworks, core database architectures, and key metrics achieved across custom software deployments.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
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
                  {/* Top line */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#a855f7]/30 transition-colors">
                      <Icon className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <span className="text-[9px] text-foreground/40 font-bold uppercase tracking-wider mt-1.5">
                      {study.clientType}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-white mb-6 tracking-tight leading-snug">
                    {study.title}
                  </h3>

                  {/* Challenge */}
                  <div className="mb-4">
                    <span className="text-[9px] uppercase font-bold text-[#fcd34d] tracking-widest block mb-1">Challenge</span>
                    <p className="text-xs text-hero-sub/90 leading-relaxed font-medium opacity-80">{study.challenge}</p>
                  </div>

                  {/* Solution */}
                  <div className="mb-6">
                    <span className="text-[9px] uppercase font-bold text-emerald-400 tracking-widest block mb-1">Solution</span>
                    <p className="text-xs text-hero-sub/90 leading-relaxed font-medium opacity-85">{study.solution}</p>
                  </div>

                  {/* Tech stack mapping */}
                  <div className="pt-4 border-t border-white/5 mb-6">
                    <span className="text-[9px] uppercase font-bold text-white tracking-widest block mb-2.5 flex items-center gap-1"><Code className="w-3.5 h-3.5 text-[#a855f7]" /> Core Stack</span>
                    <div className="flex flex-wrap gap-1.5">
                      {study.architecture.map((item, idx) => (
                        <span key={idx} className="bg-white/5 border border-white/5 text-[9px] font-semibold text-white/80 px-2 py-0.5 rounded font-mono">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Impact & Button */}
                <div className="relative z-10 pt-6 border-t border-white/5 mt-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-white via-white to-[#a855f7] bg-clip-text text-transparent">
                      {study.metric}
                    </span>
                    <div className="text-left">
                      <span className="text-[8px] text-[#a855f7] font-bold block uppercase tracking-wider">Outcome</span>
                      <span className="text-xs text-white/90 font-medium block leading-tight">{study.metricLabel}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onNavigateToContact(study.serviceId, `Hi Devendra, I read the case study on "${study.title}". We have a similar operational bottleneck. Let's arrange a call.`)}
                    className="w-full btn-hero-secondary rounded-xl py-2.5 text-xs font-semibold tracking-wider cursor-pointer"
                  >
                    Request Custom Prototype
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Cloud Failover Simulator Dashboard Panel */}
        <div className="liquid-glass rounded-3xl p-8 border border-white/5 relative overflow-hidden mb-24 z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-[#06b6d4]/5 to-transparent pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row justify-between items-stretch gap-8 relative z-10">
            {/* Interactive SVG Diagram */}
            <div className="flex-1 min-h-[250px] flex flex-col justify-between">
              <div>
                <span className="text-[9px] uppercase font-mono tracking-widest text-[#06b6d4] bg-[#06b6d4]/10 px-2.5 py-1 rounded border border-[#06b6d4]/20 w-fit block mb-4">
                  AWS Cloud Failover Simulator
                </span>
                <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2">
                  Failover Route Operations Map
                </h3>
                <p className="text-xs text-hero-sub max-w-md leading-relaxed font-medium mb-6">
                  Test the high-availability sync setups. Click the trigger button to simulate a database server crash and watch packets reroute dynamically.
                </p>
              </div>

              {/* Dynamic SVG Visuals */}
              <div className="w-full h-44 rounded-xl border border-white/5 bg-black/40 relative overflow-hidden flex items-center justify-center p-4">
                <svg className="w-full h-full max-w-md" viewBox="0 0 500 200">
                  {/* Lines */}
                  {/* User to Ahmedabad */}
                  <line 
                    x1="60" y1="100" x2="220" y2="50" 
                    stroke={isOutage ? '#ffffff10' : '#8b5cf6'} 
                    strokeWidth="1.5" 
                    strokeDasharray={isOutage ? 'none' : '4,4'} 
                    className={isOutage ? '' : 'animate-[dash_10s_linear_infinite]'}
                    style={{ strokeDashoffset: isOutage ? 0 : 100 }}
                  />
                  {/* User to Mumbai */}
                  <line 
                    x1="60" y1="100" x2="220" y2="150" 
                    stroke={isOutage ? '#06b6d4' : '#ffffff10'} 
                    strokeWidth="1.5" 
                    strokeDasharray={isOutage ? '4,4' : 'none'} 
                    className={isOutage ? 'animate-[dash_10s_linear_infinite]' : ''}
                    style={{ strokeDashoffset: isOutage ? 100 : 0 }}
                  />
                  {/* Ahmedabad to DB */}
                  <line 
                    x1="280" y1="50" x2="440" y2="100" 
                    stroke={isOutage ? '#ffffff10' : '#8b5cf6'} 
                    strokeWidth="1.5"
                  />
                  {/* Mumbai to DB */}
                  <line 
                    x1="280" y1="150" x2="440" y2="100" 
                    stroke={isOutage ? '#06b6d4' : '#ffffff10'} 
                    strokeWidth="1.5"
                  />

                  {/* Nodes */}
                  {/* User Node */}
                  <circle cx="50" cy="100" r="10" fill="#ffffff" />
                  <text x="50" y="85" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">User Client</text>

                  {/* Ahmedabad Server Node */}
                  <circle cx="250" cy="50" r="14" fill={isOutage ? '#ef4444' : '#10b981'} className="transition-all duration-300" />
                  <text x="250" y="30" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Ahmedabad Server [Primary]</text>
                  <text x="250" y="53" fill="#000000" fontSize="8" fontWeight="bold" textAnchor="middle">{isOutage ? 'OFF' : 'ON'}</text>

                  {/* Mumbai Server Node */}
                  <circle cx="250" cy="150" r="14" fill={isOutage ? '#10b981' : '#f59e0b'} className="transition-all duration-300" />
                  <text x="250" y="180" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">Mumbai Server [Backup]</text>
                  <text x="250" y="153" fill="#000000" fontSize="8" fontWeight="bold" textAnchor="middle">{isOutage ? 'ON' : 'STBY'}</text>

                  {/* Database Node */}
                  <circle cx="450" cy="100" r="10" fill="#06b6d4" />
                  <text x="450" y="85" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">AWS Aurora DB</text>
                </svg>

                {/* Simulation button overlays inside map */}
                <button
                  onClick={triggerOutageSimulation}
                  className={`absolute bottom-3 right-3 text-[10px] font-bold py-2 px-3.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer shadow-lg ${
                    isOutage 
                      ? 'bg-emerald-500 hover:bg-emerald-500/90 text-black border-emerald-400' 
                      : 'bg-red-500 hover:bg-red-500/90 text-white border-red-400'
                  }`}
                >
                  {isOutage ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5" /> Restore Node [Ahmedabad]
                    </>
                  ) : (
                    <>
                      <AlertTriangle className="w-3.5 h-3.5" /> Trigger Outage [Ahmedabad]
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Shell console terminal logs */}
            <div className="w-full lg:w-96 rounded-xl border border-white/5 bg-black/60 p-4 font-mono text-[10px] flex flex-col justify-between gap-4 h-64 lg:h-auto overflow-hidden">
              <div className="flex items-center gap-2 text-foreground/40 border-b border-white/5 pb-2">
                <Server className="w-3.5 h-3.5" />
                <span>monitoring_console_logs</span>
              </div>
              <div className="flex-1 overflow-y-auto flex flex-col gap-1.5 text-cyan-400 leading-normal max-h-40">
                {simLogs.map((log, idx) => (
                  <div key={idx} className={log.includes('CRITICAL') ? 'text-red-400' : log.includes('SUCCESS') ? 'text-emerald-400' : ''}>
                    {log}
                  </div>
                ))}
              </div>
              <span className="text-[9px] text-foreground/20 block border-t border-white/5 pt-2">
                Replication state: ACTIVE (SSL sync)
              </span>
            </div>

          </div>
        </div>

        {/* Dynamic Delivery Roadmap */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full">
              Delivery Framework
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-normal tracking-tight mt-6 mb-4">
              How We Engineer <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-hero-sub text-sm max-w-xl mx-auto opacity-75 font-medium">
              From audit and blueprinting to zero-downtime server setups, our structured pipeline guarantees software fidelity.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-stretch relative">
            {steps.map((step, idx) => (
              <div key={idx} className="liquid-glass rounded-2xl p-6 border border-white/5 flex flex-col justify-between relative group">
                <div className="relative z-10">
                  <span className="font-display text-4xl font-bold bg-gradient-to-b from-white/10 to-transparent bg-clip-text text-transparent group-hover:from-[#a855f7]/20 transition-all block mb-4">
                    {step.num}
                  </span>
                  <h4 className="font-display text-sm font-semibold text-white tracking-tight mb-2 leading-snug">
                    {step.title}
                  </h4>
                  <p className="text-[11px] text-hero-sub/85 leading-relaxed opacity-75 font-medium">
                    {step.desc}
                  </p>
                </div>
                {idx < 4 && (
                  <ArrowRight className="hidden md:block w-5 h-5 text-white/5 group-hover:text-[#a855f7]/30 transition-colors absolute right-[-14px] top-1/2 -translate-y-1/2 z-20" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Client Testimonials (Carousel Component) */}
        <div className="py-16 border-t border-white/5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Header info */}
            <div className="md:col-span-4">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#fcd34d] bg-[#fcd34d]/10 px-3 py-1 rounded-full">
                Testimonials
              </span>
              <h3 className="font-display text-3xl font-normal text-white tracking-tight mt-6 mb-4">
                What Our Clients Say
              </h3>
              <p className="text-hero-sub text-sm opacity-85 leading-relaxed font-medium mb-6">
                Real feedback from business directors in Ahmedabad and globally on our software, cloud setups, and customer support chatbot integrations.
              </p>

              {/* Slider indicators */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-center text-white transition-colors cursor-pointer"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Carousel slide card */}
            <div className="md:col-span-8">
              <div className="liquid-glass rounded-2xl p-8 border border-white/5 min-h-[220px] flex flex-col justify-between transition-all duration-500 animate-in fade-in duration-300 relative">
                {/* Back quote mark decorator */}
                <span className="absolute top-4 right-8 text-8xl font-serif text-white/[0.02] select-none pointer-events-none">“</span>

                <p className="italic text-sm text-hero-sub/90 leading-relaxed font-medium relative z-10">
                  "{testimonials[activeSlide].quote}"
                </p>

                <div className="mt-8 flex justify-between items-center relative z-10">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-xs font-bold text-white">{testimonials[activeSlide].author}</span>
                    <span className="text-[10px] text-[#a855f7] font-semibold uppercase tracking-wider">{testimonials[activeSlide].role}</span>
                  </div>

                  {/* Dot indicator bars */}
                  <div className="flex gap-1.5">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSlide(idx)}
                        className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                          activeSlide === idx ? 'w-5 bg-[#a855f7]' : 'w-1.5 bg-white/10'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

import React, { useState } from 'react';
import { 
  Code2, Smartphone, Globe, Layers, Cpu, Bot, Cloud, 
  Network, Share2, Mail, Search, Palette, Box, Activity 
} from 'lucide-react';

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  category: 'development' | 'ai' | 'infra' | 'marketing';
  icon: React.ComponentType<any>;
  glowColor: string;
}

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'development', name: 'Development' },
    { id: 'ai', name: 'AI & Bots' },
    { id: 'infra', name: 'Cloud & Infrastructure' },
    { id: 'marketing', name: 'Marketing & SEO' },
  ];

  const servicesList: ServiceItem[] = [
    {
      id: 'software-dev',
      title: 'Software Development',
      description: 'Robust and scalable enterprise software solutions tailored to optimize your business operations and workflows.',
      category: 'development',
      icon: Code2,
      glowColor: 'from-blue-500/20 to-indigo-500/20',
    },
    {
      id: 'mobile-app',
      title: 'Mobile Application Development',
      description: 'High-performance native and cross-platform mobile apps for iOS and Android built with modern architectures.',
      category: 'development',
      icon: Smartphone,
      glowColor: 'from-purple-500/20 to-pink-500/20',
    },
    {
      id: 'web-dev',
      title: 'Website Development',
      description: 'Stunning, responsive, and SEO-optimized web experiences designed to engage visitors and drive conversions.',
      category: 'development',
      icon: Globe,
      glowColor: 'from-teal-500/20 to-emerald-500/20',
    },
    {
      id: 'crm-dev',
      title: 'CRM Development & Integration',
      description: 'Custom CRM systems engineered to manage customer relationships, automate sales pipelines, and track performance.',
      category: 'development',
      icon: Layers,
      glowColor: 'from-amber-500/20 to-orange-500/20',
    },
    {
      id: 'custom-software',
      title: 'Custom Software Systems',
      description: 'Tailor-made software built to resolve unique business bottlenecks where off-the-shelf software falls short.',
      category: 'development',
      icon: Cpu,
      glowColor: 'from-indigo-500/20 to-violet-500/20',
    },
    {
      id: 'ai-bots',
      title: 'AI Bots, Chatbots & Agents',
      description: 'State-of-the-art AI agents and chatbots configured to automate customer support, sales, and internal processes.',
      category: 'ai',
      icon: Bot,
      glowColor: 'from-[#a855f7]/20 to-[#fcd34d]/20',
    },
    {
      id: 'cloud-setup',
      title: 'Cloud Infrastructure & Setup',
      description: 'AWS, Azure, and Google Cloud setups designed for high availability, security, scalability, and cost optimization.',
      category: 'infra',
      icon: Cloud,
      glowColor: 'from-sky-500/20 to-blue-500/20',
    },
    {
      id: 'core-infra',
      title: 'Core Company Infrastructure',
      description: 'End-to-end office and enterprise network infrastructure setups, including server setups, firewalls, and active directory.',
      category: 'infra',
      icon: Network,
      glowColor: 'from-cyan-500/20 to-teal-500/20',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      description: 'Results-driven digital campaigns, social media management, and paid advertising to boost your online visibility.',
      category: 'marketing',
      icon: Share2,
      glowColor: 'from-rose-500/20 to-red-500/20',
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing Campaigns',
      description: 'Highly-personalized and automated email sequences designed to nurture leads, drive engagement, and improve retention.',
      category: 'marketing',
      icon: Mail,
      glowColor: 'from-orange-500/20 to-rose-500/20',
    },
    {
      id: 'seo-opt',
      title: 'Search Engine Optimization (SEO)',
      description: 'Comprehensive SEO audits, keyword ranking strategies, and content optimization to capture organic traffic.',
      category: 'marketing',
      icon: Search,
      glowColor: 'from-green-500/20 to-emerald-500/20',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Design',
      description: 'Intuitive user interfaces and immersive user experiences backed by rigorous user research and interactive mockups.',
      category: 'marketing',
      icon: Palette,
      glowColor: 'from-fuchsia-500/20 to-purple-500/20',
    },
    {
      id: 'it-asset',
      title: 'IT Asset Management',
      description: 'Software licensing tracking, hardware inventory oversight, cybersecurity compliance, and hardware lifecycle management.',
      category: 'infra',
      icon: Box,
      glowColor: 'from-yellow-500/20 to-amber-500/20',
    },
    {
      id: 'it-support',
      title: 'IT Support & Infra Migration',
      description: 'Seamless migration of legacy infrastructure to modern stacks, backed by 24/7 on-site and remote technical support.',
      category: 'infra',
      icon: Activity,
      glowColor: 'from-emerald-500/20 to-teal-500/20',
    },
  ];

  const filteredServices = activeCategory === 'all' 
    ? servicesList 
    : servicesList.filter(service => service.category === activeCategory);

  return (
    <section id="services" className="relative w-full py-24 px-6 md:px-12 bg-transparent overflow-visible">
      {/* Blurred decorative backgrounds */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-indigo-950/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-purple-950/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full">
            Our Expertise
          </span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight mt-6 mb-4">
            Next-Gen IT & <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">AI Solutions</span>
          </h2>
          <p className="text-hero-sub text-base sm:text-lg max-w-2xl mx-auto opacity-75">
            Paramount India Technologies LLP delivers end-to-end technical excellence, from modern web architectures to custom autonomous AI chatbot integrations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center items-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-foreground text-background shadow-lg scale-105'
                  : 'bg-white/5 text-foreground/80 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id}
                className="liquid-glass group rounded-2xl p-8 hover:translate-y-[-4px] transition-all duration-300 border border-white/5 hover:border-white/25 flex flex-col justify-between"
              >
                {/* Glow backlight backing each card */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl blur-md`} />
                
                <div className="relative z-10">
                  {/* Icon Frame */}
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 mb-6 group-hover:bg-[#a855f7]/10 group-hover:border-[#a855f7]/30 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 text-foreground group-hover:text-[#a855f7] transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-hero-sub/90 text-sm leading-relaxed opacity-85">
                    {service.description}
                  </p>
                </div>

                {/* Learn More link or decoration */}
                <div className="relative z-10 mt-6 flex items-center gap-1.5 text-xs font-semibold text-[#a855f7] opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  Request Info &rarr;
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

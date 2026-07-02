import React, { useState } from 'react';
import { 
  Code2, Smartphone, Globe, Layers, Cpu, Bot, Cloud, 
  Network, Share2, Mail, Search, Palette, Box, Activity,
  ArrowLeft, Terminal, ShieldAlert
} from 'lucide-react';

interface ServiceDetail {
  id: string;
  title: string;
  description: string;
  category: 'development' | 'ai' | 'infra' | 'marketing';
  icon: React.ComponentType<any>;
  techStack: string[];
  sla: string;
  deliverables: string[];
  glowColor: string;
}

interface ServicesPageProps {
  onBackToHome: () => void;
  onNavigateToContact: (serviceId: string, messagePrefill: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onBackToHome, onNavigateToContact }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'development' | 'ai' | 'infra' | 'marketing'>('all');

  const servicesDetails: ServiceDetail[] = [
    {
      id: 'software-dev',
      title: 'Enterprise Software Engineering',
      description: 'Robust and scalable software solutions designed to digitize complex company operational sequences.',
      category: 'development',
      icon: Code2,
      techStack: ['Node.js', 'React.js', 'GoLang', 'PostgreSQL', 'Docker', 'Kubernetes'],
      sla: '99.9% Application SLA, 4hr Critical bug hotfix guarantee',
      deliverables: ['Custom back-office dashboard', 'RESTful API endpoints integration', 'Role-based access controls (RBAC)', 'Source code repository handover'],
      glowColor: 'from-blue-500/10 to-indigo-500/10',
    },
    {
      id: 'mobile-app',
      title: 'Mobile Application Development',
      description: 'Native and hybrid mobile applications configured for high performance, animations, and security compliance.',
      category: 'development',
      icon: Smartphone,
      techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase Auth', 'GraphQL'],
      sla: 'App Store approval support, Next-day crash report audits',
      deliverables: ['iOS & Android binary builds', 'Developer account listing setup', 'Analytics SDK integrations', 'Automated push-notification dashboard'],
      glowColor: 'from-purple-500/10 to-pink-500/10',
    },
    {
      id: 'web-dev',
      title: 'Website Development & Optimization',
      description: 'Highly responsive web pages and landing pages loaded with micro-animations and technical SEO optimizations.',
      category: 'development',
      icon: Globe,
      techStack: ['React', 'Vite.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
      sla: 'Under 1.5s Core Web Vitals speed target, 99.95% host uptime',
      deliverables: ['SEO-optimized landing pages', 'Dynamic content management system (CMS)', 'SSL certificates configuration', 'Interactive contact capturing utilities'],
      glowColor: 'from-teal-500/10 to-emerald-500/10',
    },
    {
      id: 'crm-dev',
      title: 'CRM Setup & Pipelines Integration',
      description: 'Engineered CRM environments configured to track customer relationships, sales pipelines, and database logs.',
      category: 'development',
      icon: Layers,
      techStack: ['Salesforce API', 'HubSpot SDK', 'Custom databases', 'REST Webhooks', 'Zapier modules'],
      sla: 'Zero-data-loss sync assurance, 24hr API sync error alerts',
      deliverables: ['Lead distribution automation triggers', 'Sales performance reports module', 'Client callback profile dashboard', 'Existing database legacy migrations'],
      glowColor: 'from-amber-500/10 to-orange-500/10',
    },
    {
      id: 'custom-software',
      title: 'Custom Software Architecture',
      description: 'Tailormade cloud-based systems built to address internal bottlenecks where standard software falls short.',
      category: 'development',
      icon: Cpu,
      techStack: ['TypeScript', 'Node.js', 'Docker', 'Amazon Web Services', 'Redis Cache', 'Prisma'],
      sla: 'Corporate spec custom SLA agreements, 24/7 uptime monitoring',
      deliverables: ['Architecture blueprint documents', 'Proprietary IP code licensing', 'Third-party hardware API linkages', 'Interactive administration panels'],
      glowColor: 'from-indigo-500/10 to-violet-500/10',
    },
    {
      id: 'ai-bots',
      title: 'AI Bots, Chatbots & Agents',
      description: 'NLP-powered autonomous agents trained on company datasets to automate client screening and CRM databases syncs.',
      category: 'ai',
      icon: Bot,
      techStack: ['OpenAI APIs', 'Python', 'FastAPI', 'Llama Index', 'Vector Databases', 'LangChain'],
      sla: 'Average 1.2s response time SLA, monthly intent tuning hotfixes',
      deliverables: ['Interactive chat widget script', 'Training dataset ingestion pipelines', 'Sync interfaces with HubSpot/Salesforce', 'Conversation analytics console'],
      glowColor: 'from-[#a855f7]/10 to-[#6366f1]/10',
    },
    {
      id: 'cloud-setup',
      title: 'Cloud Infrastructure Setup',
      description: 'High-availability server infrastructure setups spanning multi-zone clusters and security configurations.',
      category: 'infra',
      icon: Cloud,
      techStack: ['AWS CloudFormation', 'Terraform', 'Google Cloud (GCP)', 'Microsoft Azure', 'IAM roles'],
      sla: '99.99% Server cluster SLA, automated scale rules triggers',
      deliverables: ['Terraform infrastructure code files', 'Virtual private cloud (VPC) subnets', 'WAF firewall protections config', 'Automated cloud backup nodes'],
      glowColor: 'from-sky-500/10 to-blue-500/10',
    },
    {
      id: 'core-infra',
      title: 'Core Office & Network Infra',
      description: 'End-to-end office network environments setup including server cabinets, firewalls, and active directory systems.',
      category: 'infra',
      icon: Network,
      techStack: ['Cisco Hardware', 'Ubiquiti Networks', 'Active Directory', 'PFSense Firewalls', 'VPN nodes'],
      sla: 'On-site hardware troubleshooting within 4 hours, router redundancy configuration',
      deliverables: ['Network routing schematics', 'Secured employee VPN profiles', 'Corporate file storage server setup', 'Hardware lifecycle documentation reports'],
      glowColor: 'from-cyan-500/10 to-teal-500/10',
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Campaigns',
      description: 'Data-driven online advertising campaigns configured to capture conversion leads and track marketing spend.',
      category: 'marketing',
      icon: Share2,
      techStack: ['Google Ads', 'Meta Ads Pixel', 'LinkedIn Campaign Manager', 'Google Analytics 4'],
      sla: 'Monthly acquisition rate targets, conversion pixel audits',
      deliverables: ['Ad copy mockups & layouts', 'Conversion funnel tracking setups', 'ROI dashboard reports', 'Target audience segments mapping'],
      glowColor: 'from-rose-500/10 to-red-500/10',
    },
    {
      id: 'email-marketing',
      title: 'Email Marketing Automations',
      description: 'Drip campaign systems configured to nurture client leads and automate sales conversions sequences.',
      category: 'marketing',
      icon: Mail,
      techStack: ['Klaviyo API', 'Mailchimp SDK', 'SMTP SendGrid', 'DKIM & SPF protocols'],
      sla: '98%+ inbox delivery rate standards, spam score audits',
      deliverables: ['Responsive custom HTML email layouts', 'Automated trigger flow blueprints', 'Audience list segmentation trees', 'A/B testing campaign designs'],
      glowColor: 'from-orange-500/10 to-rose-500/10',
    },
    {
      id: 'seo-opt',
      title: 'Technical Search Engine Optimization',
      description: 'Search engine optimization tracking, keyword positioning, and database speed enhancements.',
      category: 'marketing',
      icon: Search,
      techStack: ['Google Search Console', 'Ahrefs Engine', 'Sitemap builders', 'Structured Schema markup'],
      sla: 'Contracted page-speed score target, organic index coverage assurance',
      deliverables: ['Comprehensive site audit report', 'Structured microdata tags config', 'Target keyword mapping roadmap', 'Competitor keyword analysis docs'],
      glowColor: 'from-green-500/10 to-emerald-500/10',
    },
    {
      id: 'ui-ux',
      title: 'UI/UX Interface Design',
      description: 'High-fidelity UI mockups, interface layouts, and interactive user flows centered on user conversion metrics.',
      category: 'marketing',
      icon: Palette,
      techStack: ['Figma Pro', 'Adobe Creative Cloud', 'Wireframe systems', 'Interactive prototypes'],
      sla: 'Rigorous user testing validations, full component style guides',
      deliverables: ['High-fidelity Figma vector design files', 'Interactive clickable prototype links', 'Component assets exports package', 'User testing feedback spreadsheets'],
      glowColor: 'from-fuchsia-500/10 to-purple-500/10',
    },
    {
      id: 'it-asset',
      title: 'IT Asset Management & Licenses',
      description: 'Hardware asset tracking, cybersecurity software licenses monitoring, and network inventory audits.',
      category: 'infra',
      icon: Box,
      techStack: ['Snipe-IT', 'MDM Jamf Pro', 'Microsoft Intune', 'Asset tag workflows'],
      sla: 'License renewal automated warning triggers, security compliance alignment',
      deliverables: ['Asset inventory audit sheet', 'Mobile device profiles configuration', 'Antivirus deployment dashboard', 'Hardware depreciation reports'],
      glowColor: 'from-yellow-500/10 to-amber-500/10',
    },
    {
      id: 'it-support',
      title: 'IT Support & Infra Migration',
      description: 'Migrating enterprise physical databases and network setups to secure cloud architectures.',
      category: 'infra',
      icon: Activity,
      techStack: ['Database migration scripts', 'Server cloning systems', 'AWS Database Migration Tool', 'Secure VPN tunnels'],
      sla: 'Zero-downtime maintenance window migrations, 24/7 on-call technical engineers',
      deliverables: ['Migration contingency plan documentation', 'Post-migration speed verification audits', 'On-site technical support ticketing logs', 'Legacy hardware database wipe certs'],
      glowColor: 'from-emerald-500/10 to-teal-500/10',
    },
  ];

  const filteredServices = servicesDetails.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full min-h-screen bg-transparent relative overflow-visible py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Navigation back header */}
        <button 
          onClick={onBackToHome}
          className="flex items-center gap-2 text-xs font-semibold text-[#a855f7] hover:text-white transition-colors duration-200 mb-10 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO HOMEPAGE
        </button>

        {/* Title */}
        <div className="mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#a855f7] bg-[#a855f7]/10 px-3 py-1 rounded-full">
            Technical Competence Directory
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-normal tracking-tight mt-6 mb-4">
            IT & <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#fcd34d] bg-clip-text text-transparent">AI Competencies</span>
          </h1>
          <p className="text-hero-sub text-base sm:text-lg max-w-3xl opacity-75 font-medium">
            Explore the complete directory of Paramount India Technologies LLP's technical services, technology stacks, SLA parameters, and production deliverables.
          </p>
        </div>

        {/* Search & Category Filter */}
        <div className="w-full flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12">
          {/* Search bar */}
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 text-foreground/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services, tech stacks (e.g. AWS, React, Python)..."
              className="w-full bg-white/5 border border-white/5 rounded-xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-white/20 transition-all text-white placeholder-foreground/30 font-medium"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-2.5">
            {(['all', 'development', 'ai', 'infra', 'marketing'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-foreground text-background shadow-lg'
                    : 'bg-white/5 text-foreground/75 hover:bg-white/10 hover:text-white border border-white/5'
                }`}
              >
                {cat === 'all' ? 'All' : cat === 'infra' ? 'Cloud & Network' : cat === 'marketing' ? 'Marketing & SEO' : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div className="text-xs text-foreground/45 mb-6 font-medium">
          Showing {filteredServices.length} service competencies based on your selection
        </div>

        {/* Services Grid (standardized vertical cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            
            const getHoverGlowClass = (cat: string) => {
              switch (cat) {
                case 'ai': return 'hover:border-[#a855f7]/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.12)]';
                case 'development': return 'hover:border-blue-500/30 hover:shadow-[0_0_25px_rgba(59,130,246,0.12)]';
                case 'infra': return 'hover:border-cyan-500/30 hover:shadow-[0_0_25px_rgba(6,182,212,0.12)]';
                case 'marketing': return 'hover:border-amber-500/30 hover:shadow-[0_0_25px_rgba(245,158,11,0.12)]';
                default: return 'hover:border-white/20';
              }
            };

            return (
              <div 
                key={service.id}
                className={`liquid-glass group rounded-2xl p-8 border border-white/5 transition-all duration-300 flex flex-col justify-between h-full relative ${getHoverGlowClass(service.category)}`}
              >
                {/* BACKLIGHT */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl blur-md`} />
                
                <div className="relative z-10">
                  {/* Top Header */}
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-[#a855f7]/30 transition-colors">
                      <Icon className="w-5 h-5 text-[#a855f7]" />
                    </div>
                    <span className="text-[9px] text-foreground/45 font-bold uppercase tracking-widest mt-1">
                      {service.category === 'infra' ? 'Cloud & Network' : service.category === 'marketing' ? 'Marketing & SEO' : service.category}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl font-semibold text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs text-hero-sub/90 leading-relaxed mb-6 opacity-75 min-h-[48px] font-medium">
                    {service.description}
                  </p>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.techStack.map((tech) => (
                      <span key={tech} className="bg-white/5 border border-white/5 text-[9px] font-semibold text-white/80 px-2.5 py-0.5 rounded font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Deliverables */}
                  <div className="mb-6 pt-4 border-t border-white/5">
                    <span className="text-[9px] text-[#a855f7] font-bold uppercase tracking-widest block mb-3">Key Deliverables</span>
                    <ul className="flex flex-col gap-2">
                      {service.deliverables.slice(0, 3).map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-[#a855f7] rounded-full mt-1.5 flex-shrink-0" />
                          <span className="text-[11px] text-hero-sub leading-normal opacity-85 font-medium">{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom: SLA & Button */}
                <div className="relative z-10 pt-4 border-t border-white/5 mt-auto">
                  <div className="mb-4">
                    <span className="text-[9px] text-[#fcd34d] font-bold uppercase tracking-widest block mb-1 flex items-center gap-1"><Terminal className="w-3.5 h-3.5" /> SLA Commitment</span>
                    <span className="text-[11px] text-white/95 font-semibold leading-tight block min-h-[32px]">{service.sla}</span>
                  </div>
                  <button
                    onClick={() => onNavigateToContact(service.id, `Hi Devendra, I would like to inquire about Paramount's "${service.title}" service. Let's arrange a call.`)}
                    className="w-full btn-hero-secondary rounded-xl py-2.5 text-xs font-semibold tracking-wide cursor-pointer"
                  >
                    Select Competency
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty state */}
        {filteredServices.length === 0 && (
          <div className="w-full text-center py-20 bg-white/2 border border-white/5 rounded-2xl liquid-glass relative z-10">
            <ShieldAlert className="w-10 h-10 text-foreground/30 mx-auto mb-4" />
            <h3 className="text-base font-bold text-white mb-1">No Competencies Found</h3>
            <p className="text-xs text-foreground/50 max-w-sm mx-auto">
              No services matched your query "{searchQuery}". Try searching for core keywords like "AWS", "AI", "Mobile", or "Support".
            </p>
          </div>
        )}

      </div>
    </div>
  );
};

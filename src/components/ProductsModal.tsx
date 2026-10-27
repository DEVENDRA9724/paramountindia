import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Globe,
  Smartphone,
  Code2,
  Mail,
  MessageSquare,
  TrendingUp,
  Cloud,
  Headphones,
  Check,
  ArrowUpRight,
  ShieldCheck,
  Building2,
  Sparkles,
} from 'lucide-react';

interface ProductsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenContact: () => void;
}

export interface CompanyProduct {
  id: string;
  name: string;
  category: 'Development' | 'Communication & Tools' | 'Infrastructure & Growth';
  tagline: string;
  badge: string;
  description: string;
  features: string[];
  metric: string;
  metricLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const COMPANY_PRODUCTS: CompanyProduct[] = [
  {
    id: 'web-dev',
    name: 'Web Development',
    category: 'Development',
    badge: 'Enterprise Web',
    tagline: 'High-speed, conversion-focused websites & scalable web applications',
    description:
      'Custom website and web portal engineering using React 19, Next.js, and TypeScript. Optimized for sub-second page loads, SEO dominance, and responsive mobile-first performance.',
    features: [
      'Custom CMS & headless architecture (Sanity, WordPress, Strapi)',
      'High-converting modern UI with Tailwind CSS & Motion',
      'Full SEO optimization, OpenGraph, and Core Web Vitals 95+',
      'E-commerce portals with secure payment gateway integration',
    ],
    metric: '99/100',
    metricLabel: 'Lighthouse Performance',
    icon: Globe,
  },
  {
    id: 'app-dev',
    name: 'Application Development',
    category: 'Development',
    badge: 'iOS & Android',
    tagline: 'Cross-platform and native mobile applications with fluid UX',
    description:
      'End-to-end mobile app engineering for iOS and Android using React Native and Flutter. Designed with offline sync, biometric security, and push notifications.',
    features: [
      'Single codebase for iOS and Android deployment',
      'Real-time push notifications & background syncing',
      'Biometric authentication (Face ID / Fingerprint)',
      'App Store & Google Play Store release management',
    ],
    metric: '60 FPS',
    metricLabel: 'Smooth Native Feel',
    icon: Smartphone,
  },
  {
    id: 'software-dev',
    name: 'Software Development',
    category: 'Development',
    badge: 'Custom Systems',
    tagline: 'Bespoke ERP, CRM, and mission-critical enterprise software',
    description:
      'Engineered specifically around your business workflows. We eliminate operational bottlenecks with centralized databases, role-based security, and automated reporting.',
    features: [
      'Custom CRM, ERP, and inventory management systems',
      'Microservices architecture with REST & GraphQL APIs',
      'Role-based access control (RBAC) & audit trails',
      'Automated database backups & disaster recovery protocol',
    ],
    metric: '4x Faster',
    metricLabel: 'Operational Efficiency',
    icon: Code2,
  },
  {
    id: 'email-automation',
    name: 'Email Automation Tool',
    category: 'Communication & Tools',
    badge: 'Proprietary Tool',
    tagline: 'Smart drip sequencing, behavioral triggers & high inbox deliverability',
    description:
      'Our dedicated email automation platform allows enterprises to nurture leads, automate transactional receipts, and trigger dynamic drip campaigns with spam-filter evasion.',
    features: [
      'Drag-and-drop dynamic visual sequence builder',
      'Dedicated IP warming & SPF / DKIM / DMARC verification',
      'Real-time open, click, bounce, and unsubscribe analytics',
      'Webhook triggers connecting to your CRM and website forms',
    ],
    metric: '99.4%',
    metricLabel: 'Inbox Deliverability',
    icon: Mail,
  },
  {
    id: 'whatsapp-api',
    name: 'WhatsApp API',
    category: 'Communication & Tools',
    badge: 'Official Cloud API',
    tagline: 'Automated chatbots, broadcast messaging & customer support at scale',
    description:
      'Official Meta WhatsApp Business Cloud API integration. Send bulk verified announcements, automate FAQs with interactive buttons, and provide multi-agent support inbox.',
    features: [
      'Green tick verification assistance & Official Cloud API setup',
      'Automated order tracking, OTPs, and booking confirmations',
      'Interactive chat flows with buttons, lists, and rich media',
      'Unified multi-agent dashboard for support agents',
    ],
    metric: '98%+',
    metricLabel: 'Message Open Rate',
    icon: MessageSquare,
  },
  {
    id: 'digital-marketing',
    name: 'Digital Marketing',
    category: 'Infrastructure & Growth',
    badge: 'ROI Focused',
    tagline: 'Data-driven SEO, Google Ads, Meta Ads & programmatic branding',
    description:
      'Full-funnel digital marketing strategies that turn impressions into high-ticket enterprise inquiries. Transparent analytics and relentless conversion optimization.',
    features: [
      'Technical SEO & high-intent keyword ranking strategy',
      'High-ROI Google Search, Display, and Performance Max ads',
      'Targeted B2B Meta (Facebook/Instagram) & LinkedIn ads',
      'Conversion Rate Optimization (CRO) and heatmapping',
    ],
    metric: '320%',
    metricLabel: 'Average Client ROI',
    icon: TrendingUp,
  },
  {
    id: 'cloud-infra',
    name: 'Cloud Infrastructure',
    category: 'Infrastructure & Growth',
    badge: 'AWS · GCP · Azure',
    tagline: 'Kubernetes orchestration, auto-scaling & 99.99% server availability',
    description:
      'Architecting resilient cloud environments with automated Docker containers, Terraform infrastructure-as-code, and low-latency Content Delivery Networks.',
    features: [
      'Multi-cloud architecture (AWS, Google Cloud, Azure)',
      'Automated CI/CD pipelines with zero-downtime rolling deploys',
      'Auto-scaling load balancers and database clustering',
      'Cost optimization auditing (saving up to 40% cloud bills)',
    ],
    metric: '99.99%',
    metricLabel: 'Guaranteed Uptime',
    icon: Cloud,
  },
  {
    id: 'it-support',
    name: 'IT Support Infrastructure Services',
    category: 'Infrastructure & Growth',
    badge: '24/7 Managed IT',
    tagline: 'Round-the-clock server maintenance, cyber security & hardware helpdesk',
    description:
      'Comprehensive IT infrastructure maintenance for growing and enterprise businesses. Proactive server patching, intrusion detection, and instant engineer support.',
    features: [
      '24/7/365 proactive server and network uptime monitoring',
      'Firewall configuration, VPN tunnels, and endpoint security',
      'Automated off-site cloud backups and disaster recovery drills',
      'Dedicated SLA with guaranteed 15-minute emergency response',
    ],
    metric: '< 15 mins',
    metricLabel: 'Emergency SLA Response',
    icon: Headphones,
  },
];

export const ProductsModal: React.FC<ProductsModalProps> = ({
  isOpen,
  onClose,
  onOpenContact,
}) => {
  const [selectedProductId, setSelectedProductId] = useState(COMPANY_PRODUCTS[0].id);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filteredProducts =
    activeCategory === 'All'
      ? COMPANY_PRODUCTS
      : COMPANY_PRODUCTS.filter((p) => p.category === activeCategory);

  const activeProduct =
    COMPANY_PRODUCTS.find((p) => p.id === selectedProductId) || COMPANY_PRODUCTS[0];

  const categories = ['All', 'Development', 'Communication & Tools', 'Infrastructure & Growth'];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 my-6 flex flex-col max-h-[90vh]"
          >
            {/* Header with Legal Badge */}
            <div className="px-6 py-5 sm:px-8 border-b border-slate-100 flex items-center justify-between bg-slate-50/80">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#0a152d] text-white flex items-center justify-center shadow-sm">
                  <Building2 className="w-5 h-5 text-blue-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl font-semibold text-[#0a1b33]">
                      Paramount Products & Services Suite
                    </h3>
                    <span className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-800 rounded-full">
                      8 Core Offerings
                    </span>
                  </div>
                  <p className="text-xs text-slate-500">
                    PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED · CIN: U62011GJ2026PTC183227
                  </p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 text-slate-500 hover:text-slate-900 flex items-center justify-center border border-slate-200 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Category Filter Pills */}
            <div className="px-6 sm:px-8 py-3 border-b border-slate-100 flex items-center gap-2 overflow-x-auto bg-white">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-3 py-1 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
                    activeCategory === cat
                      ? 'bg-[#0a152d] text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Modal Body: Left List + Right Detail */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 flex flex-col md:flex-row gap-6">
              {/* Product Selector List */}
              <div className="w-full md:w-5/12 space-y-2 max-h-[460px] overflow-y-auto pr-1">
                {filteredProducts.map((prod) => {
                  const isSelected = prod.id === selectedProductId;
                  const Icon = prod.icon;
                  return (
                    <button
                      key={prod.id}
                      onClick={() => setSelectedProductId(prod.id)}
                      className={`w-full text-left p-3.5 rounded-2xl border transition-all cursor-pointer flex items-center gap-3 ${
                        isSelected
                          ? 'bg-[#0a152d] text-white border-[#0a152d] shadow-md'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-800 border-slate-200/60'
                      }`}
                    >
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
                          isSelected
                            ? 'bg-blue-600 text-white'
                            : 'bg-white border border-slate-200 text-slate-700'
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-1">
                          <span className="font-display font-medium text-sm truncate">
                            {prod.name}
                          </span>
                          <span
                            className={`text-[9px] font-semibold px-2 py-0.5 rounded-full shrink-0 ${
                              isSelected
                                ? 'bg-blue-500/20 text-blue-200'
                                : 'bg-slate-200 text-slate-600'
                            }`}
                          >
                            {prod.badge}
                          </span>
                        </div>
                        <p
                          className={`text-xs truncate ${
                            isSelected ? 'text-slate-300' : 'text-slate-500'
                          }`}
                        >
                          {prod.tagline}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Product Detail Panel */}
              <div className="w-full md:w-7/12 flex flex-col justify-between bg-slate-50/50 p-6 rounded-3xl border border-slate-200/80">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                      {activeProduct.category}
                    </span>
                    <span className="text-slate-300">·</span>
                    <span className="text-xs text-slate-500">{activeProduct.badge}</span>
                  </div>

                  <h4 className="font-display text-2xl font-semibold text-[#0a1b33] mt-1.5 flex items-center gap-2.5">
                    {activeProduct.name}
                  </h4>
                  <p className="text-sm font-medium text-slate-700 mt-1">
                    {activeProduct.tagline}
                  </p>
                  <p className="text-xs text-slate-600 mt-3 leading-relaxed">
                    {activeProduct.description}
                  </p>

                  {/* Capabilities List */}
                  <div className="mt-5 space-y-2">
                    <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider">
                      Core Features Included
                    </div>
                    {activeProduct.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Highlight Metric */}
                  <div className="mt-5 p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between">
                    <div>
                      <div className="font-display text-2xl font-bold text-[#0a1b33]">
                        {activeProduct.metric}
                      </div>
                      <div className="text-xs text-slate-500">{activeProduct.metricLabel}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-semibold text-slate-800">
                        Pvt. Ltd. Compliance
                      </div>
                      <div className="text-[10px] text-slate-500">CIN: U62011GJ2026PTC183227</div>
                    </div>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between flex-wrap gap-3">
                  <div className="text-xs text-slate-500">
                    Official enterprise contract & GST invoice provided
                  </div>
                  <button
                    onClick={() => {
                      onClose();
                      onOpenContact();
                    }}
                    className="px-5 py-2.5 bg-[#0a152d] text-white text-xs font-semibold rounded-full hover:bg-[#1a2d55] transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <span>Get Quote for {activeProduct.name}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

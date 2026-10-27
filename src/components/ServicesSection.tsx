import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Globe,
  Smartphone,
  Code2,
  Mail,
  MessageSquare,
  TrendingUp,
  Cloud,
  Headphones,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_PRODUCTS, CompanyProduct } from './ProductsModal';

interface ServicesSectionProps {
  onOpenContact: (prefilledService?: string) => void;
  onOpenProductDetail: (productId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onOpenContact,
  onOpenProductDetail,
}) => {
  const [filter, setFilter] = useState<string>('All');

  const categories = ['All', 'Development', 'Communication & Tools', 'Infrastructure & Growth'];

  const filtered =
    filter === 'All'
      ? COMPANY_PRODUCTS
      : COMPANY_PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="services-section" className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
              Core Products & Offerings
            </span>
            <span className="text-slate-300">·</span>
            <span className="text-xs text-slate-500 font-medium">8 Enterprise Solutions</span>
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-semibold text-[#0a1b33] mt-2">
            Engineered for growth, automation & digital resilience
          </h2>
          <p className="font-sans text-sm text-[#64748b] max-w-2xl mt-2 leading-relaxed">
            From modern responsive web & mobile engineering to proprietary email automation and official WhatsApp Cloud APIs — explore the full spectrum of solutions delivered by <strong>PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED</strong>.
          </p>
        </div>

        {/* Legal Entity Registration Banner */}
        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs font-bold text-slate-900">
              Incorporated Pvt. Ltd. Company
            </div>
            <div className="text-[11px] text-slate-500">
              CIN: <span className="font-mono font-medium text-slate-800">U62011GJ2026PTC183227</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter Controls */}
      <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap ${
              filter === cat
                ? 'bg-[#0a152d] text-white shadow-xs'
                : 'bg-white border border-slate-200/80 text-slate-600 hover:text-slate-900 hover:border-slate-300'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 8 Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((product, index) => {
          const Icon = product.icon;
          return (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-[32px] bg-white border border-slate-200/70 shadow-xs hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#0a1b33] group-hover:bg-[#0a152d] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                    {product.badge}
                  </span>
                </div>

                <h3 className="font-display text-lg font-semibold text-[#0a1b33]">
                  {product.name}
                </h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed font-sans line-clamp-3">
                  {product.description}
                </p>

                {/* Key feature bullets */}
                <div className="mt-4 space-y-1.5 border-t border-slate-100 pt-3">
                  {product.features.slice(0, 2).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer with Actions */}
              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0a1b33]">{product.metric}</div>
                  <div className="text-[10px] text-slate-400">{product.metricLabel}</div>
                </div>

                <button
                  onClick={() => onOpenContact(product.name)}
                  className="px-3.5 py-1.5 rounded-full bg-slate-50 hover:bg-[#0a152d] hover:text-white text-slate-800 text-xs font-semibold transition-all border border-slate-200 hover:border-transparent flex items-center gap-1 cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Globe, Building2, Cpu, CheckCircle2, Award, ArrowRight } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about-section" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      <div className="rounded-[44px] bg-white border border-slate-200/80 p-8 sm:p-14 shadow-sm relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-blue-100/40 via-indigo-50/20 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Corporate Narrative & Leadership */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">
                Corporate Profile & Legal Registration
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0a1b33] leading-tight">
              PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED
            </h2>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-100/90 rounded-xl text-xs font-mono text-slate-800 mt-3 border border-slate-200/80 shadow-2xs">
              <span className="font-semibold text-slate-500 font-sans">CIN:</span>
              <span className="font-bold text-blue-900">U62011GJ2026PTC183227</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-700 font-semibold font-sans flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                <span>Active Indian Pvt. Ltd. Entity</span>
              </span>
            </div>

            <p className="font-sans text-sm text-[#475569] mt-5 leading-relaxed">
              Founded and spearheaded by <strong>Devendra Sharma</strong>, <strong>PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED</strong> is a legally incorporated Indian Private Limited corporation registered under the Ministry of Corporate Affairs (MCA), Government of India.
            </p>

            <p className="font-sans text-sm text-[#475569] mt-3 leading-relaxed">
              We engineer proprietary enterprise platforms like <strong>Safar Self Drive SaaS</strong> alongside delivering full-lifecycle custom web and mobile application development, email automation infrastructure, official WhatsApp Cloud APIs, and 24/7 managed IT cloud infrastructure for clients across India and global markets.
            </p>

            {/* Quick stats grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                <div className="font-display text-2xl font-bold text-[#0a1b33]">9+</div>
                <div className="text-[11px] text-slate-500 mt-0.5">SaaS & Product Lines</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                <div className="font-display text-2xl font-bold text-[#0a1b33]">99.99%</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Cloud Uptime SLA</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                <div className="font-display text-2xl font-bold text-[#0a1b33]">100%</div>
                <div className="text-[11px] text-slate-500 mt-0.5">MCA India Verified</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-slate-50/80 border border-slate-200/60">
                <div className="font-display text-2xl font-bold text-[#0a1b33]">&lt;15m</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Emergency IT Response</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-full bg-[#0a152d] text-white text-xs font-semibold hover:bg-[#182c57] transition-all cursor-pointer shadow-md flex items-center gap-2"
              >
                <span>Connect with Devendra Sharma</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-400" />
              </button>
              <button
                onClick={onOpenContact}
                className="px-5 py-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all cursor-pointer border border-slate-200/80"
              >
                Schedule Corporate Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Corporate Registry & Assurance */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-[#0a1b33]">
                    Official Corporate Registry
                  </h4>
                  <p className="text-xs text-slate-500">Ministry of Corporate Affairs, India</p>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-600 space-y-1 font-mono">
                <div><span className="text-slate-400 font-sans">Entity:</span> PARAMOUNT INDIA TECHNOLOGIES PVT. LTD.</div>
                <div><span className="text-slate-400 font-sans">CIN:</span> U62011GJ2026PTC183227</div>
                <div><span className="text-slate-400 font-sans">State:</span> Gujarat, India</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-[#0a1b33]">
                    Enterprise Service Contracts
                  </h4>
                  <p className="text-xs text-slate-500">Official GST Invoicing & Legal NDAs</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                All client agreements, intellectual property assignments, and service level agreements (SLAs) are formally executed under Indian Private Limited corporate jurisdiction.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50/80 border border-slate-200/80 shadow-2xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-[#0a1b33]">
                    Global Delivery Capabilities
                  </h4>
                  <p className="text-xs text-slate-500">Serving clients in India & Worldwide</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 mt-2.5 leading-relaxed">
                Distributed cloud infrastructure and 24/7 technical monitoring teams ensuring seamless global operations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

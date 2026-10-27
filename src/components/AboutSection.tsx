import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Globe, Building2, Cpu, CheckCircle } from 'lucide-react';

interface AboutSectionProps {
  onOpenContact: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenContact }) => {
  return (
    <section id="about-section" className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-16">
      <div className="rounded-[40px] bg-white border border-slate-200/60 p-8 sm:p-14 shadow-sm relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/70 rounded-full blur-3xl -z-0 pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Corporate Narrative & Leadership */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                Corporate Profile & Legal Registration
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#0a1b33] mt-2 leading-tight">
              PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED
            </h2>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 rounded-lg text-xs font-mono text-slate-800 mt-2 border border-slate-200">
              <span className="font-semibold text-slate-500 font-sans">CIN:</span>
              <span className="font-bold">U62011GJ2026PTC183227</span>
              <span className="text-slate-300">·</span>
              <span className="text-emerald-700 font-semibold font-sans">Active Pvt. Ltd. Entity</span>
            </div>

            <p className="font-sans text-sm text-[#64748b] mt-4 leading-relaxed">
              Founded and spearheaded by <strong>Devendra Sharma</strong>, <strong>PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED</strong> is a legally incorporated Indian Private Limited entity registered under the Ministry of Corporate Affairs (MCA), Government of India.
            </p>
            <p className="font-sans text-sm text-[#64748b] mt-3 leading-relaxed">
              We specialize in custom web and mobile application development, bespoke software architecture, proprietary email automation infrastructure, official WhatsApp Business Cloud APIs, high-availability cloud infrastructure, and 24/7 IT support services for businesses in India and across the world.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="font-display text-2xl font-bold text-[#0a1b33]">8+</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Core Product Lines</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="font-display text-2xl font-bold text-[#0a1b33]">99.99%</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Cloud Uptime SLA</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="font-display text-2xl font-bold text-[#0a1b33]">100%</div>
                <div className="text-[11px] text-slate-500 mt-0.5">Legal MCA Compliance</div>
              </div>
              <div className="p-3 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="font-display text-2xl font-bold text-[#0a1b33]">&lt;15m</div>
                <div className="text-[11px] text-slate-500 mt-0.5">IT Support Response</div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenContact}
                className="px-6 py-2.5 rounded-full bg-[#0a152d] text-white text-xs font-semibold hover:bg-[#182c57] transition-all cursor-pointer shadow-sm"
              >
                Connect with Devendra Sharma
              </button>
              <button
                onClick={onOpenContact}
                className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all cursor-pointer"
              >
                Schedule Corporate Consultation
              </button>
            </div>
          </div>

          {/* Right Column: Corporate Registry & Assurance */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                  <Building2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-display text-sm font-semibold text-[#0a1b33]">
                    Official Corporate Status
                  </h4>
                  <p className="text-xs text-slate-500">Ministry of Corporate Affairs, India</p>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-600 space-y-1.5 font-mono">
                <div><span className="text-slate-400 font-sans">Entity:</span> PARAMOUNT INDIA TECHNOLOGIES PVT. LTD.</div>
                <div><span className="text-slate-400 font-sans">CIN:</span> U62011GJ2026PTC183227</div>
                <div><span className="text-slate-400 font-sans">Registration:</span> Gujarat, India</div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                  <ShieldCheck className="w-4 h-4" />
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

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-purple-100 text-purple-700 flex items-center justify-center font-bold">
                  <Globe className="w-4 h-4" />
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

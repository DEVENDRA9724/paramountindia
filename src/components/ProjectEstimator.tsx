import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Calculator,
  CheckCircle2,
  Clock,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Server,
  Zap,
} from 'lucide-react';

interface ProjectEstimatorProps {
  onOpenContact: (scopeDetails?: string) => void;
}

interface ServiceOption {
  id: string;
  name: string;
  category: string;
  weeks: number;
}

const AVAILABLE_SERVICES: ServiceOption[] = [
  { id: 'safar-saas', name: 'Safar Self Drive SaaS License & Setup', category: 'Mobility SaaS', weeks: 2 },
  { id: 'web-portal', name: 'Web Portal & Frontend Engineering (React / Next.js)', category: 'Web', weeks: 3 },
  { id: 'mobile-app', name: 'Cross-Platform iOS & Android Mobile App', category: 'Mobile', weeks: 4 },
  { id: 'whatsapp-api', name: 'Official WhatsApp Business Cloud API & Chatbots', category: 'Communication', weeks: 1 },
  { id: 'email-tool', name: 'Proprietary Email Automation Tool & Dedicated IPs', category: 'Marketing', weeks: 1 },
  { id: 'cloud-infra', name: 'Multi-Cloud Kubernetes & 24/7 IT Monitoring SLA', category: 'DevOps', weeks: 2 },
];

export const ProjectEstimator: React.FC<ProjectEstimatorProps> = ({ onOpenContact }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([
    'safar-saas',
    'whatsapp-api',
  ]);
  const [businessScale, setBusinessScale] = useState<'mvp' | 'growth' | 'enterprise'>('growth');

  const toggleService = (id: string) => {
    if (selectedServices.includes(id)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== id));
      }
    } else {
      setSelectedServices([...selectedServices, id]);
    }
  };

  // Compute estimated timeline
  const baseWeeks = selectedServices.reduce((acc, currId) => {
    const s = AVAILABLE_SERVICES.find((item) => item.id === currId);
    return acc + (s ? s.weeks : 1);
  }, 0);

  // Parallel sprint compression
  const estimatedWeeks = Math.max(2, Math.ceil(baseWeeks * (businessScale === 'mvp' ? 0.6 : businessScale === 'growth' ? 0.75 : 0.9)));

  const handleConsultation = () => {
    const names = selectedServices
      .map((id) => AVAILABLE_SERVICES.find((s) => s.id === id)?.name)
      .filter(Boolean)
      .join(', ');
    const summary = `Scope: [${names}] | Scale: ${businessScale.toUpperCase()} Tier | Estimated Target: ~${estimatedWeeks} Weeks`;
    onOpenContact(summary);
  };

  return (
    <section className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-[40px] bg-gradient-to-br from-slate-900 via-[#0a152d] to-slate-950 text-white p-6 sm:p-10 lg:p-14 border border-slate-800 shadow-2xl relative overflow-hidden">
        {/* Glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left: Configuration Controls */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 flex items-center gap-1.5">
                  <Calculator className="w-3.5 h-3.5 text-blue-400" />
                  <span>Interactive Architecture Planner</span>
                </span>
                <span className="text-xs text-slate-400">Instant Scope Blueprint</span>
              </div>

              <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Plan your digital infrastructure in 30 seconds
              </h3>

              <p className="font-sans text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed max-w-xl">
                Select your required software modules and business scale to view the recommended technical architecture and turnaround timeframe.
              </p>
            </div>

            {/* Service selector chips */}
            <div>
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                1. Select Products & Engineering Modules:
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {AVAILABLE_SERVICES.map((service) => {
                  const isSelected = selectedServices.includes(service.id);
                  return (
                    <button
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-3 rounded-2xl border text-left transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'bg-blue-600/30 border-blue-400/80 text-white shadow-xs'
                          : 'bg-slate-800/40 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white'
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="text-xs font-semibold truncate">{service.name}</div>
                        <div className="text-[10px] text-slate-400 mt-0.5">{service.category}</div>
                      </div>
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 border ${
                          isSelected
                            ? 'bg-blue-500 border-blue-400 text-white'
                            : 'border-slate-600 bg-slate-800'
                        }`}
                      >
                        {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Scale Tier Selection */}
            <div>
              <div className="text-xs font-semibold text-slate-300 uppercase tracking-wider mb-3">
                2. Select Deployment Scale Tier:
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                <button
                  onClick={() => setBusinessScale('mvp')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    businessScale === 'mvp'
                      ? 'bg-white text-slate-900 border-white font-bold'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xs">MVP Launch</div>
                  <div className="text-[10px] opacity-75 mt-0.5">Fast-to-market</div>
                </button>

                <button
                  onClick={() => setBusinessScale('growth')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    businessScale === 'growth'
                      ? 'bg-white text-slate-900 border-white font-bold'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xs">Growth Scale</div>
                  <div className="text-[10px] opacity-75 mt-0.5">High availability</div>
                </button>

                <button
                  onClick={() => setBusinessScale('enterprise')}
                  className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                    businessScale === 'enterprise'
                      ? 'bg-white text-slate-900 border-white font-bold'
                      : 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800'
                  }`}
                >
                  <div className="text-xs">Enterprise</div>
                  <div className="text-[10px] opacity-75 mt-0.5">Custom cluster</div>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Live Dynamic Blueprint Output */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-slate-950/90 border border-slate-800 space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
              <span className="font-mono text-slate-400">ARCHITECTURAL OUTPUT</span>
              <span className="text-emerald-400 font-bold font-mono">ESTIMATE READY</span>
            </div>

            {/* Estimated Turnaround Time */}
            <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <Clock className="w-4 h-4 text-orange-400" />
                <span>Target Sprint Turnaround</span>
              </div>
              <div className="font-display text-3xl font-bold text-white mt-1">
                ~{estimatedWeeks} Weeks
              </div>
              <div className="text-[11px] text-slate-400 mt-1">
                Continuous rolling milestones with agile sprint reviews.
              </div>
            </div>

            {/* Architecture Highlights */}
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>Included Stack:</strong> React 19, TypeScript, Motion & Tailwind</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>API Gateways:</strong> Official WhatsApp Cloud & REST microservices</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                <span><strong>Infrastructure:</strong> Dockerized cluster with 99.99% uptime SLA</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span><strong>Contract:</strong> Official Indian Pvt. Ltd. agreement & GST invoices</span>
              </div>
            </div>

            {/* Direct CTA */}
            <div className="pt-2">
              <button
                onClick={handleConsultation}
                className="w-full py-3.5 px-6 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 hover:from-blue-500 hover:to-indigo-500 text-white text-xs sm:text-sm font-semibold transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Request Scoping Call with Devendra Sharma</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="text-[11px] text-slate-400 text-center mt-2">
                Guaranteed response within 24 business hours.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

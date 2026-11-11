import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Car,
  ShieldCheck,
  Zap,
  MapPin,
  Smartphone,
  CreditCard,
  FileCheck2,
  Radio,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Clock,
  Gauge,
  KeyRound,
  Lock,
  Unlock,
  AlertTriangle,
  Send,
  Navigation,
  FileText,
  Activity,
  Fuel,
  Sliders,
} from 'lucide-react';

interface SafarSaaSSectionProps {
  onOpenContact: (productName?: string) => void;
  onOpenSpecs: (productId: string) => void;
  onOpenDocs: () => void;
}

export const SafarSaaSSection: React.FC<SafarSaaSSectionProps> = ({
  onOpenContact,
  onOpenSpecs,
  onOpenDocs,
}) => {
  // Interactive Simulator Tab state
  const [activeConsoleTab, setActiveConsoleTab] = useState<'telematics' | 'kyc' | 'pricing' | 'whatsapp'>('telematics');

  // Interactive telematics state
  const [isEngineLocked, setIsEngineLocked] = useState(false);
  const [vehicleSpeed, setVehicleSpeed] = useState(54);
  const [geofenceAlert, setGeofenceAlert] = useState(false);

  // Interactive pricing calculator state
  const [rentalHours, setRentalHours] = useState(24);
  const [isWeekendSurge, setIsWeekendSurge] = useState(false);
  const [includeFastag, setIncludeFastag] = useState(true);

  // Computed pricing
  const baseRatePerHour = 120;
  const surgeMultiplier = isWeekendSurge ? 1.25 : 1.0;
  const calculatedFare = Math.round(rentalHours * baseRatePerHour * surgeMultiplier);
  const fastagEstimated = includeFastag ? 380 : 0;
  const refundableEscrow = 3000;
  const totalPayable = calculatedFare + fastagEstimated + refundableEscrow;

  return (
    <section id="safar-saas" className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-24">
      {/* Outer Card with ambient glow */}
      <div className="relative rounded-[44px] bg-white border border-slate-200/90 shadow-[0_30px_90px_-25px_rgba(242,101,34,0.1)] overflow-hidden p-6 sm:p-10 lg:p-12">
        {/* Soft background ambient gradient accents */}
        <div className="absolute top-0 right-1/4 w-[480px] h-[480px] bg-gradient-to-br from-orange-400/10 to-amber-300/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-[500px] h-[500px] bg-gradient-to-tr from-purple-600/10 to-indigo-400/5 rounded-full blur-3xl pointer-events-none" />

        {/* Top Header Badge & Logo Row */}
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* Safar Logo Frame */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white p-3 shadow-md border border-slate-200/80 flex items-center justify-center shrink-0 overflow-hidden group">
              <img
                src="/assets/aistudio/image_c6df2547.png"
                alt="Safar Self Drive - Your Journey. Your Rules."
                className="w-full h-full object-contain select-none transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-orange-50 text-[#f26522] border border-orange-200/70 flex items-center gap-1.5 shadow-2xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Flagship SaaS Platform</span>
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-purple-50 text-[#4a1e6d] border border-purple-200/60">
                  White-Label Mobility OS
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono text-slate-500 bg-slate-100">
                  v3.8 Production
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a1b33] tracking-tight">
                Safar Self Drive
              </h2>

              <p className="font-display font-semibold text-lg sm:text-xl text-[#f26522] mt-0.5 tracking-wide">
                Your Journey. Your Rules.
              </p>

              <p className="font-sans text-xs sm:text-sm text-slate-600 max-w-xl mt-2 leading-relaxed">
                The all-in-one cloud operating system engineered by <strong>PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED</strong> for self-drive car rental companies, urban mobility fleets, and peer-to-peer operators.
              </p>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 shrink-0">
            <button
              onClick={() => onOpenContact('Safar Self Drive (SaaS Platform)')}
              className="px-6 py-3.5 rounded-full bg-[#0a152d] hover:bg-[#152a55] text-white text-xs sm:text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Schedule Live SaaS Demo</span>
              <ArrowRight className="w-4 h-4 text-orange-400" />
            </button>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onOpenSpecs('safar-self-drive')}
                className="flex-1 px-4 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold transition-all border border-slate-200/80 shadow-2xs text-center cursor-pointer"
              >
                Specifications
              </button>
              <button
                onClick={onOpenDocs}
                className="flex-1 px-4 py-2.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-800 text-xs font-semibold transition-all border border-slate-200/80 shadow-2xs text-center cursor-pointer"
              >
                Telematics API
              </button>
            </div>
          </div>
        </div>

        {/* Highlight Metrics Bar */}
        <div className="relative z-10 py-6 grid grid-cols-2 lg:grid-cols-4 gap-4 border-b border-slate-100">
          <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 transition-all hover:bg-white hover:shadow-2xs">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
              <Clock className="w-3.5 h-3.5 text-[#f26522]" />
              <span>Customer Onboarding</span>
            </div>
            <div className="font-display text-2xl font-bold text-[#0a1b33] mt-1 tabular-nums">
              &lt; 60 Sec
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Automated Aadhaar / DL KYC</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 transition-all hover:bg-white hover:shadow-2xs">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
              <Radio className="w-3.5 h-3.5 text-purple-600" />
              <span>Fleet Telematics</span>
            </div>
            <div className="font-display text-2xl font-bold text-[#0a1b33] mt-1">
              Live IoT GPS
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">OBD-II & Remote Immobilizer</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 transition-all hover:bg-white hover:shadow-2xs">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
              <Gauge className="w-3.5 h-3.5 text-blue-600" />
              <span>Yield Optimization</span>
            </div>
            <div className="font-display text-2xl font-bold text-[#0a1b33] mt-1 tabular-nums">
              +42% Growth
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">Dynamic Surge & Fastag Sync</div>
          </div>

          <div className="p-4 rounded-2xl bg-slate-50/70 border border-slate-200/60 transition-all hover:bg-white hover:shadow-2xs">
            <div className="flex items-center gap-2 text-slate-500 text-xs font-medium">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Zero-Paperwork Flow</span>
            </div>
            <div className="font-display text-2xl font-bold text-[#0a1b33] mt-1">
              100% Digital
            </div>
            <div className="text-[11px] text-slate-500 mt-0.5">e-Sign Agreement & Deposit Escrow</div>
          </div>
        </div>

        {/* Interactive Live SaaS Product Showcase / Console */}
        <div className="relative z-10 pt-10 pb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 gap-3">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#f26522]">
                Interactive SaaS Experience
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-semibold text-[#0a1b33] mt-0.5">
                Explore the Safar Mobility Console in real-time
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-xl">
                Test the actual core features that power car rental operators: live IoT telematics, instant automated KYC, dynamic pricing, and WhatsApp customer handoffs.
              </p>
            </div>

            {/* Interactive Console Selector Tabs */}
            <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-full border border-slate-200/80 overflow-x-auto max-w-full">
              <button
                onClick={() => setActiveConsoleTab('telematics')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeConsoleTab === 'telematics'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Radio className="w-3.5 h-3.5 text-[#f26522]" />
                <span>IoT Telematics</span>
              </button>
              <button
                onClick={() => setActiveConsoleTab('kyc')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeConsoleTab === 'kyc'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileCheck2 className="w-3.5 h-3.5 text-blue-600" />
                <span>Instant KYC</span>
              </button>
              <button
                onClick={() => setActiveConsoleTab('pricing')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeConsoleTab === 'pricing'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <CreditCard className="w-3.5 h-3.5 text-emerald-600" />
                <span>Dynamic Pricing</span>
              </button>
              <button
                onClick={() => setActiveConsoleTab('whatsapp')}
                className={`px-3.5 py-1.5 text-xs font-semibold rounded-full transition-all cursor-pointer whitespace-nowrap flex items-center gap-1.5 ${
                  activeConsoleTab === 'whatsapp'
                    ? 'bg-white text-slate-900 shadow-xs'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Smartphone className="w-3.5 h-3.5 text-purple-600" />
                <span>WhatsApp Flow</span>
              </button>
            </div>
          </div>

          {/* Interactive Console Screen */}
          <div className="rounded-3xl bg-slate-900 text-white p-5 sm:p-8 border border-slate-800 shadow-2xl relative overflow-hidden">
            {/* Top terminal bar */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-2 text-xs font-mono text-slate-400">
                  safar-cloud-os://fleet-telematics-hub/v3.8
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <span className="text-emerald-400 font-bold">● CLOUD LINK ACTIVE</span>
                <span className="hidden sm:inline">· 24ms latency</span>
              </div>
            </div>

            {/* TAB 1: TELEMATICS */}
            {activeConsoleTab === 'telematics' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-mono text-orange-400">VEHICLE TELEMATICS NODE #04</div>
                      <h4 className="text-xl font-bold font-display text-white mt-0.5">
                        GJ-01-ET-4021 · Kia Seltos 1.5L
                      </h4>
                      <p className="text-xs text-slate-400">
                        Assigned to Customer: Devendra Sharma · Trip ID: #SFR-9921
                      </p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${isEngineLocked ? 'bg-red-500/20 text-red-400 border border-red-500/40' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'}`}>
                      {isEngineLocked ? 'Engine Immobilized' : 'Vehicle In Motion'}
                    </span>
                  </div>

                  {/* Telematics stats grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Gauge className="w-3.5 h-3.5 text-orange-400" />
                        <span>Speed</span>
                      </div>
                      <div className="text-lg font-bold font-mono text-white mt-1 tabular-nums">
                        {isEngineLocked ? 0 : vehicleSpeed} km/h
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <Fuel className="w-3.5 h-3.5 text-blue-400" />
                        <span>Fuel Level</span>
                      </div>
                      <div className="text-lg font-bold font-mono text-white mt-1">78% Full</div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Geofence</span>
                      </div>
                      <div className={`text-xs font-bold font-mono mt-1.5 ${geofenceAlert ? 'text-red-400' : 'text-emerald-400'}`}>
                        {geofenceAlert ? 'BOUNDARY BREACH' : 'Inside Zone (GJ)'}
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-slate-800/80 border border-slate-700/80">
                      <div className="flex items-center gap-1.5 text-xs text-slate-400">
                        <ShieldCheck className="w-3.5 h-3.5 text-purple-400" />
                        <span>OBD-II Health</span>
                      </div>
                      <div className="text-xs font-bold font-mono text-emerald-400 mt-1.5">No DTC Faults</div>
                    </div>
                  </div>

                  {/* Interactive Trigger Controls */}
                  <div className="p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60">
                    <div className="text-xs font-semibold text-slate-300 mb-2.5 flex items-center gap-1.5">
                      <Sliders className="w-3.5 h-3.5 text-orange-400" />
                      <span>Test Real-Time Telematics Actions:</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-2.5">
                      <button
                        onClick={() => setIsEngineLocked(!isEngineLocked)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                          isEngineLocked
                            ? 'bg-emerald-600 hover:bg-emerald-500 text-white'
                            : 'bg-red-600/90 hover:bg-red-500 text-white'
                        }`}
                      >
                        {isEngineLocked ? <Unlock className="w-3.5 h-3.5" /> : <Lock className="w-3.5 h-3.5" />}
                        <span>{isEngineLocked ? 'Authorize & Unlock Engine' : 'Trigger Remote Engine Immobilizer'}</span>
                      </button>

                      <button
                        onClick={() => {
                          setVehicleSpeed(vehicleSpeed > 60 ? 45 : 92);
                        }}
                        className="px-3.5 py-1.5 rounded-xl text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-slate-200 transition-all cursor-pointer flex items-center gap-1.5"
                      >
                        <Activity className="w-3.5 h-3.5 text-orange-400" />
                        <span>Toggle Speed: {vehicleSpeed > 60 ? '92 km/h (High)' : '45 km/h (Normal)'}</span>
                      </button>

                      <button
                        onClick={() => setGeofenceAlert(!geofenceAlert)}
                        className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5 ${
                          geofenceAlert ? 'bg-amber-600 text-white' : 'bg-slate-700 hover:bg-slate-600 text-slate-200'
                        }`}
                      >
                        <AlertTriangle className="w-3.5 h-3.5 text-amber-300" />
                        <span>{geofenceAlert ? 'Reset Geofence' : 'Simulate Zone Exit Alert'}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right simulated map card */}
                <div className="lg:col-span-5 rounded-2xl bg-slate-950 p-4 border border-slate-800 text-xs font-mono space-y-3 relative">
                  <div className="flex items-center justify-between text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1">
                      <Navigation className="w-3.5 h-3.5 text-blue-400" />
                      <span>GPS STREAM: 23.0225° N, 72.5714° E</span>
                    </span>
                    <span className="text-emerald-400">4G IoT Connected</span>
                  </div>

                  {/* Simulated Map Graphic Container */}
                  <div className="h-44 rounded-xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 relative overflow-hidden flex items-center justify-center">
                    {/* Simulated road grid lines */}
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:16px_16px]" />
                    <svg className="absolute inset-0 w-full h-full stroke-slate-800 stroke-[2] fill-none">
                      <path d="M 20 120 Q 120 40 220 90 T 360 50" />
                      <circle cx="220" cy="90" r="45" stroke="#f26522" strokeDasharray="4 4" strokeWidth="1.5" />
                    </svg>

                    {/* Active Vehicle Pin */}
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-9 h-9 rounded-full bg-orange-500 text-white flex items-center justify-center shadow-lg shadow-orange-500/50 animate-pulse">
                        <Car className="w-5 h-5" />
                      </div>
                      <span className="mt-1 px-2 py-0.5 rounded bg-black/80 text-[10px] text-orange-300 border border-orange-500/40">
                        GJ-01-ET-4021
                      </span>
                    </div>

                    {/* Geofence notice */}
                    <div className="absolute bottom-2 left-2 right-2 px-2.5 py-1 rounded bg-black/70 backdrop-blur-xs text-[10px] text-slate-300 flex items-center justify-between">
                      <span>Perimeter: Ahmedabad Metro</span>
                      <span className="text-emerald-400">Lock: {isEngineLocked ? 'OFFLINE' : 'ONLINE'}</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: INSTANT KYC */}
            {activeConsoleTab === 'kyc' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono text-blue-400">AUTOMATED DOCUMENT PIPELINE</div>
                  <h4 className="text-xl font-bold font-display text-white">
                    Paperless Aadhaar & Driving License OCR
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Safar Self Drive eliminates manual rental counters. Customers upload photos of their Government ID; our machine learning OCR extracts names, dates of birth, and checks live Ministry of Road Transport (Parivahan) validity instantly.
                  </p>

                  <div className="space-y-2.5 pt-2">
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Aadhaar Card QR Decryption</span>
                      </div>
                      <span className="font-mono text-emerald-400 font-bold">100% Verified</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Driving License RTO Match</span>
                      </div>
                      <span className="font-mono text-emerald-400 font-bold">Active (Non-Commercial LMV)</span>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-800/80 border border-slate-700 text-xs">
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>Facial Liveness & Selfie Match</span>
                      </div>
                      <span className="font-mono text-emerald-400 font-bold">99.4% Confidence</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[11px]">
                    <span>DOCUMENT PARSING ENGINE</span>
                    <span className="text-emerald-400">0.42 SEC EXECUTION</span>
                  </div>
                  <div className="bg-slate-900 p-3.5 rounded-xl text-slate-300 space-y-1.5 text-[11px] overflow-x-auto">
                    <div><span className="text-slate-500">// KYC Verification Result</span></div>
                    <div><span className="text-blue-400">"status"</span>: <span className="text-emerald-400">"AUTO_APPROVED"</span>,</div>
                    <div><span className="text-blue-400">"name"</span>: <span className="text-amber-300">"Devendra Sharma"</span>,</div>
                    <div><span className="text-blue-400">"dl_category"</span>: <span className="text-amber-300">"LMV_PRIVATE"</span>,</div>
                    <div><span className="text-blue-400">"agreement_signed"</span>: <span className="text-emerald-400">true</span>,</div>
                    <div><span className="text-blue-400">"security_deposit"</span>: <span className="text-purple-300">"ESCROW_LOCKED_INR_3000"</span></div>
                  </div>
                  <div className="text-[11px] text-slate-400">
                    Compliant with Indian IT Act 2000 & Motor Vehicles Act.
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: DYNAMIC PRICING & ESCROW */}
            {activeConsoleTab === 'pricing' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono text-emerald-400">YIELD & REVENUE ENGINE</div>
                  <h4 className="text-xl font-bold font-display text-white">
                    Interactive Dynamic Fare & Escrow Calculator
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Adjust rental hours and demand parameters to see how Safar Self Drive automatically optimizes margins and calculates toll/escrow deductions.
                  </p>

                  <div className="space-y-4 p-4 rounded-2xl bg-slate-800/60 border border-slate-700/80 text-xs">
                    <div>
                      <div className="flex items-center justify-between text-slate-300 mb-1.5">
                        <span>Rental Duration:</span>
                        <span className="font-bold font-mono text-orange-400 text-sm">{rentalHours} Hours</span>
                      </div>
                      <input
                        type="range"
                        min="6"
                        max="72"
                        step="6"
                        value={rentalHours}
                        onChange={(e) => setRentalHours(Number(e.target.value))}
                        className="w-full accent-orange-500 cursor-pointer"
                      />
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-700/60">
                      <div>
                        <div className="font-semibold text-slate-200">Weekend Surge Pricing</div>
                        <div className="text-[10px] text-slate-400">Automated +25% peak rate</div>
                      </div>
                      <button
                        onClick={() => setIsWeekendSurge(!isWeekendSurge)}
                        className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${isWeekendSurge ? 'bg-orange-500' : 'bg-slate-700'}`}
                      >
                        <div className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${isWeekendSurge ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-700/60">
                      <div>
                        <div className="font-semibold text-slate-200">Fastag Automated Toll Reconciliation</div>
                        <div className="text-[10px] text-slate-400">Auto-deducted from balance</div>
                      </div>
                      <button
                        onClick={() => setIncludeFastag(!includeFastag)}
                        className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${includeFastag ? 'bg-blue-500' : 'bg-slate-700'}`}
                      >
                        <div className={`w-4 h-4 rounded-full bg-white transition-transform absolute top-1 ${includeFastag ? 'left-7' : 'left-1'}`} />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between text-slate-400 pb-2 border-b border-slate-800 text-[11px]">
                    <span>ESTIMATED BILL BREAKDOWN</span>
                    <span className="text-emerald-400">GST INVOICE READY</span>
                  </div>

                  <div className="space-y-2 text-slate-300">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Base Rental ({rentalHours}h @ ₹{baseRatePerHour}/h):</span>
                      <span className="text-white">₹{rentalHours * baseRatePerHour}</span>
                    </div>
                    {isWeekendSurge && (
                      <div className="flex justify-between text-orange-400">
                        <span>Weekend Surge (+25%):</span>
                        <span>+₹{calculatedFare - (rentalHours * baseRatePerHour)}</span>
                      </div>
                    )}
                    <div className="flex justify-between">
                      <span className="text-slate-400">Fastag Highway Tolls:</span>
                      <span className="text-white">₹{fastagEstimated}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Refundable Security Escrow:</span>
                      <span className="text-emerald-400 font-bold">₹{refundableEscrow} (Held)</span>
                    </div>
                    <div className="pt-2 border-t border-slate-800 flex justify-between font-bold text-sm">
                      <span className="text-white">Total Customer Charge:</span>
                      <span className="text-orange-400 text-base">₹{totalPayable}</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-[11px] text-slate-400">
                    Security deposit automatically released upon vehicle return & photo damage check.
                  </div>
                </div>
              </div>
            )}

            {/* TAB 4: WHATSAPP INTEGRATION */}
            {activeConsoleTab === 'whatsapp' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                <div className="lg:col-span-6 space-y-4">
                  <div className="text-xs font-mono text-purple-400">OFFICIAL WHATSAPP BUSINESS CLOUD API</div>
                  <h4 className="text-xl font-bold font-display text-white">
                    Automated WhatsApp Customer Experience
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    Powered by Paramount India Technologies' official WhatsApp Cloud API. Customers receive verified green-tick messages with pickup location coordinates, digital unlock PINs, and automated invoice receipts.
                  </p>

                  <div className="space-y-2 pt-2 text-xs text-slate-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Zero app download required for quick renters</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Live trip extension requests via interactive buttons</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Emergency roadside SOS dispatch via location pin</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-6 max-w-sm mx-auto w-full p-4 rounded-3xl bg-[#0b141a] border border-slate-800 shadow-xl space-y-3 font-sans">
                  {/* WhatsApp Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-slate-800">
                    <div className="w-10 h-10 rounded-full bg-white p-1 shrink-0 overflow-hidden">
                      <img src="/assets/aistudio/image_c6df2547.png" alt="Safar" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white flex items-center gap-1">
                        <span>Safar Self Drive</span>
                        <span className="w-3 h-3 rounded-full bg-emerald-500 text-[8px] flex items-center justify-center text-white">✓</span>
                      </div>
                      <div className="text-[10px] text-emerald-400">Official Business Account</div>
                    </div>
                  </div>

                  {/* Chat bubble */}
                  <div className="p-3 rounded-2xl bg-[#005c4b] text-white text-xs space-y-2">
                    <p className="font-semibold">🚗 Booking Confirmed! #SFR-9921</p>
                    <p className="text-[11px] text-slate-200">
                      Hi Devendra, your <strong>Kia Seltos (GJ-01-ET-4021)</strong> is ready at Ahmedabad Hub #01.
                    </p>
                    <div className="p-2 rounded-lg bg-black/20 text-[11px] space-y-1 font-mono">
                      <div>🔑 Digital Unlock PIN: <strong>8492</strong></div>
                      <div>📍 Hub: SG Highway, Ahmedabad</div>
                    </div>
                    <p className="text-[10px] text-emerald-200 text-right">09:14 AM ✓✓</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="relative z-10 pt-8 border-t border-slate-100">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#f26522]">
                End-To-End Fleet Architecture
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#0a1b33] mt-0.5">
                Engineered to launch and scale profitable self-drive operations
              </h3>
            </div>
            <span className="text-xs text-slate-500">
              Multi-city & Franchise Ready
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/70 shadow-2xs hover:shadow-md hover:border-orange-200 hover:bg-white transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-orange-50 text-[#f26522] border border-orange-100 flex items-center justify-center mb-4">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-semibold text-[#0a1b33]">
                  Automated Customer KYC & Fraud Checks
                </h4>
                <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed">
                  Deep verification against Government RTO databases with facial liveness tests and negative-list credit checks to eliminate theft risk.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Under 60s Zero-Paperwork Verification</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/70 shadow-2xs hover:shadow-md hover:border-orange-200 hover:bg-white transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-purple-50 text-[#4a1e6d] border border-purple-100 flex items-center justify-center mb-4">
                  <Radio className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-semibold text-[#0a1b33]">
                  OBD-II & GPS Fleet Telematics
                </h4>
                <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed">
                  Real-time GPS vehicle location, tamper-proof geo-fence perimeters, battery health diagnostics, and instant remote engine cutoff.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Live Location & Crash Alert Sensors</span>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/70 shadow-2xs hover:shadow-md hover:border-orange-200 hover:bg-white transition-all flex flex-col justify-between">
              <div>
                <div className="w-11 h-11 rounded-2xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-4">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h4 className="font-display text-base font-semibold text-[#0a1b33]">
                  Dynamic Pricing & Fastag Escrow
                </h4>
                <p className="font-sans text-xs text-slate-500 mt-2 leading-relaxed">
                  Automated hourly, daily, and weekend surge rates. Toll expenses from Fastag are auto-reconciled against customer escrow balances.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-semibold text-emerald-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Instant Online Escrow Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Banner with Custom Integration Note */}
        <div className="relative z-10 mt-8 p-6 rounded-3xl bg-[#0a152d] text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-orange-500/20 text-orange-400 border border-orange-500/30 flex items-center justify-center shrink-0">
              <Car className="w-6 h-6" />
            </div>
            <div>
              <div className="text-sm font-semibold text-white">
                Ready to deploy Safar Self Drive for your rental fleet?
              </div>
              <div className="text-xs text-slate-300 mt-0.5">
                Includes branded iOS & Android apps, web portal, hardware telematics pairing, and 24/7 dedicated support.
              </div>
            </div>
          </div>

          <button
            onClick={() => onOpenContact('Safar Self Drive (SaaS Platform)')}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#f26522] to-orange-500 hover:from-orange-600 hover:to-orange-500 text-white text-xs font-semibold transition-all shadow-sm cursor-pointer whitespace-nowrap self-start md:self-auto"
          >
            Deploy Safar SaaS
          </button>
        </div>
      </div>
    </section>
  );
};

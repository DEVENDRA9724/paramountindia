import React from 'react';
import { ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

import { ParamountLogo } from './ParamountLogo';

interface HeaderProps {
  onOpenContact: () => void;
  onOpenProducts: () => void;
  onOpenDocs: () => void;
  onNavigateToServices: () => void;
  onNavigateToAbout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenContact,
  onOpenProducts,
  onOpenDocs,
  onNavigateToServices,
  onNavigateToAbout,
}) => {
  return (
    <header className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between gap-4 relative z-30">
      {/* Brand Identity - Clean, single-line, zero awkward wrapping */}
      <div className="flex items-center gap-3 shrink-0">
        <ParamountLogo className="w-10 h-10" />
        <div className="flex flex-col min-w-0">
          <span className="font-display font-semibold text-slate-900 text-base sm:text-[17px] tracking-tight whitespace-nowrap leading-tight">
            Paramount India Technologies
          </span>
          <div className="flex items-center gap-1.5 mt-0.5 text-[11px] text-slate-500 whitespace-nowrap">
            <span className="font-medium text-slate-600">Pvt. Ltd.</span>
            <span className="text-slate-300">·</span>
            <span className="inline-flex items-center gap-1 font-mono text-[10px] text-slate-600 bg-slate-100/90 px-1.5 py-0.5 rounded border border-slate-200/70">
              <ShieldCheck className="w-3 h-3 text-blue-600 shrink-0" />
              <span>CIN: U62011GJ2026PTC183227</span>
            </span>
          </div>
        </div>
      </div>

      {/* Center Nav Links - Single-line pills, no wrapped text */}
      <nav className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-md px-2 py-1 rounded-full border border-slate-200/70 shadow-xs shrink-0">
        <button
          onClick={onNavigateToServices}
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all cursor-pointer whitespace-nowrap"
        >
          Products
        </button>
        <button
          onClick={onOpenProducts}
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all cursor-pointer whitespace-nowrap"
        >
          Specifications
        </button>
        <button
          onClick={onOpenDocs}
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all cursor-pointer whitespace-nowrap"
        >
          Docs & APIs
        </button>
        <button
          onClick={onNavigateToAbout}
          className="px-3.5 py-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-full transition-all cursor-pointer whitespace-nowrap"
        >
          Corporate Legal
        </button>
      </nav>

      {/* Right Actions - Compact & Clean */}
      <div className="flex items-center gap-2 sm:gap-3 shrink-0">
        <a
          href="mailto:devendrasharma9724@gmail.com"
          className="hidden xl:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all whitespace-nowrap"
          title="Direct Email"
        >
          <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
          <span>devendrasharma9724@gmail.com</span>
        </a>

        <button
          onClick={onOpenContact}
          className="px-5 py-2 rounded-full bg-[#0a152d] text-white text-xs font-semibold hover:bg-[#16274e] transition-all shadow-sm flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
        >
          <span>Contact Us</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};

import React from 'react';
import { ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

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
    <header className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 py-5 flex items-center justify-between relative z-30">
      {/* Brand Identity */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-2xl bg-[#0a152d] text-white flex items-center justify-center font-bold text-lg shadow-sm border border-slate-800">
          <span className="font-display">PIT</span>
        </div>
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-display font-semibold text-slate-900 tracking-tight text-base sm:text-lg">
              Paramount India Technologies
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-50 text-blue-700 border border-blue-200/60 font-mono">
              <ShieldCheck className="w-3 h-3 text-blue-600" />
              CIN: U62011GJ2026PTC183227
            </span>
          </div>
          <span className="text-[11px] text-slate-500 -mt-0.5">
            PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED
          </span>
        </div>
      </div>

      {/* Center Nav Links (Desktop) */}
      <nav className="hidden md:flex items-center gap-1 bg-white/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/60 shadow-xs">
        <button
          onClick={onNavigateToServices}
          className="px-3.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          All 8 Products
        </button>
        <button
          onClick={onOpenProducts}
          className="px-3.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          Product Specs
        </button>
        <button
          onClick={onOpenDocs}
          className="px-3.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          APIs & Docs
        </button>
        <button
          onClick={onNavigateToAbout}
          className="px-3.5 py-1 text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
        >
          Corporate Legal
        </button>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-2 sm:gap-3">
        <button
          onClick={onOpenContact}
          className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all cursor-pointer"
        >
          <Mail className="w-3.5 h-3.5 text-blue-600" />
          <span>devendrasharma9724@gmail.com</span>
        </button>

        <button
          onClick={onOpenContact}
          className="px-4 sm:px-5 py-2 rounded-full bg-[#0a152d] text-white text-xs font-semibold hover:bg-[#16274e] transition-all shadow-sm flex items-center gap-1.5 cursor-pointer"
        >
          <span>Contact Us</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </header>
  );
};

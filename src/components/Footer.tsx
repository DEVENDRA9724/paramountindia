import React from 'react';
import { Mail, MapPin, ArrowUp, ShieldCheck } from 'lucide-react';
import { ParamountLogo } from './ParamountLogo';

interface FooterProps {
  onOpenContact: (productName?: string) => void;
  onOpenProducts: () => void;
  onOpenDocs: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenContact,
  onOpenProducts,
  onOpenDocs,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productsList = [
    'Web Development',
    'Application Development',
    'Software Development',
    'Email Automation Tool',
    'WhatsApp API',
    'Digital Marketing',
    'Cloud Infrastructure',
    'IT Support Infrastructure Services',
  ];

  return (
    <footer className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 pt-12 pb-16 mt-12 border-t border-slate-200/60">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">
        {/* Brand & Corporate Identification */}
        <div className="md:col-span-5 space-y-3">
          <div className="flex items-center gap-3">
            <ParamountLogo className="w-9 h-9" />
            <div>
              <span className="font-display font-semibold text-slate-900 tracking-tight text-base block">
                PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED
              </span>
              <span className="text-[11px] font-mono font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 inline-block mt-0.5">
                CIN: U62011GJ2026PTC183227
              </span>
            </div>
          </div>
          <p className="font-sans text-xs text-slate-500 max-w-sm leading-relaxed">
            Registered Private Limited Company under the Ministry of Corporate Affairs, Govt. of India. Delivering enterprise software, modern web & mobile applications, email automation tools, official WhatsApp Cloud APIs, and 24/7 managed IT support infrastructure.
          </p>
          <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-600" />
              Gujarat, India
            </span>
            <span>·</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-blue-600" />
              devendrasharma9724@gmail.com
            </span>
          </div>
        </div>

        {/* Links: 8 Core Products */}
        <div className="md:col-span-4 space-y-2.5">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-800">
            All 8 Core Offerings
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-slate-500 font-medium">
            {productsList.map((prod) => (
              <li key={prod}>
                <button
                  onClick={() => onOpenContact(prod)}
                  className="hover:text-blue-600 transition-colors text-left cursor-pointer"
                >
                  {prod}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources & Support */}
        <div className="md:col-span-3 space-y-3 flex flex-col md:items-end">
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-800 md:text-right">
            Developer & Legal
          </div>
          <ul className="space-y-1.5 text-xs text-slate-500 font-medium md:text-right">
            <li>
              <button
                onClick={onOpenDocs}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                APIs & Documentation
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenContact()}
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                Pvt. Ltd. Certification & CIN
              </button>
            </li>
            <li>
              <button
                onClick={() => onOpenContact()}
                className="hover:text-slate-900 transition-colors cursor-pointer"
              >
                Official MCA Compliance
              </button>
            </li>
          </ul>

          <div className="pt-2 flex items-center gap-2">
            <button
              onClick={() => onOpenContact()}
              className="px-4 py-2 rounded-full bg-[#0a152d] text-white text-xs font-semibold hover:bg-[#1a2f58] transition-colors cursor-pointer text-center"
            >
              Contact Team
            </button>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              title="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-slate-200/50 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
        <div>
          © {new Date().getFullYear()} <strong>PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED</strong> (CIN: U62011GJ2026PTC183227). All rights reserved.
        </div>
        <div className="flex items-center gap-4">
          <button onClick={onOpenDocs} className="hover:text-slate-800 transition-colors cursor-pointer">
            WhatsApp API Docs
          </button>
          <span>·</span>
          <button onClick={onOpenDocs} className="hover:text-slate-800 transition-colors cursor-pointer">
            Email Automation Docs
          </button>
          <span>·</span>
          <button onClick={() => onOpenContact()} className="hover:text-slate-800 transition-colors cursor-pointer">
            Support Helpdesk
          </button>
        </div>
      </div>
    </footer>
  );
};

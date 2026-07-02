import React from 'react';
import logo from '../assets/logo.png';

interface FooterProps {
  onNavigate: (section: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const services = [
    { label: 'Software Development', section: 'services' },
    { label: 'Mobile Application', section: 'services' },
    { label: 'CRM Development', section: 'services' },
    { label: 'AI Bots & Agents', section: 'demo' },
    { label: 'Cloud Infrastructure', section: 'services' },
  ];

  const quickLinks = [
    { label: 'Home', section: 'home' },
    { label: 'Services', section: 'services' },
    { label: 'Solutions', section: 'solutions' },
    { label: 'Plans', section: 'plans' },
    { label: 'About Us', section: 'about' },
    { label: 'Consultation', section: 'contact' },
  ];

  return (
    <footer className="w-full bg-[#04020c] py-16 px-6 md:px-12 border-t border-white/5 relative z-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Column: Brand & Logo */}
        <div className="max-w-sm flex flex-col gap-4">
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => onNavigate('home')}>
            <img src={logo} alt="Paramount Logo" className="h-8 w-auto object-contain" />
            <span className="font-display font-bold tracking-tight text-lg text-white">
              PARAMOUNT
            </span>
          </div>
          <p className="text-xs text-hero-sub/70 leading-relaxed">
            Paramount India Technologies LLP is a registered Limited Liability Partnership. We engineer and implement complex custom software solutions, high-grade mobile architectures, database CRM frameworks, technical SEO campaigns, and custom autonomous AI chat bots.
          </p>
          <div className="flex flex-col gap-1 mt-2">
            <span className="text-[10px] text-foreground/30 font-mono">
              Ahmedabad Office, Gujarat, India
            </span>
            <span className="text-[10px] text-foreground/30 font-mono">
              Support Phone: +91 97247 34308
            </span>
          </div>
        </div>

        {/* Center-Left Column: Service Categories */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white">IT Services</h4>
          <ul className="flex flex-col gap-2.5">
            {services.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onNavigate(item.section)}
                  className="text-xs text-hero-sub/75 hover:text-white transition-colors text-left cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Center-Right Column: Company Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Quick Links</h4>
          <ul className="flex flex-col gap-2.5">
            {quickLinks.map((item, idx) => (
              <li key={idx}>
                <button
                  onClick={() => onNavigate(item.section)}
                  className="text-xs text-hero-sub/75 hover:text-white transition-colors text-left cursor-pointer"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Right Column: Founder details */}
        <div className="flex flex-col gap-4 max-w-xs">
          <h4 className="text-xs font-semibold uppercase tracking-wider text-white">Executive Desk</h4>
          <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex flex-col gap-2">
            <span className="text-xs font-bold text-white block">Devendra Sharma</span>
            <span className="text-[10px] text-[#a855f7] font-semibold uppercase tracking-wider block">Founder & Owner</span>
            <p className="text-[11px] text-hero-sub/70 leading-relaxed mt-1">
              For enterprise partnerships, cloud operations, or custom chatbot licensing in Ahmedabad, reach out directly at +91 97247 34308.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-4">
        <span className="text-xs text-foreground/45">
          &copy; {currentYear} Paramount India Technologies LLP. All rights reserved.
        </span>
        <span className="text-xs text-foreground/45 flex gap-4">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
};

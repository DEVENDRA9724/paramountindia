import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { Brand } from './Brand';

interface NavbarProps {
  onNavigate: (section: string) => void;
  onOpenLearningModal: (tab: string) => void;
  activePage?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenLearningModal, activePage = 'home' }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: 'Home', hasDropdown: false },
    { label: 'Features', hasDropdown: true },
    { label: 'Solutions', hasDropdown: false },
    { label: 'Plans', hasDropdown: false },
    { label: 'Learning', hasDropdown: true },
  ];

  const handleNavClick = (label: string) => {
    onNavigate(label.toLowerCase());
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  };

  const handleLearningClick = (tab: string) => {
    onOpenLearningModal(tab);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full relative z-50">
      <nav className="w-full px-6 md:px-10 py-4 flex items-center justify-between border-b"
        style={{ borderColor: 'rgba(49,94,251,0.10)', background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(20px)', boxShadow: '0 10px 28px rgba(46,67,126,0.08)' }}>

        {/* Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => handleNavClick('home')}>
          <Brand />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <button
                  onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                  className={`nav-link flex items-center gap-1 px-3.5 py-2 rounded-lg ${item.label === 'Features' && ['services', 'seo'].includes(activePage) ? 'nav-link--active' : ''}`}
                >
                  {item.label}
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 opacity-50 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <button
                  onClick={() => handleNavClick(item.label)}
                  className={`nav-link px-3.5 py-2 rounded-lg ${activePage === item.label.toLowerCase() ? 'nav-link--active' : ''}`}
                >
                  {item.label}
                </button>
              )}

              {/* Dropdown */}
              {item.hasDropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-0 mt-2 w-52 p-1.5 rounded-xl border shadow-xl z-50"
                  style={{ background: '#ffffff', borderColor: 'rgba(37,99,235,0.08)', boxShadow: '0 16px 40px rgba(0,0,0,0.5)' }}>
                  {item.label === 'Features' && (
                    <div className="flex flex-col">
                      {[
                        { label: 'Enterprise Software', target: 'services' },
                        { label: 'Custom AI Chatbots', target: 'demo' },
                        { label: 'Cloud Infrastructure', target: 'services' },
                        { label: 'CRM Integration', target: 'services' },
                        { label: 'SEO & Organic Growth', target: 'seo' },
                      ].map(i => (
                        <button key={i.label} onClick={() => { handleNavClick(i.target); }}
                          className="text-left px-3 py-2.5 text-sm rounded-lg transition-colors hover:bg-white/5"
                          style={{ color: 'rgba(23,33,61,0.7)', fontFamily: 'var(--font-sans)' }}>
                          {i.label}
                        </button>
                      ))}
                    </div>
                  )}
                  {item.label === 'Learning' && (
                    <div className="flex flex-col">
                      {[
                        { label: 'Documentation', tab: 'docs' },
                        { label: 'Case Studies', tab: 'cases' },
                        { label: 'API Reference', tab: 'api' },
                      ].map(i => (
                        <button key={i.label} onClick={() => handleLearningClick(i.tab)}
                          className="text-left px-3 py-2.5 text-sm rounded-lg transition-colors hover:bg-white/5"
                          style={{ color: 'rgba(23,33,61,0.7)', fontFamily: 'var(--font-sans)' }}>
                          {i.label}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button onClick={() => handleNavClick('contact')} className="btn-primary" style={{ padding: '8px 18px', fontSize: 13 }}>
            Schedule Consult
          </button>
        </div>

        {/* Mobile toggle */}
        <button aria-label="Toggle navigation menu" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-1.5 rounded-lg hover:bg-white/5 transition-colors">
          {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 p-6 border-b z-50 flex flex-col gap-2"
          style={{ background: '#eef3ff', borderColor: 'rgba(37,99,235,0.06)' }}>
          {navItems.map(item => (
            <button key={item.label} onClick={() => handleNavClick(item.label)}
              className="text-left py-2.5 px-3 rounded-lg hover:bg-white/5 transition-colors text-sm font-medium"
              style={{ color: 'rgba(23,33,61,0.75)', fontFamily: 'var(--font-sans)' }}>
              {item.label}
            </button>
          ))}
          <div className="mt-3 pt-3" style={{ borderTop: '1px solid rgba(37,99,235,0.06)' }}>
            <button onClick={() => handleNavClick('contact')} className="btn-primary w-full justify-center">
              Schedule Consult
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

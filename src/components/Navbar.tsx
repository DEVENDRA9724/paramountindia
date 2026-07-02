import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

interface NavbarProps {
  onNavigate: (section: string) => void;
  onOpenLearningModal: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenLearningModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navItems = [
    { label: 'Features', hasDropdown: true },
    { label: 'Solutions', hasDropdown: false },
    { label: 'Plans', hasDropdown: false },
    { label: 'Learning', hasDropdown: true },
  ];

  const handleNavClick = (label: string) => {
    onNavigate(label.toLowerCase());
    setMobileMenuOpen(false);
  };

  const toggleDropdown = (label: string) => {
    if (activeDropdown === label) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(label);
    }
  };

  const handleLearningClick = (tab: string) => {
    onOpenLearningModal(tab);
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <div className="w-full relative z-50">
      <nav className="w-full py-5 px-8 flex flex-row items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick('home')}>
          <img src={logo} alt="Paramount Logo" className="h-8 w-auto object-contain" />
          <span className="font-display font-bold tracking-tight text-lg text-foreground bg-gradient-to-r from-white via-white/80 to-white/60 bg-clip-text text-transparent">
            PARAMOUNT
          </span>
        </div>

        {/* Center: Nav Items (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.label} className="relative">
              {item.hasDropdown ? (
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className="flex items-center gap-1.5 text-foreground/90 hover:text-white transition-colors duration-200 text-sm font-medium py-2 focus:outline-none"
                >
                  {item.label}
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                </button>
              ) : (
                <button
                  onClick={() => handleNavClick(item.label)}
                  className="text-foreground/90 hover:text-white transition-colors duration-200 text-sm font-medium py-2"
                >
                  {item.label}
                </button>
              )}

              {/* Glassmorphic Dropdowns */}
              {item.hasDropdown && activeDropdown === item.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 p-2 rounded-xl liquid-glass border border-white/10 shadow-2xl backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
                  {item.label === 'Features' && (
                    <div className="flex flex-col gap-1">
                      <button onClick={() => { handleNavClick('services'); setActiveDropdown(null); }} className="w-full text-left px-3 py-2 text-xs text-foreground/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        Enterprise Software
                      </button>
                      <button onClick={() => { handleNavClick('demo'); setActiveDropdown(null); }} className="w-full text-left px-3 py-2 text-xs text-foreground/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        Custom AI Chatbots
                      </button>
                      <button onClick={() => { handleNavClick('services'); setActiveDropdown(null); }} className="w-full text-left px-3 py-2 text-xs text-foreground/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        Cloud & Infra Setup
                      </button>
                    </div>
                  )}
                  {item.label === 'Learning' && (
                    <div className="flex flex-col gap-1">
                      <button onClick={() => handleLearningClick('docs')} className="w-full text-left px-3 py-2 text-xs text-foreground/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        Documentation
                      </button>
                      <button onClick={() => handleLearningClick('cases')} className="w-full text-left px-3 py-2 text-xs text-foreground/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        Case Studies
                      </button>
                      <button onClick={() => handleLearningClick('api')} className="w-full text-left px-3 py-2 text-xs text-foreground/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                        API Reference
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right: Actions */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => handleNavClick('contact')}
            className="btn-hero-secondary rounded-full px-4 py-2 text-sm"
          >
            Sign Up
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-foreground/90 hover:text-white transition-colors"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* 1px divider with gradient below navbar */}
      <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-foreground/20 to-transparent mt-[3px]" />

      {/* Mobile Drawer (Glassmorphic) */}
      {mobileMenuOpen && (
        <div className="absolute top-[calc(100%+4px)] left-0 w-full p-6 liquid-glass border-b border-white/10 shadow-2xl backdrop-blur-lg flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-5 duration-300 z-50">
          {navItems.map((item) => (
            <div key={item.label} className="w-full">
              <button
                onClick={() => {
                  if (item.hasDropdown) {
                    toggleDropdown(item.label);
                  } else {
                    handleNavClick(item.label);
                  }
                }}
                className="w-full flex items-center justify-between py-2 text-foreground/90 hover:text-white text-base font-medium"
              >
                {item.label}
                {item.hasDropdown && <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${activeDropdown === item.label ? 'rotate-180' : ''}`} />}
              </button>
              
              {item.hasDropdown && activeDropdown === item.label && (
                <div className="pl-4 mt-2 flex flex-col gap-2 border-l border-white/10">
                  {item.label === 'Features' ? (
                    <>
                      <button onClick={() => { handleNavClick('services'); }} className="text-left py-1 text-sm text-foreground/75 hover:text-white">Enterprise Software</button>
                      <button onClick={() => { handleNavClick('demo'); }} className="text-left py-1 text-sm text-foreground/75 hover:text-white">Custom AI Chatbots</button>
                      <button onClick={() => { handleNavClick('services'); }} className="text-left py-1 text-sm text-foreground/75 hover:text-white">Cloud & Infra Setup</button>
                    </>
                  ) : (
                    <>
                      <button onClick={() => handleLearningClick('docs')} className="text-left py-1 text-sm text-foreground/75 hover:text-white">Documentation</button>
                      <button onClick={() => handleLearningClick('cases')} className="text-left py-1 text-sm text-foreground/75 hover:text-white">Case Studies</button>
                      <button onClick={() => handleLearningClick('api')} className="text-left py-1 text-sm text-foreground/75 hover:text-white">API Reference</button>
                    </>
                  )}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => {
              handleNavClick('contact');
            }}
            className="btn-hero-secondary rounded-full px-4 py-2 mt-4 text-sm w-full"
          >
            Sign Up
          </button>
        </div>
      )}
    </div>
  );
};

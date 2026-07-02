import React from 'react';
import { Navbar } from './Navbar';
import { Marquee } from './Marquee';

interface HeroProps {
  onNavigate: (section: string) => void;
  onOpenLearningModal: (tab: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate, onOpenLearningModal }) => {
  return (
    <section id="home" className="relative w-full min-h-screen flex flex-col overflow-visible bg-transparent">
      
      {/* Hero Content Wrapper */}
      <div className="relative z-10 flex-1 flex flex-col justify-between overflow-visible min-h-screen">
        {/* Navbar at top */}
        <Navbar onNavigate={onNavigate} onOpenLearningModal={onOpenLearningModal} />

        {/* Content Centered via flex-1 */}
        <div className="flex-1 flex flex-col items-center justify-center text-center px-6 py-20 overflow-visible">
          {/* Headline */}
          <h1 className="font-display font-normal text-[80px] sm:text-[120px] md:text-[180px] lg:text-[220px] leading-[1.02] tracking-[-0.024em] text-foreground animate-in fade-in slide-in-from-top-4 duration-1000">
            Power <span className="glow-text-ai">AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-hero-sub text-base sm:text-lg leading-relaxed sm:leading-8 max-w-md mt-[9px] opacity-80 font-medium">
            The most powerful AI ever deployed <br className="hidden sm:inline" /> in talent acquisition
          </p>

          {/* CTA Button */}
          <button
            onClick={() => onNavigate('contact')}
            className="btn-hero-secondary rounded-2xl px-[29px] py-[24px] mt-[25px] text-base font-semibold tracking-wide"
          >
            Schedule a Consult
          </button>
        </div>

        {/* Logo Marquee pinned to bottom */}
        <Marquee />
      </div>
    </section>
  );
};

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
          <h1 className="font-display font-normal text-[70px] sm:text-[110px] md:text-[160px] lg:text-[200px] leading-[1.02] tracking-[-0.024em] text-foreground animate-in fade-in slide-in-from-top-4 duration-1000">
            Power <span className="glow-text-ai">IT & AI</span>
          </h1>

          {/* Subtitle */}
          <p className="text-hero-sub text-base sm:text-lg leading-relaxed sm:leading-8 max-w-xl mt-[9px] opacity-80 font-medium">
            Enterprise software development, cloud setups, and custom AI chatbots <br className="hidden sm:inline" /> engineered to scale your operations.
          </p>

          {/* CTA Button */}
          <button
            onClick={() => onNavigate('contact')}
            className="btn-hero-secondary rounded-2xl px-[29px] py-[24px] mt-[25px] text-base font-semibold tracking-wide hover:scale-[1.02] active:scale-[0.98] transition-transform duration-200"
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

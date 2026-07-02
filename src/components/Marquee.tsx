import React from 'react';

interface LogoItem {
  name: string;
  letter: string;
  color: string;
}

export const Marquee: React.FC = () => {
  const logos: LogoItem[] = [
    { name: 'Vortex', letter: 'V', color: 'from-[#3b82f6] to-[#1d4ed8]' },
    { name: 'Nimbus', letter: 'N', color: 'from-[#10b981] to-[#047857]' },
    { name: 'Prysma', letter: 'P', color: 'from-[#f59e0b] to-[#b45309]' },
    { name: 'Cirrus', letter: 'C', color: 'from-[#ec4899] to-[#be185d]' },
    { name: 'Kynder', letter: 'K', color: 'from-[#8b5cf6] to-[#6d28d9]' },
    { name: 'Halcyn', letter: 'H', color: 'from-[#06b6d4] to-[#0891b2]' },
  ];

  // Duplicate the list of logos to create a seamless infinite loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="w-full max-w-5xl mx-auto px-6 pb-10 flex flex-col md:flex-row items-center gap-12 overflow-hidden select-none">
      {/* Left side: Static Text */}
      <div className="flex-shrink-0 text-foreground/50 text-sm font-medium tracking-wide text-center md:text-left leading-relaxed max-w-[200px]">
        Relied on by brands <br />
        across the globe
      </div>

      {/* Right side: Infinite Scrolling Marquee */}
      <div className="w-full overflow-hidden relative mask-fade">
        {/* Mask gradient for smooth fading at the edges */}
        <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <div className="flex w-max gap-16 animate-marquee">
          {duplicatedLogos.map((logo, index) => (
            <div key={`${logo.name}-${index}`} className="flex items-center gap-3 flex-shrink-0">
              <div className="liquid-glass w-6 h-6 rounded-lg flex items-center justify-center text-[10px] font-bold text-white relative">
                <span className="relative z-10">{logo.letter}</span>
                {/* Subtle colorful backing glow inside the glass icon */}
                <div className={`absolute inset-0 bg-gradient-to-br ${logo.color} opacity-20`} />
              </div>
              <span className="text-base font-semibold text-foreground tracking-tight">
                {logo.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

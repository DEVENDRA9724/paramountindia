import React from 'react';
import { Layers, ShieldCheck, Cpu } from 'lucide-react';

interface Logo {
  name: string;
  src: string;
  alt: string;
  category: string;
  gradient: {
    from: string;
    to: string;
    css: string;
  };
}

// 8 Logos requested in original spec with explicit integration context
export const INTEGRATED_TOOLS: Logo[] = [
  {
    name: 'Procure',
    src: 'https://svgl.app/library/procure.svg',
    alt: 'Procure',
    category: 'Supply Chain & Procurement',
    gradient: {
      from: '#1d4ed8',
      to: '#3b82f6',
      css: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
    },
  },
  {
    name: 'Shopify',
    src: 'https://svgl.app/library/shopify.svg',
    alt: 'Shopify',
    category: 'E-Commerce Integrations',
    gradient: {
      from: '#ca8a04',
      to: '#facc15',
      css: 'linear-gradient(135deg, #ca8a04 0%, #facc15 100%)',
    },
  },
  {
    name: 'Blender',
    src: 'https://svgl.app/library/blender.svg',
    alt: 'Blender',
    category: '3D & Graphics Rendering',
    gradient: {
      from: '#0284c7',
      to: '#38bdf8',
      css: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)',
    },
  },
  {
    name: 'Figma',
    src: 'https://svgl.app/library/figma.svg',
    alt: 'Figma',
    category: 'Design Systems & UI',
    gradient: {
      from: '#7c3aed',
      to: '#c084fc',
      css: 'linear-gradient(135deg, #7c3aed 0%, #c084fc 100%)',
    },
  },
  {
    name: 'Spotify',
    src: 'https://svgl.app/library/spotify.svg',
    alt: 'Spotify',
    category: 'Audio Streaming & APIs',
    gradient: {
      from: '#e11d48',
      to: '#fb7185',
      css: 'linear-gradient(135deg, #e11d48 0%, #fb7185 100%)',
    },
  },
  {
    name: 'Lottielab',
    src: 'https://svgl.app/library/lottielab.svg',
    alt: 'Lottielab',
    category: 'Interactive Lottie Motion',
    gradient: {
      from: '#ca8a04',
      to: '#22c55e',
      css: 'linear-gradient(135deg, #ca8a04 0%, #22c55e 100%)',
    },
  },
  {
    name: 'Google Cloud',
    src: 'https://svgl.app/library/google-cloud.svg',
    alt: 'Google Cloud',
    category: 'Cloud Infrastructure & AI',
    gradient: {
      from: '#0284c7',
      to: '#60a5fa',
      css: 'linear-gradient(135deg, #0284c7 0%, #60a5fa 100%)',
    },
  },
  {
    name: 'Bing',
    src: 'https://svgl.app/library/bing.svg',
    alt: 'Bing',
    category: 'Search & Web Analytics',
    gradient: {
      from: '#0f766e',
      to: '#2dd4bf',
      css: 'linear-gradient(135deg, #0f766e 0%, #2dd4bf 100%)',
    },
  },
];

const LogoCard: React.FC<{ logo: Logo; index: number }> = ({ logo, index }) => {
  return (
    <div
      key={`${logo.name}-${index}`}
      className="group relative h-24 w-40 shrink-0 flex items-center justify-center rounded-full bg-white border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all overflow-hidden cursor-default"
      title={`We integrate ${logo.name} (${logo.category})`}
    >
      {/* Dynamic Hover Gradient Layer */}
      <div
        className="absolute inset-0 opacity-0 scale-150 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 rounded-full pointer-events-none"
        style={{ background: logo.gradient.css }}
      />

      {/* Logo Graphic */}
      <img
        src={logo.src}
        alt={logo.alt}
        className="h-8 max-h-8 w-auto max-w-[80px] object-contain relative z-10 transition-all duration-300 group-hover:brightness-0 group-hover:invert select-none"
      />
    </div>
  );
};

export const MarqueeScroller: React.FC = () => {
  return (
    <section className="mt-10 w-full select-none">
      {/* Clear Context Heading: We Integrate The Tools */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 mb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-700">
            Tools & Platforms We Integrate
          </span>
          <span className="text-slate-300">·</span>
          <span className="text-xs text-slate-500">
            We integrate these industry-leading tools and cloud APIs into your solutions
          </span>
        </div>
        <div className="text-[11px] text-slate-500 font-mono">
          Ecosystem Compatibility & API Gateways
        </div>
      </div>

      {/* Marquee Rail with Masking */}
      <div className="w-full overflow-hidden marquee-mask py-2">
        <div className="animate-marquee flex items-center gap-6">
          {/* First instance */}
          {INTEGRATED_TOOLS.map((logo, index) => (
            <LogoCard key={`first-${logo.name}-${index}`} logo={logo} index={index} />
          ))}

          {/* Second instance to ensure seamless loop */}
          {INTEGRATED_TOOLS.map((logo, index) => (
            <LogoCard key={`second-${logo.name}-${index}`} logo={logo} index={index} />
          ))}
        </div>
      </div>

      {/* Explanatory context note */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 mt-3 flex items-center justify-between text-[11px] text-slate-500">
        <p>
          <strong>PARAMOUNT INDIA TECHNOLOGIES PRIVATE LIMITED</strong> builds seamless integrations, automated webhooks, and REST/Cloud data pipelines connecting your applications with these leading ecosystems.
        </p>
        <span className="hidden md:inline text-slate-500">
          *Trademarks belong to their respective owners. Displayed for tool integration reference.
        </span>
      </div>
    </section>
  );
};

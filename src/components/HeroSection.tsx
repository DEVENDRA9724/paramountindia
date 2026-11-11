import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onOpenContact: () => void;
  onOpenProducts: () => void;
  onOpenDocs: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenContact,
  onOpenProducts,
  onOpenDocs,
}) => {
  return (
    <div className="relative w-full max-w-[1400px] mx-auto rounded-[48px] bg-white border border-slate-200/50 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)] overflow-hidden h-[600px] flex flex-col">
      {/* Video Background Layer */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden select-none">
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover scale-105 transition-transform duration-1000"
        />
      </div>

      {/* Hero Text Content Wrapper */}
      <div className="relative z-20 flex-1 px-8 md:px-16 pt-12 md:pt-16 flex flex-col items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-start"
        >
          {/* Headline */}
          <h1
            className="font-display text-[42px] md:text-[56px] font-medium tracking-tight text-[#0a1b33] leading-[1.1] max-w-2xl"
            dangerouslySetInnerHTML={{
              __html: 'Foundation of the<br />new digital epoch',
            }}
          />

          {/* Subheadline */}
          <p className="font-sans text-[14px] md:text-[15px] text-[#64748b] max-w-xl mt-4 leading-relaxed">
            Designing products, powering ecosystems and laying the foundation of a
            decentralized web for enterprises, builders and communities alike.
          </p>

          {/* Contact Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpenContact}
            className="mt-6 px-7 py-3 bg-[#0a152d] text-white rounded-full font-medium text-[14px] tracking-wide shadow-md hover:shadow-lg transition-shadow cursor-pointer"
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>

      {/* Floating Bottom Navbar */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30">
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center bg-white/90 backdrop-blur-2xl px-1.5 py-1.5 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] border border-slate-200/40"
        >
          {/* Star Logo Placeholder */}
          <div className="w-9 h-9 bg-white border border-slate-100 shadow-sm rounded-full flex items-center justify-center text-[#0a1b33] text-sm select-none mr-1">
            ✦
          </div>

          {/* Standard Text Buttons */}
          <button
            onClick={onOpenProducts}
            className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3.5 py-1.5 transition-colors cursor-pointer"
          >
            Products
          </button>
          <button
            onClick={onOpenDocs}
            className="text-[12px] font-semibold text-slate-500 hover:text-[#0a1b33] px-3.5 py-1.5 transition-colors cursor-pointer mr-1"
          >
            Docs
          </button>

          {/* Get in touch Button */}
          <button
            onClick={onOpenContact}
            className="bg-white px-5 py-2 rounded-full text-[12px] font-semibold text-[#0a1b33] border border-slate-200/60 shadow-sm hover:border-slate-300 transition-all flex items-center gap-1 cursor-pointer"
          >
            <span>Get in touch</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#0a1b33]" />
          </button>
        </motion.nav>
      </div>
    </div>
  );
};

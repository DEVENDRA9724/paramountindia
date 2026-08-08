import React from 'react';

interface BrandProps {
  compact?: boolean;
  className?: string;
}

export const Brand: React.FC<BrandProps> = ({ compact = false, className = '' }) => (
  <div className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''} ${className}`} aria-label="Paramount India Technologies">
    <div className="brand-mark" aria-hidden="true">
      <svg width={compact ? "32" : "38"} height={compact ? "34" : "40"} viewBox="0 0 40 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="brand-mark-svg">
        <defs>
          <clipPath id="pentagonClip">
            <path d="M 20 2 L 38 11 L 32 40 L 8 40 L 2 11 Z" />
          </clipPath>
          <linearGradient id="pentagonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f46e5" />
            <stop offset="100%" stopColor="#5850ec" />
          </linearGradient>
        </defs>

        {/* Base Pentagon */}
        <path d="M 20 2 L 38 11 L 32 40 L 8 40 L 2 11 Z" fill="url(#pentagonGrad)" />

        {/* Diagonal Coral-Red Stripe */}
        <rect x="-8" y="20" width="52" height="5.5" fill="#f43f5e" transform="rotate(-40 20 21)" clipPath="url(#pentagonClip)" />

        {/* Yellow Top-Right Accent Square */}
        <rect x="28.5" y="8" width="5" height="5" fill="#fbbf24" clipPath="url(#pentagonClip)" />

        {/* White Letter P */}
        <text x="10.5" y="29.5" fill="#ffffff" fontFamily="'Space Grotesk', 'Inter', system-ui, sans-serif" fontWeight="800" fontSize="23">P</text>
      </svg>
    </div>

    <span className="brand-wordmark">
      <span className="brand-wordmark__name">PARAMOUNT</span>
      <span className="brand-wordmark__sub">INDIA TECHNOLOGIES</span>
    </span>
  </div>
);



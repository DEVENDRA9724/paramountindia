import React, { useState } from 'react';

interface ParamountLogoProps {
  className?: string;
  size?: number;
}

export const ParamountLogo: React.FC<ParamountLogoProps> = ({
  className = 'w-10 h-10',
}) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div
      className={`relative shrink-0 flex items-center justify-center rounded-full overflow-hidden shadow-xs border border-slate-200/60 bg-white ${className}`}
    >
      {!imageError ? (
        <img
          src="/paramount-logo.png"
          alt="Paramount India Technologies Logo"
          onError={() => setImageError(true)}
          className="w-full h-full object-contain p-0.5"
        />
      ) : (
        /* High-Definition SVG Recreation */
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <defs>
            <linearGradient id="pitShield" x1="20" y1="15" x2="80" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#5d52fa" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
            <linearGradient id="pitSwoop" x1="20" y1="75" x2="80" y2="25" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#ef4444" />
              <stop offset="70%" stopColor="#f43f5e" />
              <stop offset="100%" stopColor="#f59e0b" />
            </linearGradient>
          </defs>

          {/* White disc */}
          <circle cx="50" cy="50" r="48" fill="#ffffff" />

          {/* Shield */}
          <path
            d="M 50 14 L 84 28 L 78 86 L 22 86 L 16 28 Z"
            fill="url(#pitShield)"
          />

          {/* Diagonal Red Ribbon */}
          <polygon
            points="22,76 34,79 79,32 68,29"
            fill="url(#pitSwoop)"
          />

          {/* Yellow Summit Dot */}
          <circle cx="75" cy="30" r="4" fill="#fbbf24" />

          {/* Letter P */}
          <path
            d="M 36 34 L 56 34 C 64 34 68 38 68 45 C 68 52 64 56 56 56 L 46 56 L 46 72 L 36 72 Z M 46 42 L 46 48 L 55 48 C 58 48 60 47 60 45 C 60 43 58 42 55 42 Z"
            fill="#ffffff"
          />
        </svg>
      )}
    </div>
  );
};

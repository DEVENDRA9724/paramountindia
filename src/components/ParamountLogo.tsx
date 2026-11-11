import React from 'react';

interface ParamountLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const ParamountLogo: React.FC<ParamountLogoProps> = ({
  className = 'w-10 h-10',
}) => {
  return (
    <div
      className={`relative shrink-0 flex items-center justify-center rounded-xl bg-[#0a152d] text-white font-bold tracking-tight shadow-xs border border-slate-800 select-none ${className}`}
      title="Paramount India Technologies"
    >
      <span className="font-display font-bold text-sm tracking-tight text-white">
        PIT
      </span>
    </div>
  );
};

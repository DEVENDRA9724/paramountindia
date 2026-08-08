import React from 'react';

interface BrandProps {
  compact?: boolean;
}

export const Brand: React.FC<BrandProps> = ({ compact = false }) => (
  <div className={`brand-lockup ${compact ? 'brand-lockup--compact' : ''}`} aria-label="Paramount India Technologies">
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark__letter">P</span>
      <span className="brand-mark__edge" />
    </span>
    <span className="brand-wordmark">
      <span className="brand-wordmark__name">PARAMOUNT</span>
      <span className="brand-wordmark__sub">India Technologies</span>
    </span>
  </div>
);

import React from 'react';
import { GLOBAL_FOOTER_TEXT } from '../config/photos';

export const PageFooter: React.FC = () => {
  return (
    <footer className="relative z-30 w-full py-4 px-4 text-center select-none">
      <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-400/90 font-light tracking-wide">
        <span className="text-amber-400/70 font-cinzel text-[11px]">✦</span>
        <span className="hover:text-pink-300 transition-colors drop-shadow-[0_0_8px_rgba(244,114,182,0.4)]">
          {GLOBAL_FOOTER_TEXT}
        </span>
        <span className="text-amber-400/70 font-cinzel text-[11px]">✦</span>
      </div>
    </footer>
  );
};

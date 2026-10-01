import React from 'react';

export const GlowingMoon: React.FC = () => {
  return (
    <div
      className="fixed top-5 right-6 md:right-20 w-32 h-32 md:w-44 md:h-44 pointer-events-none z-0 opacity-85 transition-all duration-1000"
      aria-hidden="true"
    >
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Ambient Gold Halo */}
        <div
          className="absolute inset-0 rounded-full bg-amber-400/15 blur-3xl animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        {/* Crescent Moon SVG */}
        <svg
          className="w-full h-full drop-shadow-[0_0_25px_rgba(246,211,101,0.65)]"
          viewBox="0 0 100 100"
          fill="none"
        >
          <defs>
            <linearGradient id="moonGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fff8db" />
              <stop offset="60%" stopColor="#f5d061" />
              <stop offset="100%" stopColor="#c98a2c" />
            </linearGradient>
          </defs>
          <path d="M50 5 A45 45 0 1 0 95 50 A35 35 0 1 1 50 5 Z" fill="url(#moonGrad)" />
        </svg>
        {/* Tiny star near moon */}
        <div className="absolute top-4 left-6 w-2 h-2 bg-white rounded-full animate-ping opacity-75" />
        <div className="absolute bottom-8 right-5 w-1.5 h-1.5 bg-amber-200 rounded-full animate-pulse" />
      </div>
    </div>
  );
};

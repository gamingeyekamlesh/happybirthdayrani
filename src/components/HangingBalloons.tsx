import React from 'react';

export const HangingBalloons: React.FC = () => {
  return (
    <div
      className="fixed top-0 left-0 right-0 h-44 pointer-events-none z-10 flex justify-around px-4 opacity-75 overflow-hidden"
      aria-hidden="true"
    >
      {/* Balloon 1 (Gold) */}
      <div className="sway-balloon flex flex-col items-center" style={{ animationDelay: '0s', animationDuration: '5.2s' }}>
        <div className="w-13 h-17 md:w-16 md:h-20 balloon-gold realistic-balloon shadow-lg" />
        <div className="w-[1.5px] h-24 bg-gradient-to-b from-amber-400/60 to-transparent" />
      </div>

      {/* Balloon 2 (Black with gold shine) */}
      <div className="sway-balloon flex flex-col items-center -mt-3" style={{ animationDelay: '1.2s', animationDuration: '6s' }}>
        <div className="w-15 h-19 md:w-18 md:h-23 balloon-black realistic-balloon shadow-xl" />
        <div className="w-[1.5px] h-32 bg-gradient-to-b from-amber-500/40 to-transparent" />
      </div>

      {/* Balloon 3 (Gold) */}
      <div className="sway-balloon hidden sm:flex flex-col items-center mt-2" style={{ animationDelay: '2.5s', animationDuration: '4.8s' }}>
        <div className="w-12 h-16 md:w-14 md:h-18 balloon-gold realistic-balloon shadow-md" />
        <div className="w-[1.5px] h-20 bg-gradient-to-b from-amber-400/50 to-transparent" />
      </div>

      {/* Balloon 4 (Black) */}
      <div className="sway-balloon flex flex-col items-center -mt-2" style={{ animationDelay: '0.8s', animationDuration: '5.5s' }}>
        <div className="w-14 h-18 md:w-16 md:h-20 balloon-black realistic-balloon shadow-xl" />
        <div className="w-[1.5px] h-28 bg-gradient-to-b from-amber-500/40 to-transparent" />
      </div>

      {/* Balloon 5 (Gold) */}
      <div className="sway-balloon flex flex-col items-center mt-1" style={{ animationDelay: '1.8s', animationDuration: '5.2s' }}>
        <div className="w-15 h-19 md:w-17 md:h-21 balloon-gold realistic-balloon shadow-lg" />
        <div className="w-[1.5px] h-28 bg-gradient-to-b from-amber-400/60 to-transparent" />
      </div>
    </div>
  );
};

import React from 'react';
import { RotateCcw } from 'lucide-react';
import { sound } from '../../utils/audio';
import { fireFullPartyCelebration } from '../../utils/confetti';

interface Step10GiftRevealProps {
  finalPhotoUrl: string;
  isGiftOpened: boolean;
  onOpenGift: () => void;
  onExperienceAgain: () => void;
}

export const Step10GiftReveal: React.FC<Step10GiftRevealProps> = ({
  finalPhotoUrl,
  isGiftOpened,
  onOpenGift,
  onExperienceAgain,
}) => {
  const handleOpen = () => {
    sound.playGiftOpenFlourish();
    fireFullPartyCelebration();
    onOpenGift();
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      {!isGiftOpened ? (
        <div className="flex flex-col items-center animate-fade-in">
          <div className="mb-3 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-cinzel text-amber-300 tracking-wider">
            The Grand Finale 🎁
          </div>
          <h2 className="text-3xl sm:text-4xl font-cinzel font-bold text-white mb-2">
            A token of my love
          </h2>
          <p className="text-amber-300 text-base sm:text-lg mb-8 font-medium animate-pulse">
            tap the gift to open
          </p>

          {/* 3D Interactive Luxury Gift Box */}
          <div
            onClick={handleOpen}
            className="relative w-48 h-48 sm:w-56 sm:h-56 cursor-pointer gift-wiggle flex items-center justify-center group active:scale-95 transition-transform"
          >
            {/* Box Glow */}
            <div className="absolute inset-0 bg-amber-400/25 rounded-3xl blur-2xl group-hover:bg-amber-400/40 transition-all duration-300" />

            {/* Box Body SVG */}
            <svg
              className="w-full h-full drop-shadow-[0_15px_30px_rgba(0,0,0,0.8)]"
              viewBox="0 0 200 200"
              fill="none"
            >
              <defs>
                <linearGradient id="giftBoxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#27272a" />
                  <stop offset="100%" stopColor="#09090b" />
                </linearGradient>
                <linearGradient id="ribbonGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#f6d365" />
                  <stop offset="50%" stopColor="#fff8db" />
                  <stop offset="100%" stopColor="#fda085" />
                </linearGradient>
              </defs>
              {/* Box Base */}
              <rect
                x="35"
                y="70"
                width="130"
                height="100"
                rx="16"
                fill="url(#giftBoxGrad)"
                stroke="#f5d061"
                strokeWidth="2"
              />
              {/* Box Lid */}
              <rect
                x="25"
                y="52"
                width="150"
                height="30"
                rx="8"
                fill="#18181b"
                stroke="#f5d061"
                strokeWidth="2.5"
              />
              {/* Vertical Ribbon */}
              <rect x="88" y="52" width="24" height="118" fill="url(#ribbonGrad)" />
              {/* Horizontal Ribbon on Lid */}
              <rect x="25" y="62" width="150" height="10" fill="url(#ribbonGrad)" />
              {/* Ribbon Bow Loops */}
              <path
                d="M100 52 C75 10, 45 35, 95 50 Z"
                fill="url(#ribbonGrad)"
                stroke="#fff"
                strokeWidth="0.5"
              />
              <path
                d="M100 52 C125 10, 155 35, 105 50 Z"
                fill="url(#ribbonGrad)"
                stroke="#fff"
                strokeWidth="0.5"
              />
              {/* Center Bow Knot */}
              <circle cx="100" cy="50" r="9" fill="#f5d061" />
            </svg>

            {/* Floating Sparkle Hint */}
            <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center font-bold text-xs shadow-lg animate-bounce">
              ✨
            </div>
          </div>

          <p className="text-xs text-neutral-400 mt-6 italic">
            Specially crafted for your 25th birthday
          </p>
        </div>
      ) : (
        /* State 2: Opened Gift Box & Grand Reveal */
        <div className="flex flex-col items-center max-w-lg w-full animate-fade-in">
          {/* Couple Cartoon Artwork */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-amber-300 shadow-[0_0_50px_rgba(245,208,97,0.5)] mb-6 bg-neutral-950 transform hover:scale-105 transition-transform duration-500">
            <img
              src={finalPhotoUrl}
              alt="Final Couple Cartoon Art"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-3 left-0 right-0 text-center">
              <span className="text-xs text-amber-200/90 font-cinzel tracking-wider px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/30">
                My Eternal Love 💍
              </span>
            </div>
          </div>

          {/* Closing Statements */}
          <h3 className="text-2xl sm:text-3xl font-cinzel font-bold text-amber-300 mb-2">
            thankyou for being in my life
          </h3>

          <p className="text-sm sm:text-base md:text-lg text-neutral-300 max-w-md mb-2 font-light">
            I hope this little world made you smile today.
          </p>

          <p className="text-2xl sm:text-3xl font-romantic gold-gradient-text mb-8">
            Happy birthday once again, cutiepie 🩷
          </p>

          {/* CRITICAL REQUIREMENT: "experience it again" button resets to the very beginning */}
          <button
            onClick={() => {
              sound.playNote(523.25, 0.3);
              onExperienceAgain();
            }}
            className="group px-9 py-3.5 rounded-full font-medium text-xs sm:text-base text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_35px_rgba(245,208,97,0.6)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4 transition-transform group-hover:-rotate-90" />
            <span>experience it again</span>
          </button>
        </div>
      )}
    </section>
  );
};

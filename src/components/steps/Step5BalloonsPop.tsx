import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { sound } from '../../utils/audio';
import { fireBalloonPopConfetti, fireGoldenConfetti } from '../../utils/confetti';

interface Step5BalloonsPopProps {
  onNext: () => void;
  poppedBalloons: boolean[];
  onPopBalloon: (index: number) => void;
}

const BALLOON_QUALITIES = [
  { id: 1, color: 'gold', title: 'Handsome & Charming', emoji: '🔥' },
  { id: 2, color: 'black', title: 'Deeply Caring & Sweet', emoji: '💖' },
  { id: 3, color: 'gold', title: 'Fiercely Loyal & True', emoji: '🛡️' },
  { id: 4, color: 'black', title: 'Hardworking & Ambitious', emoji: '⭐' },
  { id: 5, color: 'gold', title: 'My Safe Comfort Zone', emoji: '✨' },
];

export const Step5BalloonsPop: React.FC<Step5BalloonsPopProps> = ({
  onNext,
  poppedBalloons,
  onPopBalloon,
}) => {
  const poppedCount = poppedBalloons.filter(Boolean).length;
  const isAllPopped = poppedCount === 5;

  const handlePop = (index: number, e: React.MouseEvent<HTMLDivElement>) => {
    if (poppedBalloons[index]) return;

    sound.playBalloonPop();

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;
    fireBalloonPopConfetti(x, y);

    onPopBalloon(index);

    if (poppedCount + 1 === 5) {
      setTimeout(() => {
        sound.playMilestoneFanfare();
        fireGoldenConfetti();
      }, 350);
    }
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      <div className="mb-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-cinzel text-amber-300 tracking-wider">
        Interactive Surprise
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white mb-2">
        Pop the balloons
      </h2>
      <p className="text-neutral-300 text-xs sm:text-sm md:text-base mb-6 max-w-md">
        Tap each luxury balloon to pop it and reveal your 5 best qualities!
      </p>

      {/* 5 Balloons Container */}
      <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 sm:gap-4 w-full max-w-3xl mb-8 min-h-[220px] items-center justify-center">
        {BALLOON_QUALITIES.map((b, idx) => {
          const isPopped = poppedBalloons[idx];
          const isGold = b.color === 'gold';

          return (
            <div key={b.id} className="flex flex-col items-center min-h-[160px] justify-center">
              {!isPopped ? (
                <div
                  onClick={(e) => handlePop(idx, e)}
                  className={`realistic-balloon ${
                    isGold ? 'balloon-gold' : 'balloon-black'
                  } w-20 h-28 sm:w-24 sm:h-32 flex items-center justify-center relative cursor-pointer active:scale-90 transition-transform`}
                >
                  <span
                    className={`text-[10px] sm:text-xs font-bold tracking-wider ${
                      isGold ? 'text-neutral-900' : 'text-amber-300'
                    }`}
                  >
                    TAP ME
                  </span>
                  <div className="w-[1.5px] h-10 bg-amber-400/60 absolute -bottom-10 left-1/2 -translate-x-1/2" />
                </div>
              ) : (
                <div className="p-3.5 rounded-2xl bg-neutral-900/90 border border-amber-400/40 text-center animate-fade-in w-full shadow-lg transform scale-100">
                  <div className="text-2xl mb-1.5">{b.emoji}</div>
                  <div className="text-[11px] sm:text-xs uppercase text-amber-300 font-bold tracking-wide">
                    {b.title}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Progress status */}
      <div className="text-xs sm:text-sm text-neutral-400 mb-6">
        {isAllPopped ? (
          <span className="text-amber-300 font-semibold flex items-center gap-1 justify-center">
            <Sparkles className="w-4 h-4" /> All qualities unlocked! Tap proceed below.
          </span>
        ) : (
          <span>
            <strong className="text-amber-400">{poppedCount}</strong> of 5 balloons popped
          </span>
        )}
      </div>

      {/* Next Button */}
      <button
        onClick={() => {
          sound.playNote(659.25, 0.3);
          onNext();
        }}
        disabled={!isAllPopped}
        className={`px-9 py-3 rounded-full font-medium text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 transition-all duration-300 flex items-center gap-2 ${
          isAllPopped
            ? 'gold-glow-intense transform hover:scale-105 active:scale-95 cursor-pointer'
            : 'opacity-40 cursor-not-allowed'
        }`}
      >
        <span>Proceed to Memories</span>
        <ArrowRight className="w-4 h-4" />
      </button>
    </section>
  );
};

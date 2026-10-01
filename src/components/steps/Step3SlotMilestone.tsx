import React, { useState, useRef, useEffect } from 'react';
import { Disc, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/audio';
import { fireGoldenConfetti } from '../../utils/confetti';

interface Step3SlotMilestoneProps {
  onNext: () => void;
  hasSpun: boolean;
  onSetSpun: (spun: boolean) => void;
}

export const Step3SlotMilestone: React.FC<Step3SlotMilestoneProps> = ({
  onNext,
  hasSpun,
  onSetSpun,
}) => {
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(hasSpun);
  const [statusText, setStatusText] = useState(
    hasSpun ? 'Golden 25 reached!' : 'Tap reveal to unlock the golden number'
  );

  const reel1Ref = useRef<HTMLDivElement>(null);
  const reel2Ref = useRef<HTMLDivElement>(null);

  // Position setup if already spun (e.g. from state)
  useEffect(() => {
    if (hasSpun && reel1Ref.current && reel2Ref.current) {
      const isMobile = window.innerWidth < 640;
      const stepDist = isMobile ? 112 : 128;
      reel1Ref.current.style.transform = `translateY(-${7 * stepDist}px)`;
      reel2Ref.current.style.transform = `translateY(-${7 * stepDist}px)`;
    }
  }, [hasSpun]);

  const handleSpin = () => {
    if (isSpinning || hasSpun) return;

    setIsSpinning(true);
    setStatusText("Let's find out... ✨");

    const isMobile = window.innerWidth < 640;
    const stepDist = isMobile ? 112 : 128;

    // Tick audio interval
    let tickCount = 0;
    const tickInterval = window.setInterval(() => {
      sound.playSlotTick();
      tickCount++;
      if (tickCount > 30) {
        clearInterval(tickInterval);
      }
    }, 110);

    // Reel 1: Target digit '2' at position 7
    if (reel1Ref.current) {
      reel1Ref.current.style.transition = 'transform 3.2s cubic-bezier(0.12, 0.82, 0.32, 1)';
      reel1Ref.current.style.transform = `translateY(-${7 * stepDist}px)`;
    }

    // Reel 2: Target digit '5' at position 7 with slight delay
    setTimeout(() => {
      if (reel2Ref.current) {
        reel2Ref.current.style.transition = 'transform 3.8s cubic-bezier(0.12, 0.82, 0.32, 1)';
        reel2Ref.current.style.transform = `translateY(-${7 * stepDist}px)`;
      }
    }, 250);

    // Landed finish
    setTimeout(() => {
      clearInterval(tickInterval);
      setIsSpinning(false);
      onSetSpun(true);
      setShowResult(true);
      setStatusText('Golden 25 reached!');
      sound.playMilestoneFanfare();
      fireGoldenConfetti();
    }, 4100);
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      <div className="mb-3 px-4 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-cinzel text-amber-300 tracking-wider">
        Golden Milestone
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white mb-2">
        A special number
      </h2>
      <p className="text-neutral-300 text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-md">
        Let's see how many wonderful years you've collected
      </p>

      {/* Slot Machine Display Case */}
      <div className="relative p-6 sm:p-8 rounded-3xl bg-neutral-900/80 backdrop-blur-xl border-2 border-amber-400/40 shadow-[0_0_40px_rgba(245,208,97,0.25)] flex flex-col items-center max-w-sm w-full mb-6">
        <div className="flex items-center justify-center gap-4 mb-4">
          {/* Reel 1 */}
          <div className="w-24 sm:w-28 h-28 sm:h-32 rounded-2xl bg-neutral-950 border-2 border-amber-300/50 shadow-inner flex items-center justify-center overflow-hidden relative">
            <div
              ref={reel1Ref}
              className="absolute top-0 text-5xl sm:text-6xl font-bold font-cinzel gold-gradient-text transition-all flex flex-col items-center select-none"
            >
              <div className="h-28 sm:h-32 flex items-center justify-center">?</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">7</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">3</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">9</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">1</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">8</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">4</div>
              <div className="h-28 sm:h-32 flex items-center justify-center font-bold text-amber-300">2</div>
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/80 via-transparent to-black/80" />
          </div>

          {/* Reel 2 */}
          <div className="w-24 sm:w-28 h-28 sm:h-32 rounded-2xl bg-neutral-950 border-2 border-amber-300/50 shadow-inner flex items-center justify-center overflow-hidden relative">
            <div
              ref={reel2Ref}
              className="absolute top-0 text-5xl sm:text-6xl font-bold font-cinzel gold-gradient-text transition-all flex flex-col items-center select-none"
            >
              <div className="h-28 sm:h-32 flex items-center justify-center">?</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">1</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">8</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">4</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">0</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">6</div>
              <div className="h-28 sm:h-32 flex items-center justify-center">3</div>
              <div className="h-28 sm:h-32 flex items-center justify-center font-bold text-amber-300">5</div>
            </div>
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/80 via-transparent to-black/80" />
          </div>
        </div>

        {/* Dynamic status line */}
        <div className="text-xs sm:text-sm font-medium text-amber-300/90 h-6 flex items-center justify-center">
          {isSpinning ? <span className="animate-pulse">{statusText}</span> : statusText}
        </div>
      </div>

      {/* Button to Spin / Continue */}
      {!showResult ? (
        <button
          onClick={handleSpin}
          disabled={isSpinning}
          className={`px-9 py-3.5 rounded-full font-medium text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_25px_rgba(245,208,97,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer ${
            isSpinning ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <Disc className={`w-4 h-4 ${isSpinning ? 'animate-spin' : ''}`} />
          <span>{isSpinning ? 'Unlocking...' : 'Reveal'}</span>
        </button>
      ) : (
        <div className="mt-2 text-center animate-fade-in max-w-md">
          <p className="font-romantic text-2xl sm:text-3xl gold-gradient-text mb-5 leading-relaxed">
            25 years of smiles, memories and beautiful moments
          </p>
          <button
            onClick={() => {
              sound.playNote(659.25, 0.3);
              onNext();
            }}
            className="px-9 py-3 rounded-full font-medium text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_30px_rgba(245,208,97,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 mx-auto cursor-pointer"
          >
            <span>Continue</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      )}
    </section>
  );
};

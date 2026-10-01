import React from 'react';
import { Sparkles } from 'lucide-react';
import { sound } from '../../utils/audio';
import { fireFullPartyCelebration } from '../../utils/confetti';

interface Step7CandleCakeProps {
  blownCandles: boolean[];
  onBlowCandle: (index: number) => void;
  onAllCandlesBlown: () => void;
}

export const Step7CandleCake: React.FC<Step7CandleCakeProps> = ({
  blownCandles,
  onBlowCandle,
  onAllCandlesBlown,
}) => {
  const blownCount = blownCandles.filter(Boolean).length;
  const isAllBlown = blownCount === 5;

  const handleBlow = (index: number) => {
    if (blownCandles[index]) return;

    sound.playCandleBlow();
    onBlowCandle(index);

    if (blownCount + 1 === 5) {
      setTimeout(() => {
        sound.playMilestoneFanfare();
        fireFullPartyCelebration();
        setTimeout(() => {
          onAllCandlesBlown();
        }, 1700);
      }, 300);
    }
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      <div className="mb-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-cinzel text-amber-300 tracking-wider">
        Birthday Ritual 🎂
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white mb-2">
        Make a wish
      </h2>
      <p className="text-neutral-300 text-xs sm:text-sm md:text-base mb-6 max-w-md">
        Close your eyes, think of your deepest wish, and tap each of the 5 candles to blow them out!
      </p>

      {/* Luxury Birthday Cake Stage */}
      <div className="relative w-full max-w-md p-6 sm:p-8 rounded-3xl bg-neutral-900/60 backdrop-blur-xl border border-amber-400/30 flex flex-col items-center shadow-2xl mb-6">
        {/* 5 Candles Row on Cake */}
        <div className="flex items-end justify-center gap-4 sm:gap-6 mb-2 z-10">
          {/* Candle 1 */}
          <div
            onClick={() => handleBlow(0)}
            className="flex flex-col items-center cursor-pointer group select-none"
            title="Tap to blow out candle"
          >
            <div
              className={`flame w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white shadow-[0_0_15px_#fbbf24] mb-0.5 transition-all duration-500 ${
                blownCandles[0] ? 'opacity-0 scale-0 -translate-y-2' : 'opacity-100'
              }`}
            />
            <div className="w-3.5 h-16 rounded-t-sm bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 border border-amber-400/40 shadow-sm relative">
              <div className="w-full h-1 bg-amber-600/30 absolute top-3" />
              <div className="w-full h-1 bg-amber-600/30 absolute top-7" />
              <div className="w-full h-1 bg-amber-600/30 absolute top-11" />
            </div>
          </div>

          {/* Candle 2 */}
          <div
            onClick={() => handleBlow(1)}
            className="flex flex-col items-center cursor-pointer group select-none"
            title="Tap to blow out candle"
          >
            <div
              className={`flame w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white shadow-[0_0_15px_#fbbf24] mb-0.5 transition-all duration-500 ${
                blownCandles[1] ? 'opacity-0 scale-0 -translate-y-2' : 'opacity-100'
              }`}
            />
            <div className="w-3.5 h-20 rounded-t-sm bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 border border-amber-400/40 shadow-sm relative">
              <div className="w-full h-1 bg-amber-600/30 absolute top-4" />
              <div className="w-full h-1 bg-amber-600/30 absolute top-9" />
              <div className="w-full h-1 bg-amber-600/30 absolute top-14" />
            </div>
          </div>

          {/* Candle 3 (Middle / Tallest) */}
          <div
            onClick={() => handleBlow(2)}
            className="flex flex-col items-center cursor-pointer group select-none"
            title="Tap to blow out candle"
          >
            <div
              className={`flame w-4 h-7 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white shadow-[0_0_20px_#fbbf24] mb-0.5 transition-all duration-500 ${
                blownCandles[2] ? 'opacity-0 scale-0 -translate-y-2' : 'opacity-100'
              }`}
            />
            <div className="w-4 h-24 rounded-t-sm bg-gradient-to-r from-amber-200 via-yellow-100 to-amber-400 border border-amber-300 shadow-md relative">
              <div className="w-full h-1.5 bg-amber-600/30 absolute top-5" />
              <div className="w-full h-1.5 bg-amber-600/30 absolute top-12" />
              <div className="w-full h-1.5 bg-amber-600/30 absolute top-18" />
            </div>
          </div>

          {/* Candle 4 */}
          <div
            onClick={() => handleBlow(3)}
            className="flex flex-col items-center cursor-pointer group select-none"
            title="Tap to blow out candle"
          >
            <div
              className={`flame w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white shadow-[0_0_15px_#fbbf24] mb-0.5 transition-all duration-500 ${
                blownCandles[3] ? 'opacity-0 scale-0 -translate-y-2' : 'opacity-100'
              }`}
            />
            <div className="w-3.5 h-20 rounded-t-sm bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 border border-amber-400/40 shadow-sm relative">
              <div className="w-full h-1 bg-amber-600/30 absolute top-4" />
              <div className="w-full h-1 bg-amber-600/30 absolute top-9" />
              <div className="w-full h-1 bg-amber-600/30 absolute top-14" />
            </div>
          </div>

          {/* Candle 5 */}
          <div
            onClick={() => handleBlow(4)}
            className="flex flex-col items-center cursor-pointer group select-none"
            title="Tap to blow out candle"
          >
            <div
              className={`flame w-3.5 h-6 rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white shadow-[0_0_15px_#fbbf24] mb-0.5 transition-all duration-500 ${
                blownCandles[4] ? 'opacity-0 scale-0 -translate-y-2' : 'opacity-100'
              }`}
            />
            <div className="w-3.5 h-16 rounded-t-sm bg-gradient-to-r from-amber-100 via-amber-200 to-amber-400 border border-amber-400/40 shadow-sm relative">
              <div className="w-full h-1 bg-amber-600/30 absolute top-3" />
              <div className="w-full h-1 bg-amber-600/30 absolute top-7" />
              <div className="w-full h-1 bg-amber-600/30 absolute top-11" />
            </div>
          </div>
        </div>

        {/* 3-Tier Luxury Gold & Chocolate Cake */}
        <div className="w-64 sm:w-80 flex flex-col items-center -mt-1 select-none">
          {/* Top Tier */}
          <div className="w-48 h-12 rounded-t-2xl bg-gradient-to-b from-amber-200 to-amber-400 border-x-2 border-t-2 border-amber-300/80 shadow-md flex items-center justify-center text-[10px] sm:text-xs font-cinzel text-neutral-900 font-bold tracking-widest">
            HAPPY 25TH
          </div>
          {/* Middle Tier */}
          <div className="w-60 h-16 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 border-x-2 border-amber-400/40 shadow-lg flex items-center justify-around px-4">
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-300" />
            <div className="w-2.5 h-2.5 rounded-full bg-amber-400" />
          </div>
          {/* Base Tier */}
          <div className="w-72 sm:w-80 h-18 rounded-b-2xl bg-gradient-to-b from-amber-400 via-amber-500 to-amber-700 border-2 border-amber-300 shadow-2xl flex items-center justify-center">
            <span className="font-romantic text-neutral-950 text-xl sm:text-2xl font-bold tracking-wider">
              With Endless Love
            </span>
          </div>
          {/* Cake Stand Base */}
          <div className="w-80 sm:w-96 h-4 bg-gradient-to-r from-transparent via-amber-300 to-transparent mt-1 rounded-full shadow-[0_0_20px_rgba(245,208,97,0.5)]" />
        </div>
      </div>

      {/* Progress status */}
      <div className="text-xs sm:text-sm text-neutral-400 mb-2">
        {isAllBlown ? (
          <span className="text-amber-300 font-bold flex items-center gap-1 justify-center animate-pulse">
            <Sparkles className="w-4 h-4" /> All 5 candles blown! Wish sealed! ✨
          </span>
        ) : (
          <span>
            <strong className="text-amber-400">{blownCount}</strong> of 5 candles blown out
          </span>
        )}
      </div>
    </section>
  );
};

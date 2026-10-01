import React, { useState } from 'react';
import { ChevronLeft, ArrowRight } from 'lucide-react';
import { sound } from '../../utils/audio';

interface MemoryItem {
  id: number;
  badge: string;
  title: string;
  description: string;
  imageUrl: string;
}

interface Step6MemoriesCarouselProps {
  memories: MemoryItem[];
  onNext: () => void;
}

export const Step6MemoriesCarousel: React.FC<Step6MemoriesCarouselProps> = ({
  memories,
  onNext,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  const current = memories[currentIdx] || memories[0];

  const handleNext = () => {
    sound.playNote(540 + currentIdx * 50, 0.25);
    if (currentIdx < memories.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      onNext();
    }
  };

  const handlePrev = () => {
    sound.playNote(500, 0.2);
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      <div className="mb-2 px-3.5 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-xs font-cinzel text-amber-300 tracking-wider">
        Golden Moments Together 📸
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white mb-2">
        Cute memories
      </h2>
      <p className="text-neutral-400 text-xs sm:text-sm md:text-base mb-6">
        <span className="text-amber-400 font-semibold">{current.badge}</span> of {memories.length} •
        Swipe to browse our fairytale
      </p>

      {/* Memory Polaroid Card */}
      <div className="relative w-full max-w-sm sm:max-w-md mb-6">
        <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden border-2 border-amber-400/30 bg-neutral-900 shadow-2xl p-4 flex flex-col justify-between">
          {/* Image Display Slot with Smooth Crossfade */}
          <div className="relative w-full h-[72%] rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950">
            <img
              key={current.imageUrl}
              src={current.imageUrl}
              alt={current.title}
              className="w-full h-full object-cover transition-opacity duration-500 animate-fade-in"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-xs text-amber-300 font-cinzel">
              <span>{current.badge}</span>
            </div>
          </div>

          {/* Caption */}
          <div className="p-2 sm:p-3 text-left">
            <h3 className="text-base sm:text-lg font-bold text-amber-200 font-cinzel mb-1">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-300 line-clamp-2 leading-relaxed">
              {current.description}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center gap-4">
        <button
          onClick={handlePrev}
          disabled={currentIdx === 0}
          className={`p-3 rounded-full bg-neutral-900 border border-neutral-700 transition-all ${
            currentIdx === 0
              ? 'opacity-30 cursor-not-allowed text-neutral-600'
              : 'hover:border-amber-400/50 text-neutral-300 hover:text-amber-300 cursor-pointer'
          }`}
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Carousel indicators */}
        <div className="flex items-center gap-1.5">
          {memories.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentIdx ? 'w-5 bg-amber-400' : 'w-2 bg-neutral-700'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="px-7 sm:px-8 py-3 rounded-full font-medium text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_25px_rgba(245,208,97,0.4)] transition-all flex items-center gap-2 cursor-pointer"
        >
          <span>{currentIdx === memories.length - 1 ? 'Make a Wish Next' : 'Next Memory'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

import React from 'react';
import { Heart } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Step8CelebrationProps {
  photoUrl: string;
  onNext: () => void;
}

export const Step8Celebration: React.FC<Step8CelebrationProps> = ({ photoUrl, onNext }) => {
  const handleClick = () => {
    sound.playNote(587.33, 0.4);
    onNext();
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-3xl overflow-hidden border-2 border-amber-300/40 shadow-[0_0_40px_rgba(245,208,97,0.4)] mb-6 bg-neutral-950">
        <img
          src={photoUrl}
          alt="Birthday Party Cute Couple Art"
          className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <span className="px-4 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-amber-300 font-cinzel text-xs font-semibold tracking-wider">
            All Wishes Granted ✨
          </span>
        </div>
      </div>

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-romantic gold-gradient-text mb-3">
        yay! Happy birthday Cutiepie
      </h2>
      <p className="text-base sm:text-lg text-neutral-300 max-w-md mb-8 font-light leading-relaxed">
        May every single wish you made today turn into the most beautiful reality this year!
      </p>

      <button
        onClick={handleClick}
        className="group px-9 py-3.5 rounded-full font-medium text-xs sm:text-base text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_30px_rgba(245,208,97,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
      >
        <span>Read Love Letter</span>
        <Heart className="w-4 h-4 fill-neutral-950" />
      </button>
    </section>
  );
};

import React from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Step2EnchantedProps {
  photoUrl: string;
  onNext: () => void;
}

export const Step2Enchanted: React.FC<Step2EnchantedProps> = ({ photoUrl, onNext }) => {
  const handleClick = () => {
    sound.playNote(587.33, 0.4);
    onNext();
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      <div className="relative w-full max-w-lg mb-8 p-6 sm:p-8 rounded-3xl bg-neutral-900/60 backdrop-blur-xl border border-amber-400/30 gold-glow">
        {/* Fairy Light arch decoration with balloons and round couple artwork */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 mb-5">
          <div className="w-11 h-15 sm:w-13 sm:h-17 balloon-gold realistic-balloon sway-balloon" />
          
          <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-amber-400 via-yellow-200 to-amber-600 shadow-[0_0_25px_rgba(245,208,97,0.5)]">
            <img
              src={photoUrl}
              alt="Celebration Couple Art"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          <div
            className="w-11 h-15 sm:w-13 sm:h-17 balloon-black realistic-balloon sway-balloon"
            style={{ animationDelay: '1.5s' }}
          />
        </div>

        {/* Subtitle tag */}
        <div className="flex items-center justify-center gap-2 text-amber-300/80 text-xs sm:text-sm mb-2 font-cinzel">
          <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
          <span>Magic Enchantment Activated</span>
          <Star className="w-3.5 h-3.5 fill-amber-300 text-amber-300" />
        </div>

        {/* Title & text */}
        <h2 className="text-4xl sm:text-5xl font-romantic gold-gradient-text mb-3">
          Hello cutiepie
        </h2>
        <p className="text-base sm:text-lg text-neutral-200 font-light leading-relaxed">
          "Perfect ! a special little place made just for you."
        </p>
      </div>

      <button
        onClick={handleClick}
        className="group px-9 py-3.5 rounded-full font-medium text-base text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_30px_rgba(245,208,97,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
      >
        <span>Let's begin</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </button>
    </section>
  );
};

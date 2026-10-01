import React from 'react';
import { Sparkles } from 'lucide-react';
import { sound } from '../../utils/audio';
import { fireGoldenConfetti } from '../../utils/confetti';

interface Step1WelcomeProps {
  photoUrl: string;
  onNext: () => void;
}

export const Step1Welcome: React.FC<Step1WelcomeProps> = ({ photoUrl, onNext }) => {
  const handleClick = () => {
    sound.playNote(523.25, 0.4);
    fireGoldenConfetti();
    onNext();
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      {/* Couple Illustration Frame with Golden Ambient Glow */}
      <div className="relative group mb-8">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 rounded-3xl blur-md opacity-50 group-hover:opacity-80 transition duration-700" />
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border-2 border-amber-300/40 shadow-2xl bg-neutral-950">
          <img
            src={photoUrl}
            alt="Loving Couple Cute Art"
            className="w-full h-full object-cover transform hover:scale-105 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-0 right-0 text-center">
            <span className="text-xs text-amber-200/90 font-cinzel tracking-wider px-3.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/20">
              Forever & Always ❤️
            </span>
          </div>
        </div>
      </div>

      {/* Headlines & Description */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-romantic gold-gradient-text tracking-wide mb-3 drop-shadow-lg">
        Hello cutiepie
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-lg mb-8 font-light leading-relaxed">
        Today is your special day! but wait... <br />
        <span className="text-amber-300 font-normal">this place is missing a little magic.</span>
      </p>

      {/* Action Button */}
      <button
        onClick={handleClick}
        className="group relative px-8 py-3.5 rounded-full font-medium text-base text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_30px_rgba(245,208,97,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
      >
        <span>Let's decorate</span>
        <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-45" />
      </button>
    </section>
  );
};

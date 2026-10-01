import React from 'react';
import { Gift } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Step9LoveLetterProps {
  avatarUrl: string;
  onNext: () => void;
}

export const Step9LoveLetter: React.FC<Step9LoveLetterProps> = ({ avatarUrl, onNext }) => {
  const handleClick = () => {
    sound.playNote(659.25, 0.4);
    onNext();
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      {/* Letter Envelope Frame */}
      <div className="relative w-full max-w-xl p-5 sm:p-8 rounded-3xl bg-neutral-900/90 backdrop-blur-2xl border border-amber-400/30 shadow-[0_0_40px_rgba(245,208,97,0.2)] flex flex-col items-center mb-6">
        {/* Header Art & Heading */}
        <div className="flex items-center gap-4 mb-4 w-full">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-amber-400/40 shadow-md shrink-0">
            <img
              src={avatarUrl}
              alt="Dreamy Couple"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="text-left flex-1">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-300/80 font-cinzel block">
              From My Heart To Yours
            </span>
            <h2 className="text-2xl sm:text-3xl font-romantic gold-gradient-text">
              my dear cutiepie
            </h2>
          </div>
        </div>

        {/* Scrollable Letter Body */}
        <div className="w-full max-h-72 overflow-y-auto custom-scroll pr-2 text-left space-y-4 text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed border-t border-b border-neutral-800/80 py-4 my-2">
          <p>
            Happy 25th Birthday to the most amazing boy in the world! As I sit down to write this, I
            find myself reminiscing about every single memory we've shared. From the silly jokes that
            leave us in tears of laughter, to the late-night heart-to-hearts where time simply ceases
            to exist — every second spent with you is a treasure I hold close to my heart.
          </p>

          <p>
            You have this rare, beautiful quality of making everyone around you feel valued and safe,
            especially me. Whenever life gets overwhelming or exhausting, just hearing your voice or
            resting in your warm embrace makes all my worries dissolve. You are not just my
            boyfriend; you are my greatest supporter, my partner-in-crime, and my favorite confidant.
          </p>

          <p>
            Watching you strive toward your dreams with such determination and grace inspires me
            every single day. I hope this new year of your life brings you unbound success, radiant
            health, exciting adventures, and all the boundless happiness you so genuinely deserve.
            Always remember that whatever happens, I will always be standing right by your side,
            cheering you on.
          </p>

          <p>
            Thank you for being the sweetest, most handsome, and deeply loving soul that you are. May
            your 25th year be as unforgettable and magical as you make my life every single day.
          </p>
        </div>

        {/* Footer info inside letter */}
        <div className="w-full flex justify-between items-center text-xs text-amber-300/60 font-cinzel pt-2">
          <span className="text-[11px] text-neutral-500">Scrollable Letter 📜</span>
          <span className="font-romantic text-base text-amber-300">Forever Yours 🩷</span>
        </div>
      </div>

      {/* Button for next page */}
      <button
        onClick={handleClick}
        className="group px-9 py-3.5 rounded-full font-medium text-xs sm:text-base text-neutral-950 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_30px_rgba(245,208,97,0.5)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
      >
        <span>one last thing for you</span>
        <Gift className="w-4 h-4" />
      </button>
    </section>
  );
};

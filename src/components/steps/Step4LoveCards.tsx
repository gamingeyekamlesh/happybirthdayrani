import React, { useState } from 'react';
import { Heart, Shield, Zap, Sparkles, Infinity as InfinityIcon, ArrowRight, ArrowLeft } from 'lucide-react';
import { sound } from '../../utils/audio';

interface Step4LoveCardsProps {
  onNext: () => void;
}

const LOVE_THINGS = [
  {
    num: '01',
    title: 'Your Infectious Smile',
    desc: 'The way your whole face lights up whenever you laugh or get excited. It instantly turns any tough day into pure sunshine, comfort, and boundless warmth.',
    quote: '"You are my favourite smile to watch."',
    icon: Heart,
    iconColor: 'text-pink-400',
  },
  {
    num: '02',
    title: 'Your Caring & Protective Soul',
    desc: "You always notice the subtle things—whether I've eaten, how I feel, or if I'm tired. Being wrapped in your arms is my safest refuge in the whole world.",
    quote: '"With you, I feel completely home."',
    icon: Shield,
    iconColor: 'text-amber-400',
  },
  {
    num: '03',
    title: 'Your Ambition & Hard Work',
    desc: 'I deeply respect the passion, determination, and focus you bring to everything you set your mind to. Watching you succeed and grow makes me so proud of you!',
    quote: '"My biggest inspiration every day."',
    icon: Zap,
    iconColor: 'text-amber-300',
  },
  {
    num: '04',
    title: 'Your Adorable Goofiness',
    desc: 'Those silly inside jokes, funny expressions, and playful teasing that only I get to witness. You are effortlessly handsome yet the biggest cutiepie at heart.',
    quote: '"Nobody makes me chuckle like you do."',
    icon: Sparkles,
    iconColor: 'text-pink-300',
  },
  {
    num: '05',
    title: 'How Truly Loved You Make Me Feel',
    desc: 'Your patience, loyalty, and deep kindness are a constant blessing. Choosing you as my boyfriend and life partner is the easiest and happiest decision of my life.',
    quote: '"I love you endlessly, today and always."',
    icon: InfinityIcon,
    iconColor: 'text-amber-400',
  },
];

export const Step4LoveCards: React.FC<Step4LoveCardsProps> = ({ onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = LOVE_THINGS[currentIndex];
  const IconComponent = current.icon;

  const handleNext = () => {
    sound.playNote(520 + currentIndex * 60, 0.25);
    if (currentIndex < LOVE_THINGS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      onNext();
    }
  };

  const handlePrev = () => {
    sound.playNote(480, 0.2);
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="w-full flex flex-col items-center text-center animate-fade-in py-2">
      <div className="mb-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-400/20 text-xs font-cinzel text-pink-300 tracking-wider">
        Straight From My Heart 💌
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-cinzel font-bold text-white mb-2">
        5 things i love about you
      </h2>
      <p className="text-xs sm:text-sm md:text-base text-neutral-400 mb-6">
        Card <span className="text-amber-400 font-bold">{currentIndex + 1}</span> of 5 • Tap Next to swipe through
      </p>

      {/* Love Card Showcase */}
      <div className="relative w-full max-w-md h-72 sm:h-80 mb-6">
        <div
          key={currentIndex}
          className="w-full h-full rounded-3xl p-6 sm:p-8 bg-neutral-900/90 backdrop-blur-xl border border-amber-400/30 shadow-[0_0_35px_rgba(245,208,97,0.2)] flex flex-col justify-between text-left transition-all duration-300 transform scale-100 animate-fade-in"
        >
          {/* Header of card */}
          <div className="flex items-center justify-between">
            <span className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 flex items-center justify-center font-bold text-amber-300 font-cinzel">
              {current.num}
            </span>
            <IconComponent className={`w-6 h-6 ${current.iconColor}`} />
          </div>

          {/* Body */}
          <div className="my-2">
            <h3 className="text-lg sm:text-xl font-bold text-amber-200 mb-2 font-cinzel">
              {current.title}
            </h3>
            <p className="text-neutral-300 text-xs sm:text-sm md:text-base leading-relaxed">
              {current.desc}
            </p>
          </div>

          {/* Quote */}
          <div className="text-xs text-amber-300/80 italic font-light pt-2 border-t border-neutral-800">
            {current.quote}
          </div>
        </div>
      </div>

      {/* Dots and Navigation */}
      <div className="flex items-center gap-3">
        {currentIndex > 0 && (
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-neutral-900 border border-neutral-700 hover:border-amber-400/50 text-neutral-300 hover:text-amber-300 transition-all cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
        )}

        {/* Indicator dots */}
        <div className="flex items-center gap-1.5 px-3">
          {LOVE_THINGS.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'w-6 bg-amber-400' : 'w-2 bg-neutral-700'
              }`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="px-7 sm:px-8 py-3 rounded-full font-medium text-xs sm:text-sm text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-[0_0_25px_rgba(245,208,97,0.4)] transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 cursor-pointer"
        >
          <span>{currentIndex === LOVE_THINGS.length - 1 ? 'Pop Balloons Next' : 'Next Thing'}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
};

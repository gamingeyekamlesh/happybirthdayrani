import React from 'react';
import { Sparkles, Volume2, VolumeX, Image as ImageIcon, RotateCcw } from 'lucide-react';
import { sound } from '../utils/audio';

interface HeaderNavProps {
  currentStep: number;
  totalSteps: number;
  isMelodyPlaying: boolean;
  onToggleMelody: () => void;
  onOpenPhotoEditor: () => void;
  onReset: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentStep,
  totalSteps,
  isMelodyPlaying,
  onToggleMelody,
  onOpenPhotoEditor,
  onReset,
}) => {
  return (
    <header className="relative z-30 w-full max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
      {/* Brand title */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-amber-500/30 to-amber-200/10 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,208,97,0.3)]">
          <Sparkles className="w-4 h-4 text-amber-300 animate-spin" style={{ animationDuration: '9s' }} />
        </div>
        <div className="text-left">
          <span className="text-[10px] sm:text-xs uppercase tracking-widest text-amber-200/70 font-cinzel block">
            For My Special Boy
          </span>
          <h2 className="text-xs sm:text-sm font-semibold tracking-wide text-gray-200">
            Cutiepie's Birthday Gala 🎂
          </h2>
        </div>
      </div>

      {/* Primary Actions & Controls */}
      <div className="flex items-center gap-2">
        {/* Quick Restart if not on step 1 */}
        {currentStep > 1 && (
          <button
            onClick={() => {
              sound.playNote(440, 0.2);
              onReset();
            }}
            title="Start from beginning"
            className="p-1.5 sm:px-2.5 sm:py-1 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-neutral-400 hover:text-amber-300 border border-neutral-800 transition-all flex items-center gap-1.5 text-xs"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden md:inline text-[11px]">Restart</span>
          </button>
        )}

        {/* Change Photos helper button */}
        <button
          onClick={() => {
            sound.playNote(587.33, 0.2);
            onOpenPhotoEditor();
          }}
          title="Change Photos in Code or Preview"
          className="px-2.5 py-1.5 sm:px-3 sm:py-1.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-xs text-amber-300/90 border border-amber-400/30 flex items-center gap-1.5 transition-all shadow-sm"
        >
          <ImageIcon className="w-3.5 h-3.5 text-amber-400" />
          <span className="hidden sm:inline text-xs">Edit Photos</span>
        </button>

        {/* Melody Toggle Button */}
        <button
          onClick={onToggleMelody}
          className={`px-3 py-1.5 rounded-full text-xs border flex items-center gap-1.5 transition-all shadow-md ${
            isMelodyPlaying
              ? 'bg-amber-500/20 border-amber-400 text-amber-200 shadow-[0_0_15px_rgba(245,208,97,0.3)] animate-pulse'
              : 'bg-neutral-900/80 hover:bg-neutral-800 text-amber-300/80 border-amber-400/30'
          }`}
        >
          {isMelodyPlaying ? (
            <Volume2 className="w-3.5 h-3.5 text-amber-300" />
          ) : (
            <VolumeX className="w-3.5 h-3.5 text-neutral-400" />
          )}
          <span className="hidden sm:inline font-medium">
            {isMelodyPlaying ? 'Melody On 🎵' : 'Play Melody'}
          </span>
        </button>

        {/* Step Progress Pill */}
        <div className="text-xs text-neutral-400 px-3 py-1.5 rounded-full bg-neutral-900/60 border border-neutral-800 font-mono flex items-center gap-1">
          <span className="text-amber-400 font-bold">{currentStep}</span>
          <span className="text-neutral-500">/</span>
          <span>{totalSteps}</span>
        </div>
      </div>
    </header>
  );
};

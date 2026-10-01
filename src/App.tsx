/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { BIRTHDAY_PHOTOS, BirthdayPhotoConfig } from './config/photos';
import { sound } from './utils/audio';

// Visual Layout Elements
import { BackgroundStars } from './components/BackgroundStars';
import { GlowingMoon } from './components/GlowingMoon';
import { HangingBalloons } from './components/HangingBalloons';
import { HeaderNav } from './components/HeaderNav';
import { PageFooter } from './components/PageFooter';
import { PhotoEditorModal } from './components/PhotoEditorModal';

// 10 Steps
import { Step1Welcome } from './components/steps/Step1Welcome';
import { Step2Enchanted } from './components/steps/Step2Enchanted';
import { Step3SlotMilestone } from './components/steps/Step3SlotMilestone';
import { Step4LoveCards } from './components/steps/Step4LoveCards';
import { Step5BalloonsPop } from './components/steps/Step5BalloonsPop';
import { Step6MemoriesCarousel } from './components/steps/Step6MemoriesCarousel';
import { Step7CandleCake } from './components/steps/Step7CandleCake';
import { Step8Celebration } from './components/steps/Step8Celebration';
import { Step9LoveLetter } from './components/steps/Step9LoveLetter';
import { Step10GiftReveal } from './components/steps/Step10GiftReveal';

export default function App() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const totalSteps = 10;

  // Custom photo configuration state (initialized from src/config/photos.ts)
  const [photos, setPhotos] = useState<BirthdayPhotoConfig>(BIRTHDAY_PHOTOS);
  const [isPhotoEditorOpen, setIsPhotoEditorOpen] = useState<boolean>(false);

  // Audio BGM Melody State
  const [isMelodyPlaying, setIsMelodyPlaying] = useState<boolean>(false);

  // Step Interactive States
  const [hasSpunSlot, setHasSpunSlot] = useState<boolean>(false);
  const [poppedBalloons, setPoppedBalloons] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [blownCandles, setBlownCandles] = useState<boolean[]>([
    false,
    false,
    false,
    false,
    false,
  ]);
  const [isGiftOpened, setIsGiftOpened] = useState<boolean>(false);

  // Scroll to top on step transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  // Audio Toggle
  const handleToggleMelody = () => {
    sound.toggleRomanticBGM((playing) => {
      setIsMelodyPlaying(playing);
    });
  };

  // Pop individual balloon
  const handlePopBalloon = (index: number) => {
    setPoppedBalloons((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  // Blow individual candle
  const handleBlowCandle = (index: number) => {
    setBlownCandles((prev) => {
      const next = [...prev];
      next[index] = true;
      return next;
    });
  };

  // CRITICAL REQUIREMENT: "last la experience it again vr click kela tr repeat start zala pahijel from very beginning ok"
  const handleResetExperience = () => {
    setCurrentStep(1);
    setHasSpunSlot(false);
    setPoppedBalloons([false, false, false, false, false]);
    setBlownCandles([false, false, false, false, false]);
    setIsGiftOpened(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative bg-[#040407] text-white flex flex-col justify-between selection:bg-amber-400 selection:text-black overflow-x-hidden">
      {/* Ambient Celestial Backdrop (Stars & Glowing Moon) */}
      <BackgroundStars />
      <GlowingMoon />

      {/* Floating 3D Hanging Gold & Black Balloons in Top Background */}
      <HangingBalloons />

      {/* Top Header Navigation */}
      <HeaderNav
        currentStep={currentStep}
        totalSteps={totalSteps}
        isMelodyPlaying={isMelodyPlaying}
        onToggleMelody={handleToggleMelody}
        onOpenPhotoEditor={() => setIsPhotoEditorOpen(true)}
        onReset={handleResetExperience}
      />

      {/* Main Dynamic Stage Controller */}
      <main className="relative z-20 flex-1 flex items-center justify-center px-4 py-6 w-full max-w-4xl mx-auto">
        {currentStep === 1 && (
          <Step1Welcome
            photoUrl={photos.welcomePhoto}
            onNext={() => setCurrentStep(2)}
          />
        )}

        {currentStep === 2 && (
          <Step2Enchanted
            photoUrl={photos.enchantedPhoto}
            onNext={() => setCurrentStep(3)}
          />
        )}

        {currentStep === 3 && (
          <Step3SlotMilestone
            hasSpun={hasSpunSlot}
            onSetSpun={setHasSpunSlot}
            onNext={() => setCurrentStep(4)}
          />
        )}

        {currentStep === 4 && (
          <Step4LoveCards onNext={() => setCurrentStep(5)} />
        )}

        {currentStep === 5 && (
          <Step5BalloonsPop
            poppedBalloons={poppedBalloons}
            onPopBalloon={handlePopBalloon}
            onNext={() => setCurrentStep(6)}
          />
        )}

        {currentStep === 6 && (
          <Step6MemoriesCarousel
            memories={photos.memories}
            onNext={() => setCurrentStep(7)}
          />
        )}

        {currentStep === 7 && (
          <Step7CandleCake
            blownCandles={blownCandles}
            onBlowCandle={handleBlowCandle}
            onAllCandlesBlown={() => setCurrentStep(8)}
          />
        )}

        {currentStep === 8 && (
          <Step8Celebration
            photoUrl={photos.celebrationPhoto}
            onNext={() => setCurrentStep(9)}
          />
        )}

        {currentStep === 9 && (
          <Step9LoveLetter
            avatarUrl={photos.letterAvatarPhoto}
            onNext={() => setCurrentStep(10)}
          />
        )}

        {currentStep === 10 && (
          <Step10GiftReveal
            finalPhotoUrl={photos.finalGiftRevealPhoto}
            isGiftOpened={isGiftOpened}
            onOpenGift={() => setIsGiftOpened(true)}
            onExperienceAgain={handleResetExperience}
          />
        )}
      </main>

      {/* Mandatory Footer displayed on EACH page: "Happy birthday love from yours sam 🩷" */}
      <PageFooter />

      {/* Interactive Photo Customizer & Code Guide Modal */}
      <PhotoEditorModal
        isOpen={isPhotoEditorOpen}
        onClose={() => setIsPhotoEditorOpen(false)}
        photos={photos}
        onUpdatePhotos={(updated) => setPhotos(updated)}
      />
    </div>
  );
}

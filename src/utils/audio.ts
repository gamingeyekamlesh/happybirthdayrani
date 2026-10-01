ts
/**
 * Professional Web Audio Sound System for Birthday Gala
 * Background music uses bgm_sam.mp3
 */

class SoundSystem {
  private ctx: AudioContext | null = null;
  private isMuted = false;

  // Background music
  private bgmAudio: HTMLAudioElement | null = null;
  private isBgmPlaying = false;

  private initCtx() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as any).webkitAudioContext;

      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }

    if (this.ctx?.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a single note
  playNote(
    frequency: number,
    duration: number = 0.8,
    type: OscillatorType = 'sine',
    gainVal: number = 0.08
  ) {
    if (this.isMuted) return;

    try {
      this.initCtx();

      if (!this.ctx) return;

      const oscillator = this.ctx.createOscillator();
      const gainNode = this.ctx.createGain();

      oscillator.type = type;
      oscillator.frequency.setValueAtTime(
        frequency,
        this.ctx.currentTime
      );

      gainNode.gain.setValueAtTime(
        gainVal,
        this.ctx.currentTime
      );

      gainNode.gain.exponentialRampToValueAtTime(
        0.0001,
        this.ctx.currentTime + duration
      );

      oscillator.connect(gainNode);
      gainNode.connect(this.ctx.destination);

      oscillator.start();
      oscillator.stop(
        this.ctx.currentTime + duration
      );
    } catch {
      // Ignore audio errors
    }
  }

  // Balloon Pop
  playBalloonPop() {
    if (this.isMuted) return;

    try {
      this.initCtx();

      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      const bufferSize =
        this.ctx.sampleRate * 0.12;

      const buffer =
        this.ctx.createBuffer(
          1,
          bufferSize,
          this.ctx.sampleRate
        );

      const output =
        buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        output[i] =
          (Math.random() * 2 - 1) *
          Math.exp(
            -i /
              (this.ctx.sampleRate * 0.02)
          );
      }

      const noise =
        this.ctx.createBufferSource();

      noise.buffer = buffer;

      const filter =
        this.ctx.createBiquadFilter();

      filter.type = 'lowpass';

      filter.frequency.setValueAtTime(
        1400,
        now
      );

      filter.frequency.linearRampToValueAtTime(
        120,
        now + 0.1
      );

      const noiseGain =
        this.ctx.createGain();

      noiseGain.gain.setValueAtTime(
        0.4,
        now
      );

      noiseGain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.12
      );

      noise.connect(filter);
      filter.connect(noiseGain);
      noiseGain.connect(
        this.ctx.destination
      );

      noise.start(now);

      const oscillator =
        this.ctx.createOscillator();

      const oscillatorGain =
        this.ctx.createGain();

      oscillator.type = 'triangle';

      oscillator.frequency.setValueAtTime(
        260,
        now
      );

      oscillator.frequency.exponentialRampToValueAtTime(
        45,
        now + 0.15
      );

      oscillatorGain.gain.setValueAtTime(
        0.3,
        now
      );

      oscillatorGain.gain.exponentialRampToValueAtTime(
        0.001,
        now + 0.15
      );

      oscillator.connect(oscillatorGain);
      oscillatorGain.connect(
        this.ctx.destination
      );

      oscillator.start(now);

      oscillator.stop(
        now + 0.15
      );

      this.playNote(
        880,
        0.4,
        'sine',
        0.04
      );
    } catch {
      // Ignore audio errors
    }
  }

  // Candle Blow
  playCandleBlow() {
    if (this.isMuted) return;

    try {
      this.initCtx();

      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      const bufferSize =
        this.ctx.sampleRate * 0.25;

      const buffer =
        this.ctx.createBuffer(
          1,
          bufferSize,
          this.ctx.sampleRate
        );

      const data =
        buffer.getChannelData(0);

      for (let i = 0; i < bufferSize; i++) {
        data[i] =
          (Math.random() * 2 - 1) *
          Math.sin(
            (i / bufferSize) * Math.PI
          );
      }

      const source =
        this.ctx.createBufferSource();

      source.buffer = buffer;

      const filter =
        this.ctx.createBiquadFilter();

      filter.type = 'bandpass';

      filter.frequency.setValueAtTime(
        480,
        now
      );

      filter.Q.setValueAtTime(
        2,
        now
      );

      const gain =
        this.ctx.createGain();

      gain.gain.setValueAtTime(
        0.2,
        now
      );

      gain.gain.linearRampToValueAtTime(
        0.01,
        now + 0.25
      );

      source.connect(filter);
      filter.connect(gain);
      gain.connect(
        this.ctx.destination
      );

      source.start(now);

      setTimeout(() => {
        this.playNote(
          1046.5,
          0.5,
          'sine',
          0.05
        );
      }, 100);
    } catch {
      // Ignore audio errors
    }
  }

  // Slot Tick
  playSlotTick() {
    if (this.isMuted) return;

    try {
      this.initCtx();

      if (!this.ctx) return;

      const oscillator =
        this.ctx.createOscillator();

      const gain =
        this.ctx.createGain();

      oscillator.type = 'square';

      oscillator.frequency.setValueAtTime(
        320 + Math.random() * 80,
        this.ctx.currentTime
      );

      gain.gain.setValueAtTime(
        0.03,
        this.ctx.currentTime
      );

      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        this.ctx.currentTime + 0.04
      );

      oscillator.connect(gain);
      gain.connect(
        this.ctx.destination
      );

      oscillator.start();

      oscillator.stop(
        this.ctx.currentTime + 0.04
      );
    } catch {
      // Ignore audio errors
    }
  }

  // Milestone Fanfare
  playMilestoneFanfare() {
    if (this.isMuted) return;

    const notes = [
      523.25,
      659.25,
      783.99,
      1046.5,
      1318.51
    ];

    notes.forEach((frequency, index) => {
      setTimeout(() => {
        this.playNote(
          frequency,
          0.9,
          'triangle',
          0.09
        );
      }, index * 110);
    });
  }

  // Gift Open Flourish
  playGiftOpenFlourish() {
    if (this.isMuted) return;

    const notes = [
      440,
      554.37,
      659.25,
      830.61,
      880,
      1108.73,
      1318.51,
      1661.22
    ];

    notes.forEach((frequency, index) => {
      setTimeout(() => {
        this.playNote(
          frequency,
          1.2,
          'sine',
          0.08
        );
      }, index * 75);
    });
  }

  // =====================================================
  // BACKGROUND MUSIC - bgm_sam.mp3
  // =====================================================

  toggleRomanticBGM(
    onStateChange?: (playing: boolean) => void
  ) {
    if (!this.bgmAudio) {
      this.bgmAudio = new Audio(
        '/audio/bgm_sam.mp3'
      );

      this.bgmAudio.loop = true;
      this.bgmAudio.volume = 0.5;

      this.bgmAudio.addEventListener(
        'ended',
        () => {
          this.isBgmPlaying = false;
          onStateChange?.(false);
        }
      );
    }

    if (this.isBgmPlaying) {
      this.bgmAudio.pause();
      this.bgmAudio.currentTime = 0;

      this.isBgmPlaying = false;

      onStateChange?.(false);

      return false;
    }

    this.bgmAudio
      .play()
      .then(() => {
        this.isBgmPlaying = true;
        onStateChange?.(true);
      })
      .catch((error) => {
        console.error(
          'Unable to play bgm_sam.mp3:',
          error
        );

        this.isBgmPlaying = false;
        onStateChange?.(false);
      });

    return true;
  }

  isBgmActive() {
    return this.isBgmPlaying;
  }
}

export const sound = new SoundSystem();

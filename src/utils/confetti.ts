import confetti from 'canvas-confetti';

export function fireGoldenConfetti() {
  confetti({
    particleCount: 75,
    spread: 70,
    origin: { y: 0.6 },
    colors: ['#f6d365', '#fda085', '#ffffff', '#e5e7eb', '#d97706'],
    disableForReducedMotion: true,
  });
}

export function fireBalloonPopConfetti(x = 0.5, y = 0.5) {
  confetti({
    particleCount: 30,
    spread: 55,
    startVelocity: 25,
    origin: { x, y },
    colors: ['#f5d061', '#ffffff', '#27272a', '#fbbf24'],
    disableForReducedMotion: true,
  });
}

export function fireFullPartyCelebration() {
  const duration = 2.8 * 1000;
  const animationEnd = Date.now() + duration;
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 999 };

  const interval: number = window.setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
      return;
    }
    const particleCount = 40 * (timeLeft / duration);
    confetti({
      ...defaults,
      particleCount,
      origin: { x: Math.random() * 0.4 + 0.1, y: Math.random() - 0.2 },
      colors: ['#f6d365', '#ffd700', '#ffffff', '#f43f5e', '#ec4899'],
    });
    confetti({
      ...defaults,
      particleCount,
      origin: { x: Math.random() * 0.4 + 0.5, y: Math.random() - 0.2 },
      colors: ['#f6d365', '#10b981', '#6366f1', '#fbbf24', '#ffffff'],
    });
  }, 220);
}

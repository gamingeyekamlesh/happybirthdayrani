/**
 * =====================================================================
 * 📸 PHOTO & CONTENT CONFIGURATION / फोटो बदलायची जागा
 * =====================================================================
 * Bhai, ithe tuze sagle 10 photos map kele ahet:
 * - photo1.jpeg: Welcome Screen & Memory 1
 * - photo2.jpeg: Temple Blessing Memory
 * - photo3.jpeg: Mountain View Memory
 * - photo4.jpeg: Sunset Beach Memory
 * - photo5.jpeg: Night Embrace & Love Letter Avatar
 * - photo6.jpeg: City Street Lights & Celebration Screen
 * - photo7.jpeg: Cozy Dinner Laughter Memory
 * - photo8.jpeg: Sunny Day Love & Enchanted Arch Screen
 * - photo10.jpeg: Purple Neon Night & Grand Final Gift Reveal
 * - photo11.jpeg: Lalbaugcha Raja Darshan Memory
 * =====================================================================
 */

export interface BirthdayPhotoConfig {
  welcomePhoto: string;
  enchantedPhoto: string;
  memories: Array<{
    id: number;
    title: string;
    description: string;
    badge: string;
    imageUrl: string;
  }>;
  celebrationPhoto: string;
  letterAvatarPhoto: string;
  finalGiftRevealPhoto: string;
}

export const BIRTHDAY_PHOTOS: BirthdayPhotoConfig = {
  // 1. Welcome Screen Photo: photo1.jpeg (Red dress & white shirt couple portrait)
  welcomePhoto: '/src/img/photo1.jpeg',

  // 2. Enchanted Arch Screen: photo8.jpeg (Smiling lovingly into each other's eyes)
  enchantedPhoto: '/src/img/photo8.jpeg',

  // 3. Cute Memories Gallery (Using the couple's real moments)
  memories: [
    {
      id: 1,
      badge: 'Memory 1',
      title: 'Divine Temple Blessings',
      description: 'At the holy shrine with golden dome, seeking eternal happiness, blessings, and lifelong togetherness.',
      imageUrl: '/src/img/photo2.jpeg',
    },
    {
      id: 2,
      badge: 'Memory 2',
      title: 'Endless Mountain Horizons',
      description: 'Sitting side by side on the cliff edge, gazing across the green hills and dreaming about our beautiful future.',
      imageUrl: '/src/img/photo3.jpeg',
    },
    {
      id: 3,
      badge: 'Memory 3',
      title: 'Ocean Sunset Magic',
      description: 'Cool sea breeze, purple twilight sky, and sunglasses — walking hand in hand along the shoreline.',
      imageUrl: '/src/img/photo4.jpeg',
    },
    {
      id: 4,
      badge: 'Memory 4',
      title: 'Uncontrollable Laughter & Dinner',
      description: 'Wrapped warmly in a shawl, sharing funny jokes, silly giggles, and delicious food under the night sky.',
      imageUrl: '/src/img/photo7.jpeg',
    },
    {
      id: 5,
      badge: 'Memory 5',
      title: 'Lalbaugcha Raja Darshan',
      description: 'Surrounded by the grand festive celebration and divine aura, offering heartfelt prayers for our forever bond.',
      imageUrl: '/src/img/photo11.jpeg',
    },
  ],

  // 4. Celebration Screen Photo: photo6.jpeg (City street lights smile)
  celebrationPhoto: '/src/img/photo6.jpeg',

  // 5. Letter Screen Avatar: photo5.jpeg (Safe warm night embrace)
  letterAvatarPhoto: '/src/img/photo5.jpeg',

  // 6. Final Gift Reveal Photo: photo10.jpeg (Romantic moment under purple neon lights)
  finalGiftRevealPhoto: '/src/img/photo10.jpeg',
};

export const GLOBAL_FOOTER_TEXT = 'Happy birthday love from yours sam 🩷';

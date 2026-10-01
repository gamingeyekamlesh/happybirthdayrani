import React, { useState } from 'react';
import { X, Check, Code, ExternalLink, RefreshCw } from 'lucide-react';
import { BirthdayPhotoConfig, BIRTHDAY_PHOTOS } from '../config/photos';

interface PhotoEditorModalProps {
  isOpen: boolean;
  onClose: () => void;
  photos: BirthdayPhotoConfig;
  onUpdatePhotos: (updated: BirthdayPhotoConfig) => void;
}

export const PhotoEditorModal: React.FC<PhotoEditorModalProps> = ({
  isOpen,
  onClose,
  photos,
  onUpdatePhotos,
}) => {
  const [localPhotos, setLocalPhotos] = useState<BirthdayPhotoConfig>(photos);
  const [activeTab, setActiveTab] = useState<'preview_edit' | 'code_guide'>('preview_edit');
  const [savedNotice, setSavedNotice] = useState(false);

  if (!isOpen) return null;

  const handleSave = () => {
    onUpdatePhotos(localPhotos);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 2000);
  };

  const handleResetDefaults = () => {
    setLocalPhotos(BIRTHDAY_PHOTOS);
    onUpdatePhotos(BIRTHDAY_PHOTOS);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-neutral-900 border border-amber-400/40 rounded-3xl p-6 overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
          <div>
            <span className="text-xs uppercase tracking-widest text-amber-400 font-cinzel">
              Photo Management
            </span>
            <h3 className="text-xl font-bold text-white font-cinzel">
              Change & Customize Photos 📸
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-white rounded-full bg-neutral-800 hover:bg-neutral-700 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 my-3">
          <button
            onClick={() => setActiveTab('preview_edit')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
              activeTab === 'preview_edit'
                ? 'bg-amber-400 text-neutral-950 shadow-md'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            Live Photo Customizer
          </button>
          <button
            onClick={() => setActiveTab('code_guide')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition ${
              activeTab === 'code_guide'
                ? 'bg-amber-400 text-neutral-950 shadow-md'
                : 'bg-neutral-800 text-neutral-300 hover:bg-neutral-700'
            }`}
          >
            <Code className="w-3.5 h-3.5" />
            Code Change Guide (`src/config/photos.ts`)
          </button>
        </div>

        {/* Body content */}
        <div className="flex-1 overflow-y-auto pr-2 space-y-4 my-2 text-left custom-scroll">
          {activeTab === 'preview_edit' ? (
            <div className="space-y-4">
              <p className="text-xs text-neutral-300">
                You can test different image links right here, or open the file{' '}
                <code className="bg-neutral-950 px-2 py-0.5 rounded text-amber-300">
                  src/config/photos.ts
                </code>{' '}
                in your editor to permanently replace them in code!
              </p>

              {/* Welcome Screen Photo */}
              <div className="bg-neutral-950/60 p-3.5 rounded-2xl border border-neutral-800">
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  1. Screen 1 - Welcome Photo (पहिला फोटो)
                </label>
                <div className="flex gap-3 items-center">
                  <img
                    src={localPhotos.welcomePhoto}
                    alt="Welcome preview"
                    className="w-14 h-14 rounded-xl object-cover border border-amber-400/30"
                  />
                  <input
                    type="text"
                    value={localPhotos.welcomePhoto}
                    onChange={(e) =>
                      setLocalPhotos({ ...localPhotos, welcomePhoto: e.target.value })
                    }
                    className="flex-1 text-xs bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                    placeholder="https://example.com/photo.jpg"
                  />
                </div>
              </div>

              {/* Enchanted Photo */}
              <div className="bg-neutral-950/60 p-3.5 rounded-2xl border border-neutral-800">
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  2. Screen 2 - Enchanted Circle Photo (दुसऱ्या स्क्रीनचा गोल फोटो)
                </label>
                <div className="flex gap-3 items-center">
                  <img
                    src={localPhotos.enchantedPhoto}
                    alt="Enchanted preview"
                    className="w-14 h-14 rounded-full object-cover border border-amber-400/30"
                  />
                  <input
                    type="text"
                    value={localPhotos.enchantedPhoto}
                    onChange={(e) =>
                      setLocalPhotos({ ...localPhotos, enchantedPhoto: e.target.value })
                    }
                    className="flex-1 text-xs bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* 5 Memories Photos */}
              <div className="bg-neutral-950/60 p-3.5 rounded-2xl border border-neutral-800 space-y-3">
                <label className="block text-xs font-semibold text-amber-300">
                  3. Screen 6 - 5 Cute Memories Photos (आठवणींचे ५ फोटो)
                </label>
                {localPhotos.memories.map((m, idx) => (
                  <div key={m.id} className="flex gap-3 items-center">
                    <img
                      src={m.imageUrl}
                      alt={m.title}
                      className="w-12 h-12 rounded-xl object-cover border border-amber-400/30 shrink-0"
                    />
                    <div className="flex-1 space-y-1">
                      <span className="text-[11px] text-neutral-400 font-medium">
                        {m.badge} - {m.title}
                      </span>
                      <input
                        type="text"
                        value={m.imageUrl}
                        onChange={(e) => {
                          const updated = [...localPhotos.memories];
                          updated[idx] = { ...updated[idx], imageUrl: e.target.value };
                          setLocalPhotos({ ...localPhotos, memories: updated });
                        }}
                        className="w-full text-xs bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-1.5 text-white focus:border-amber-400 focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Celebration Photo */}
              <div className="bg-neutral-950/60 p-3.5 rounded-2xl border border-neutral-800">
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  4. Screen 8 - Celebration Party Photo (पार्टी स्क्रीनचा फोटो)
                </label>
                <div className="flex gap-3 items-center">
                  <img
                    src={localPhotos.celebrationPhoto}
                    alt="Celebration preview"
                    className="w-14 h-14 rounded-xl object-cover border border-amber-400/30"
                  />
                  <input
                    type="text"
                    value={localPhotos.celebrationPhoto}
                    onChange={(e) =>
                      setLocalPhotos({ ...localPhotos, celebrationPhoto: e.target.value })
                    }
                    className="flex-1 text-xs bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>

              {/* Final Gift Reveal Photo */}
              <div className="bg-neutral-950/60 p-3.5 rounded-2xl border border-neutral-800">
                <label className="block text-xs font-semibold text-amber-300 mb-1">
                  5. Screen 10 - Grand Gift Reveal Photo (शेवटचा गिफ्ट उघडल्यावरचा फोटो)
                </label>
                <div className="flex gap-3 items-center">
                  <img
                    src={localPhotos.finalGiftRevealPhoto}
                    alt="Final gift preview"
                    className="w-14 h-14 rounded-xl object-cover border border-amber-400/30"
                  />
                  <input
                    type="text"
                    value={localPhotos.finalGiftRevealPhoto}
                    onChange={(e) =>
                      setLocalPhotos({ ...localPhotos, finalGiftRevealPhoto: e.target.value })
                    }
                    className="flex-1 text-xs bg-neutral-900 border border-neutral-700 rounded-xl px-3 py-2 text-white focus:border-amber-400 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          ) : (
            <div className="p-4 bg-neutral-950 rounded-2xl border border-neutral-800 space-y-4 text-xs text-neutral-300">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                <ExternalLink className="w-4 h-4" />
                <span>Code मध्ये Photos कसे बदलायचे? (How to change in code)</span>
              </div>
              <p>
                Bhai, तुझा code एकदम clear आणि clean बनवला आहे. तुला फक्त या एकाच file मध्ये
                जाऊन फोटो links बदलायच्या आहेत:
              </p>
              <div className="bg-neutral-900 p-3 rounded-xl border border-amber-400/30 font-mono text-amber-300">
                📁 File Path: <span className="text-white">src/config/photos.ts</span>
              </div>
              <p className="leading-relaxed">
                त्या file मध्ये प्रत्येक स्क्रीनसाठी clear headings आणि comments दिले आहेत. तू तुझे
                फोटो URLs किंवा Google Photos / Cloudinary / direct links तिथे paste करू शकतोस.
              </p>
              <div className="bg-neutral-900 p-3 rounded-xl border border-neutral-800 font-mono text-[11px] text-neutral-400 space-y-1">
                <p className="text-emerald-400">// उदाहरणार्थ (Example):</p>
                <p>welcomePhoto: 'YOUR_NEW_IMAGE_URL_HERE',</p>
                <p>finalGiftRevealPhoto: 'YOUR_FINAL_IMAGE_URL_HERE',</p>
              </div>
            </div>
          )}
        </div>

        {/* Footer controls */}
        <div className="flex items-center justify-between pt-4 border-t border-neutral-800">
          <button
            onClick={handleResetDefaults}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Reset Defaults</span>
          </button>

          <div className="flex items-center gap-2">
            {savedNotice && (
              <span className="text-xs text-emerald-400 flex items-center gap-1 font-semibold animate-pulse">
                <Check className="w-3.5 h-3.5" /> Applied!
              </span>
            )}
            <button
              onClick={handleSave}
              className="px-6 py-2 rounded-full text-xs font-semibold text-neutral-950 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-200 hover:to-amber-400 shadow-md transition"
            >
              Apply Changes
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-full text-xs font-medium text-neutral-300 hover:text-white bg-neutral-800 hover:bg-neutral-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

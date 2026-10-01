import React, { useMemo } from 'react';

export const BackgroundStars: React.FC = () => {
  const stars = useMemo(() => {
    const list = [];
    const count = 75;
    for (let i = 0; i < count; i++) {
      const size = Math.random() * 2.5 + 1;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 4;
      const isGold = Math.random() > 0.65;
      list.push({ id: i, size, top, left, duration, delay, isGold });
    }
    return list;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={
            {
              width: `${s.size}px`,
              height: `${s.size}px`,
              top: `${s.top}%`,
              left: `${s.left}%`,
              background: s.isGold ? '#f5d061' : '#ffffff',
              boxShadow: s.isGold ? '0 0 10px 2px rgba(245, 208, 97, 0.7)' : '0 0 8px 2px rgba(255, 255, 255, 0.6)',
              '--duration': `${s.duration}s`,
              '--delay': `${s.delay}s`,
            } as React.CSSProperties
          }
        />
      ))}
    </div>
  );
};

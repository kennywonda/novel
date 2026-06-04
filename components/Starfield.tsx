'use client';

import { useEffect, useState } from 'react';

export default function Starfield() {
  const [stars, setStars] = useState<Array<{
    id: number; top: string; left: string;
    size: number; duration: string; delay: string;
  }>>([]);

  useEffect(() => {
    setStars(
      Array.from({ length: 120 }, (_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 2.5 + 0.5,
        duration: `${Math.random() * 4 + 2}s`,
        delay: `${Math.random() * 5}s`,
      }))
    );
  }, []);

  return (
    <div className="starfield">
      {stars.map((s) => (
        <div
          key={s.id}
          className="star"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            '--duration': s.duration,
            '--delay': s.delay,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}

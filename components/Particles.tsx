'use client';

import { useEffect, useState } from 'react';

const SYMBOLS = ['✦', '♥', '✧', '❋', '✿', '♡'];

export default function Particles() {
  const [particles, setParticles] = useState<Array<{
    id: number; symbol: string; left: string;
    duration: string; delay: string; size: string; opacity: number;
  }>>([]);

  useEffect(() => {
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        symbol: SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)],
        left: `${Math.random() * 100}%`,
        duration: `${Math.random() * 10 + 8}s`,
        delay: `${Math.random() * 10}s`,
        size: `${Math.random() * 0.8 + 0.6}rem`,
        opacity: Math.random() * 0.4 + 0.15,
      }))
    );
  }, []);

  return (
    <>
      {particles.map((p) => (
        <span
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            '--duration': p.duration,
            '--delay': p.delay,
            '--size': p.size,
            opacity: p.opacity,
            color: p.symbol === '♥' || p.symbol === '♡' ? '#e8a0b0' : '#c9a84c',
          } as React.CSSProperties}
        >
          {p.symbol}
        </span>
      ))}
    </>
  );
}

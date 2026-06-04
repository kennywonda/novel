'use client';

import { useEffect, useRef, useState } from 'react';

export default function MusicPlayer() {
  const howlRef = useRef<any>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    import('howler').then(({ Howl }) => {
      howlRef.current = new Howl({
        src: ['/music/romantic-bg.mp3'],
        loop: true,
        volume: 0,
        onload: () => {
          setReady(true);
          // Autoplay with fade in
          howlRef.current.play();
          howlRef.current.fade(0, 0.3, 1500);
          setPlaying(true);
        },
      });
    });

    return () => {
      howlRef.current?.unload();
    };
  }, []);

  const toggle = () => {
    const h = howlRef.current;
    if (!h) return;

    if (playing) {
      h.fade(0.3, 0, 800);
      setTimeout(() => h.pause(), 800);
      setPlaying(false);
    } else {
      h.play();
      h.fade(0, 0.3, 1200);
      setPlaying(true);
    }
  };

  if (!ready) return null;

  return (
    <button
      onClick={toggle}
      title={playing ? 'Mute music' : 'Play music'}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 50,
        background: 'rgba(10,10,26,0.8)',
        border: '1px solid rgba(201,168,76,0.4)',
        borderRadius: '50%',
        width: '44px',
        height: '44px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        fontSize: '1.2rem',
        backdropFilter: 'blur(8px)',
        transition: 'border-color 0.3s',
      }}
    >
      {playing ? '🎵' : '🔇'}
    </button>
  );
}

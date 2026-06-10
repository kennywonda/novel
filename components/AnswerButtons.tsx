'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AnswerButtonsProps {
  onYes: () => void;
  onLater: () => void;
}

function randomPos() {
  return {
    top: `${10 + Math.random() * 70}vh`,
    left: `${5 + Math.random() * 70}vw`,
  };
}

export default function AnswerButtons({ onYes, onLater }: AnswerButtonsProps) {
  const [hoverCount, setHoverCount] = useState(0);
  const [pos, setPos] = useState<{ top: string; left: string } | null>(null);
  const [showShocked, setShowShocked] = useState(false);

  const unlocked = hoverCount >= 5;

  const handleLaterHover = () => {
    if (unlocked) return;
    const next = hoverCount + 1;
    setHoverCount(next);
    setShowShocked(true);
    setTimeout(() => setShowShocked(false), 900);
    if (next < 5) {
      setPos(randomPos());
    } else {
      setPos(null);
    }
  };

  const handleLaterClick = () => {
    if (unlocked) {
      onLater();
      return;
    }

    handleLaterHover();
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      style={{ display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', maxWidth: '340px' }}
    >
      <motion.button
        whileHover={{ scale: 1.04, boxShadow: '0 12px 40px rgba(201,168,76,0.4)' }}
        whileTap={{ scale: 0.97 }}
        onClick={onYes}
        style={{
          background: 'linear-gradient(135deg, #2d7d4e, #3ea564)',
          color: '#ffffff',
          fontFamily: 'var(--font-playfair)',
          fontWeight: 700,
          fontSize: '1.1rem',
          border: 'none',
          borderRadius: '50px',
          padding: '18px 32px',
          cursor: 'pointer',
          boxShadow: '0 8px 24px rgba(45,125,78,0.3)',
        }}
      >
        💚 Yes, I'd love to
      </motion.button>

      <div style={{ position: 'relative', display: 'inline-block' }}>
        <AnimatePresence>
          {showShocked && (
            <motion.span
              key={hoverCount}
              initial={{ opacity: 0, scale: 0.4, y: 0 }}
              animate={{ opacity: 1, scale: 1.3, y: -40, rotate: [0, -15, 15, -10, 0] }}
              exit={{ opacity: 0, y: -60, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              style={{
                position: 'absolute',
                top: '-10px',
                left: '50%',
                transform: 'translateX(-50%)',
                fontSize: '2rem',
                pointerEvents: 'none',
                zIndex: 99999,
                display: 'block',
              }}
            >
              😱
            </motion.span>
          )}
        </AnimatePresence>

        <motion.button
          onHoverStart={handleLaterHover}
          onClick={handleLaterClick}
          className="btn-outline"
          animate={pos ? { position: 'fixed', top: pos.top, left: pos.left } : { position: 'relative', top: 'auto', left: 'auto' }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            cursor: unlocked ? 'pointer' : 'default',
            zIndex: pos ? 9999 : 'auto',
          }}
        >
          ❤️ Am sorry kenny, maybe later
        </motion.button>
      </div>
    </motion.div>
  );
}

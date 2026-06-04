'use client';

import { motion } from 'framer-motion';

interface AnswerButtonsProps {
  onYes: () => void;
  onLater: () => void;
}

export default function AnswerButtons({ onYes, onLater }: AnswerButtonsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        width: '100%',
        maxWidth: '340px',
      }}
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
          transition: 'all 0.3s ease',
          boxShadow: '0 8px 24px rgba(45,125,78,0.3)',
        }}
      >
        💚 Yes, I'd love to
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        onClick={onLater}
        className="btn-outline"
      >
        ❤️ Ask me again later
      </motion.button>
    </motion.div>
  );
}

'use client';

import { motion } from 'framer-motion';

interface StoryPageProps {
  chapterNum: number;
  title: string;
  paragraphs: string[];
  nextLabel: string;
  onNext: () => void;
}

export default function StoryPage({ chapterNum, title, paragraphs, nextLabel, onNext }: StoryPageProps) {
  return (
    <motion.div
      key="story"
      initial={{ opacity: 0, rotateY: -8, x: -30 }}
      animate={{ opacity: 1, rotateY: 0, x: 0 }}
      exit={{ opacity: 0, x: 30 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      style={{
        maxWidth: '620px',
        width: '100%',
        padding: '48px 40px',
        background: 'linear-gradient(160deg, rgba(26,16,53,0.95) 0%, rgba(14,10,40,0.97) 100%)',
        border: '1px solid rgba(201,168,76,0.25)',
        borderRadius: '16px',
        boxShadow: '0 0 80px rgba(201,168,76,0.08), 0 0 160px rgba(201,168,76,0.04)',
        margin: '40px 24px',
      }}
    >
      {/* Chapter header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <span
          className="text-gold font-title"
          style={{ fontSize: '0.75rem', letterSpacing: '0.2em', opacity: 0.7 }}
        >
          CHAPTER {chapterNum}
        </span>

        <h2
          className="font-title text-gold-gradient"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)', marginTop: '8px', marginBottom: '20px' }}
        >
          {title}
        </h2>

        <div className="gold-divider" />
      </div>

      {/* Story paragraphs */}
      <div style={{ marginBottom: '40px' }}>
        {paragraphs.map((para, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.2, duration: 0.6 }}
            className="font-story"
            style={{
              color: 'rgba(248,244,232,0.88)',
              fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
              lineHeight: 2,
              marginBottom: i < paragraphs.length - 1 ? '20px' : 0,
            }}
          >
            {para}
          </motion.p>
        ))}
      </div>

      {/* Divider */}
      <div className="gold-divider" style={{ marginBottom: '32px' }} />

      {/* Next button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 + paragraphs.length * 0.2 + 0.3 }}
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          onClick={onNext}
          className="btn-gold"
        >
          {nextLabel}
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

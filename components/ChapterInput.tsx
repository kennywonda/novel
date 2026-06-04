'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ChapterInputProps {
  chapterNum: number;
  title: string;
  prompt: string;
  onSubmit: (value: string) => void;
}

export default function ChapterInput({ chapterNum, title, prompt, onSubmit }: ChapterInputProps) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (!value.trim()) {
      setError('Please share your answer to continue ✨');
      return;
    }
    onSubmit(value.trim());
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex flex-col items-center text-center px-6"
      style={{ maxWidth: '480px', width: '100%' }}
    >
      {/* Chapter badge */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
        style={{
          background: 'rgba(201,168,76,0.12)',
          border: '1px solid rgba(201,168,76,0.4)',
          borderRadius: '50px',
          padding: '6px 20px',
          marginBottom: '24px',
        }}
      >
        <span className="text-gold font-title" style={{ fontSize: '0.8rem', letterSpacing: '0.15em' }}>
          CHAPTER {chapterNum}
        </span>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="font-title text-gold-gradient mb-3"
        style={{ fontSize: 'clamp(1.6rem, 4vw, 2.2rem)' }}
      >
        {title}
      </motion.h2>

      <div className="gold-divider mb-6" />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="font-story mb-8"
        style={{ color: 'rgba(248,244,232,0.65)', fontSize: '1.15rem', lineHeight: 1.8 }}
      >
        Before this chapter reveals itself,<br />
        I have a question for you...
        <br /><br />
        <span style={{ color: 'rgba(248,244,232,0.9)' }}>{prompt}</span>
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        style={{ width: '100%' }}
      >
        <input
          className="input-gold mb-2"
          type="text"
          placeholder="Your answer..."
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(''); }}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          autoFocus
        />

        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ color: '#e8a0b0', fontSize: '0.85rem', marginBottom: '8px' }}
          >
            {error}
          </motion.p>
        )}

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={handleSubmit}
          className="btn-gold mt-4"
          style={{ width: '100%' }}
        >
          Reveal the Chapter →
        </motion.button>
      </motion.div>
    </motion.div>
  );
}

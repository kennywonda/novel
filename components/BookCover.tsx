'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStoryStore } from '@/lib/store';
import { sendNotification } from '@/lib/email';

interface BookCoverProps {
  onOpen: () => void;
}

export default function BookCover({ onOpen }: BookCoverProps) {
  const [stage, setStage] = useState<'cover' | 'name'>('cover');
  const [nameInput, setNameInput] = useState('');
  const [error, setError] = useState('');
  const setAnswer = useStoryStore((s) => s.setAnswer);

  const handleOpenBook = () => setStage('name');

  const handleStart = async () => {
    const name = nameInput.trim();
    if (!name) {
      setError('Please enter your name to begin ✨');
      return;
    }
    setAnswer('name', name);
    await sendNotification({
      event: 'book_opened',
      name,
      timestamp: new Date().toISOString(),
    });
    onOpen();
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen">
      <AnimatePresence mode="wait">
        {stage === 'cover' ? (
          <motion.div
            key="cover"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, rotateY: -15 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="flex flex-col items-center text-center px-6"
          >
            {/* Book */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="relative mb-10"
            >
              <div
                className="book-glow rounded-2xl flex flex-col items-center justify-center"
                style={{
                  width: '220px',
                  height: '290px',
                  background: 'linear-gradient(160deg, #1a1035 0%, #0e0a28 60%, #1a0e2e 100%)',
                  border: '2px solid rgba(201,168,76,0.5)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Spine line */}
                <div style={{
                  position: 'absolute',
                  left: '18px',
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: 'rgba(201,168,76,0.3)',
                }} />

                {/* Decorative corner ornaments */}
                {['top-3 left-5', 'top-3 right-3', 'bottom-3 left-5', 'bottom-3 right-3'].map((pos) => (
                  <span
                    key={pos}
                    className={`absolute ${pos} text-gold`}
                    style={{ fontSize: '0.65rem', opacity: 0.6 }}
                  >✦</span>
                ))}

                <div className="gold-divider mb-4" style={{ width: '60px' }} />
                <p className="text-gold-gradient font-title text-xs tracking-widest uppercase mb-3">
                  Once Upon a You
                </p>
                <span style={{ fontSize: '2.5rem' }}>📖</span>
                <p
                  className="font-story mt-3"
                  style={{ color: 'rgba(248,244,232,0.5)', fontSize: '0.75rem' }}
                >
                  A story for you
                </p>
                <div className="gold-divider mt-4" style={{ width: '60px' }} />
              </div>
            </motion.div>

            {/* Title text */}
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-gold-gradient font-title mb-3"
              style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', lineHeight: 1.2 }}
            >
              Once Upon a You
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="font-story mb-10"
              style={{ color: 'rgba(248,244,232,0.6)', fontSize: '1.1rem' }}
            >
              A fairy tale written just for you
            </motion.p>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleOpenBook}
              className="btn-gold"
            >
              Open the Book ✨
            </motion.button>
          </motion.div>

        ) : (
          <motion.div
            key="name"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="flex flex-col items-center text-center px-6"
            style={{ maxWidth: '420px', width: '100%' }}
          >
            <span style={{ fontSize: '2.5rem', marginBottom: '16px' }}>🌟</span>

            <h2
              className="font-title text-gold-gradient mb-2"
              style={{ fontSize: 'clamp(1.5rem, 4vw, 2rem)' }}
            >
              Before we begin...
            </h2>

            <p
              className="font-story mb-8"
              style={{ color: 'rgba(248,244,232,0.65)', fontSize: '1.05rem', lineHeight: 1.7 }}
            >
              Every great story needs its hero.<br />
              What is your name?
            </p>

            <div className="gold-divider mb-8" />

            <input
              className="input-gold mb-2"
              type="text"
              placeholder="Your name..."
              value={nameInput}
              onChange={(e) => { setNameInput(e.target.value); setError(''); }}
              onKeyDown={(e) => e.key === 'Enter' && handleStart()}
              autoFocus
            />

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                style={{ color: '#e8a0b0', fontSize: '0.85rem', marginBottom: '12px' }}
              >
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleStart}
              className="btn-gold mt-4"
              style={{ width: '100%' }}
            >
              Begin My Story →
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

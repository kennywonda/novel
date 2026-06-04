'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useStoryStore } from '@/lib/store';
import { getFinalChapter } from '@/lib/story';
import { sendNotification } from '@/lib/email';
import Starfield from '@/components/Starfield';
import Particles from '@/components/Particles';
import MusicPlayer from '@/components/MusicPlayer';
import AnswerButtons from '@/components/AnswerButtons';

export default function FinalePage() {
  const router = useRouter();
  const answers = useStoryStore((s) => s.answers);
  const [answered, setAnswered] = useState<'yes' | 'later' | null>(null);

  useEffect(() => {
    if (!answers.name) {
      router.push('/');
    }
  }, [answers.name, router]);

  const handleYes = async () => {
    await sendNotification({
      event: 'she_said_yes',
      name: answers.name,
      timestamp: new Date().toISOString(),
    });
    setAnswered('yes');
  };

  const handleLater = async () => {
    await sendNotification({
      event: 'ask_later',
      name: answers.name,
      timestamp: new Date().toISOString(),
    });
    setAnswered('later');
  };

  const finalText = getFinalChapter(answers.name);

  return (
    <>
      <Starfield />
      <Particles />
      <MusicPlayer />

      <main
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
          padding: '40px 24px',
        }}
      >
        <AnimatePresence mode="wait">
          {!answered ? (
            <motion.div
              key="question"
              initial={{ opacity: 0, rotateY: -8, x: -30 }}
              animate={{ opacity: 1, rotateY: 0, x: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{
                maxWidth: '580px',
                width: '100%',
                padding: '48px 40px',
                background: 'linear-gradient(160deg, rgba(26,16,53,0.95) 0%, rgba(14,10,40,0.97) 100%)',
                border: '1px solid rgba(201,168,76,0.25)',
                borderRadius: '16px',
                boxShadow: '0 0 80px rgba(201,168,76,0.08)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
              }}
            >
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                style={{ fontSize: '3rem', marginBottom: '24px' }}
              >
                💌
              </motion.span>

              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="font-title text-gold-gradient mb-6"
                style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}
              >
                The Question
              </motion.h1>

              <div className="gold-divider mb-8" />

              <div style={{ marginBottom: '40px' }}>
                {finalText.map((para, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + i * 0.15, duration: 0.6 }}
                    className="font-story"
                    style={{
                      color: 'rgba(248,244,232,0.88)',
                      fontSize: 'clamp(1rem, 2.5vw, 1.1rem)',
                      lineHeight: 2,
                      marginBottom: i < finalText.length - 1 ? '16px' : 0,
                    }}
                  >
                    {para}
                  </motion.p>
                ))}
              </div>

              <div className="gold-divider mb-8" style={{ width: '120px' }} />

              <AnswerButtons onYes={handleYes} onLater={handleLater} />
            </motion.div>
          ) : answered === 'yes' ? (
            <motion.div
              key="yes"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{
                maxWidth: '500px',
                textAlign: 'center',
                padding: '40px 24px',
              }}
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 0.6, times: [0, 0.5, 1] }}
                style={{ fontSize: '5rem', marginBottom: '24px' }}
              >
                🎉
              </motion.div>

              <h2
                className="font-title text-gold-gradient mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
              >
                She said YES! 💛
              </h2>

              <p
                className="font-story"
                style={{ color: 'rgba(248,244,232,0.8)', fontSize: '1.2rem', lineHeight: 2 }}
              >
                This is the beginning of something beautiful.<br />
                I'll reach out soon. Thank you for reading, {answers.name}. ✨
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="gold-divider mt-8" />
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="later"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              style={{
                maxWidth: '500px',
                textAlign: 'center',
                padding: '40px 24px',
              }}
            >
              <span style={{ fontSize: '3.5rem', marginBottom: '20px', display: 'block' }}>💭</span>

              <h2
                className="font-title text-gold-gradient mb-4"
                style={{ fontSize: 'clamp(1.8rem, 5vw, 2.5rem)' }}
              >
                That's okay, {answers.name}
              </h2>

              <p
                className="font-story"
                style={{ color: 'rgba(248,244,232,0.8)', fontSize: '1.15rem', lineHeight: 2 }}
              >
                Thank you for reading the whole story.<br />
                That alone means something to me. 💛
                <br /><br />
                Maybe one day, when the timing feels right.
              </p>

              <div className="gold-divider mt-8" />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

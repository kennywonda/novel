'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';
import { useStoryStore } from '@/lib/store';
import { chapters } from '@/lib/story';
import { sendNotification } from '@/lib/email';
import Starfield from '@/components/Starfield';
import Particles from '@/components/Particles';
import MusicPlayer from '@/components/MusicPlayer';
import ChapterInput from '@/components/ChapterInput';
import StoryPage from '@/components/StoryPage';
import ProgressDots from '@/components/ProgressDots';

export default function ChapterPage() {
  const router = useRouter();
  const params = useParams();
  const chapterId = parseInt(params.id as string);
  const chapter = chapters.find((c) => c.id === chapterId);

  const { answers, setAnswer } = useStoryStore();
  const [view, setView] = useState<'input' | 'story'>('input');
  const [notified, setNotified] = useState(false);
  const [hasCheckedInput, setHasCheckedInput] = useState(false);

  // Redirect if invalid chapter or missing name
  useEffect(() => {
    if (!chapter || !answers.name) {
      router.push('/');
    }
  }, [chapter, answers.name, router]);

  // Send notification when chapter loads
  useEffect(() => {
    if (chapter && answers.name && !notified) {
      const eventMap: Record<number, 'chapter_1_started' | 'chapter_2_started' | 'chapter_3_started' | 'chapter_4_started'> = {
        1: 'chapter_1_started',
        2: 'chapter_2_started',
        3: 'chapter_3_started',
        4: 'chapter_4_started',
      };

      const event = eventMap[chapterId];
      if (event) {
        sendNotification({
          event,
          name: answers.name,
          timestamp: new Date().toISOString(),
        });
        setNotified(true);
      }
    }
  }, [chapter, answers.name, chapterId, notified]);

  // Check if input already provided — skip straight to story (only check once on mount)
  useEffect(() => {
    if (!hasCheckedInput && chapter?.inputKey && answers[chapter.inputKey]) {
      setView('story');
      setHasCheckedInput(true);
    }
  }, [chapter, answers, hasCheckedInput]);

  if (!chapter) return null;

  const handleInputSubmit = (value: string) => {
    if (chapter.inputKey) {
      setAnswer(chapter.inputKey, value);
    }
    setHasCheckedInput(true);
    setView('story');
  };

  const handleNext = async () => {
    if (chapterId < 4) {
      router.push(`/chapter/${chapterId + 1}`);
    } else {
      // Last chapter done — notify and go to finale
      await sendNotification({
        event: 'story_completed',
        name: answers.name,
        timestamp: new Date().toISOString(),
      });
      router.push('/finale');
    }
  };

  const content = chapter.getContent(answers);

  return (
    <>
      <Starfield />
      <Particles />
      <MusicPlayer />
      <ProgressDots total={4} current={chapterId} />

      <main
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '100vh',
        }}
      >
        <AnimatePresence mode="wait">
          {view === 'input' ? (
            <ChapterInput
              key="input"
              chapterNum={chapterId}
              title={chapter.title}
              prompt={chapter.inputPrompt || ''}
              onSubmit={handleInputSubmit}
            />
          ) : (
            <StoryPage
              key="story"
              chapterNum={chapterId}
              title={chapter.title}
              paragraphs={content}
              nextLabel={chapterId < 4 ? 'Continue the Story →' : 'The Final Chapter ✨'}
              onNext={handleNext}
            />
          )}
        </AnimatePresence>
      </main>
    </>
  );
}

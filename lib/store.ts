import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface StoryAnswers {
  name: string;
  favoriteTime: string;
  valuedQuality: string;
  perfectEvening: string;
  dreamPlace: string;
}

interface StoryStore {
  answers: StoryAnswers;
  setAnswer: (key: keyof StoryAnswers, value: string) => void;
  reset: () => void;
}

const initialAnswers: StoryAnswers = {
  name: '',
  favoriteTime: '',
  valuedQuality: '',
  perfectEvening: '',
  dreamPlace: '',
};

export const useStoryStore = create<StoryStore>()(
  persist(
    (set) => ({
      answers: initialAnswers,
      setAnswer: (key, value) =>
        set((state) => ({
          answers: { ...state.answers, [key]: value },
        })),
      reset: () => set({ answers: initialAnswers }),
    }),
    {
      name: 'story-storage',
    }
  )
);

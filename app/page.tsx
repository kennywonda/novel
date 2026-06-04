'use client';

import { useRouter } from 'next/navigation';
import Starfield from '@/components/Starfield';
import Particles from '@/components/Particles';
import MusicPlayer from '@/components/MusicPlayer';
import BookCover from '@/components/BookCover';

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Starfield />
      <Particles />
      <MusicPlayer />
      <main style={{ position: 'relative', zIndex: 10 }}>
        <BookCover onOpen={() => router.push('/chapter/1')} />
      </main>
    </>
  );
}

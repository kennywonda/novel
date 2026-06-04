import type { Metadata } from 'next';
import { Playfair_Display, Dancing_Script } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700'],
});

const dancing = Dancing_Script({
  variable: '--font-dancing',
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Once Upon a You',
  description: 'A story written just for you.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${dancing.variable} h-full`}>
      <body className="min-h-full bg-[#0a0a1a] text-ivory antialiased">
        {children}
      </body>
    </html>
  );
}

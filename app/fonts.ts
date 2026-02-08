// app/fonts.ts
import { DM_Sans, Inter, DM_Mono } from 'next/font/google';

export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  weight: ['700'],
  variable: '--font-dm-sans', // CSS variable for headings
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500'],
  variable: '--font-inter',   // CSS variable for body
});

export const dmMono = DM_Mono({
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-dm-mono', // CSS variable for code
});

import type { Metadata } from 'next';
import './globals.css';
import { dmSans, inter, dmMono } from '../app/fonts';

export const metadata: Metadata = {
  title: 'Tabara Nosiba',
  description: 'Full-stack engineer in NYC',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${inter.variable} ${dmMono.variable} bg-primary`}>
      <head>
        <meta charSet="utf-8" />
        {/* <link rel="icon" type="image/svg+xml" href="/favicon.svg" /> */}
        <meta name="viewport" content="width=device-width" />
      </head>
      <body>{children}</body>
    </html>
  );
}

import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    template: '%s | OKIMYJ Portfolio',
    default: 'OKIMYJ Portfolio',
  },
  description: 'The best framework',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={openSans.className}>
      <body>{children}</body>
    </html>
  );
}

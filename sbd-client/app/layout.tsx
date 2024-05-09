import type { Metadata } from 'next';
import { Public_Sans } from 'next/font/google';
import './globals.css';

const public_sans = Public_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Space by day',
  description: 'Descubre el universo un día a la vez'
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={public_sans.className}>{children}</body>
    </html>
  );
}

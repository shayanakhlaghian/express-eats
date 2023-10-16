import './globals.css';
import type { Metadata } from 'next';
import { Lato } from 'next/font/google';

import Header from './components/Header';
import Footer from './components/Footer';

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700'],
});

export const metadata: Metadata = {
  title: 'express eats',
  description: 'Get your food asap',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='overflow-x-hidden'>
      <body className={`${lato.className} overflow-x-hidden`}>
        <Header />
        <main className='min-h-screen w-screen'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

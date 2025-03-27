import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DearKu - 당신의 일기장',
  description: '당신의 하루와 감정을 기록하는 공간',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`${inter.className} bg-gray-100`}>
        <div className="max-w-md mx-auto bg-white min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}

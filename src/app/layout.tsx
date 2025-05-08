import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'DearKu - 건국대 소개팅',
  description: '교내 1:1 매칭 서비스',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <div className="max-w-[430px] mx-auto bg-[#bcbfa8] min-h-screen overflow-hidden">
          {children}
        </div>
      </body>
    </html>
  );
}

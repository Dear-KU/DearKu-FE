import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function SetHeightPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/set-college" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* 키 입력 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <p className="text-center mb-8">키를 입력해 주세요.</p>
            
            <div className="relative">
              <input 
                type="number" 
                placeholder="키를 입력해주세요. (ex. 170)" 
                className="w-full p-4 pr-16 rounded-xl bg-white border-none text-gray-700"
              />
              <div className="absolute inset-y-0 right-4 flex items-center">
                <span className="text-gray-500">cm</span>
              </div>
            </div>
          </div>
        </div>

        {/* 다음 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/set-face">
            <Button variant="secondary" fullWidth>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
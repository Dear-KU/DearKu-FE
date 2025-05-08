import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function SetMbtiPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/set-face" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* MBTI 선택 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <p className="text-center mb-12">MBTI를 선택해 주세요.</p>
            
            <div className="grid grid-cols-4 gap-4 mb-8">
              <button className="bg-[#e8d0c0] p-4 rounded-md flex items-center justify-center">
                <span className="text-gray-800 font-medium text-lg">E</span>
              </button>
              <button className="bg-[#e8d0c0] p-4 rounded-md flex items-center justify-center">
                <span className="text-gray-800 font-medium text-lg">N</span>
              </button>
              <button className="bg-[#e8d0c0] p-4 rounded-md flex items-center justify-center">
                <span className="text-gray-800 font-medium text-lg">F</span>
              </button>
              <button className="bg-[#e8d0c0] p-4 rounded-md flex items-center justify-center">
                <span className="text-gray-800 font-medium text-lg">P</span>
              </button>
            </div>
            
            <div className="grid grid-cols-4 gap-4">
              <button className="bg-[#e8d0c0] p-4 rounded-md flex items-center justify-center">
                <span className="text-gray-800 font-medium text-lg">I</span>
              </button>
              <button className="bg-[#e8d0c0] p-4 rounded-md flex items-center justify-center">
                <span className="text-gray-800 font-medium text-lg">S</span>
              </button>
              <button className="bg-[#e8d0c0] p-4 rounded-md flex items-center justify-center">
                <span className="text-gray-800 font-medium text-lg">T</span>
              </button>
              <button className="bg-[#e8d0c0] p-4 rounded-md flex items-center justify-center">
                <span className="text-gray-800 font-medium text-lg">J</span>
              </button>
            </div>
          </div>
        </div>

        {/* 다음 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/set-love-count">
            <Button variant="secondary" fullWidth>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
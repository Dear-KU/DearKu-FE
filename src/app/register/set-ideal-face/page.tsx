import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function SetIdealFacePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/set-ideal-height" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* 희망하는 상대 얼굴상 선택 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <p className="text-center mb-12">희망하는 상대의 얼굴상을 선택해 주세요.</p>
            
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="flex flex-col items-center">
                <button className="w-full aspect-square rounded-md border border-gray-300 flex items-center justify-center">
                  <span className="text-gray-700">고양이</span>
                </button>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-full aspect-square rounded-md border border-gray-300 flex items-center justify-center">
                  <span className="text-gray-700">강아지</span>
                </button>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-full aspect-square rounded-md border border-gray-300 flex items-center justify-center">
                  <span className="text-gray-700">토끼</span>
                </button>
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="flex flex-col items-center">
                <button className="w-full aspect-square rounded-md border border-gray-300 flex items-center justify-center">
                  <span className="text-gray-700">곰</span>
                </button>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-full aspect-square rounded-md border border-gray-300 flex items-center justify-center bg-gray-200">
                  <span className="text-gray-700">원숭이</span>
                </button>
              </div>
              <div className="flex flex-col items-center">
                <button className="w-full aspect-square rounded-md border border-gray-300 flex items-center justify-center">
                  <span className="text-gray-700">공룡</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 다음 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/set-date-preference">
            <Button variant="secondary" fullWidth>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
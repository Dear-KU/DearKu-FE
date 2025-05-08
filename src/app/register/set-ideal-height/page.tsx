import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function SetIdealHeightPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/set-ideal-intro" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* 희망하는 상대 키 입력 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <p className="text-center mb-12">희망하는 상대의 키를 입력해 주세요.</p>
            
            <div className="relative">
              <select className="w-full p-4 pr-8 rounded-md bg-white border-none appearance-none text-gray-700">
                <option value="" disabled selected>키를 선택해주세요</option>
                <option value="any">상관없음</option>
                <option value="155">155cm 이상</option>
                <option value="160">160cm 이상</option>
                <option value="165">165cm 이상</option>
                <option value="170">170cm 이상</option>
                <option value="175">175cm 이상</option>
                <option value="180">180cm 이상</option>
                <option value="185">185cm 이상</option>
                <option value="190">190cm 이상</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 다음 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/set-ideal-face">
            <Button variant="secondary" fullWidth>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
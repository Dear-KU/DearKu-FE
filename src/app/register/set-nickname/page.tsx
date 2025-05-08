import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function SetNicknamePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/verify-email" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">닉네임 설정</h1>
        </div>

        {/* 닉네임 폼 */}
        <div className="flex-1 flex flex-col pt-8">
          <div className="mb-6">
            <label className="block text-sm mb-2">닉네임 입력</label>
            <input
              type="text"
              placeholder="닉네임을 입력해 주세요."
              className="w-full p-4 rounded-xl bg-white border-none"
            />
          </div>
          
          {/* 중복 확인 버튼 */}
          <div className="flex justify-center mb-6">
            <button className="py-2 px-12 border border-gray-300 bg-gray-100 rounded-md text-sm">
              중복 확인
            </button>
          </div>
        </div>

        {/* 다음 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/profile-intro">
            <Button variant="secondary" fullWidth>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
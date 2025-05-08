import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function SetIdealIntroPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/set-bio" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* 이상형 선택 인트로 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md text-center">
            <h2 className="text-xl mb-6">소중한 인연을 위한<br />프로필이 완성되었어요!</h2>
            <p className="text-base mb-8">
              이제 마지막으로 몇 가지 이상형에 대한 선호도를 알려주세요.
            </p>
          </div>
        </div>

        {/* 홈으로 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/set-ideal-height">
            <Button variant="secondary" fullWidth>
              홈으로
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
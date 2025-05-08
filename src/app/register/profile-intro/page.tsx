import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function ProfileIntroPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/set-nickname" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* 프로필 설정 안내 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-xl font-bold text-center">프로필 설정을 시작합니다</h2>
            <p className="text-center">
              더 정확한 매칭을 위해 프로필 정보를 입력해주세요.
              <br /><br />
              성별, 나이, 학과 등의 기본 정보가 필요합니다.
            </p>
          </div>
        </div>

        {/* 프로필 설정 시작하기 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/select-gender">
            <Button variant="secondary" fullWidth>
              프로필 설정 시작하기
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
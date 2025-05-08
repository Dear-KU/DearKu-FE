import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function VerifyEmailPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">이메일 인증</h1>
        </div>

        {/* 인증 폼 */}
        <div className="flex-1 flex flex-col pt-8">
          <div className="mb-6">
            <label className="block text-sm mb-2">이메일 입력</label>
            <input
              type="email"
              placeholder="이메일을 입력해주세요."
              className="w-full p-4 rounded-xl bg-white border-none"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm mb-2">인증번호 입력</label>
            <div className="relative">
              <input
                type="text"
                placeholder="이메일로 전송된 인증번호를 입력해주세요."
                className="w-full p-4 rounded-xl bg-white border-none"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 bg-[#4169e1] text-white text-xs py-1.5 px-3 rounded-full">
                전송
              </button>
            </div>
          </div>
        </div>

        {/* 버튼 영역 */}
        <div className="w-full space-y-3 pb-4">
          <Link href="/register">
            <Button variant="primary" fullWidth>
              취소
            </Button>
          </Link>
          <Link href="/register/set-nickname">
            <Button variant="secondary" fullWidth>
              확인
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
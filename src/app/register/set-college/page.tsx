import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function SetCollegePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/birth-year" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* 소속 단과대 선택 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full">
            <p className="text-center mb-8">소속 단과대를 선택해주세요.</p>
            
            <div className="relative">
              <select className="w-full p-4 pr-8 rounded-md bg-white border-none appearance-none text-gray-700">
                <option value="" disabled selected>단과대학</option>
                <option value="문과대학">문과대학</option>
                <option value="이과대학">이과대학</option>
                <option value="건축대학">건축대학</option>
                <option value="공과대학">공과대학</option>
                <option value="사회과학대학">사회과학대학</option>
                <option value="경영대학">경영대학</option>
                <option value="부동산과학원">부동산과학원</option>
                <option value="융합과학기술원">융합과학기술원</option>
                <option value="생명과학대학">생명과학대학</option>
                <option value="수의과대학">수의과대학</option>
                <option value="예술디자인대학">예술디자인대학</option>
                <option value="사범대학">사범대학</option>
                <option value="상허교양대학">상허교양대학 / KU사회공헌학부</option>
                <option value="국제대학">국제대학</option>
                <option value="KU융합과학기술원">KU융합과학기술원</option>
                <option value="상허생명과학대학">상허생명과학대학</option>
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
          <Link href="/register/set-height">
            <Button variant="secondary" fullWidth>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
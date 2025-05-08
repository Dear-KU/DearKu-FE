import Button from '@/components/Button';
import Link from 'next/link';
import React from 'react';

export default function BirthYearPage() {
  // 현재 년도 계산
  const currentYear = new Date().getFullYear();
  
  // 태어난 년도 리스트 (2005년부터 1990년까지)
  const birthYears = [2005, 2004, 2003, 2002, 2001, 2000, 1999, 1998, 1997, 1996, 1995, 1994, 1993, 1992, 1991, 1990];
  
  // 학번 리스트 (15학번부터 25학번까지)
  const admissionYears = [25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15];

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/select-gender" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">기본 정보 입력</h1>
        </div>

        {/* 태어난 년도/학번 선택 */}
        <div className="flex-1 flex flex-col pt-8 space-y-8">
          {/* 태어난 년도 */}
          <div>
            <label className="block text-sm mb-2">태어난 년도</label>
            <div className="relative">
              <select className="w-full p-4 pr-8 rounded-md bg-white border-none appearance-none text-gray-700">
                <option value="" disabled selected>년도 선택</option>
                {birthYears.map(year => (
                  <option key={year} value={year}>{year}년</option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4">
                <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
          
          {/* 학번 */}
          <div>
            <label className="block text-sm mb-2">학번</label>
            <div className="relative">
              <select className="w-full p-4 pr-8 rounded-md bg-white border-none appearance-none text-gray-700">
                <option value="" disabled selected>학번 선택</option>
                {admissionYears.map(year => (
                  <option key={year} value={year}>{year}학번</option>
                ))}
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
          <Link href="/register/set-college">
            <Button variant="secondary" fullWidth>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
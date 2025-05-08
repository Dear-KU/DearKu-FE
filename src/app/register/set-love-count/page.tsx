'use client';

import Button from '@/components/Button';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SetLoveCountPage() {
  // 선택된 연애 횟수 상태 관리
  const [selectedCount, setSelectedCount] = useState<string | null>(null);

  // 옵션 목록
  const options = [
    { id: 'none', label: '연애 경험 없음' },
    { id: '1-2', label: '1-2회' },
    { id: '3-4', label: '3-4회' },
    { id: '5+', label: '5회 이상' }
  ];

  // 선택 핸들러
  const handleSelect = (id: string) => {
    setSelectedCount(id);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/set-mbti" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* 연애 횟수 선택 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <p className="text-center mb-12">연애 횟수를 선택해 주세요.</p>
            
            <div className="space-y-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  className="w-full flex items-center py-3 px-4 rounded-lg hover:bg-gray-100 transition-colors"
                  onClick={() => handleSelect(option.id)}
                >
                  <div className={`w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center mr-3 ${selectedCount === option.id ? 'bg-black' : 'bg-transparent'}`}>
                    <svg className={`w-4 h-4 ${selectedCount === option.id ? 'text-white' : 'text-gray-400'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700">{option.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 다음 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/set-keywords">
            <Button variant="secondary" fullWidth>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
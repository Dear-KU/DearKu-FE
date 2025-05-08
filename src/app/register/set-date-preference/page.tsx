'use client';

import Button from '@/components/Button';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SetDatePreferencePage() {
  // 선택된 데이트 선호도 상태 관리
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  // 데이트 옵션 목록
  const dateOptions = [
    { id: 'cafe', label: '조용한 카페에서 깊은 대화를 나누는 데이트' },
    { id: 'activity', label: '다양한 액티비티를 하며 함께 즐기는 데이트' },
    { id: 'place', label: '자연 속에서 힐링하는 감성적인 데이트' },
    { id: 'food', label: '새로운 맛집을 탐방하는 미식 데이트' },
    { id: 'movie', label: '집에서 편안하게 영화 보는 데이트' }
  ];

  // 선택 핸들러
  const handleSelect = (id: string) => {
    setSelectedDate(id);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/set-ideal-face" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* 데이트 선호도 선택 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <p className="text-center mb-8">가장 원하는 데이트를 선택해 주세요.</p>
            
            <div className="space-y-4">
              {dateOptions.map((option) => (
                <div 
                  key={option.id}
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => handleSelect(option.id)}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className={`w-5 h-5 text-center ${selectedDate === option.id ? 'text-blue-600' : 'text-gray-300'}`}>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-full h-full">
                        <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-gray-700 text-sm flex-1">{option.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 완료 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/complete">
            <Button variant="secondary" fullWidth>
              완료
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
'use client';

import Button from '@/components/Button';
import Link from 'next/link';
import React, { useState } from 'react';

export default function SetKeywordsPage() {
  // 선택된 키워드 상태 관리
  const [selectedKeyword, setSelectedKeyword] = useState<string | null>(null);

  // 키워드 옵션 목록
  const keywords = [
    { id: 'honest', label: '정직과 신뢰' },
    { id: 'humor', label: '유머와 긍정적인 에너지' },
    { id: 'empathy', label: '배려와 공감' },
    { id: 'achievement', label: '성취와 성장' },
    { id: 'freedom', label: '자유와 모험' }
  ];

  // 선택 핸들러
  const handleSelect = (id: string) => {
    setSelectedKeyword(id);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="w-full h-screen flex flex-col py-4 px-4">
        {/* 헤더 */}
        <div className="w-full flex items-center justify-center relative py-2">
          <Link href="/register/set-love-count" className="absolute left-0 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium">프로필 설정</h1>
        </div>

        {/* 키워드 선택 */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="w-full max-w-md">
            <p className="text-center mb-12">자신과 가장 가까운 키워드를 선택해 주세요.</p>
            
            <div className="space-y-4">
              {keywords.map((keyword) => (
                <div 
                  key={keyword.id}
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => handleSelect(keyword.id)}
                >
                  <div className="w-6 h-6 flex items-center justify-center">
                    <div className={`w-5 h-5 rounded-full ${selectedKeyword === keyword.id ? 'bg-black' : 'bg-gray-300'}`}></div>
                  </div>
                  <button className="flex-1 py-3 px-4 text-left text-gray-700">
                    {keyword.label}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* 다음 버튼 */}
        <div className="w-full pb-4">
          <Link href="/register/set-bio">
            <Button variant="secondary" fullWidth>
              다음
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
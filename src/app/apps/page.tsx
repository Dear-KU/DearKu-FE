'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

interface Diary {
  id: number;
  title: string;
  date: string;
  preview: string;
}

export default function DiaryList() {
  const [diaries, setDiaries] = useState<Diary[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // 실제로는 API 호출이 들어갈 부분
    const fetchDiaries = async () => {
      try {
        // 아래는 예시 데이터
        setDiaries([
          { id: 1, title: '오늘의 기록', date: '2023-06-15', preview: '오늘은 정말 좋은 날이었다...' },
          { id: 2, title: '슬픈 하루', date: '2023-06-14', preview: '생각보다 많이 힘들었던 하루...' },
          { id: 3, title: '행복한 순간', date: '2023-06-13', preview: '친구들과 함께 보낸 시간...' },
        ]);
        setLoading(false);
      } catch (error) {
        console.error('일기를 불러오는데 실패했습니다.', error);
        setLoading(false);
      }
    };

    fetchDiaries();
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-bold">나의 일기</h1>
        <Link href="/diary/new" 
              className="bg-blue-500 text-white py-1 px-3 rounded-md text-sm">
          새 일기
        </Link>
      </div>
      
      {loading ? (
        <p className="text-center py-10">불러오는 중...</p>
      ) : diaries.length > 0 ? (
        <div className="space-y-4">
          {diaries.map((diary) => (
            <div 
              key={diary.id}
              onClick={() => router.push(`/diary/${diary.id}`)}
              className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium">{diary.title}</h3>
                <span className="text-xs text-gray-500">{diary.date}</span>
              </div>
              <p className="text-gray-600 text-sm mt-2 line-clamp-2">{diary.preview}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">작성된 일기가 없습니다.</p>
          <Link href="/diary/new" 
                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-md">
            첫 일기 쓰기
          </Link>
        </div>
      )}

      <Link href="/" className="block text-center mt-6 text-blue-600">
        홈으로 돌아가기
      </Link>
    </div>
  );
}

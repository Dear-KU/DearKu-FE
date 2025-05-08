'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface Diary {
  id: number;
  title: string;
  content: string;
  date: string;
}

export default function DiaryDetail({ params }: { params: { id: string } }) {
  const [diary, setDiary] = useState<Diary | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchDiary = async () => {
      try {
        // 실제로는 API 호출이 들어갈 부분
        // const response = await fetch(`/api/diary/${params.id}`);
        // const data = await response.json();
        
        // 예시 데이터
        setDiary({
          id: parseInt(params.id),
          title: '오늘의 기록',
          content: '오늘은 정말 좋은 날이었다. 아침에 일어나서 커피를 마시고 공원을 산책했다. 날씨가 좋아서 기분도 좋았다. 오후에는 친구를 만나 함께 시간을 보냈다. 저녁에는 좋아하는 책을 읽으며 하루를 마무리했다.',
          date: '2023-06-15'
        });
        setLoading(false);
      } catch (error) {
        console.error('일기를 불러오는데 실패했습니다.', error);
        setLoading(false);
      }
    };

    fetchDiary();
  }, [params.id]);

  const handleDelete = async () => {
    if (!confirm('정말로 이 일기를 삭제하시겠습니까?')) return;

    try {
      // 실제로는 API DELETE 호출이 들어갈 부분
      // await fetch(`/api/diary/${params.id}`, {
      //   method: 'DELETE'
      // });

      // 임시 지연
      await new Promise(resolve => setTimeout(resolve, 500));
      
      router.push('/diary');
    } catch (error) {
      console.error('일기 삭제에 실패했습니다.', error);
    }
  };

  if (loading) {
    return <div className="p-4 text-center">불러오는 중...</div>;
  }

  if (!diary) {
    return <div className="p-4 text-center">일기를 찾을 수 없습니다.</div>;
  }

  return (
    <div className="p-4">
      <div className="mb-6">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold">{diary.title}</h1>
          <span className="text-sm text-gray-500">{diary.date}</span>
        </div>
        
        <div className="mt-4 bg-gray-50 p-4 rounded-md min-h-[200px] whitespace-pre-wrap">
          {diary.content}
        </div>
      </div>
      
      <div className="flex space-x-2 mt-6">
        <Link href="/diary" className="flex-1 py-2 px-4 bg-gray-200 text-center text-gray-800 rounded-md">
          목록으로
        </Link>
        <Link href={`/diary/edit/${diary.id}`} className="flex-1 py-2 px-4 bg-blue-500 text-center text-white rounded-md">
          수정하기
        </Link>
        <button
          onClick={handleDelete}
          className="flex-1 py-2 px-4 bg-red-500 text-white rounded-md"
        >
          삭제하기
        </button>
      </div>
    </div>
  );
}

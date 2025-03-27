'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function NewDiary() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    setSubmitting(true);
    
    try {
      // 실제로는 API POST 호출이 들어갈 부분
      // await fetch('/api/diary', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ title, content, date: new Date().toISOString() })
      // });
      
      // 임시 지연
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      router.push('/diary');
    } catch (error) {
      console.error('일기 저장에 실패했습니다.', error);
      setSubmitting(false);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-6">새 일기 작성</h1>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1 text-sm font-medium">
            제목
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        
        <div>
          <label htmlFor="content" className="block mb-1 text-sm font-medium">
            내용
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md h-60"
            required
          />
        </div>
        
        <div className="flex space-x-2 pt-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="flex-1 py-2 px-4 bg-gray-200 text-gray-800 rounded-md"
            disabled={submitting}
          >
            취소
          </button>
          <button
            type="submit"
            className="flex-1 py-2 px-4 bg-blue-500 text-white rounded-md disabled:bg-blue-300"
            disabled={submitting}
          >
            {submitting ? '저장 중...' : '저장하기'}
          </button>
        </div>
      </form>
    </div>
  );
}

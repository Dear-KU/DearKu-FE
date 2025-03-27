import { NextResponse } from 'next/server';

// In-memory DB (실제 프로젝트에서는 진짜 DB를 사용해야 합니다)
let diaries = [
  {
    id: 1,
    title: '오늘의 기록',
    content: '오늘은 정말 좋은 날이었다. 아침에 일어나서 커피를 마시고 공원을 산책했다.',
    date: '2023-06-15',
  },
  {
    id: 2,
    title: '슬픈 하루',
    content: '생각보다 많이 힘들었던 하루였다. 내일은 더 좋은 날이기를.',
    date: '2023-06-14',
  },
];

// GET 요청 처리 - 모든 일기 가져오기
export async function GET() {
  return NextResponse.json(diaries);
}

// POST 요청 처리 - 새 일기 작성
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    const newDiary = {
      id: diaries.length ? Math.max(...diaries.map(d => d.id)) + 1 : 1,
      title: body.title,
      content: body.content,
      date: body.date || new Date().toISOString().split('T')[0],
    };
    
    diaries.push(newDiary);
    
    return NextResponse.json(newDiary, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: '일기 작성에 실패했습니다.' }, 
      { status: 400 }
    );
  }
}

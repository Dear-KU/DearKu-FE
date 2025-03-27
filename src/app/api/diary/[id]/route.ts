import { NextResponse } from 'next/server';
import type { NextRequest, RouteParams } from 'next/server';

// In-memory DB (실제 프로젝트에서는 외부 파일에서 import 해야 합니다)
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

// 특정 일기 가져오기
export async function GET(
  request: NextRequest,
  context: RouteParams<{ id: string }>
) {
  const id = parseInt(context.params.id);
  const diary = diaries.find(d => d.id === id);
  
  if (!diary) {
    return NextResponse.json(
      { error: '일기를 찾을 수 없습니다.' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(diary);
}

// 일기 수정하기
export async function PUT(
  request: NextRequest,
  context: RouteParams<{ id: string }>
) {
  try {
    const id = parseInt(context.params.id);
    const body = await request.json();
    
    const index = diaries.findIndex(d => d.id === id);
    
    if (index === -1) {
      return NextResponse.json(
        { error: '일기를 찾을 수 없습니다.' },
        { status: 404 }
      );
    }
    
    diaries[index] = {
      ...diaries[index],
      title: body.title || diaries[index].title,
      content: body.content || diaries[index].content,
      date: body.date || diaries[index].date,
    };
    
    return NextResponse.json(diaries[index]);
  } catch (error) {
    return NextResponse.json(
      { error: '일기 수정에 실패했습니다.' },
      { status: 400 }
    );
  }
}

// 일기 삭제하기
export async function DELETE(
  request: NextRequest,
  context: RouteParams<{ id: string }>
) {
  const id = parseInt(context.params.id);
  const index = diaries.findIndex(d => d.id === id);
  
  if (index === -1) {
    return NextResponse.json(
      { error: '일기를 찾을 수 없습니다.' },
      { status: 404 }
    );
  }
  
  diaries = diaries.filter(d => d.id !== id);
  
  return NextResponse.json({ success: true, message: '일기가 삭제되었습니다.' });
}

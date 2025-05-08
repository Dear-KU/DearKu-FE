import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4">
      <div className="w-full flex flex-col items-center py-8">
        {/* 로고 영역 */}
        <div className="mb-8">
          <Logo size="lg" showText={true} />
        </div>
        
        {/* 메인 콘텐츠 */}
        <div className="w-full max-w-sm text-center mb-8">
          <h2 className="text-xl font-medium mb-4">건국대학교 소개팅 서비스</h2>
          <p className="text-gray-800 mb-6">
            건국대 학생들을 위한 1:1 매칭 서비스입니다.
            지금 바로 시작해보세요!
          </p>
        </div>
        
        {/* 버튼 영역 */}
        <div className="w-full space-y-3">
          <Link href="/login" className="block w-full">
            <Button variant="primary" fullWidth>
              시작하기
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

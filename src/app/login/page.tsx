import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-screen flex flex-col items-center justify-between py-12 px-4">
        {/* 뒤로가기 버튼 */}
        <div className="w-full flex justify-start">
          <Link href="/" className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
        </div>
        
        {/* 로고 */}
        <div className="flex flex-col items-center justify-center gap-2 flex-grow">
          <Logo size="md" showText={true} />
        </div>
        
        {/* 버튼 영역 */}
        <div className="w-full space-y-3 mt-auto">
          <Button variant="primary" fullWidth>
            로그인
          </Button>
          <Link href="/register">
            <Button variant="secondary" fullWidth>
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
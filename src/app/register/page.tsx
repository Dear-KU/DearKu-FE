import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function RegisterPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full h-screen flex flex-col items-center justify-between py-12 px-4">
        {/* 뒤로가기 버튼 */}
        <div className="w-full flex justify-start">
          <Link href="/login" className="text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
            </svg>
          </Link>
        </div>
        
        {/* 로고 */}
        <div className="flex flex-col items-center justify-center gap-2 mb-8">
          <Logo size="md" showText={true} />
        </div>
        
        {/* 회원가입 폼 */}
        <div className="w-full flex-grow flex flex-col justify-start">
          <h2 className="text-xl font-semibold mb-6 text-center">회원가입</h2>
          
          <form className="w-full space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">이메일</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-md border border-gray-300"
                placeholder="이메일 주소를 입력하세요"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">비밀번호</label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-3 rounded-md border border-gray-300"
                placeholder="비밀번호를 입력하세요"
              />
            </div>
          </form>
        </div>
        
        {/* 버튼 영역 */}
        <div className="w-full space-y-3 mt-auto">
          <Link href="/register/verify-email">
            <Button variant="secondary" fullWidth>
              회원가입
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
} 
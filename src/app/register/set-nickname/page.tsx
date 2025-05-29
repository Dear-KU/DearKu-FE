import Button from '@/components/Button';
import Logo from '@/components/Logo';
import Link from 'next/link';

export default function LoginPage() {
  return (
    <main className="w-96 h-[766px] relative bg-stone-400 overflow-hidden mx-auto">
      {/* 상단 바 */}
      <div className="w-96 h-11 absolute left-0 top-0 bg-white flex items-center">
        <Link href="/" className="ml-3">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </Link>
      </div>

      {/* 로고 */}
      <div className="absolute left-[155px] top-[262px]">
        <Logo size="md" />
      </div>
      {/* DearKu 텍스트 */}
      <div className="absolute left-[144px] top-[383px] w-24 h-6 text-center text-black text-xl font-normal font-sejong">
        DearKu
      </div>

      {/* 버튼 영역 */}
      <div className="w-96 absolute left-[16px] top-[638px] flex flex-col items-center gap-2">
        {/* 로그인 버튼 */}
        <Button
          className="w-96 h-12 bg-white rounded-lg border border-neutral-200 text-neutral-900 text-base font-normal font-suite"
          fullWidth
        >
          로그인
        </Button>
        {/* 회원가입 버튼 */}
        <Link href="/register" className="w-96">
          <Button
            className="w-96 h-12 bg-Main1 rounded-lg text-white text-base font-normal font-suite"
            fullWidth
          >
            회원가입
          </Button>
        </Link>
      </div>
    </main>
  );
} 
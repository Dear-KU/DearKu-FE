import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4">
      <div className="max-w-md w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">DearKu</h1>
            <p className="mt-2 text-gray-500">당신의 마음을 기록하세요</p>
          </div>
          
          <div className="mt-6 flex flex-col space-y-4">
            <Link href="/diary" 
                  className="w-full py-2 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md text-center">
              일기 보기
            </Link>
            <Link href="/diary/new" 
                  className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md text-center">
              새 일기 작성
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

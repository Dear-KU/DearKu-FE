import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100">
      <div className="max-w-md w-full mx-auto bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
        <div className="p-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-1">DearKu</h1>
            <p className="text-gray-500 italic">당신의 마음을 기록하세요</p>
            <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto my-4 rounded-full"></div>
          </div>
          
          <div className="mt-8 flex flex-col space-y-5">
            <Link href="/diary" 
                  className="group w-full py-3 px-4 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md text-center flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:from-blue-600 hover:to-indigo-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span>일기 보기</span>
            </Link>
            <Link href="/diary/new" 
                  className="group w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-md text-center flex items-center justify-center space-x-2 transition-all duration-300 hover:shadow-lg hover:from-emerald-600 hover:to-teal-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
              <span>새 일기 작성</span>
            </Link>
          </div>
          
          <div className="mt-8 text-center text-xs text-gray-400">
            나만의 소중한 이야기를 기록해보세요
          </div>
        </div>
      </div>
    </main>
  );
}

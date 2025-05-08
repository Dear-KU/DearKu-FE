import Image from 'next/image';
import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function Logo({ size = 'md', showText = true }: LogoProps) {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-28 h-28',
    lg: 'w-36 h-36',
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`relative ${sizes[size]} mb-2`}>
        {/* 이미지는 public/assets 폴더에 추가될 예정입니다 */}
        <div className={`${sizes[size]} flex items-center justify-center bg-transparent`}>
          <p className="text-gray-400 text-sm">로고 이미지</p>
        </div>
      </div>
      
      {showText && <h1 className="text-2xl font-medium">DearKu</h1>}
    </div>
  );
} 
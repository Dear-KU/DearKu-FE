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
        <div className={`${sizes[size]} flex items-center justify-center bg-transparent`}>
          <Image 
            src="/assets/Logo.png" 
            alt="DearKu Logo" 
            width={size === 'lg' ? 144 : size === 'md' ? 112 : 64} 
            height={size === 'lg' ? 144 : size === 'md' ? 112 : 64}
            priority
          />
        </div>
      </div>
      
      {showText && <h1 className="text-2xl font-medium">DearKu</h1>}
    </div>
  );
} 
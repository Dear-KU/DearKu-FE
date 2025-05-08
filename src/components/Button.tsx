import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary';
  fullWidth?: boolean;
}

export default function Button({
  children,
  onClick,
  className = '',
  type = 'button',
  variant = 'primary',
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = 'py-4 rounded-md font-medium text-center';
  const variantStyles = {
    primary: 'bg-white text-black border border-gray-200',
    secondary: 'bg-[#A98B73] text-white',
  };
  
  const widthStyles = fullWidth ? 'w-full' : '';
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variantStyles[variant]} ${widthStyles} ${className}`}
    >
      {children}
    </button>
  );
} 
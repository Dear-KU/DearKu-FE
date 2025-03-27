export default function LoadingSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };
  
  return (
    <div className="flex justify-center items-center">
      <div className={`${sizeClasses[size]} border-2 border-t-blue-500 border-r-blue-500 border-b-gray-200 border-l-gray-200 rounded-full animate-spin`}></div>
    </div>
  );
}

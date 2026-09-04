import type { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  interactive?: boolean;
  id?: string;
}

export function Card({
  children,
  className = '',
  interactive = false,
  id,
}: CardProps) {
  return (
    <div
      id={id}
      className={`rounded-xl border border-[#C2C6D3] bg-[#FFFFFF] p-6 transition-all duration-200 ${
        interactive
          ? 'hover:-translate-y-0.5 hover:border-[#48537B] hover:shadow-sm'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  );
}

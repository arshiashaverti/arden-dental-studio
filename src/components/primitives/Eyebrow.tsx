import type { ReactNode } from 'react';

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Eyebrow({ children, className = '', id }: EyebrowProps) {
  return (
    <span
      id={id}
      className={`inline-flex items-center gap-1.5 rounded-full border border-[#C2C6D3] bg-[#C2C6D3]/25 px-3.5 py-1 text-xs font-semibold text-[#0B194E] ${className}`}
    >
      {children}
    </span>
  );
}

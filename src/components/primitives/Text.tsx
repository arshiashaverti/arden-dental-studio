import type { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'muted';
  className?: string;
  id?: string;
}

export function Text({
  children,
  variant = 'secondary',
  className = '',
  id,
}: TextProps) {
  const colors = {
    primary: 'text-[#0B194E]',
    secondary: 'text-[#48537B]',
    muted: 'text-[#48537B]/90', // Passes WCAG AA 4.5:1
  };

  return (
    <p id={id} className={`leading-relaxed ${colors[variant]} ${className}`}>
      {children}
    </p>
  );
}

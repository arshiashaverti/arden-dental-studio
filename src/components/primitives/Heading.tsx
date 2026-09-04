import type { ReactNode } from 'react';

interface HeadingProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
  id?: string;
}

export function Heading({
  children,
  as = 'h2',
  className = '',
  id,
}: HeadingProps) {
  const Tag = as;

  const sizes = {
    h1: 'text-3xl font-bold tracking-tight text-[#0B194E] sm:text-4xl lg:text-5xl leading-tight',
    h2: 'text-2xl font-bold tracking-tight text-[#0B194E] sm:text-3xl leading-snug',
    h3: 'text-xl font-semibold text-[#0B194E] sm:text-2xl leading-normal',
    h4: 'text-lg font-semibold text-[#48537B]',
  };

  return (
    <Tag id={id} className={`${sizes[as]} ${className}`}>
      {children}
    </Tag>
  );
}

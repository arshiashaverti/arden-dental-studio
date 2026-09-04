import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'white';
  children: ReactNode;
  className?: string;
  id?: string;
}

export function Button({
  variant = 'primary',
  children,
  className = '',
  id,
  ...props
}: ButtonProps) {
  const base =
    'interactive-btn inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg px-6 py-3 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-[#48537B] focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none';

  const variants = {
    primary:
      'bg-[#0B194E] text-[#FFFFFF] hover:bg-[#48537B] active:bg-[#0B194E]',
    secondary:
      'interactive-btn-light border border-[#48537B] bg-transparent text-[#0B194E] hover:bg-[#C2C6D3]/30',
    ghost:
      'interactive-btn-light text-[#48537B] hover:bg-[#C2C6D3]/20 hover:text-[#0B194E]',
    white:
      'interactive-btn-light bg-[#FFFFFF] text-[#0B194E] hover:bg-[#C2C6D3] active:bg-[#FFFFFF]',
  };

  return (
    <button
      id={id}
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

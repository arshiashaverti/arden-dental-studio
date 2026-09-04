import type { AnchorHTMLAttributes, MouseEvent } from 'react';

interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  className?: string;
  id?: string;
}

export function Link({
  href,
  children,
  className = '',
  id,
  onClick,
  ...props
}: LinkProps) {
  const external = /^https?:\/\//.test(href) || href.startsWith('tel:') || href.startsWith('mailto:');

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (onClick) {
      onClick(event);
    }

    if (
      external ||
      href.startsWith('#') ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return;
    }

    event.preventDefault();
    window.history.pushState({}, '', href);
    window.dispatchEvent(new PopStateEvent('popstate'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      id={id}
      href={href}
      onClick={handleClick}
      className={`transition-colors focus-visible:outline-2 focus-visible:outline-[#48537B] focus-visible:outline-offset-2 ${className}`}
      {...(external && !href.startsWith('tel:') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...props}
    >
      {children}
    </a>
  );
}

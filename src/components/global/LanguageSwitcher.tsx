import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  className?: string;
  id?: string;
}

export function LanguageSwitcher({ className = '', id = 'lang-switcher' }: LanguageSwitcherProps) {
  const { locale, toggleLocale, t } = useLanguage();

  return (
    <button
      id={id}
      type="button"
      onClick={toggleLocale}
      className={`interactive-btn interactive-btn-light inline-flex min-h-[44px] min-w-[44px] items-center justify-center gap-1.5 rounded-full border border-[#C2C6D3] px-3.5 py-2 text-xs font-bold text-[#0B194E] hover:bg-[#C2C6D3]/30 focus-visible:outline-2 focus-visible:outline-[#48537B] focus-visible:outline-offset-2 transition-colors select-none ${className}`}
      aria-label={t.header.langAria}
      title={t.header.langAria}
    >
      <Globe size={16} className="text-[#48537B]" aria-hidden="true" />
      <span className="tracking-wider">{locale === 'fa' ? 'EN' : 'فا'}</span>
    </button>
  );
}

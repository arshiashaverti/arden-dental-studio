import { useLanguage } from '../../context/LanguageContext';

interface TypographicLogoProps {
  className?: string;
  inverted?: boolean;
  id?: string;
}

export function TypographicLogo({ className = '', inverted = false, id = 'brand-logo' }: TypographicLogoProps) {
  const { locale } = useLanguage();

  return (
    <div id={id} className={`flex flex-col select-none ${className}`}>
      <span
        className={`font-bold tracking-tight text-lg sm:text-xl transition-colors ${
          inverted ? 'text-[#FFFFFF]' : 'text-[#0B194E]'
        }`}
      >
        Arden Dental Studio
      </span>
      <span
        className={`text-[11px] font-medium tracking-wide ${
          inverted ? 'text-[#C2C6D3]' : 'text-[#48537B]'
        }`}
      >
        {locale === 'fa' ? 'کلینیک دندانپزشکی بزرگسالان' : 'Specialized Adult Dentistry'}
      </span>
    </div>
  );
}

import { useLanguage } from '../../context/LanguageContext';
import { Sparkles, ShieldCheck, Clock, MapPin } from 'lucide-react';

interface ConceptualHeroGraphicProps {
  className?: string;
  id?: string;
}

export function ConceptualHeroGraphic({ className = '', id = 'hero-visual' }: ConceptualHeroGraphicProps) {
  const { locale } = useLanguage();

  return (
    <div
      id={id}
      className={`relative overflow-hidden rounded-2xl border border-[#C2C6D3] bg-[#0B194E] p-6 sm:p-8 text-[#FFFFFF] shadow-sm ${className}`}
    >
      {/* Subtle geometric background grid pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="dental-grid" width="32" height="32" patternUnits="userSpaceOnUse">
              <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#FFFFFF" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dental-grid)" />
        </svg>
      </div>

      {/* Decorative architectural dental arc illustration */}
      <div className="relative z-10 flex flex-col justify-between h-full min-h-[300px] sm:min-h-[360px]">
        <div className="flex items-center justify-between border-b border-[#48537B]/60 pb-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#C2C6D3] animate-pulse" />
            <span className="text-xs font-semibold uppercase tracking-wider text-[#C2C6D3]">
              {locale === 'fa' ? 'استاندارد درمان بالینی' : 'Clinical Standards'}
            </span>
          </div>
          <Sparkles size={18} className="text-[#C2C6D3]" aria-hidden="true" />
        </div>

        {/* Central architectural precision graphic */}
        <div className="my-6 flex flex-col items-center justify-center text-center">
          <div className="relative flex items-center justify-center h-28 w-28 rounded-full border border-[#48537B] bg-[#48537B]/20 mb-4">
            <svg
              className="w-16 h-16 text-[#C2C6D3]"
              viewBox="0 0 64 64"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {/* Minimalist stylized dental contour */}
              <path d="M20 18 C20 12, 26 8, 32 8 C38 8, 44 12, 44 18 C44 26, 48 30, 48 42 C48 52, 42 56, 38 56 C34 56, 33 46, 32 46 C31 46, 30 56, 26 56 C22 56, 16 52, 16 42 C16 30, 20 26, 20 18 Z" />
              <path d="M26 22 Q32 26 38 22" strokeDasharray="2 2" />
            </svg>
            <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#48537B] border-2 border-[#0B194E]" />
          </div>

          <h3 className="text-lg font-bold text-[#FFFFFF]">
            {locale === 'fa' ? 'کلینیک تخصصی دندانپزشکی آردن' : 'Arden Dental Studio'}
          </h3>
          <p className="mt-1 text-xs text-[#C2C6D3] max-w-xs">
            {locale === 'fa'
              ? 'تمرکز بر ۸ خدمت تخصصی برای مراجعین بزرگسال'
              : 'Focused on 8 adult dental procedures'}
          </p>
        </div>

        {/* Clinical facts snippet */}
        <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#48537B]/60 text-xs">
          <div className="flex items-center gap-2 text-[#C2C6D3]">
            <MapPin size={14} className="shrink-0 text-[#FFFFFF]" aria-hidden="true" />
            <span className="truncate">
              {locale === 'fa' ? 'تهران، پاسداران، بوستان ۷' : 'Pasdaran, Boostan 7'}
            </span>
          </div>
          <div className="flex items-center gap-2 text-[#C2C6D3]">
            <Clock size={14} className="shrink-0 text-[#FFFFFF]" aria-hidden="true" />
            <span>
              {locale === 'fa' ? '۱۰:۰۰ الی ۱۸:۰۰' : '10:00 – 18:00'}
            </span>
          </div>
        </div>
      </div>

      {/* Mandatory conceptual graphic disclaimer caption */}
      <div className="relative z-10 mt-4 rounded-lg bg-[#48537B]/30 px-3 py-2 text-center text-[11px] text-[#C2C6D3]">
        {locale === 'fa'
          ? 'طرح گرافیکی مفهومی — بدون استفاده از تصاویر ساختگی از محیط کلینیک'
          : 'Conceptual Graphic — No Fabricated Facility Imagery'}
      </div>
    </div>
  );
}

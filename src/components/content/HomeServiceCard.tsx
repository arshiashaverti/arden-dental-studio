import { ArrowRight, ArrowLeft } from 'lucide-react';
import type { DentalService } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from '../primitives/Link';

interface HomeServiceCardProps {
  service: DentalService;
  id?: string;
}

export function HomeServiceCard({ service, id }: HomeServiceCardProps) {
  const { locale, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <Link
      id={id || `home-service-${service.id}`}
      href="/services"
      className="interactive-card group flex flex-col justify-between rounded-xl border border-[#C2C6D3] bg-[#FFFFFF] p-5 sm:p-6 text-start select-none"
    >
      <div>
        {/* Category & Adult Scope Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3.5">
          <span className="rounded-full bg-[#C2C6D3]/35 px-2.5 py-0.5 text-[11px] font-semibold text-[#0B194E]">
            {service.categoryLabel[locale]}
          </span>
          <span className="text-[11px] font-medium text-[#48537B]">
            {locale === 'fa' ? 'ویژه بزرگسالان' : 'Adults'}
          </span>
        </div>

        {/* Concise Service Title */}
        <h3 className="text-base sm:text-lg font-bold text-[#0B194E] tracking-tight group-hover:text-[#48537B] transition-colors leading-snug">
          {service.title[locale]}
        </h3>
      </div>

      {/* Subtle Navigation Prompt */}
      <div className="mt-4 pt-3 border-t border-[#C2C6D3]/50 flex items-center justify-between text-xs font-semibold text-[#48537B] group-hover:text-[#0B194E] transition-colors">
        <span>{locale === 'fa' ? 'مشاهده جزئیات بالینی' : 'View Clinical Scope'}</span>
        <ArrowIcon size={14} className="transition-transform group-hover:translate-x-0.5 rtl:group-hover:-translate-x-0.5" aria-hidden="true" />
      </div>
    </Link>
  );
}

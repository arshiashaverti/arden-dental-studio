import { CheckCircle2, Phone } from 'lucide-react';
import type { DentalService } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { clinicData } from '../../config/site';

interface ServiceCardProps {
  service: DentalService;
  id?: string;
}

export function ServiceCard({ service, id }: ServiceCardProps) {
  const { locale, t } = useLanguage();

  return (
    <article
      id={id || `service-${service.id}`}
      className="interactive-card flex flex-col justify-between rounded-xl border border-[#C2C6D3] bg-[#FFFFFF] p-6 sm:p-7"
    >
      <div>
        {/* Category & Adult badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <span className="rounded-full bg-[#C2C6D3]/30 px-3 py-1 text-xs font-semibold text-[#0B194E]">
            {service.categoryLabel[locale]}
          </span>
          <span className="text-xs font-medium text-[#48537B]">
            {t.common.adultsOnlyBadge}
          </span>
        </div>

        {/* Service Title */}
        <h3 className="text-xl font-bold text-[#0B194E] tracking-tight mb-3">
          {service.title[locale]}
        </h3>

        {/* Summary */}
        <p className="text-sm leading-relaxed text-[#48537B] mb-5">
          {service.summary[locale]}
        </p>

        {/* Clinical Scope Included */}
        <div className="mb-5 border-t border-[#C2C6D3]/60 pt-4">
          <span className="block text-xs font-semibold text-[#0B194E] mb-2.5">
            {t.services.includedLabel}
          </span>
          <ul className="space-y-2 text-xs text-[#48537B]">
            {service.included[locale].map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle2 size={15} className="shrink-0 mt-0.5 text-[#48537B]" aria-hidden="true" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Footer policy & call prompt */}
      <div className="border-t border-[#C2C6D3]/60 pt-4 mt-2">
        <p className="text-[11px] leading-normal text-[#48537B] mb-4">
          {service.policyNote[locale]}
        </p>

        <a
          href={clinicData.phoneTarget}
          className="interactive-btn interactive-btn-light inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#48537B] bg-transparent px-4 py-2.5 text-xs font-bold text-[#0B194E] hover:bg-[#C2C6D3]/30 transition-colors focus-visible:outline-2 focus-visible:outline-[#48537B]"
        >
          <Phone size={14} aria-hidden="true" />
          <span>{locale === 'fa' ? 'هماهنگی مشاوره: ۰۲۶۳۴۶۴۱۷۱۷' : 'Call: 026 34641717'}</span>
        </a>
      </div>
    </article>
  );
}

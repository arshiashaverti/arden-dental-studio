import { PhoneCall } from 'lucide-react';
import { clinicData } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

export function FloatingCallBar() {
  const { locale } = useLanguage();

  return (
    <aside
      id="mobile-call-bar"
      aria-label={locale === 'fa' ? 'تماس مستقیم تلفنی با کلینیک' : 'Direct clinic telephone call'}
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#C2C6D3] bg-[#0B194E] px-4 py-3 sm:hidden shadow-lg"
    >
      <a
        id="floating-phone-action"
        href={clinicData.phoneTarget}
        className="interactive-btn interactive-btn-light flex min-h-[48px] w-full items-center justify-center gap-3 rounded-lg bg-[#FFFFFF] px-4 py-2.5 text-sm font-bold text-[#0B194E] focus-visible:outline-2 focus-visible:outline-[#FFFFFF] focus-visible:outline-offset-2"
        dir="ltr"
      >
        <PhoneCall size={18} className="text-[#0B194E] animate-pulse" aria-hidden="true" />
        <span className="tracking-wide">{clinicData.phone}</span>
        <span className="text-xs font-medium text-[#48537B]">
          ({locale === 'fa' ? 'تماس مستقیم' : 'Call Clinic'})
        </span>
      </a>
    </aside>
  );
}

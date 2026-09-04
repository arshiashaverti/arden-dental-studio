import { useEffect } from 'react';
import { X, Phone, Clock, MapPin } from 'lucide-react';
import { Link } from '../primitives/Link';
import { TypographicLogo } from '../visual/TypographicLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { navigationItems, clinicData } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export function MobileNav({ isOpen, onClose, currentPath }: MobileNavProps) {
  const { locale, t } = useLanguage();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      id="mobile-drawer-overlay"
      className="fixed inset-0 z-50 flex justify-end bg-[#0B194E]/60 backdrop-blur-sm lg:hidden"
      role="dialog"
      aria-modal="true"
      aria-label={t.header.menuToggle}
    >
      <div
        id="mobile-drawer-content"
        className="flex h-full w-full max-w-xs flex-col justify-between overflow-y-auto bg-[#FFFFFF] p-6 shadow-2xl transition-transform"
      >
        <div>
          {/* Top drawer header */}
          <div className="flex items-center justify-between border-b border-[#C2C6D3] pb-4">
            <TypographicLogo />
            <button
              id="mobile-drawer-close"
              type="button"
              onClick={onClose}
              className="interactive-btn interactive-btn-light inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#C2C6D3] text-[#0B194E] hover:bg-[#C2C6D3]/30 focus-visible:outline-2 focus-visible:outline-[#48537B]"
              aria-label={t.header.closeMenu}
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav id="mobile-nav-list" aria-label="Mobile Navigation" className="mt-6 space-y-1">
            {navigationItems.map((item) => {
              const active = currentPath === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  aria-current={active ? 'page' : undefined}
                  className={`interactive-link flex min-h-[44px] items-center rounded-lg px-4 py-3 text-base font-semibold transition-colors ${
                    active
                      ? 'bg-[#0B194E] text-[#FFFFFF]'
                      : 'text-[#48537B] hover:bg-[#C2C6D3]/20 hover:text-[#0B194E]'
                  }`}
                >
                  {item.label[locale]}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Bottom Contact & Utility Summary */}
        <div className="border-t border-[#C2C6D3] pt-6 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#48537B]">
              {locale === 'fa' ? 'انتخاب زبان' : 'Language'}
            </span>
            <LanguageSwitcher />
          </div>

          <div className="space-y-2.5 rounded-xl bg-[#C2C6D3]/20 p-4 text-xs text-[#0B194E]">
            <a
              href={clinicData.phoneTarget}
              className="interactive-link flex items-center gap-2.5 font-bold hover:text-[#48537B]"
              dir="ltr"
            >
              <Phone size={15} className="shrink-0 text-[#0B194E]" aria-hidden="true" />
              <span>{clinicData.phone}</span>
            </a>
            <div className="flex items-start gap-2.5">
              <Clock size={15} className="mt-0.5 shrink-0 text-[#48537B]" aria-hidden="true" />
              <span>{clinicData.hours[locale]}</span>
            </div>
            <div className="flex items-start gap-2.5">
              <MapPin size={15} className="mt-0.5 shrink-0 text-[#48537B]" aria-hidden="true" />
              <span>{clinicData.address[locale]}</span>
            </div>
          </div>

          <a
            href={clinicData.phoneTarget}
            className="interactive-btn flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg bg-[#0B194E] px-4 py-3 text-sm font-bold text-[#FFFFFF] hover:bg-[#48537B] transition-colors"
          >
            <Phone size={16} aria-hidden="true" />
            <span>{t.header.callButton}</span>
          </a>
        </div>
      </div>
    </div>
  );
}

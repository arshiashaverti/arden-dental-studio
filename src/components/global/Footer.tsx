import { Phone, Clock, MapPin, AlertCircle } from 'lucide-react';
import { Container } from '../primitives/Container';
import { Link } from '../primitives/Link';
import { TypographicLogo } from '../visual/TypographicLogo';
import { navigationItems, clinicData } from '../../config/site';
import { servicesData } from '../../data/services';
import { useLanguage } from '../../context/LanguageContext';

export function Footer() {
  const { locale, t } = useLanguage();

  return (
    <footer
      id="global-footer"
      role="contentinfo"
      className="border-t border-[#48537B] bg-[#0B194E] text-[#FFFFFF] pt-14 pb-24 sm:pb-14 transition-colors"
    >
      <Container>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 pb-12 border-b border-[#48537B]/70">
          {/* Column 1: Brand & Philosophy */}
          <div className="space-y-4">
            <TypographicLogo inverted />
            <p className="text-sm leading-relaxed text-[#C2C6D3]">
              {t.footer.aboutText}
            </p>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-[#48537B] bg-[#48537B]/20 px-3 py-1 text-xs text-[#C2C6D3]">
              <span>{locale === 'fa' ? 'ویژه مراجعین بزرگسال' : 'Adult Dentistry Only'}</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FFFFFF] mb-4">
              {t.footer.quickLinks}
            </h3>
            <ul className="space-y-2.5 text-sm">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#C2C6D3] hover:text-[#FFFFFF] transition-colors"
                  >
                    {item.label[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: 8 Clinical Services Index */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FFFFFF] mb-4">
              {t.footer.servicesTitle}
            </h3>
            <ul className="space-y-2 text-sm text-[#C2C6D3]">
              {servicesData.map((svc) => (
                <li key={svc.id}>
                  <Link
                    href="/services"
                    className="hover:text-[#FFFFFF] transition-colors line-clamp-1"
                  >
                    {svc.title[locale]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Verified Contact & Schedule */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#FFFFFF] mb-4">
              {t.footer.contactTitle}
            </h3>
            <div className="space-y-3.5 text-sm">
              <div>
                <span className="block text-xs text-[#C2C6D3]/80 mb-1">{t.footer.phoneLabel}</span>
                <a
                  href={clinicData.phoneTarget}
                  className="inline-flex items-center gap-2 font-bold text-base text-[#FFFFFF] hover:text-[#C2C6D3]"
                  dir="ltr"
                >
                  <Phone size={16} className="text-[#C2C6D3]" aria-hidden="true" />
                  <span>{clinicData.phone}</span>
                </a>
              </div>

              <div>
                <span className="block text-xs text-[#C2C6D3]/80 mb-1">{t.footer.addressLabel}</span>
                <div className="flex items-start gap-2 text-[#C2C6D3]">
                  <MapPin size={16} className="shrink-0 mt-0.5 text-[#C2C6D3]" aria-hidden="true" />
                  <span>{clinicData.address[locale]}</span>
                </div>
              </div>

              <div>
                <span className="block text-xs text-[#C2C6D3]/80 mb-1">{t.footer.hoursLabel}</span>
                <div className="flex items-start gap-2 text-[#C2C6D3]">
                  <Clock size={16} className="shrink-0 mt-0.5 text-[#C2C6D3]" aria-hidden="true" />
                  <div>
                    <p>{clinicData.hours[locale]}</p>
                    <p className="text-xs text-[#C2C6D3]/80">{clinicData.fridayStatus[locale]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mandatory Medical Disclaimer Strip */}
        <div className="pt-8 space-y-4">
          <div className="flex items-start gap-3 rounded-xl border border-[#48537B] bg-[#48537B]/25 p-4 text-xs leading-relaxed text-[#C2C6D3]">
            <AlertCircle size={18} className="shrink-0 text-[#C2C6D3] mt-0.5" aria-hidden="true" />
            <p>{t.footer.medicalDisclaimer}</p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-xs text-[#C2C6D3]/80">
            <p>{t.footer.copyright}</p>
            <p>{clinicData.name} — {clinicData.address[locale]}</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}

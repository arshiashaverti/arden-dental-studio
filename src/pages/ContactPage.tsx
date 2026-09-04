import { Phone, Clock, MapPin, ShieldCheck } from 'lucide-react';
import { Container } from '../components/primitives/Container';
import { Eyebrow } from '../components/primitives/Eyebrow';
import { Heading } from '../components/primitives/Heading';
import { Text } from '../components/primitives/Text';
import { Card } from '../components/primitives/Card';
import { MapContainer } from '../components/content/MapContainer';
import { MedicalDisclaimer } from '../components/content/MedicalDisclaimer';
import { clinicData } from '../config/site';
import { useLanguage } from '../context/LanguageContext';

export function ContactPage() {
  const { locale, t } = useLanguage();

  return (
    <div id="contact-page" className="py-12 sm:py-16">
      <Container>
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4 mb-12">
          <Eyebrow id="contact-eyebrow">{t.contact.eyebrow}</Eyebrow>
          <Heading as="h1" id="contact-heading">
            {t.contact.title}
          </Heading>
          <Text variant="secondary" className="text-base sm:text-lg">
            {t.contact.lead}
          </Text>
        </div>

        {/* 2-Column Desktop Grid (50% / 50% split) */}
        <div className="grid gap-8 lg:grid-cols-2 mb-14">
          {/* Column 1: Direct Telephony & Operational Details */}
          <div className="space-y-6">
            {/* Primary Dialer Card */}
            <div className="rounded-xl border border-[#0B194E] bg-[#0B194E] p-7 text-[#FFFFFF] shadow-sm">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#C2C6D3] block mb-2">
                {t.contact.phoneCardTitle}
              </span>
              <p className="text-sm text-[#C2C6D3] mb-5">
                {t.contact.phoneCardDesc}
              </p>

              <a
                id="contact-page-dialer-button"
                href={clinicData.phoneTarget}
                className="interactive-btn interactive-btn-light flex min-h-[52px] w-full items-center justify-center gap-3 rounded-lg bg-[#FFFFFF] px-6 py-3 text-base font-extrabold text-[#0B194E] hover:bg-[#C2C6D3] transition-colors focus-visible:outline-2 focus-visible:outline-[#FFFFFF]"
                dir="ltr"
              >
                <Phone size={20} className="text-[#0B194E]" aria-hidden="true" />
                <span className="tracking-wide text-lg">{clinicData.phone}</span>
              </a>

              <p className="mt-3 text-center text-xs text-[#C2C6D3]">
                {locale === 'fa'
                  ? 'هماهنگی نوبت صرفاً از طریق تماس تلفنی در ساعات کاری'
                  : 'Appointments arranged exclusively via phone during business hours'}
              </p>
            </div>

            {/* Operating Schedule Card */}
            <Card className="p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-4 text-[#0B194E]">
                <Clock size={20} aria-hidden="true" />
                <h2 className="text-lg font-bold">
                  {t.contact.hoursCardTitle}
                </h2>
              </div>

              <div className="divide-y divide-[#C2C6D3]/60 text-sm">
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-[#48537B]">
                    {locale === 'fa' ? 'شنبه تا پنجشنبه:' : 'Saturday to Thursday:'}
                  </span>
                  <span className="font-bold text-[#0B194E]">
                    {locale === 'fa' ? '۱۰:۰۰ الی ۱۸:۰۰' : '10:00 – 18:00'}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2.5">
                  <span className="text-[#48537B]">
                    {locale === 'fa' ? 'جمعه‌ها:' : 'Friday:'}
                  </span>
                  <span className="font-bold text-[#48537B]">
                    {locale === 'fa' ? 'تعطیل' : 'Closed'}
                  </span>
                </div>
              </div>
            </Card>

            {/* Physical Address Card */}
            <Card className="p-6 sm:p-7">
              <div className="flex items-center gap-2.5 mb-3 text-[#0B194E]">
                <MapPin size={20} aria-hidden="true" />
                <h2 className="text-lg font-bold">
                  {t.contact.addressCardTitle}
                </h2>
              </div>

              <p className="text-base font-bold text-[#0B194E] mb-1">
                {clinicData.address[locale]}
              </p>
              <p className="text-xs text-[#48537B]">
                {t.contact.addressCity}
              </p>
            </Card>

            {/* Zero-Form Privacy Notice */}
            <div className="rounded-xl border border-[#C2C6D3] bg-[#C2C6D3]/20 p-5 text-xs leading-relaxed text-[#48537B] flex items-start gap-3">
              <ShieldCheck size={18} className="shrink-0 text-[#0B194E] mt-0.5" aria-hidden="true" />
              <p>{t.contact.zeroFormNotice}</p>
            </div>
          </div>

          {/* Column 2: Provider-Neutral Location Map Viewport */}
          <div>
            <MapContainer />
          </div>
        </div>

        {/* Medical Disclaimer */}
        <MedicalDisclaimer />
      </Container>
    </div>
  );
}

import { Phone, ShieldCheck, MapPin, Clock, Users, Award } from 'lucide-react';
import { Container } from '../components/primitives/Container';
import { Eyebrow } from '../components/primitives/Eyebrow';
import { Heading } from '../components/primitives/Heading';
import { Text } from '../components/primitives/Text';
import { Card } from '../components/primitives/Card';
import { MedicalDisclaimer } from '../components/content/MedicalDisclaimer';
import { clinicData } from '../config/site';
import { useLanguage } from '../context/LanguageContext';

export function AboutPage() {
  const { locale, t } = useLanguage();

  return (
    <div id="about-page" className="py-12 sm:py-16">
      <Container>
        {/* Page Hero */}
        <div className="max-w-3xl space-y-4 mb-14">
          <Eyebrow id="about-eyebrow">{t.about.eyebrow}</Eyebrow>
          <Heading as="h1" id="about-heading">
            {t.about.title}
          </Heading>
          <Text variant="secondary" className="text-base sm:text-lg">
            {t.about.lead}
          </Text>
        </div>

        {/* Adult Demographic Commitment Card */}
        <div className="mb-14 rounded-2xl border border-[#C2C6D3] bg-[#C2C6D3]/15 p-7 sm:p-10">
          <div className="flex items-center gap-3 mb-4 text-[#0B194E]">
            <Users size={24} aria-hidden="true" />
            <h2 className="text-xl sm:text-2xl font-bold">
              {t.about.adultCommitmentTitle}
            </h2>
          </div>
          <p className="text-sm sm:text-base leading-relaxed text-[#48537B] mb-6">
            {t.about.adultCommitmentText}
          </p>
          <div className="inline-flex items-center gap-2 rounded-lg bg-[#0B194E] px-4 py-2 text-xs font-semibold text-[#FFFFFF]">
            <span>{clinicData.pediatricExclusionNote[locale]}</span>
          </div>
        </div>

        {/* Clinical Standards Grid */}
        <div className="grid gap-8 md:grid-cols-2 mb-14">
          <Card className="p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B194E] text-[#FFFFFF] mb-5">
              <ShieldCheck size={24} aria-hidden="true" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B194E] mb-3">
              {t.about.standardsTitle}
            </h3>
            <Text variant="secondary" className="text-sm sm:text-base">
              {t.about.standardsText}
            </Text>
          </Card>

          <Card className="p-7 sm:p-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0B194E] text-[#FFFFFF] mb-5">
              <MapPin size={24} aria-hidden="true" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-[#0B194E] mb-3">
              {t.about.locationTitle}
            </h3>
            <Text variant="secondary" className="text-sm sm:text-base">
              {t.about.locationText}
            </Text>
          </Card>
        </div>

        {/* Operating Schedule & Contact Strip */}
        <div className="mb-14 rounded-xl border border-[#C2C6D3] bg-[#FFFFFF] p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-[#48537B]">
              {locale === 'fa' ? 'زمان‌بندی مراجعات' : 'Clinical Schedule'}
            </span>
            <p className="text-base font-bold text-[#0B194E]">
              {clinicData.hours[locale]}
            </p>
            <p className="text-xs text-[#48537B]">
              {clinicData.fridayStatus[locale]}
            </p>
          </div>

          <a
            id="about-call-cta"
            href={clinicData.phoneTarget}
            className="interactive-btn inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#0B194E] px-6 py-3 text-sm font-bold text-[#FFFFFF] hover:bg-[#48537B] transition-colors shadow-sm"
          >
            <Phone size={16} aria-hidden="true" />
            <span>{clinicData.phone} ({locale === 'fa' ? 'تماس جهت هماهنگی' : 'Call for Appointment'})</span>
          </a>
        </div>

        {/* Medical Educational Disclaimer */}
        <MedicalDisclaimer />
      </Container>
    </div>
  );
}

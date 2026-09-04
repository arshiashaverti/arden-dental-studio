import { useState } from 'react';
import { Phone, Users, ShieldAlert } from 'lucide-react';
import { Container } from '../components/primitives/Container';
import { Eyebrow } from '../components/primitives/Eyebrow';
import { Heading } from '../components/primitives/Heading';
import { Text } from '../components/primitives/Text';
import { ServiceCard } from '../components/content/ServiceCard';
import { MedicalDisclaimer } from '../components/content/MedicalDisclaimer';
import { servicesData } from '../data/services';
import { clinicData } from '../config/site';
import { useLanguage } from '../context/LanguageContext';
import type { ServiceCategory } from '../types';

export function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const { locale, t } = useLanguage();

  const filteredServices = selectedCategory === 'all'
    ? servicesData
    : servicesData.filter((svc) => svc.category === selectedCategory);

  return (
    <div id="services-page" className="py-12 sm:py-16">
      <Container>
        {/* Page Hero Header */}
        <div className="max-w-3xl space-y-4 mb-10">
          <Eyebrow id="services-eyebrow">{t.services.eyebrow}</Eyebrow>
          <Heading as="h1" id="services-heading">
            {t.services.title}
          </Heading>
          <Text variant="secondary" className="text-base sm:text-lg">
            {t.services.lead}
          </Text>

          <div className="pt-2 flex flex-wrap gap-2 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B194E] px-3.5 py-1 font-semibold text-[#FFFFFF]">
              <Users size={13} aria-hidden="true" />
              <span>{t.services.adultScopeTag}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#C2C6D3] bg-[#C2C6D3]/30 px-3.5 py-1 font-medium text-[#0B194E]">
              <span>{clinicData.pediatricExclusionNote[locale]}</span>
            </span>
          </div>
        </div>

        {/* Client-Side Category Filter Tabs */}
        <div className="mb-10 flex flex-wrap gap-2 border-b border-[#C2C6D3] pb-4">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`interactive-btn min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-[#48537B] ${
              selectedCategory === 'all'
                ? 'bg-[#0B194E] text-[#FFFFFF]'
                : 'interactive-btn-light border border-[#C2C6D3] text-[#48537B] hover:bg-[#C2C6D3]/30'
            }`}
          >
            {t.services.tabAll}
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('general')}
            className={`interactive-btn min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-[#48537B] ${
              selectedCategory === 'general'
                ? 'bg-[#0B194E] text-[#FFFFFF]'
                : 'interactive-btn-light border border-[#C2C6D3] text-[#48537B] hover:bg-[#C2C6D3]/30'
            }`}
          >
            {t.services.tabGeneral}
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('cosmetic')}
            className={`interactive-btn min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-[#48537B] ${
              selectedCategory === 'cosmetic'
                ? 'bg-[#0B194E] text-[#FFFFFF]'
                : 'interactive-btn-light border border-[#C2C6D3] text-[#48537B] hover:bg-[#C2C6D3]/30'
            }`}
          >
            {t.services.tabCosmetic}
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('specialized')}
            className={`interactive-btn min-h-[44px] rounded-lg px-4 py-2 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-[#48537B] ${
              selectedCategory === 'specialized'
                ? 'bg-[#0B194E] text-[#FFFFFF]'
                : 'interactive-btn-light border border-[#C2C6D3] text-[#48537B] hover:bg-[#C2C6D3]/30'
            }`}
          >
            {t.services.tabSpecialized}
          </button>
        </div>

        {/* 8-Service Catalog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Pricing Transparency Policy Card */}
        <div className="mb-16 rounded-xl border border-[#C2C6D3] bg-[#C2C6D3]/20 p-6 sm:p-8 flex items-start gap-4">
          <ShieldAlert size={24} className="shrink-0 text-[#0B194E] mt-0.5" aria-hidden="true" />
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#0B194E]">
              {locale === 'fa' ? 'سیاست عدم درج قیمت در وب‌سایت' : 'Pricing Transparency Policy'}
            </h3>
            <p className="text-sm leading-relaxed text-[#48537B]">
              {t.services.pricingPolicyBox}
            </p>
          </div>
        </div>

        {/* 4-Step Clinical Treatment Workflow */}
        <div className="mb-16 rounded-2xl border border-[#C2C6D3] bg-[#FFFFFF] p-8 sm:p-10">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B194E] mb-8">
            {t.services.workflowTitle}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.services.workflowSteps.map((step) => (
              <div key={step.num} className="border-t-2 border-[#0B194E] pt-4">
                <span className="text-xs font-bold text-[#48537B] uppercase tracking-wider block mb-2">
                  {step.num}
                </span>
                <h3 className="text-base font-bold text-[#0B194E] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#48537B] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Consultation Telephony CTA */}
        <div className="mb-12 rounded-xl bg-[#0B194E] p-8 sm:p-10 text-center text-[#FFFFFF] space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold">
            {locale === 'fa'
              ? 'جهت هماهنگی وقت معاینه با ما تماس بگیرید'
              : 'Call to Schedule Your Clinical Consultation'}
          </h3>
          <p className="text-sm text-[#C2C6D3] max-w-xl mx-auto">
            {locale === 'fa'
              ? 'ساعات پاسخگویی: شنبه تا پنجشنبه از ۱۰:۰۰ الی ۱۸:۰۰'
              : 'Reception hours: Saturday through Thursday from 10:00 to 18:00'}
          </p>
          <div className="pt-2">
            <a
              id="services-bottom-cta"
              href={clinicData.phoneTarget}
              className="interactive-btn interactive-btn-light inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#FFFFFF] px-7 py-3 text-sm font-bold text-[#0B194E] hover:bg-[#C2C6D3] transition-colors"
            >
              <Phone size={17} aria-hidden="true" />
              <span>{clinicData.phone} ({t.services.ctaButton})</span>
            </a>
          </div>
        </div>

        {/* Medical Educational Disclaimer */}
        <MedicalDisclaimer />
      </Container>
    </div>
  );
}

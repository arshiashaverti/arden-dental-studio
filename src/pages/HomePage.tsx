import { Phone, ArrowRight, ArrowLeft, ShieldCheck, Clock, MapPin, Sparkles } from 'lucide-react';
import { Container } from '../components/primitives/Container';
import { Eyebrow } from '../components/primitives/Eyebrow';
import { Heading } from '../components/primitives/Heading';
import { Text } from '../components/primitives/Text';
import { Link } from '../components/primitives/Link';
import { Card } from '../components/primitives/Card';
import { ConceptualHeroGraphic } from '../components/visual/ConceptualHeroGraphic';
import { HomeServiceCard } from '../components/content/HomeServiceCard';
import { FAQAccordion } from '../components/content/FAQAccordion';
import { MapContainer } from '../components/content/MapContainer';
import { servicesData } from '../data/services';
import { faqData } from '../data/faq';
import { clinicData } from '../config/site';
import { useLanguage } from '../context/LanguageContext';

export function HomePage() {
  const { locale, t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // Show top 3 FAQs on homepage preview
  const previewFaqs = faqData.slice(0, 3);

  return (
    <div id="home-page">
      {/* 1. HERO SECTION */}
      <section
        id="hero-section"
        aria-label={t.home.heroTitle}
        className="pt-10 sm:pt-16 pb-16 sm:pb-20 border-b border-[#C2C6D3]/40 bg-gradient-to-b from-[#FFFFFF] to-[#C2C6D3]/10"
      >
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Column 1: Copy & Primary CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <Eyebrow id="hero-eyebrow">
                <Sparkles size={14} className="text-[#0B194E]" aria-hidden="true" />
                <span>{t.home.heroEyebrow}</span>
              </Eyebrow>

              <Heading as="h1" id="hero-heading" className="max-w-2xl">
                {t.home.heroTitle}
              </Heading>

              <Text variant="secondary" className="max-w-xl text-base sm:text-lg">
                {t.home.heroSubtitle}
              </Text>

              {/* Conversion Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <a
                  id="hero-primary-call-cta"
                  href={clinicData.phoneTarget}
                  className="interactive-btn inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#0B194E] px-6 py-3 text-sm font-bold text-[#FFFFFF] hover:bg-[#48537B] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#48537B]"
                >
                  <Phone size={17} aria-hidden="true" />
                  <span>{t.home.ctaPrimary}</span>
                </a>

                <Link
                  id="hero-secondary-services-link"
                  href="/services"
                  className="interactive-btn interactive-btn-light inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg border border-[#48537B] bg-transparent px-5 py-3 text-sm font-bold text-[#0B194E] hover:bg-[#C2C6D3]/30 transition-colors"
                >
                  <span>{t.home.ctaSecondary}</span>
                  <ArrowIcon size={16} aria-hidden="true" />
                </Link>
              </div>

              {/* Confirmed Business Quick Badge */}
              <div className="pt-4 flex flex-wrap items-center gap-6 text-xs text-[#48537B] border-t border-[#C2C6D3]/60">
                <span className="flex items-center gap-1.5">
                  <MapPin size={15} className="text-[#0B194E]" aria-hidden="true" />
                  <span>{clinicData.address[locale]}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock size={15} className="text-[#0B194E]" aria-hidden="true" />
                  <span>{clinicData.hours[locale]}</span>
                </span>
              </div>
            </div>

            {/* Column 2: Minimalist Conceptual Dental Vector Graphic */}
            <div className="lg:col-span-5">
              <ConceptualHeroGraphic />
            </div>
          </div>
        </Container>
      </section>

      {/* 2. DEMOGRAPHIC TRUST PILLARS */}
      <section
        id="trust-pillars-section"
        aria-label="Clinical Differentiation"
        className="py-12 sm:py-16 bg-[#FFFFFF] border-b border-[#C2C6D3]/40"
      >
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {t.home.pillars.map((pillar, index) => (
              <Card key={index} id={`pillar-card-${index}`} className="p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#0B194E] text-[#FFFFFF] mb-4">
                  <ShieldCheck size={22} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-[#0B194E] mb-2">
                  {pillar.title}
                </h3>
                <Text variant="secondary" className="text-sm">
                  {pillar.desc}
                </Text>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* 3. SERVICES DIRECTORY PREVIEW (8 Confirmed Services - Concise Format CR-001-A) */}
      <section
        id="services-overview-section"
        aria-labelledby="services-section-title"
        className="py-16 sm:py-20 bg-[#C2C6D3]/15 border-b border-[#C2C6D3]/40"
      >
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
            <div className="max-w-2xl">
              <Eyebrow id="services-preview-eyebrow">
                {locale === 'fa' ? 'خدمات تخصصی بزرگسالان' : 'Clinical Specialties'}
              </Eyebrow>
              <Heading as="h2" id="services-section-title" className="mt-3">
                {t.home.servicesHeading}
              </Heading>
              <Text variant="secondary" className="mt-3 text-base sm:text-lg">
                {t.home.servicesSubheading}
              </Text>
            </div>

            <Link
              id="view-all-services-link"
              href="/services"
              className="interactive-btn interactive-btn-light inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#48537B] px-4 py-2 text-sm font-bold text-[#0B194E] hover:bg-[#C2C6D3]/30 transition-colors"
            >
              <span>{t.home.allServicesAction}</span>
              <ArrowIcon size={16} aria-hidden="true" />
            </Link>
          </div>

          {/* 8-Card Responsive Grid with Concise Density */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {servicesData.map((service) => (
              <HomeServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* 4. WHY ARDEN STUDIO — CLINICAL DIFFERENTIATORS */}
      <section
        id="why-arden-section"
        aria-labelledby="why-section-title"
        className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#C2C6D3]/40"
      >
        <Container>
          <div className="max-w-2xl mb-12">
            <Eyebrow id="why-eyebrow">
              {locale === 'fa' ? 'اصول و تعهدات کلینیکی' : 'Clinical Commitments'}
            </Eyebrow>
            <Heading as="h2" id="why-section-title" className="mt-3">
              {t.home.whyHeading}
            </Heading>
            <Text variant="secondary" className="mt-3 text-base sm:text-lg">
              {t.home.whySubheading}
            </Text>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.home.differentiators.map((item, index) => (
              <div
                key={index}
                id={`diff-item-${index}`}
                className="rounded-xl border border-[#C2C6D3] bg-[#FFFFFF] p-6"
              >
                <span className="text-xs font-bold text-[#48537B] uppercase tracking-wider block mb-3">
                  0{index + 1}
                </span>
                <h3 className="text-base font-bold text-[#0B194E] mb-2">
                  {item.title}
                </h3>
                <Text variant="secondary" className="text-xs sm:text-sm">
                  {item.desc}
                </Text>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 5. LOCATION & OPERATING HOURS SPOTLIGHT */}
      <section
        id="location-schedule-section"
        aria-labelledby="location-section-title"
        className="py-16 sm:py-20 bg-[#C2C6D3]/15 border-b border-[#C2C6D3]/40"
      >
        <Container>
          <div className="max-w-2xl mb-10">
            <Eyebrow id="location-eyebrow">
              {locale === 'fa' ? 'دسترسی و زمان‌بندی' : 'Access & Timing'}
            </Eyebrow>
            <Heading as="h2" id="location-section-title" className="mt-3">
              {t.home.locationHeading}
            </Heading>
            <Text variant="secondary" className="mt-2 text-base">
              {t.home.locationSubheading}
            </Text>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left: Summary cards */}
            <div className="lg:col-span-5 space-y-4">
              <Card className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#48537B] block mb-1">
                  {t.footer.phoneLabel}
                </span>
                <a
                  href={clinicData.phoneTarget}
                  className="interactive-link text-xl sm:text-2xl font-extrabold text-[#0B194E] hover:text-[#48537B] inline-flex items-center gap-2"
                  dir="ltr"
                >
                  <Phone size={20} className="text-[#0B194E]" aria-hidden="true" />
                  <span>{clinicData.phone}</span>
                </a>
                <p className="text-xs text-[#48537B] mt-2">
                  {locale === 'fa'
                    ? 'پاسخگویی تلفنی از ۱۰:۰۰ الی ۱۸:۰۰'
                    : 'Telephone inquiries 10:00 to 18:00'}
                </p>
              </Card>

              <Card className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#48537B] block mb-1">
                  {t.footer.hoursLabel}
                </span>
                <p className="text-base font-bold text-[#0B194E]">
                  {clinicData.hours[locale]}
                </p>
                <p className="text-sm font-semibold text-[#48537B] mt-1">
                  {clinicData.fridayStatus[locale]}
                </p>
              </Card>

              <Card className="p-6">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#48537B] block mb-1">
                  {t.footer.addressLabel}
                </span>
                <p className="text-base font-bold text-[#0B194E]">
                  {clinicData.address[locale]}
                </p>
              </Card>
            </div>

            {/* Right: Map Presentation */}
            <div className="lg:col-span-7">
              <MapContainer />
            </div>
          </div>
        </Container>
      </section>

      {/* 6. ESSENTIAL FAQ PREVIEW */}
      <section
        id="faq-preview-section"
        aria-labelledby="faq-preview-title"
        className="py-16 sm:py-20 bg-[#FFFFFF] border-b border-[#C2C6D3]/40"
      >
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <Eyebrow id="faq-preview-eyebrow">
                {t.faq.eyebrow}
              </Eyebrow>
              <Heading as="h2" id="faq-preview-title" className="mt-3">
                {t.home.faqHeading}
              </Heading>
              <Text variant="secondary" className="mt-2 text-base">
                {t.home.faqSubheading}
              </Text>
            </div>

            <Link
              id="view-all-faq-link"
              href="/faq"
              className="interactive-btn interactive-btn-light inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#48537B] px-4 py-2 text-sm font-bold text-[#0B194E] hover:bg-[#C2C6D3]/30 transition-colors"
            >
              <span>{t.home.allFaqAction}</span>
              <ArrowIcon size={16} aria-hidden="true" />
            </Link>
          </div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={previewFaqs} id="home-faq-accordion" />
          </div>
        </Container>
      </section>

      {/* 7. FINAL CONSULTATION BANNER */}
      <section
        id="home-cta-banner"
        aria-label="Direct Consultation Banner"
        className="py-14 sm:py-16 bg-[#0B194E] text-[#FFFFFF]"
      >
        <Container>
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 text-center lg:text-start">
            <div className="max-w-2xl">
              <Heading as="h2" className="text-2xl sm:text-3xl text-[#FFFFFF]">
                {t.home.ctaBannerTitle}
              </Heading>
              <p className="mt-3 text-sm sm:text-base text-[#C2C6D3] leading-relaxed">
                {t.home.ctaBannerSubtitle}
              </p>
            </div>

            <div className="shrink-0">
              <a
                id="home-cta-banner-button"
                href={clinicData.phoneTarget}
                className="interactive-btn interactive-btn-light inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#FFFFFF] px-7 py-3 text-sm font-bold text-[#0B194E] hover:bg-[#C2C6D3] transition-colors focus-visible:outline-2 focus-visible:outline-[#FFFFFF]"
              >
                <Phone size={17} aria-hidden="true" />
                <span>{t.home.ctaBannerButton}</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}

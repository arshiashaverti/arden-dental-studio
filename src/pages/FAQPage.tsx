import { Phone, HelpCircle } from 'lucide-react';
import { Container } from '../components/primitives/Container';
import { Eyebrow } from '../components/primitives/Eyebrow';
import { Heading } from '../components/primitives/Heading';
import { Text } from '../components/primitives/Text';
import { FAQAccordion } from '../components/content/FAQAccordion';
import { MedicalDisclaimer } from '../components/content/MedicalDisclaimer';
import { faqData } from '../data/faq';
import { clinicData } from '../config/site';
import { useLanguage } from '../context/LanguageContext';

export function FAQPage() {
  const { locale, t } = useLanguage();

  const logisticsFaqs = faqData.filter((item) => item.category === 'logistics');
  const treatmentFaqs = faqData.filter((item) => item.category === 'treatments');

  return (
    <div id="faq-page" className="py-12 sm:py-16">
      <Container>
        {/* Page Hero */}
        <div className="max-w-3xl space-y-4 mb-12">
          <Eyebrow id="faq-eyebrow">{t.faq.eyebrow}</Eyebrow>
          <Heading as="h1" id="faq-heading">
            {t.faq.title}
          </Heading>
          <Text variant="secondary" className="text-base sm:text-lg">
            {t.faq.lead}
          </Text>
        </div>

        {/* Section 1: Logistics & Appointments */}
        <div className="mb-12 max-w-3xl">
          <div className="flex items-center gap-2 mb-4 border-b border-[#C2C6D3] pb-3">
            <HelpCircle size={18} className="text-[#0B194E]" aria-hidden="true" />
            <h2 className="text-lg font-bold text-[#0B194E]">
              {t.faq.categoryLogistics}
            </h2>
          </div>
          <FAQAccordion items={logisticsFaqs} id="faq-logistics-accordion" />
        </div>

        {/* Section 2: Treatments & Scope */}
        <div className="mb-14 max-w-3xl">
          <div className="flex items-center gap-2 mb-4 border-b border-[#C2C6D3] pb-3">
            <HelpCircle size={18} className="text-[#0B194E]" aria-hidden="true" />
            <h2 className="text-lg font-bold text-[#0B194E]">
              {t.faq.categoryTreatments}
            </h2>
          </div>
          <FAQAccordion items={treatmentFaqs} id="faq-treatments-accordion" />
        </div>

        {/* Unresolved Questions Conversion Card */}
        <div className="max-w-3xl mb-12 rounded-2xl border border-[#C2C6D3] bg-[#C2C6D3]/15 p-7 sm:p-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-base font-bold text-[#0B194E]">
              {t.faq.unresolvedTitle}
            </h3>
            <p className="text-xs sm:text-sm text-[#48537B]">
              {t.faq.unresolvedText}
            </p>
          </div>

          <a
            id="faq-call-cta"
            href={clinicData.phoneTarget}
            className="interactive-btn inline-flex min-h-[48px] items-center justify-center gap-2 rounded-lg bg-[#0B194E] px-6 py-3 text-sm font-bold text-[#FFFFFF] hover:bg-[#48537B] transition-colors shrink-0"
          >
            <Phone size={16} aria-hidden="true" />
            <span>{t.faq.callButton}</span>
          </a>
        </div>

        {/* Medical Educational Disclaimer */}
        <div className="max-w-3xl">
          <MedicalDisclaimer />
        </div>
      </Container>
    </div>
  );
}

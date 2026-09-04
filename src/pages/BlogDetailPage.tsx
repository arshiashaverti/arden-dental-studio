import { ArrowLeft, ArrowRight, Clock, BookOpen, Phone, ShieldCheck } from 'lucide-react';
import { Container } from '../components/primitives/Container';
import { Eyebrow } from '../components/primitives/Eyebrow';
import { Heading } from '../components/primitives/Heading';
import { Text } from '../components/primitives/Text';
import { Link } from '../components/primitives/Link';
import { Card } from '../components/primitives/Card';
import { MedicalDisclaimer } from '../components/content/MedicalDisclaimer';
import { clinicData } from '../config/site';
import { useLanguage } from '../context/LanguageContext';
import type { BlogArticle } from '../types';

interface BlogDetailPageProps {
  article: BlogArticle;
}

export function BlogDetailPage({ article }: BlogDetailPageProps) {
  const { locale, t, isRTL } = useLanguage();
  const BackArrow = isRTL ? ArrowRight : ArrowLeft;

  return (
    <div id={`article-page-${article.slug}`} className="py-12 sm:py-16">
      <Container>
        {/* Back navigation button */}
        <div className="mb-8">
          <Link
            id="back-to-blog-link"
            href="/blog"
            className="interactive-btn interactive-btn-light inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#48537B] px-4 py-2 text-xs sm:text-sm font-bold text-[#0B194E] hover:bg-[#C2C6D3]/30 transition-colors"
          >
            <BackArrow size={16} aria-hidden="true" />
            <span>{t.blog.backToBlog}</span>
          </Link>
        </div>

        <article className="max-w-3xl mx-auto space-y-8">
          {/* Article Header */}
          <header className="space-y-4 border-b border-[#C2C6D3]/70 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full bg-[#0B194E] px-3.5 py-1 font-semibold text-[#FFFFFF]">
                {article.category[locale]}
              </span>
              <span className="flex items-center gap-1.5 text-[#48537B] font-medium">
                <Clock size={14} aria-hidden="true" />
                <span>{article.readTime[locale]}</span>
              </span>
              <span className="rounded-full border border-[#C2C6D3] bg-[#C2C6D3]/20 px-3 py-1 text-[#48537B]">
                {locale === 'fa' ? 'مقاله آموزشی بالینی' : 'Clinical Educational Guide'}
              </span>
            </div>

            <Heading as="h1" id="article-main-title" className="text-2xl sm:text-3xl lg:text-4xl text-[#0B194E] leading-tight">
              {article.title[locale]}
            </Heading>

            {/* Lead summary */}
            <p className="text-base sm:text-lg leading-relaxed text-[#48537B] font-medium pt-2">
              {article.summary[locale]}
            </p>
          </header>

          {/* Article Main Body */}
          <div className="prose max-w-none text-[#0B194E] text-base sm:text-lg leading-relaxed space-y-6">
            <p className="whitespace-pre-line leading-relaxed">
              {article.body[locale]}
            </p>
          </div>

          {/* Educational Note Callout */}
          <div className="rounded-xl border border-[#C2C6D3] bg-[#C2C6D3]/15 p-5 sm:p-6 flex items-start gap-3.5 border-s-4 border-s-[#0B194E]">
            <BookOpen size={20} className="shrink-0 text-[#0B194E] mt-0.5" aria-hidden="true" />
            <div className="space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#0B194E] block">
                {locale === 'fa' ? 'یادداشت راهنمای بالینی' : 'Clinical Guidance Note'}
              </span>
              <p className="text-xs sm:text-sm text-[#48537B] leading-relaxed">
                {article.educationalNote[locale]}
              </p>
            </div>
          </div>

          {/* Clinical Direct Inquiries & Consultation Card */}
          <Card className="interactive-card p-6 sm:p-8 bg-[#FFFFFF]">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
              <div className="space-y-1.5 max-w-md">
                <span className="text-xs font-bold uppercase tracking-wider text-[#48537B] block">
                  {locale === 'fa' ? 'هماهنگی و مشاوره حضوری' : 'In-Clinic Consultations'}
                </span>
                <h2 className="text-lg font-bold text-[#0B194E]">
                  {locale === 'fa' ? 'نیاز به راهنمایی یا معاینه بالینی دارید؟' : 'Need Diagnostic Examination or Guidance?'}
                </h2>
                <p className="text-xs sm:text-sm text-[#48537B]">
                  {locale === 'fa'
                    ? 'پاسخگویی تلفنی و هماهنگی نوبت: شنبه تا پنجشنبه از ۱۰:۰۰ الی ۱۸:۰۰'
                    : 'Telephone coordination & inquiries: Saturday through Thursday 10:00 to 18:00'}
                </p>
              </div>

              <div className="shrink-0">
                <a
                  id="article-consultation-call-cta"
                  href={clinicData.phoneTarget}
                  className="interactive-btn inline-flex min-h-[48px] items-center justify-center gap-2.5 rounded-lg bg-[#0B194E] px-6 py-3 text-sm font-bold text-[#FFFFFF] hover:bg-[#48537B] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#48537B]"
                >
                  <Phone size={16} aria-hidden="true" />
                  <span>{clinicData.phone}</span>
                </a>
              </div>
            </div>
          </Card>

          {/* Standard Medical Educational Disclaimer */}
          <div className="pt-4">
            <MedicalDisclaimer />
          </div>
        </article>
      </Container>
    </div>
  );
}

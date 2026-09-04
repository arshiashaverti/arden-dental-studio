import { useEffect, useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { MainLayout } from './layouts/MainLayout';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { FAQPage } from './pages/FAQPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { clinicData } from './config/site';
import { blogData } from './data/blog';

function getPath() {
  const path = window.location.pathname.replace(/\/+$/, '');
  return path || '/';
}

function AppContent() {
  const [path, setPath] = useState(getPath);
  const { locale, t } = useLanguage();

  useEffect(() => {
    const handlePopState = () => {
      setPath(getPath());
    };

    window.addEventListener('popstate', handlePopState);
    return () => {
      window.removeEventListener('popstate', handlePopState);
    };
  }, []);

  // Update route-specific SEO metadata and JSON-LD schema
  useEffect(() => {
    const isEn = locale === 'en';

    let pageTitle = t.meta.siteTitle;
    let pageDesc = t.meta.siteDescription;

    if (path === '/') {
      pageTitle = isEn
        ? 'Arden Dental Studio | Adult Dental Practice Pasdaran Tehran'
        : 'کلینیک دندانپزشکی آردن | دندانپزشکی تخصصی بزرگسالان پاسداران';
      pageDesc = isEn
        ? 'Arden Dental Studio in Pasdaran, Tehran. Comprehensive adult dentistry: examination, preventive care, implants, orthodontics, composite, and laminates.'
        : 'کلینیک دندانپزشکی آردن در پاسداران تهران. ارائه خدمات تخصصی معاینه، ترمیم، ایمپلنت، ارتودنسی، کامپوزیت و لمینت بزرگسالان.';
    } else if (path === '/about') {
      pageTitle = isEn
        ? 'About Us | Arden Dental Studio'
        : 'درباره ما | کلینیک دندانپزشکی آردن پاسداران';
      pageDesc = isEn
        ? 'Learn about clinical care philosophy and hygiene standards at Arden Dental Studio in Pasdaran, Tehran.'
        : 'آشنایی با رویکرد، استانداردهای بهداشتی و خدمات تخصصی دندانپزشکی بزرگسالان در کلینیک آردن پاسداران تهران.';
    } else if (path === '/services') {
      pageTitle = isEn
        ? 'Dental Services | Arden Dental Studio'
        : 'خدمات دندانپزشکی | کلینیک دندانپزشکی آردن';
      pageDesc = isEn
        ? 'Explore all 8 specialized adult dental services at Arden Dental Studio: implants, orthodontics, veneers, and preventive care.'
        : 'معرفی ۸ خدمت تخصصی دندانپزشکی بزرگسالان: ایمپلنت، کامپوزیت، لمینت، ارتودنسی، ترمیم و مراقبت‌های پیشگیرانه در پاسداران.';
    } else if (path === '/faq') {
      pageTitle = isEn
        ? 'FAQ | Arden Dental Studio'
        : 'سوالات متداول | کلینیک دندانپزشکی آردن';
      pageDesc = isEn
        ? 'Answers to common questions about consultations, appointments, and adult dental treatments at Arden Studio.'
        : 'پاسخ به سوالات متداول مراجعین درباره خدمات دندانپزشکی، روال مشاوره و ساعات کاری کلینیک آردن.';
    } else if (path === '/contact') {
      pageTitle = isEn
        ? 'Contact & Location | Arden Dental Studio'
        : 'تماس و موقعیت مکانی | کلینیک دندانپزشکی آردن';
      pageDesc = isEn
        ? 'Address, contact phone, and operating hours for Arden Dental Studio in Pasdaran, Boostan 7, Tehran. Phone: 026 34641717.'
        : 'آدرس و اطلاعات تماس کلینیک دندانپزشکی آردن در پاسداران، بوستان ۷. ساعات کاری شنبه تا پنجشنبه ۱۰ الی ۱۸. تماس: ۰۲۶۳۴۶۴۱۷۱۷.';
    } else if (path === '/blog') {
      pageTitle = isEn
        ? 'Dental Wellness Articles | Arden Dental Studio'
        : 'مقالات آموزشی | کلینیک دندانپزشکی آردن';
      pageDesc = isEn
        ? 'Educational dental health and oral hygiene maintenance guides for adult patients from Arden Dental Studio.'
        : 'مقالات و راهنماهای آموزشی مراقبت از دندان، ونیرها، ایمپلنت و بهداشت دهان و دندان بزرگسالان.';
    } else if (path.startsWith('/blog/')) {
      const slug = path.slice('/blog/'.length).replace(/\/+$/, '');
      const matchedArticle = blogData.find((a) => a.slug === slug);
      if (matchedArticle) {
        pageTitle = `${matchedArticle.title[locale]} | ${clinicData.name}`;
        pageDesc = matchedArticle.summary[locale];
      } else {
        pageTitle = isEn
          ? 'Article Not Found | Arden Dental Studio'
          : 'مقاله مورد نظر یافت نشد | کلینیک دندانپزشکی آردن';
        pageDesc = isEn
          ? 'The requested dental health educational guide was not found.'
          : 'مقاله آموزشی مورد نظر در آرشیو مقالات کلینیک آردن یافت نشد.';
      }
    } else {
      pageTitle = isEn ? 'Page Not Found | Arden Dental Studio' : 'صفحه مورد نظر یافت نشد | کلینیک دندانپزشکی آردن';
    }

    document.title = pageTitle;

    // Meta descriptions
    const descTag = document.querySelector('meta[name="description"]');
    if (descTag) descTag.setAttribute('content', pageDesc);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', pageTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', pageDesc);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = `${window.location.origin}${path}`;

    // Verified LocalBusiness JSON-LD Schema (Zero fabrication)
    let schemaScript = document.getElementById('local-business-schema') as HTMLScriptElement | null;
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.id = 'local-business-schema';
      schemaScript.type = 'application/ld+json';
      document.head.appendChild(schemaScript);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Dentist',
      name: clinicData.name,
      alternateName: clinicData.officialName.fa,
      telephone: clinicData.phone,
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'بوستان 7',
        addressLocality: 'تهران، پاسداران',
        addressCountry: 'IR',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          opens: '10:00',
          closes: '18:00',
        },
      ],
      medicalSpecialty: 'Dentistry',
      description: pageDesc,
    };

    schemaScript.textContent = JSON.stringify(structuredData);
  }, [path, locale, t]);

  // Route Dispatcher (Only the 6 approved flat routes)
  let page: React.ReactNode;
  if (path === '/') {
    page = <HomePage />;
  } else if (path === '/about') {
    page = <AboutPage />;
  } else if (path === '/services') {
    page = <ServicesPage />;
  } else if (path === '/faq') {
    page = <FAQPage />;
  } else if (path === '/contact') {
    page = <ContactPage />;
  } else if (path === '/blog') {
    page = <BlogPage />;
  } else if (path.startsWith('/blog/')) {
    const slug = path.slice('/blog/'.length).replace(/\/+$/, '');
    const matchedArticle = blogData.find((a) => a.slug === slug);
    if (matchedArticle) {
      page = <BlogDetailPage article={matchedArticle} />;
    } else {
      page = <NotFoundPage />;
    }
  } else {
    page = <NotFoundPage />;
  }

  return <MainLayout currentPath={path}>{page}</MainLayout>;
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

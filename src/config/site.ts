import type { ClinicInfo, NavigationItem } from '../types';

export const clinicData: ClinicInfo = {
  name: 'Arden Dental Studio',
  officialName: {
    fa: 'کلینیک دندانپزشکی آردن (Arden Dental Studio)',
    en: 'Arden Dental Studio',
  },
  phone: '026 34641717',
  phoneTarget: 'tel:02634641717',
  address: {
    fa: 'تهران، پاسداران، بوستان 7',
    en: 'Tehran, Pasdaran, Boostan 7',
  },
  hours: {
    fa: 'شنبه تا پنجشنبه ۱۰:۰۰ الی ۱۸:۰۰',
    en: 'Saturday to Thursday 10:00 – 18:00',
  },
  fridayStatus: {
    fa: 'جمعه: تعطیل',
    en: 'Friday: Closed',
  },
  email: null,
  logoAsset: null,
  targetAudience: {
    fa: 'بزرگسالان رده سنی ۲۰ تا ۹۹ سال',
    en: 'Adults aged 20 to 99',
  },
  pediatricExclusionNote: {
    fa: 'خدمات دندانپزشکی کودکان ارائه نمی‌گردد.',
    en: 'Pediatric dentistry services are not provided.',
  },
  pricingPolicy: {
    fa: 'تعیین هزینه‌های دقیق درمانی صرفاً پس از معاینه حضوری توسط دندانپزشک مشخص می‌شود.',
    en: 'Definitive treatment fees are determined solely following an in-person clinical examination.',
  },
};

export const navigationItems: NavigationItem[] = [
  {
    href: '/',
    label: {
      fa: 'صفحه اصلی',
      en: 'Home',
    },
  },
  {
    href: '/services',
    label: {
      fa: 'خدمات کلینیک',
      en: 'Services',
    },
  },
  {
    href: '/about',
    label: {
      fa: 'درباره ما',
      en: 'About Us',
    },
  },
  {
    href: '/faq',
    label: {
      fa: 'سوالات متداول',
      en: 'FAQ',
    },
  },
  {
    href: '/blog',
    label: {
      fa: 'مقالات آموزشی',
      en: 'Blog',
    },
  },
  {
    href: '/contact',
    label: {
      fa: 'تماس و موقعیت',
      en: 'Contact & Location',
    },
  },
];

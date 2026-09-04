import type { BlogArticle } from '../types';

export const blogData: BlogArticle[] = [
  {
    id: 'blog-1',
    slug: 'veneer-maintenance-guide',
    title: {
      fa: 'راهنمای مراقبت از کامپوزیت ونیر و لمینت‌های سرامیکی',
      en: 'Care and Maintenance Guide for Composite Veneers and Ceramic Laminates',
    },
    category: {
      fa: 'دندانپزشکی زیبایی',
      en: 'Cosmetic Dentistry',
    },
    readTime: {
      fa: '۳ دقیقه مطالعه',
      en: '3 min read',
    },
    summary: {
      fa: 'نکات کلیدی بهداشتی، اصول مسواک‌زدن و راهکارهای افزایش طول عمر ونیرهای دندانی در افراد بزرگسال.',
      en: 'Essential oral hygiene habits, brushing techniques, and preventative care to prolong the longevity of cosmetic veneers.',
    },
    educationalNote: {
      fa: 'این مطلب صرفاً جنبه آموزشی دارد و جایگزین توصیه‌های دندانپزشک معالج نمی‌باشد.',
      en: 'This article is for educational purposes only and does not substitute direct dental clinical instructions.',
    },
    body: {
      fa: 'درمان‌های زیبایی ونیر کامپوزیت و لمینت سرامیکی نیازمند مراقبت‌های مستمر بهداشتی هستند. استفاده از مسواک‌های با موی نرم، نخ دندان منظم و پرهیز از اعمال فشارهای ضربه‌ای یا گاز زدن خوراکی‌های بسیار سخت از مهم‌ترین عوامل حفظ درخشش و یکپارچگی ونیرها به شمار می‌آید. همچنین مراجعات منظم جهت ارزیابی لثه و پولیش دوره‌ای سطحی توصیه می‌گردد.',
      en: 'Cosmetic veneer restorations require ongoing diligent hygiene care. Utilizing soft-bristled toothbrushes, consistent interdental flossing, and avoiding undue occlusal stress or biting hard items are paramount to preserving restoration luster and margin integrity. Regular periodic checkups for polish maintenance are highly recommended.',
    },
  },
  {
    id: 'blog-2',
    slug: 'preventive-periodontal-care',
    title: {
      fa: 'اهمیت مراقبت‌های پیشگیرانه و جرم‌گیری دوره‌ای در سنین بزرگسالی',
      en: 'The Clinical Importance of Preventive Periodontal Scaling in Adulthood',
    },
    category: {
      fa: 'مراقبت پیشگیرانه',
      en: 'Preventive Care',
    },
    readTime: {
      fa: '۴ دقیقه مطالعه',
      en: '4 min read',
    },
    summary: {
      fa: 'بررسی نقش پاکسازی رسوبات دندانی در حفظ بافت نگهدارنده لثه و پیشگیری از پوسیدگی‌های ثانویه.',
      en: 'Understanding how regular plaque and calculus debridement protects gingival architecture and prevents secondary decay.',
    },
    educationalNote: {
      fa: 'این مطلب صرفاً جنبه آموزشی دارد و جایگزین توصیه‌های دندانپزشک معالج نمی‌باشد.',
      en: 'This article is for educational purposes only and does not substitute direct dental clinical instructions.',
    },
    body: {
      fa: 'تجمع پلاک‌های باکتریایی و تبدیل آن‌ها به جرم‌های سخت بر سطح ریشه و طوق دندان می‌تواند منجر به التهاب بافت لثه (ژنژیویت) و در صورت عدم درمان، تخریب استخوان نگهدارنده دندان (پریودنتیت) شود. جرم‌گیری دوره‌ای با تجهیزات استاندارد بدون هیچ‌گونه آسیب به مینا، بافت سالم لثه را احیا کرده و سلامت پایدار دندان‌ها را تضمین می‌کند.',
      en: 'Bacterial plaque accumulation and its calcification into subgingival calculus can cause gingival inflammation and progressive bone loss if left untreated. Professional ultrasonic scaling effectively removes hardened deposits without enamel abrasion, restoring periodontal tissue health and preserving natural tooth stability.',
    },
  },
  {
    id: 'blog-3',
    slug: 'dental-implant-considerations',
    title: {
      fa: 'ارزیابی‌های ضروری و پیش‌نیازهای درمان ایمپلنت دندانی',
      en: 'Clinical Pre-Evaluation and Prerequisites for Dental Implant Therapy',
    },
    category: {
      fa: 'خدمات تخصصی',
      en: 'Specialized Treatments',
    },
    readTime: {
      fa: '۴ دقیقه مطالعه',
      en: '4 min read',
    },
    summary: {
      fa: 'عوامل تعیین‌کننده در موفقیت کاشت دندان شامل ارزیابی استخوان فک، وضعیت لثه و سلامت عمومی.',
      en: 'Key factors in implant success including bone volume assessment, periodontal condition, and systemic considerations.',
    },
    educationalNote: {
      fa: 'این مطلب صرفاً جنبه آموزشی دارد و جایگزین توصیه‌های دندانپزشک معالج نمی‌باشد.',
      en: 'This article is for educational purposes only and does not substitute direct dental clinical instructions.',
    },
    body: {
      fa: 'کاشت ایمپلنت نیازمند بررسی دقیق وضعیت فک از طریق تصویربرداری‌های رادیوگرافی تخصصی (CBCT) و ارزیابی کیفیت بافت استخوان است. کنترل بیماری‌های زمینه‌ای نظیر دیابت، حفظ بهداشت ایده‌آل دهان و پرهیز از دخانیات در ماه‌های ابتدایی درمان، از عوامل حیاتی جوش‌خوردن موفق پایه تیتانیومی به استخوان فک (اسئواینتگریشن) محسوب می‌شوند.',
      en: 'Dental implant therapy requires rigorous diagnostic evaluation utilizing specialized radiographic imaging (CBCT) to evaluate bone volume and quality. Systemic health stability, exemplary oral hygiene maintenance, and avoidance of tobacco are critical factors ensuring successful osseointegration between the titanium fixture and alveolar bone.',
    },
  },
];

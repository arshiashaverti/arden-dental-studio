import type { DentalService } from '../types';

export const servicesData: DentalService[] = [
  {
    id: 'examination',
    order: 1,
    title: {
      fa: 'معاینه و تشخیص',
      en: 'Examination & Diagnostics',
    },
    category: 'general',
    categoryLabel: {
      fa: 'ترمیم و پیشگیری',
      en: 'General & Preventive',
    },
    summary: {
      fa: 'ارزیابی وضعیت دندان‌ها، بافت لثه و دهان جهت تشخیص پوسیدگی و مشکلات بالینی.',
      en: 'Comprehensive evaluation of teeth, gums, and oral tissue for accurate clinical assessment.',
    },
    description: {
      fa: 'ارزیابی دقیق سلامت دهان و دندان با بهره‌گیری از متدهای تشخیصی روز. در این مرحله طرح درمان متناسب با شرایط بالینی هر فرد تدوین می‌شود.',
      en: 'Detailed diagnostic assessment utilizing modern clinical standards to formulate individualized treatment plans for adult patients.',
    },
    included: {
      fa: ['معاینه بالینی بافت دندان و لثه', 'تنظیم برنامه و اولویت‌بندی درمان‌های ضروری'],
      en: ['Clinical dental and periodontal examination', 'Treatment plan structuring and prioritization'],
    },
    targetPatient: {
      fa: 'بزرگسالان (۲۰ تا ۹۹ سال)',
      en: 'Adults (20–99 years)',
    },
    policyNote: {
      fa: 'تعیین طرح و هزینه درمان نیازمند معاینه حضوری است.',
      en: 'Treatment scope and fees require in-person examination.',
    },
  },
  {
    id: 'preventive',
    order: 2,
    title: {
      fa: 'مراقبت پیشگیرانه و جرم‌گیری',
      en: 'Preventive Care & Hygiene',
    },
    category: 'general',
    categoryLabel: {
      fa: 'ترمیم و پیشگیری',
      en: 'General & Preventive',
    },
    summary: {
      fa: 'حذف پلاک‌های میکروبی و رسوبات سخت جهت حفظ سلامت دندان‌ها و بافت نگهدارنده لثه.',
      en: 'Removal of plaque and dental calculus to maintain long-term gingival and periodontal wellness.',
    },
    description: {
      fa: 'پاکسازی دوره‌ای و مراقبت‌های پیشگیرانه به منظور جلوگیری از بروز تحلیل لثه، بوی نامطبوع دهان و پوسیدگی‌های ثانویه در افراد بزرگسال.',
      en: 'Routine prophylactic cleanings and hygiene maintenance designed to prevent periodontal recession and secondary decay.',
    },
    included: {
      fa: ['جرم‌گیری اولتراسونیک و بروساژ سطحی', 'آموزش اصول مراقبت بهداشتی متناسب با وضعیت لثه'],
      en: ['Ultrasonic scaling and surface polishing', 'Personalized adult oral hygiene instruction'],
    },
    targetPatient: {
      fa: 'بزرگسالان (۲۰ تا ۹۹ سال)',
      en: 'Adults (20–99 years)',
    },
    policyNote: {
      fa: 'درمان‌های جراحی پیشرفته لثه نیازمند ارزیابی مجزا است.',
      en: 'Advanced periodontal surgery requires separate clinical evaluation.',
    },
  },
  {
    id: 'restorative',
    order: 3,
    title: {
      fa: 'ترمیم عمومی',
      en: 'General Restorative',
    },
    category: 'general',
    categoryLabel: {
      fa: 'ترمیم و پیشگیری',
      en: 'General & Preventive',
    },
    summary: {
      fa: 'بازسازی دندان‌های پوسیده، آسیب‌دیده یا شکسته با مواد دندانی همرنگ و استاندارد.',
      en: 'Restoration of decayed, worn, or fractured teeth using color-matched restorative materials.',
    },
    description: {
      fa: 'برطرف‌سازی پوسیدگی‌های دندانی و پرکردن حفره‌ها با هدف حفظ بافت طبیعی دندان و بازیابی عملکرد جویدن و استحکام ساختاری.',
      en: 'Elimination of dental caries and structural reconstruction focused on preserving healthy tooth structure and natural masticatory function.',
    },
    included: {
      fa: ['حذف کامل پوسیدگی و ایزولاسیون دندان', 'ترمیم با مواد کامپوزیتی همرنگ دندان'],
      en: ['Caries removal and tooth isolation', 'Direct resin composite restoration'],
    },
    targetPatient: {
      fa: 'بزرگسالان (۲۰ تا ۹۹ سال)',
      en: 'Adults (20–99 years)',
    },
    policyNote: {
      fa: 'روکش‌های گسترده پروتزی شامل تعرفه جداگانه پس از بررسی است.',
      en: 'Extensive prosthetic crowns involve distinct clinical planning.',
    },
  },
  {
    id: 'cosmetic',
    order: 4,
    title: {
      fa: 'خدمات زیبایی دندان',
      en: 'Cosmetic Dentistry',
    },
    category: 'cosmetic',
    categoryLabel: {
      fa: 'زیبایی و ونیرها',
      en: 'Cosmetic & Veneers',
    },
    summary: {
      fa: 'اصلاح ظاهر لبخند، هماهنگی خطوط دندانی و بهبود رنگ و تناسب دندان‌ها.',
      en: 'Smile design improvements, tooth proportion refinement, and natural aesthetic enhancement.',
    },
    description: {
      fa: 'درمان‌های زیبایی با هدف بهبود هارمونی لبخند با در نظر گرفتن تناسبات چهره، سلامت بافت لثه و تقارن دندانی در مراجعین بزرگسال.',
      en: 'Aesthetic procedures tailored to facial proportions, gingival contours, and balanced tooth symmetry.',
    },
    included: {
      fa: ['ارزیابی تناسبات خط لبخند', 'سفیدکردن دندان‌ها (بلیچینگ) و اصلاحات کانتورینگ'],
      en: ['Smile line aesthetic assessment', 'In-clinic tooth whitening and cosmetic recontouring'],
    },
    targetPatient: {
      fa: 'بزرگسالان (۲۰ تا ۹۹ سال)',
      en: 'Adults (20–99 years)',
    },
    policyNote: {
      fa: 'نتایج زیبایی وابسته به سلامت اولیه دندان‌ها و لثه است.',
      en: 'Aesthetic longevity depends on underlying dental health.',
    },
  },
  {
    id: 'implants',
    order: 5,
    title: {
      fa: 'ایمپلنت دندان',
      en: 'Dental Implants',
    },
    category: 'specialized',
    categoryLabel: {
      fa: 'خدمات تخصصی',
      en: 'Specialized Treatments',
    },
    summary: {
      fa: 'جایگزینی ریشه و تاج دندان‌های از دست رفته با پایه‌های تیتانیومی پایدار و بادوام.',
      en: 'Permanent replacement for missing teeth using biocompatible titanium fixtures.',
    },
    description: {
      fa: 'روشی مدرن و دائمی برای بازگرداندن دندان‌های از دست رفته که مانع از تحلیل استخوان فک و جابجایی دندان‌های مجاور در افراد بزرگسال می‌شود.',
      en: 'A durable, permanent solution for tooth loss that prevents adjacent tooth migration and preserves alveolar bone structure.',
    },
    included: {
      fa: ['کاشت پایه ایمپلنت در استخوان فک', 'نصب پروتز و تاج همرنگ دندان طبیعی'],
      en: ['Implant fixture placement', 'Custom prosthetic abutment and crown integration'],
    },
    targetPatient: {
      fa: 'بزرگسالان (۲۰ تا ۹۹ سال)',
      en: 'Adults (20–99 years)',
    },
    policyNote: {
      fa: 'انجام ایمپلنت منوط به تایید سلامت استخوان فک از طریق تصاویر رادیوگرافی است.',
      en: 'Bone density radiographic verification is required prior to implant therapy.',
    },
  },
  {
    id: 'orthodontics',
    order: 6,
    title: {
      fa: 'ارتودنسی بزرگسالان',
      en: 'Adult Orthodontics',
    },
    category: 'specialized',
    categoryLabel: {
      fa: 'خدمات تخصصی',
      en: 'Specialized Treatments',
    },
    summary: {
      fa: 'اصلاح ناهماهنگی‌های چینش دندانی و بهبود رابطه فکی ویژه مراجعین بزرگسال.',
      en: 'Correction of dental malocclusion and tooth alignment tailored for mature dentition.',
    },
    description: {
      fa: 'درمان ارتودنسی در سنین بزرگسالی علاوه بر زیبایی، فشارهای نامتعارف به مفصل گیجگاهی-فکی را کاهش داده و رعایت بهداشت دهان را تسهیل می‌کند.',
      en: 'Adult orthodontic alignment improves occlusal balance, relieves temporomandibular strain, and simplifies interdental cleaning.',
    },
    included: {
      fa: ['بررسی رابطه اکلوژن و چینش دندان‌ها', 'درمان‌های اصلاحی با بریس یا پلاک‌های شفاف'],
      en: ['Occlusal relationship evaluation', 'Corrective treatment planning with braces or aligners'],
    },
    targetPatient: {
      fa: 'بزرگسالان (۲۰ تا ۹۹ سال)',
      en: 'Adults (20–99 years)',
    },
    policyNote: {
      fa: 'درمان‌های ارتوپدی رشد فک اطفال در این مرکز ارائه نمی‌شود.',
      en: 'Pediatric jaw growth orthopedic therapy is not offered.',
    },
  },
  {
    id: 'composite',
    order: 7,
    title: {
      fa: 'کامپوزیت ونیر',
      en: 'Composite Veneers',
    },
    category: 'cosmetic',
    categoryLabel: {
      fa: 'زیبایی و ونیرها',
      en: 'Cosmetic & Veneers',
    },
    summary: {
      fa: 'اصلاح مستقیم فرم، فواصل و رنگ دندان‌ها با لایه‌گذاری مواد کامپوزیتی مرغوب در مطب.',
      en: 'Direct chairside layering of cosmetic resin composite to enhance tooth contour and shade.',
    },
    description: {
      fa: 'روشی کم‌تهاجمی برای رفع شکستگی‌های جزئی، بستن دیاستم (فاصله دندانی) و یکدست‌کردن رنگ دندان‌ها بدون نیاز به تراش گسترده بافت طبیعی.',
      en: 'A minimally invasive procedure to close interdental spacing, repair minor chips, and harmonize dental coloration.',
    },
    included: {
      fa: ['آماده‌سازی سطحی و انتخاب طیف رنگی', 'فرم‌دهی لایه‌ای و پولیش نهایی براق'],
      en: ['Surface preparation and shade calibration', 'Stratified resin sculpting and high-luster polish'],
    },
    targetPatient: {
      fa: 'بزرگسالان (۲۰ تا ۹۹ سال)',
      en: 'Adults (20–99 years)',
    },
    policyNote: {
      fa: 'ماندگاری کامپوزیت مستلزم پرهیز از فشارهای سنگین و رعایت بهداشت است.',
      en: 'Longevity requires routine polish maintenance and hygiene diligence.',
    },
  },
  {
    id: 'laminate',
    order: 8,
    title: {
      fa: 'لمینت سرامیکی',
      en: 'Ceramic Laminates',
    },
    category: 'cosmetic',
    categoryLabel: {
      fa: 'زیبایی و ونیرها',
      en: 'Cosmetic & Veneers',
    },
    summary: {
      fa: 'پوسته‌های سرامیکی نازک و بسیار مقاوم ساخته شده در لابراتوار جهت زیبایی بادوام.',
      en: 'Ultra-thin, high-strength porcelain shells custom-fabricated in dental laboratory.',
    },
    description: {
      fa: 'پوشش‌های سرامیکی با انعکاس نور طبیعی و مقاومت فوق‌العاده در برابر تغییر رنگ که پس از قالب‌گیری دقیق، روی سطح خارجی دندان متصل می‌شوند.',
      en: 'Custom porcelain veneers providing natural translucency, superior stain resistance, and enduring aesthetic harmony.',
    },
    included: {
      fa: ['قالب‌گیری دقیق و ارسال به لابراتوار تخصصی', 'اتصال محکم و باندینگ دائمی به مینای دندان'],
      en: ['Precision impression and laboratory fabrication', 'Permanent adhesive bonding to tooth enamel'],
    },
    targetPatient: {
      fa: 'بزرگسالان (۲۰ تا ۹۹ سال)',
      en: 'Adults (20–99 years)',
    },
    policyNote: {
      fa: 'بررسی سلامت مینای دندان پیش‌نیاز اصلی درمان لمینت است.',
      en: 'Enamel condition evaluation is a prerequisite for porcelain laminates.',
    },
  },
];

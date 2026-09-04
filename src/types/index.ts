/**
 * Arden Dental Studio — TypeScript Domain Definitions
 * Adheres to AI Web Studio OS v1.0.2 Data Certainty & Zero-Fabrication standards.
 */

export type Locale = 'fa' | 'en';

export interface LocalizedString {
  fa: string;
  en: string;
}

export interface LocalizedStringArray {
  fa: string[];
  en: string[];
}

export interface ClinicInfo {
  name: string;
  officialName: LocalizedString;
  phone: string;
  phoneTarget: string;
  address: LocalizedString;
  hours: LocalizedString;
  fridayStatus: LocalizedString;
  email: null; // Explicitly null per Data Certainty Policy
  logoAsset: null; // Explicitly null - uses TypographicLogo fallback
  targetAudience: LocalizedString;
  pediatricExclusionNote: LocalizedString;
  pricingPolicy: LocalizedString;
}

export type ServiceCategory = 'all' | 'general' | 'cosmetic' | 'specialized';

export interface DentalService {
  id: string;
  order: number;
  title: LocalizedString;
  category: 'general' | 'cosmetic' | 'specialized';
  categoryLabel: LocalizedString;
  summary: LocalizedString;
  description: LocalizedString;
  included: LocalizedStringArray;
  targetPatient: LocalizedString;
  policyNote: LocalizedString;
}

export type FAQCategory = 'all' | 'logistics' | 'treatments';

export interface FAQItem {
  id: string;
  question: LocalizedString;
  answer: LocalizedString;
  category: 'logistics' | 'treatments';
  categoryLabel: LocalizedString;
}

export interface BlogArticle {
  id: string;
  slug: string;
  title: LocalizedString;
  category: LocalizedString;
  readTime: LocalizedString;
  summary: LocalizedString;
  educationalNote: LocalizedString;
  body: LocalizedString;
}

export interface NavigationItem {
  href: string;
  label: LocalizedString;
}

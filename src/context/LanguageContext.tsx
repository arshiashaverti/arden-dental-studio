import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';
import type { Locale } from '../types';
import { translations } from '../data/translations';

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: typeof translations.fa;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'arden_studio_locale';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved === 'en' || saved === 'fa') {
        return saved;
      }
    } catch {
      // Ignore localStorage errors
    }
    return 'fa'; // Default is Persian
  });

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    try {
      localStorage.setItem(STORAGE_KEY, newLocale);
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleLocale = () => {
    setLocale(locale === 'fa' ? 'en' : 'fa');
  };

  useEffect(() => {
    const isRtl = locale === 'fa';
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = locale;

    if (isRtl) {
      document.body.classList.add('rtl-layout');
      document.body.classList.remove('ltr-layout');
    } else {
      document.body.classList.add('ltr-layout');
      document.body.classList.remove('rtl-layout');
    }
  }, [locale]);

  const value: LanguageContextType = {
    locale,
    setLocale,
    toggleLocale,
    t: translations[locale],
    isRTL: locale === 'fa',
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

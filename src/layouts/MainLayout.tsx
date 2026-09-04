import type { ReactNode } from 'react';
import { Header } from '../components/global/Header';
import { Footer } from '../components/global/Footer';
import { FloatingCallBar } from '../components/global/FloatingCallBar';
import { useLanguage } from '../context/LanguageContext';

interface MainLayoutProps {
  children: ReactNode;
  currentPath: string;
}

export function MainLayout({ children, currentPath }: MainLayoutProps) {
  const { locale } = useLanguage();

  return (
    <div className="flex min-h-screen flex-col bg-[#FFFFFF] text-[#0B194E]">
      {/* Accessible skip link */}
      <a
        href="#main-content"
        className="sr-only fixed left-4 top-4 z-[100] rounded-md bg-[#0B194E] px-4 py-2.5 text-sm font-bold text-[#FFFFFF] focus:not-sr-only focus:outline-2 focus:outline-[#FFFFFF]"
      >
        {locale === 'fa' ? 'پرش به محتوای اصلی' : 'Skip to main content'}
      </a>

      {/* Persistent Sticky Global Header */}
      <Header currentPath={currentPath} />

      {/* Main Content Landmark */}
      <main
        id="main-content"
        tabIndex={-1}
        role="main"
        className="flex-1 focus:outline-none"
      >
        {children}
      </main>

      {/* Mobile Sticky Floating Direct Call Bar */}
      <FloatingCallBar />

      {/* Global Footer Landmark */}
      <Footer />
    </div>
  );
}

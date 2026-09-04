import { useState } from 'react';
import { Menu, Phone } from 'lucide-react';
import { Container } from '../primitives/Container';
import { Link } from '../primitives/Link';
import { TypographicLogo } from '../visual/TypographicLogo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { MobileNav } from './MobileNav';
import { navigationItems, clinicData } from '../../config/site';
import { useLanguage } from '../../context/LanguageContext';

interface HeaderProps {
  currentPath: string;
}

export function Header({ currentPath }: HeaderProps) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const { locale, t } = useLanguage();

  const isActive = (href: string) => {
    if (href === '/') return currentPath === '/';
    return currentPath === href || currentPath.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        id="global-header"
        role="banner"
        className="sticky top-0 z-40 border-b border-[#C2C6D3] bg-[#FFFFFF]/95 backdrop-blur-md transition-colors"
      >
        <Container>
          <div className="flex h-18 sm:h-20 items-center justify-between">
            {/* Brand Mark */}
            <Link
              id="header-brand-link"
              href="/"
              className="flex items-center rounded-lg p-1 hover:opacity-90"
              aria-label={`${clinicData.name} - ${t.home.heroTitle}`}
            >
              <TypographicLogo />
            </Link>

            {/* Desktop Navigation */}
            <nav
              id="main-nav"
              role="navigation"
              aria-label="Main Navigation"
              className="hidden lg:flex items-center gap-1 xl:gap-2"
            >
              {navigationItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`interactive-link relative rounded-md px-3.5 py-2 text-sm font-semibold transition-all ${
                      active
                        ? 'text-[#0B194E] bg-[#C2C6D3]/25'
                        : 'text-[#48537B] hover:text-[#0B194E] hover:bg-[#C2C6D3]/15'
                    }`}
                  >
                    {item.label[locale]}
                    {active && (
                      <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#0B194E] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Controls: Language Switcher + Call CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <LanguageSwitcher />

              <a
                id="header-call-button"
                href={clinicData.phoneTarget}
                aria-label={t.header.callAria}
                className="interactive-btn inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0B194E] px-5 py-2.5 text-sm font-bold text-[#FFFFFF] hover:bg-[#48537B] transition-colors shadow-sm focus-visible:outline-2 focus-visible:outline-[#48537B] focus-visible:outline-offset-2"
              >
                <Phone size={16} aria-hidden="true" />
                <span>{t.header.callButton}</span>
              </a>
            </div>

            {/* Mobile Controls: Language Switcher + Hamburger */}
            <div className="flex lg:hidden items-center gap-2">
              <LanguageSwitcher />

              <button
                id="mobile-menu-trigger"
                type="button"
                onClick={() => setMobileNavOpen(true)}
                className="interactive-btn interactive-btn-light inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-[#C2C6D3] text-[#0B194E] hover:bg-[#C2C6D3]/30 focus-visible:outline-2 focus-visible:outline-[#48537B]"
                aria-expanded={mobileNavOpen}
                aria-controls="mobile-drawer-overlay"
                aria-label={t.header.menuToggle}
              >
                <Menu size={22} aria-hidden="true" />
              </button>
            </div>
          </div>
        </Container>
      </header>

      {/* Mobile Slide-over Drawer */}
      <MobileNav
        isOpen={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
        currentPath={currentPath}
      />
    </>
  );
}

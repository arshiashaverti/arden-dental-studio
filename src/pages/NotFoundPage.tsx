import { Home, ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '../components/primitives/Container';
import { Eyebrow } from '../components/primitives/Eyebrow';
import { Heading } from '../components/primitives/Heading';
import { Text } from '../components/primitives/Text';
import { Link } from '../components/primitives/Link';
import { useLanguage } from '../context/LanguageContext';

export function NotFoundPage() {
  const { t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  return (
    <div id="not-found-page" className="py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl space-y-5">
          <Eyebrow id="not-found-eyebrow">{t.notFound.eyebrow}</Eyebrow>
          <Heading as="h1" id="not-found-heading">
            {t.notFound.title}
          </Heading>
          <Text variant="secondary" className="text-base sm:text-lg">
            {t.notFound.description}
          </Text>

          <div className="flex flex-wrap gap-3.5 pt-4">
            <Link
              id="not-found-home-link"
              href="/"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0B194E] px-6 py-3 text-sm font-bold text-[#FFFFFF] hover:bg-[#48537B] transition-colors"
            >
              <Home size={16} aria-hidden="true" />
              <span>{t.notFound.returnHome}</span>
            </Link>

            <Link
              id="not-found-services-link"
              href="/services"
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-[#48537B] px-5 py-3 text-sm font-bold text-[#0B194E] hover:bg-[#C2C6D3]/30 transition-colors"
            >
              <span>{t.notFound.viewServices}</span>
              <ArrowIcon size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}

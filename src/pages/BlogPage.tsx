import { BookOpen } from 'lucide-react';
import { Container } from '../components/primitives/Container';
import { Eyebrow } from '../components/primitives/Eyebrow';
import { Heading } from '../components/primitives/Heading';
import { Text } from '../components/primitives/Text';
import { BlogCard } from '../components/content/BlogCard';
import { MedicalDisclaimer } from '../components/content/MedicalDisclaimer';
import { blogData } from '../data/blog';
import { useLanguage } from '../context/LanguageContext';

export function BlogPage() {
  const { t } = useLanguage();

  return (
    <div id="blog-page" className="py-12 sm:py-16">
      <Container>
        {/* Page Hero */}
        <div className="max-w-3xl space-y-4 mb-10">
          <Eyebrow id="blog-eyebrow">{t.blog.eyebrow}</Eyebrow>
          <Heading as="h1" id="blog-heading">
            {t.blog.title}
          </Heading>
          <Text variant="secondary" className="text-base sm:text-lg">
            {t.blog.lead}
          </Text>
        </div>

        {/* Educational Notice Banner */}
        <div className="mb-10 rounded-xl border border-[#C2C6D3] bg-[#C2C6D3]/20 p-5 text-xs text-[#0B194E] flex items-center gap-3">
          <BookOpen size={18} className="shrink-0 text-[#48537B]" aria-hidden="true" />
          <p>{t.blog.educationalNotice}</p>
        </div>

        {/* 3-Card Educational Grid */}
        <div className="grid gap-6 md:grid-cols-3 mb-16">
          {blogData.map((article) => (
            <BlogCard key={article.id} article={article} />
          ))}
        </div>

        {/* Medical Educational Disclaimer */}
        <MedicalDisclaimer />
      </Container>
    </div>
  );
}

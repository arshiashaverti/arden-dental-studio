import { Clock, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react';
import type { BlogArticle } from '../../types';
import { useLanguage } from '../../context/LanguageContext';
import { Link } from '../primitives/Link';

interface BlogCardProps {
  article: BlogArticle;
  id?: string;
}

export function BlogCard({ article, id }: BlogCardProps) {
  const { locale, t, isRTL } = useLanguage();
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;
  const articleHref = `/blog/${article.slug}`;

  return (
    <article
      id={id || `blog-${article.id}`}
      className="interactive-card flex flex-col justify-between rounded-xl border border-[#C2C6D3] bg-[#FFFFFF] p-6 sm:p-7 select-none"
    >
      <div>
        {/* Meta badges: category & read time */}
        <div className="flex items-center justify-between gap-2 mb-4 text-xs">
          <span className="rounded-full bg-[#C2C6D3]/35 px-3 py-1 font-semibold text-[#0B194E]">
            {article.category[locale]}
          </span>
          <span className="flex items-center gap-1.5 text-[#48537B] font-medium">
            <Clock size={14} aria-hidden="true" />
            <span>{article.readTime[locale]}</span>
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-[#0B194E] tracking-tight mb-3 hover:text-[#48537B] transition-colors leading-snug">
          <Link href={articleHref} className="hover:underline focus-visible:outline-none">
            {article.title[locale]}
          </Link>
        </h3>

        {/* Summary */}
        <p className="text-sm leading-relaxed text-[#48537B] mb-5">
          {article.summary[locale]}
        </p>
      </div>

      {/* Card action trigger to open dedicated article page */}
      <div className="border-t border-[#C2C6D3]/60 pt-4 mt-2">
        <Link
          id={`read-article-link-${article.slug}`}
          href={articleHref}
          className="interactive-btn interactive-btn-light inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-lg border border-[#48537B] bg-transparent px-4 py-2.5 text-xs sm:text-sm font-bold text-[#0B194E] hover:bg-[#C2C6D3]/30 transition-colors focus-visible:outline-2 focus-visible:outline-[#48537B]"
        >
          <BookOpen size={15} aria-hidden="true" />
          <span>{t.blog.readArticleButton}</span>
          <ArrowIcon size={14} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}

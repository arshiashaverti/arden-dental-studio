import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQItem } from '../../types';
import { useLanguage } from '../../context/LanguageContext';

interface FAQAccordionProps {
  items: FAQItem[];
  id?: string;
}

export function FAQAccordion({ items, id = 'faq-accordion' }: FAQAccordionProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({
    'faq-1': true, // Open the first item by default for immediate preview
  });
  const { locale } = useLanguage();

  const toggleItem = (itemId: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  return (
    <div id={id} className="space-y-3.5">
      {items.map((item) => {
        const isOpen = !!openIds[item.id];
        const panelId = `faq-panel-${item.id}`;
        const headerId = `faq-header-${item.id}`;

        return (
          <div
            key={item.id}
            className="interactive-card rounded-xl border border-[#C2C6D3] bg-[#FFFFFF] transition-colors"
          >
            <button
              id={headerId}
              type="button"
              onClick={() => toggleItem(item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="flex min-h-[52px] w-full items-center justify-between gap-4 p-5 text-start font-bold text-[#0B194E] hover:text-[#48537B] focus-visible:outline-2 focus-visible:outline-[#48537B] focus-visible:outline-offset-2 rounded-xl transition-colors cursor-pointer select-none"
            >
              <span className="text-base sm:text-lg leading-snug">
                {item.question[locale]}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#C2C6D3]/30 text-[#0B194E] transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              >
                <ChevronDown size={18} aria-hidden="true" />
              </span>
            </button>

            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                className="border-t border-[#C2C6D3]/60 px-5 pb-5 pt-3"
              >
                <p className="text-sm sm:text-base leading-relaxed text-[#48537B]">
                  {item.answer[locale]}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

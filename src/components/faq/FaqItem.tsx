/**
 * Single FAQ entry using native details/summary for expand/collapse.
 */
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { FaqItem as FaqItemData } from '@/data/faq';
import { cn } from '@/lib/utils';

type FaqItemProps = {
  item: FaqItemData;
};

/** Maps plain-text hints in answers to internal routes. */
const INTERNAL_LINKS: { pattern: RegExp; to: string; label: string }[] = [
  { pattern: /Apps page/i, to: '/apps', label: 'Apps page' },
  { pattern: /Privacy page/i, to: '/privacy', label: 'Privacy page' },
  { pattern: /Glossary/i, to: '/glossary', label: 'Glossary' },
];

/**
 * Renders answer text with optional internal links for known phrases.
 */
function FaqAnswer({ text }: { text: string }) {
  const link = INTERNAL_LINKS.find((entry) => entry.pattern.test(text));

  if (!link) {
    return <p className="igloo-body text-slate-400">{text}</p>;
  }

  const parts = text.split(link.pattern);

  return (
    <p className="igloo-body text-slate-400">
      {parts[0]}
      <Link to={link.to} className="text-blue-400 transition-colors hover:text-blue-300">
        {link.label}
      </Link>
      {parts[1]}
    </p>
  );
}

/**
 * @param props.item - Question and answer from the FAQ catalog.
 */
export function FaqItem({ item }: FaqItemProps) {
  return (
    <details
      className={cn(
        'group rounded-lg border border-blue-900/20 bg-slate-900/30',
        'open:border-blue-900/40 open:bg-slate-900/50',
      )}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 [&::-webkit-details-marker]:hidden">
        <span className="font-sans text-[15px] font-semibold text-slate-200">
          {item.question}
        </span>
        <ChevronDown
          className="h-5 w-5 shrink-0 text-blue-400 transition-transform group-open:rotate-180"
          aria-hidden
        />
      </summary>
      <div className="border-t border-blue-900/20 px-4 pb-4 pt-2">
        <FaqAnswer text={item.answer} />
      </div>
    </details>
  );
}

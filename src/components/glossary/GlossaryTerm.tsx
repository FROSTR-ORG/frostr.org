/**
 * Single glossary entry (Paper Glossary — term + description, two columns on md+).
 */
import { GlossaryInlineText } from '@/components/glossary/GlossaryInlineText';
import { cn } from '@/lib/utils';

export type GlossaryTermProps = {
  term: string;
  description: string;
  aliases?: string[];
  className?: string;
};

/**
 * @param props.term - Term heading (may include `inline code` markers).
 * @param props.description - Definition body copy.
 * @param props.aliases - Optional alternate names.
 */
export function GlossaryTerm({ term, description, aliases, className }: GlossaryTermProps) {
  return (
    <article
      className={cn(
        'grid gap-2 py-5 md:grid-cols-[minmax(0,180px)_1fr] md:gap-6',
        className,
      )}
    >
      <div className="space-y-2">
        <h3 className="break-words font-sans text-[15px] font-semibold leading-[22px] text-slate-200">
          <GlossaryInlineText text={term} />
        </h3>
        {aliases && aliases.length > 0 && (
          <p className="igloo-small text-slate-500">
            Also:{' '}
            {aliases.map((alias, index) => (
              <span key={alias}>
                <GlossaryInlineText text={alias} />
                {index < aliases.length - 1 ? ', ' : null}
              </span>
            ))}
          </p>
        )}
      </div>
      <p className="font-sans text-[13px] leading-5 text-slate-400/80">
        <GlossaryInlineText text={description} />
      </p>
    </article>
  );
}

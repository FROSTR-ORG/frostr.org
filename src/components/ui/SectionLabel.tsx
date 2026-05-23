/**
 * Igloo UI section label with trailing rule (Paper Glossary section headers).
 */
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type SectionLabelProps = HTMLAttributes<HTMLDivElement> & {
  children: string;
};

/**
 * @param props.children - Section title text (uppercase in styling).
 */
export function SectionLabel({ className, children, ...props }: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} {...props}>
      <span className="igloo-section-label shrink-0">{children}</span>
      <span className="h-px flex-1 bg-slate-400/20" aria-hidden />
    </div>
  );
}

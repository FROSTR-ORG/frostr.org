/**
 * Igloo UI section label with trailing rule (Paper Glossary section headers).
 */
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type SectionLabelProps = HTMLAttributes<HTMLDivElement> & {
  children: string;
  size?: 'default' | 'lg';
};

/**
 * @param props.children - Section title text (uppercase in styling).
 * @param props.size - Visual scale for the label text.
 */
export function SectionLabel({
  className,
  children,
  size = 'default',
  ...props
}: SectionLabelProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} {...props}>
      <span
        className={cn(
          'shrink-0',
          size === 'lg' ? 'igloo-section-label-lg' : 'igloo-section-label',
        )}
      >
        {children}
      </span>
      <span className="h-px flex-1 bg-slate-400/20" aria-hidden />
    </div>
  );
}

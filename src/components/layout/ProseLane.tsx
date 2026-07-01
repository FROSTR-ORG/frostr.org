/**
 * Left-aligned prose lane — 900px max width for body copy and structured text.
 */
import { getProseLaneClassName } from '@/layout/pageContent';
import { cn } from '@/lib/utils';

type ProseLaneProps = {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'prose' | 'page';
};

/**
 * @param props.children - Prose or structured text blocks.
 * @param props.maxWidth - Use "page" when copy should span the page column.
 */
export function ProseLane({
  children,
  className,
  maxWidth = 'prose',
}: ProseLaneProps) {
  return (
    <div
      className={cn(
        maxWidth === 'page' ? 'w-full max-w-full' : getProseLaneClassName(),
        className,
      )}
    >
      {children}
    </div>
  );
}

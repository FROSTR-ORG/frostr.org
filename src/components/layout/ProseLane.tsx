/**
 * Left-aligned prose lane — 900px max width for body copy and structured text.
 */
import { getProseLaneClassName } from '@/layout/pageContent';
import { cn } from '@/lib/utils';

type ProseLaneProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * @param props.children - Prose or structured text blocks.
 */
export function ProseLane({ children, className }: ProseLaneProps) {
  return <div className={cn(getProseLaneClassName(), className)}>{children}</div>;
}

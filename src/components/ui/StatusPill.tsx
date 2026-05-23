/**
 * Igloo UI status pill with dot indicator (Paper Foundations — Status).
 */
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const statusPillVariants = cva(
  'inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-medium shadow-[inset_0_0_0_1px_rgba(107,114,128,0.3)]',
  {
    variants: {
      variant: {
        default: 'bg-gray-500/20 text-gray-300',
        success: 'bg-green-500/20 text-green-400',
        error: 'bg-red-500/20 text-red-400',
        warning: 'bg-yellow-500/20 text-yellow-400',
        info: 'bg-blue-500/20 text-blue-400',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

const dotVariants = cva('h-2 w-2 shrink-0 rounded-full', {
  variants: {
    variant: {
      default: 'bg-gray-400',
      success: 'bg-green-400',
      error: 'bg-red-400',
      warning: 'bg-yellow-400',
      info: 'bg-blue-400',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type StatusPillProps = HTMLAttributes<HTMLSpanElement> &
  VariantProps<typeof statusPillVariants> & {
    label: string;
  };

/**
 * @param props.label - Status text beside the indicator dot.
 * @param props.variant - Semantic status color.
 */
export function StatusPill({ className, variant, label, ...props }: StatusPillProps) {
  return (
    <span className={cn(statusPillVariants({ variant, className }))} {...props}>
      <span className={cn(dotVariants({ variant }))} aria-hidden />
      {label}
    </span>
  );
}

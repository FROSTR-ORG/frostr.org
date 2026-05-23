/**
 * Igloo UI badge pill (Paper Core Components — Badges).
 */
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const badgeVariants = cva('igloo-badge', {
  variants: {
    variant: {
      default: 'igloo-badge-default',
      success: 'igloo-badge-success',
      error: 'igloo-badge-error',
      warning: 'igloo-badge-warning',
      info: 'igloo-badge-info',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type BadgeProps = HTMLAttributes<HTMLSpanElement> & VariantProps<typeof badgeVariants>;

/**
 * @param props.variant - Semantic color variant.
 */
export function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant, className }))} {...props} />;
}


/**
 * Igloo UI alert banner (Paper Overlays — destructive feedback).
 */
import { cva, type VariantProps } from 'class-variance-authority';
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const alertVariants = cva('rounded-lg border px-4 py-3 text-sm', {
  variants: {
    variant: {
      default: 'border-blue-900/30 bg-slate-900/60 text-slate-200',
      destructive: 'border-red-500/30 bg-red-900/30 text-red-200',
      warning: 'border-yellow-500/30 bg-yellow-900/30 text-yellow-200',
      success: 'border-green-500/30 bg-green-900/30 text-green-200',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type AlertProps = HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>;

/**
 * @param props.variant - Visual tone (default, destructive, warning, success).
 */
export function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div role="alert" className={cn(alertVariants({ variant, className }))} {...props} />
  );
}

export function AlertTitle({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('mb-1 font-medium leading-none', className)} {...props} />;
}

export function AlertDescription({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('text-sm opacity-90', className)} {...props} />;
}

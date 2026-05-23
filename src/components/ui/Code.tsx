/**
 * Igloo UI monospace code display (Paper canonical mono row).
 */
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type CodeProps = HTMLAttributes<HTMLElement> & {
  variant?: 'inline' | 'block';
};

/**
 * @param props.variant - Inline chip or full-width block.
 */
export function Code({ className, variant = 'inline', ...props }: CodeProps) {
  if (variant === 'block') {
    return (
      <code
        className={cn(
          'block overflow-x-auto rounded-lg border border-blue-900/20 bg-slate-900/60 p-4 font-mono text-sm text-blue-300',
          className,
        )}
        {...props}
      />
    );
  }

  return <code className={cn('igloo-code-inline', className)} {...props} />;
}

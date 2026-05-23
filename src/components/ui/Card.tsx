/**
 * Igloo UI card surface (Paper Core Components).
 */
import type { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

/**
 * Glassy panel card with blue border.
 */
export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('igloo-card', className)} {...props} />;
}

/**
 * Card header region with vertical spacing.
 */
export function CardHeader({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
  );
}

/**
 * Card title heading.
 */
export function CardTitle({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn('font-mono text-lg font-normal leading-none text-blue-200', className)}
      {...props}
    />
  );
}

/**
 * Muted description under the card title.
 */
export function CardDescription({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn('text-sm text-blue-300/70', className)} {...props} />;
}

/**
 * Main card body below the header.
 */
export function CardContent({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('p-6 pt-0', className)} {...props} />;
}

/**
 * Footer row for actions.
 */
export function CardFooter({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn('flex items-center p-6 pt-0', className)} {...props} />;
}

/**
 * Full-width page content column matching the site header inner width.
 */
import { PAGE_CONTENT_ATTRIBUTE } from '@/layout/pageContent';
import { cn } from '@/lib/utils';

type PageContentProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * @param props.children - Routed page content.
 */
export function PageContent({ children, className }: PageContentProps) {
  return (
    <div {...{ [PAGE_CONTENT_ATTRIBUTE]: true }} className={cn('w-full', className)}>
      {children}
    </div>
  );
}

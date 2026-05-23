/**
 * Card for a single app or library catalog entry.
 */
import { AppTypeBadge } from '@/components/apps/AppTypeBadge';
import { AppVersionBadge } from '@/components/apps/AppVersionBadge';
import { CatalogIcon } from '@/components/apps/catalog-icons';
import { ResourceLink } from '@/components/apps/ResourceLink';
import { Card, CardContent } from '@/components/ui/Card';
import type { CatalogItem } from '@/data/apps-catalog';
import { cn } from '@/lib/utils';

type ResourceCardProps = {
  item: CatalogItem;
  faded?: boolean;
};

/**
 * @param props.item - Catalog entry to display.
 * @param props.faded - Muted styling for legacy items.
 */
export function ResourceCard({ item, faded = false }: ResourceCardProps) {
  return (
    <div
      className={cn(
        'transition-transform duration-300 hover:scale-[1.02]',
        faded && 'opacity-60',
      )}
    >
      <Card
        className={cn(
          'flex h-full flex-col transition-colors hover:border-blue-900/40',
          item.highlighted && 'ring-1 ring-blue-600/40',
        )}
      >
        <CardContent className="flex flex-grow flex-col p-5">
          <div className="mb-3 flex flex-wrap items-start justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <CatalogIcon name={item.icon} />
              <h3 className="font-sans text-lg font-semibold text-slate-200">{item.title}</h3>
            </div>
            <div className="flex shrink-0 flex-wrap items-center justify-end gap-2">
              <AppVersionBadge version={item.version} />
              <AppTypeBadge type={item.type} />
            </div>
          </div>
          <p className="igloo-small mb-4 line-clamp-4 flex-grow leading-relaxed">
            {item.description}
          </p>
          <div className="mt-auto space-y-2 pt-2">
            {item.links.map((link) => (
              <ResourceLink key={link.label} link={link} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

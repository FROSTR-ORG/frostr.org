/**
 * Card for a single app or library catalog entry.
 */
import { AppReleaseStatusBadge } from '@/components/apps/AppReleaseStatusBadge';
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
  const isComingSoon = item.releaseStatus === 'comingSoon';

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
          isComingSoon && 'border-yellow-500/25 bg-yellow-500/[0.03] hover:border-yellow-500/40',
        )}
      >
        <CardContent className="flex flex-grow flex-col p-5">
          <div className="mb-3 flex min-w-0 items-start gap-3">
            <CatalogIcon name={item.icon} />
            <div className="min-w-0 flex-1 space-y-2">
              <h3 className="font-sans text-lg font-semibold leading-snug text-slate-200">
                {item.title}
              </h3>
              <div className="flex flex-wrap items-center gap-2">
                {item.releaseStatus && <AppReleaseStatusBadge status={item.releaseStatus} />}
                <AppVersionBadge version={item.version} />
                <AppTypeBadge type={item.type} />
              </div>
            </div>
          </div>
          <p
            className={cn(
              'igloo-small mb-4 line-clamp-4 flex-grow leading-relaxed',
              isComingSoon && 'text-slate-500',
            )}
          >
            {item.description}
          </p>
          {item.links.length > 0 ? (
            <div className="mt-auto space-y-2 pt-2">
              {item.links.map((link) => (
                <ResourceLink key={link.label} link={link} />
              ))}
            </div>
          ) : (
            item.releaseStatus === 'comingSoon' && (
              <p className="igloo-small mt-auto pt-2 text-slate-500">
                Release link coming soon.
              </p>
            )
          )}
        </CardContent>
      </Card>
    </div>
  );
}

/**
 * Labeled grid section for a group of catalog resource cards.
 */
import { ResourceCard } from '@/components/apps/ResourceCard';
import { ProseLane } from '@/components/layout/ProseLane';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { CatalogItem } from '@/data/apps-catalog';
import { cn } from '@/lib/utils';

type AppsSectionProps = {
  label: string;
  description?: string;
  items: CatalogItem[];
  faded?: boolean;
  introSize?: 'default' | 'lg';
};

/**
 * @param props.label - Section heading (SectionLabel).
 * @param props.description - Optional intro copy under the label.
 * @param props.items - Catalog entries to render as cards.
 * @param props.faded - Pass through to ResourceCard for legacy styling.
 * @param props.introSize - Optional larger intro scale for visual grid sections.
 */
export function AppsSection({
  label,
  description,
  items,
  faded,
  introSize = 'default',
}: AppsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  const hasLargeIntro = introSize === 'lg';

  return (
    <section className={cn('space-y-4', hasLargeIntro && 'space-y-5')}>
      <ProseLane>
        <SectionLabel size={hasLargeIntro ? 'lg' : 'default'}>{label}</SectionLabel>
        {description && (
          <p
            className={cn(
              'igloo-body text-slate-400',
              hasLargeIntro && 'mt-1 text-base leading-7 text-slate-300',
            )}
          >
            {description}
          </p>
        )}
      </ProseLane>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ResourceCard key={item.id} item={item} faded={faded} />
        ))}
      </div>
    </section>
  );
}

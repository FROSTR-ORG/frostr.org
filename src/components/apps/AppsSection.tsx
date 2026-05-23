/**
 * Labeled grid section for a group of catalog resource cards.
 */
import { ResourceCard } from '@/components/apps/ResourceCard';
import { ProseLane } from '@/components/layout/ProseLane';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { CatalogItem } from '@/data/apps-catalog';

type AppsSectionProps = {
  label: string;
  description?: string;
  items: CatalogItem[];
  faded?: boolean;
};

/**
 * @param props.label - Section heading (SectionLabel).
 * @param props.description - Optional intro copy under the label.
 * @param props.items - Catalog entries to render as cards.
 * @param props.faded - Pass through to ResourceCard for legacy styling.
 */
export function AppsSection({ label, description, items, faded }: AppsSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className="space-y-4">
      <ProseLane>
        <SectionLabel>{label}</SectionLabel>
        {description && <p className="igloo-body text-slate-400">{description}</p>}
      </ProseLane>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <ResourceCard key={item.id} item={item} faded={faded} />
        ))}
      </div>
    </section>
  );
}

/**
 * FAQ section grouping with SectionLabel and accordion items.
 */
import { FaqItem } from '@/components/faq/FaqItem';
import { SectionLabel } from '@/components/ui/SectionLabel';
import type { FaqSection as FaqSectionData } from '@/data/faq';

type FaqSectionProps = {
  section: FaqSectionData;
};

/**
 * @param props.section - Group of FAQ items under one heading.
 */
export function FaqSection({ section }: FaqSectionProps) {
  return (
    <section id={section.id} className="space-y-4">
      <div className="space-y-2">
        <SectionLabel>{section.title}</SectionLabel>
        {section.description && (
          <p className="igloo-body text-slate-400">{section.description}</p>
        )}
      </div>
      <div className="space-y-2">
        {section.items.map((item) => (
          <FaqItem key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}

/**
 * Glossary section grouping (Paper Glossary artboards, ~900px content width).
 */
import type { ReactNode } from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { SectionLabel } from '@/components/ui/SectionLabel';

export type GlossarySectionProps = {
  id: string;
  title: string;
  description?: string;
  children: ReactNode;
  className?: string;
};

/**
 * @param props.id - Anchor id for deep links.
 * @param props.title - Section heading (SectionLabel).
 * @param props.description - Optional intro under the label.
 * @param props.children - GlossaryTerm entries.
 */
export function GlossarySection({
  id,
  title,
  description,
  children,
  className,
}: GlossarySectionProps) {
  return (
    <Card id={id} className={className}>
      <CardHeader className="space-y-4 border-b border-slate-400/20">
        <SectionLabel>{title}</SectionLabel>
        {description && <p className="igloo-body text-slate-400">{description}</p>}
      </CardHeader>
      <CardContent className="divide-y divide-slate-400/20">{children}</CardContent>
    </Card>
  );
}

/**
 * Glossary page — FROSTR / Igloo terminology (Paper design system glossary).
 */
import { GlossarySection } from '@/components/glossary/GlossarySection';
import { GlossaryTerm } from '@/components/glossary/GlossaryTerm';
import { ProseLane } from '@/components/layout/ProseLane';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { glossaryMeta, glossarySections } from '@/data/glossary';

export function GlossaryPage() {
  return (
    <div className="space-y-8">
      <Card>
        <CardHeader className="space-y-4 border-b border-blue-900/20 pb-4">
          <ProseLane>
            <CardTitle className="font-sans text-2xl font-semibold text-slate-200">
              FROSTR Glossary
            </CardTitle>
            <p className="igloo-body text-slate-400">{glossaryMeta.intro}</p>
            <p className="igloo-small text-slate-500">{glossaryMeta.note}</p>
          </ProseLane>
        </CardHeader>
        <CardContent className="pt-4">
          <ProseLane>
            <nav aria-label="Glossary sections">
              <p className="igloo-section-label mb-3">Jump to</p>
              <ul className="flex flex-wrap gap-2">
                {glossarySections.map((section) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="igloo-small rounded-full border border-blue-900/30 bg-slate-900/40 px-3 py-1 text-blue-400 transition-colors hover:border-blue-900/50 hover:text-blue-300"
                    >
                      {section.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </ProseLane>
        </CardContent>
      </Card>

      {glossarySections.map((section) => (
        <GlossarySection
          key={section.id}
          id={section.id}
          title={section.title}
          description={section.description}
        >
          {section.entries.map((entry) => (
            <GlossaryTerm
              key={`${section.id}-${entry.id}`}
              term={entry.term}
              description={entry.description}
              aliases={entry.aliases}
            />
          ))}
        </GlossarySection>
      ))}
    </div>
  );
}

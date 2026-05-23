/**
 * Privacy policy for FROSTR open-source apps (no FROSTR-operated servers or user data).
 */
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { ProseLane } from '@/components/layout/ProseLane';
import {
  PRIVACY_EFFECTIVE_DATE,
  PRIVACY_SECTIONS,
  PRIVACY_SUMMARY,
  type PrivacySection,
} from '@/data/privacy-policy';

/**
 * Renders a single policy section with optional paragraphs, bullets, and link.
 */
function PrivacySectionBlock({ section }: { section: PrivacySection }) {
  return (
    <section id={section.id} className="space-y-2">
      <h2 className="font-sans text-lg font-semibold text-slate-200">{section.title}</h2>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph.slice(0, 48)} className="igloo-body text-slate-400">
          {paragraph}
        </p>
      ))}
      {section.link && (
        <p className="igloo-body text-slate-400">
          <a
            href={section.link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 transition-colors hover:text-blue-300"
          >
            {section.link.label}
          </a>
        </p>
      )}
      {section.bullets && section.bullets.length > 0 && (
        <ul className="igloo-body list-disc space-y-1 pl-6 text-slate-400">
          {section.bullets.map((item) => (
            <li key={item.slice(0, 48)}>{item}</li>
          ))}
        </ul>
      )}
    </section>
  );
}

export function PrivacyPage() {
  return (
    <ProseLane>
      <Card>
        <CardHeader className="space-y-2 border-b border-blue-900/20 pb-4">
          <CardTitle className="font-sans text-2xl font-semibold text-slate-200">
            Privacy Policy
          </CardTitle>
          <p className="igloo-small text-slate-500">
            Effective date: {PRIVACY_EFFECTIVE_DATE}
          </p>
        </CardHeader>

        <CardContent className="space-y-6 pt-6">
          <div className="rounded-lg border border-blue-900/30 bg-slate-900/50 p-4">
            <p className="igloo-body text-slate-300">
              <strong className="font-medium text-blue-200">In one sentence:</strong>{' '}
              {PRIVACY_SUMMARY}
            </p>
          </div>

          {PRIVACY_SECTIONS.map((section) => (
            <PrivacySectionBlock key={section.id} section={section} />
          ))}
        </CardContent>
      </Card>
    </ProseLane>
  );
}

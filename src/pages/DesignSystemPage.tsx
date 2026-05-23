/**
 * Dev-only design system preview (typography, buttons, badges, status pills).
 */
import {
  Badge,
  Button,
  Card,
  CardContent,
  CardTitle,
  Code,
  SectionLabel,
  StatusPill,
} from '@/components/ui';
import { GlossarySection } from '@/components/glossary/GlossarySection';
import { GlossaryTerm } from '@/components/glossary/GlossaryTerm';

/**
 * Showcases Igloo UI tokens for side-by-side comparison with Paper.
 */
export function DesignSystemPage() {
  return (
    <div className="max-w-4xl space-y-10">
      <div>
        <h1 className="igloo-h1">Design System</h1>
        <p className="igloo-body mt-2 text-slate-400">
          Igloo UI tokens from Paper — dev preview only.
        </p>
      </div>

      <section className="space-y-4">
        <SectionLabel>Typography</SectionLabel>
        <Card>
          <CardContent className="space-y-4 pt-6">
            <h1 className="igloo-h1">H1 Heading</h1>
            <h2 className="igloo-h2">H2 Section Header</h2>
            <h3 className="igloo-h3">H3 Card Title</h3>
            <p className="igloo-body">Body text — The quick brown fox jumps over the lazy dog.</p>
            <p className="igloo-small">Small — labels, metadata, secondary info</p>
            <p className="igloo-mono-data">Value data — npub1qe3...7k4m</p>
            <p>
              Inline <Code>bfonboard</Code> and block:
            </p>
            <Code variant="block">{`npub1example...\nnsec hidden`}</Code>
          </CardContent>
        </Card>
      </section>

      <section className="space-y-4">
        <SectionLabel>Buttons</SectionLabel>
        <div className="flex flex-wrap gap-3">
          <Button>Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </section>

      <section className="space-y-4">
        <SectionLabel>Badges &amp; Status</SectionLabel>
        <div className="flex flex-wrap gap-2">
          <Badge>Default</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="error">Error</Badge>
          <Badge variant="warning">Warning</Badge>
          <Badge variant="info">Info</Badge>
        </div>
        <div className="flex flex-wrap gap-2">
          <StatusPill label="Default" variant="default" />
          <StatusPill label="Success" variant="success" />
          <StatusPill label="Error" variant="error" />
          <StatusPill label="Warning" variant="warning" />
          <StatusPill label="Info" variant="info" />
        </div>
      </section>

      <section className="space-y-4">
        <SectionLabel>Glossary pattern</SectionLabel>
        <GlossarySection
          id="preview"
          title="Core Concepts"
          description="Sample glossary section layout."
        >
          <GlossaryTerm
            term="FROSTR"
            description="Flexible Round-Optimized Schnorr Threshold signatures for Nostr."
          />
          <GlossaryTerm
            term="Share"
            description="An individual secret key piece within a FROSTR keyset's group."
            aliases={['shard']}
          />
        </GlossarySection>
      </section>

      <section className="space-y-4">
        <SectionLabel>Surfaces</SectionLabel>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="surface-panel rounded-lg p-6">
            <CardTitle>Panel surface</CardTitle>
            <p className="igloo-small mt-2">gray-900/40 + blue-900/20 border</p>
          </div>
          <div className="surface-elevated rounded-xl p-6">
            <CardTitle>Elevated surface</CardTitle>
            <p className="igloo-small mt-2">slate-900/60 + blue-900/30 border</p>
          </div>
        </div>
      </section>
    </div>
  );
}

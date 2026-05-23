/**
 * Apps page listing FROSTR V2 and V1 applications and libraries.
 */
import { AppsSection } from '@/components/apps/AppsSection';
import { ProseLane } from '@/components/layout/ProseLane';
import { Badge } from '@/components/ui/Badge';
import { SectionLabel } from '@/components/ui/SectionLabel';
import { getCatalogItems } from '@/data/apps-catalog';

export function AppsPage() {
  const v2Apps = getCatalogItems({ version: 'v2', category: 'app' });
  const v2Libraries = getCatalogItems({ version: 'v2', category: 'library' });
  const v1Apps = getCatalogItems({ version: 'v1', category: 'app' });
  const v1Libraries = getCatalogItems({ version: 'v1', category: 'library' });
  const demos = getCatalogItems({ category: 'demo' });

  return (
    <div className="space-y-10">
      <ProseLane>
        <header className="space-y-3">
          <h1 className="igloo-h1">Applications</h1>
          <p className="igloo-body text-slate-400">
            <strong className="font-medium text-blue-300">FROSTR V2</strong> is the current
            protocol and host stack (Rust bifrost, shell, PWA, Chrome, and desktop hosts).{' '}
            <strong className="font-medium text-slate-300">FROSTR V1</strong> apps and libraries
            remain in use for existing deployments.
          </p>
        </header>
      </ProseLane>

      <div className="space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <SectionLabel>FROSTR V2</SectionLabel>
          <Badge variant="info">Current stack</Badge>
        </div>
        <AppsSection
          label="Applications"
          description="Command-line, desktop, browser, and extension hosts for V2."
          items={v2Apps}
        />
        <AppsSection
          label="Libraries"
          description="Shared runtime, UI, and Rust core used by V2 hosts."
          items={v2Libraries}
        />
      </div>

      <div className="space-y-8 border-t border-slate-400/20 pt-10">
        <div className="flex flex-wrap items-center gap-3">
          <SectionLabel>FROSTR V1</SectionLabel>
          <Badge variant="default">Production / legacy</Badge>
        </div>
        <ProseLane>
          <p className="igloo-small -mt-4 text-slate-500">
            Prior Igloo apps and TypeScript libraries; many remain actively used in production.
          </p>
        </ProseLane>
        <AppsSection
          label="Applications"
          description="Mobile, desktop, web, extension, and server signers on the original stack."
          items={v1Apps}
        />
        <AppsSection
          label="Libraries"
          description="JavaScript bifrost, igloo-core, and NIP-46 helpers."
          items={v1Libraries}
        />
      </div>

      {demos.length > 0 && (
        <div className="space-y-8 border-t border-slate-400/20 pt-10">
          <SectionLabel>Demos</SectionLabel>
          <ProseLane>
            <p className="igloo-small -mt-4 text-slate-500">
              Hosted web demos for exploring FROSTR nodes in the browser — V2 on the current stack,
              V1 on the original JavaScript bifrost stack.
            </p>
          </ProseLane>
          <AppsSection
            label="Web demos"
            items={demos}
          />
        </div>
      )}
    </div>
  );
}

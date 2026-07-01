/**
 * About page composer — renders About content module and visual registry.
 */
import { renderAboutVisual } from '@/components/about/aboutVisualRegistry';
import { ProseLane } from '@/components/layout/ProseLane';
import { ABOUT_CONTENT } from '@/data/about';

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <h2 className="igloo-section-label mt-12">{children}</h2>;
}

function AppRows({ apps }: { apps: { name: string; description: string }[] }) {
  return (
    <div className="mt-5 space-y-3">
      {apps.map((app) => (
        <div key={app.name} className="grid gap-2 sm:grid-cols-[188px_1fr]">
          <div className="font-mono text-[13px] leading-4 text-blue-300">
            {app.name}
          </div>
          <div className="igloo-body text-slate-300">{app.description}</div>
        </div>
      ))}
    </div>
  );
}

function VisualBlock({
  slug,
  caption,
}: {
  slug: Parameters<typeof renderAboutVisual>[0];
  caption: string;
}) {
  return (
    <div className="mt-5">
      {renderAboutVisual(slug)}
      <ProseLane>
        <p className="igloo-small mt-2">{caption}</p>
      </ProseLane>
    </div>
  );
}

/** Renders the frostr.org About page from structured content and visuals. */
export function AboutPageContent() {
  const content = ABOUT_CONTENT;

  return (
    <article className="w-full">
      <ProseLane>
        <header className="space-y-4">
          <h1 className="igloo-h1">{content.hero.title}</h1>
          <p className="igloo-body text-slate-200">{content.hero.lead}</p>
          <p className="igloo-body text-slate-400">{content.hero.disclaimer}</p>
          <div className="flex flex-wrap gap-3">
            {content.hero.links.map((link) => (
              <a
                key={link.label}
                className={
                  link.label === 'View apps'
                    ? 'igloo-button'
                    : 'igloo-button-ghost px-4 py-2'
                }
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </header>
      </ProseLane>

      <div className="mt-8">
        {renderAboutVisual(content.atAGlance.visualSlug)}
        <ProseLane>
          <p className="igloo-small mt-2">{content.atAGlance.caption}</p>
        </ProseLane>
      </div>

      <ProseLane>
        <SectionLabel>{content.whatIsFrostr.label}</SectionLabel>
        <p className="igloo-body text-slate-300">{content.whatIsFrostr.body}</p>
      </ProseLane>
      <VisualBlock
        slug={content.whatIsFrostr.visualSlug}
        caption={content.whatIsFrostr.caption}
      />

      <ProseLane>
        <SectionLabel>{content.howItWorks.label}</SectionLabel>
      </ProseLane>
      <div className="space-y-8">
        {content.howItWorks.steps.map((step) => (
          <section key={step.title}>
            <ProseLane>
              <h3 className="igloo-body mb-4 text-lg text-slate-200">{step.title}</h3>
            </ProseLane>
            {step.visualSlug && step.caption ? (
              <VisualBlock slug={step.visualSlug} caption={step.caption} />
            ) : null}
          </section>
        ))}
      </div>

      <ProseLane>
        <SectionLabel>{content.applications.label}</SectionLabel>
        <p className="igloo-body text-slate-300">{content.applications.intro}</p>
      </ProseLane>
      <VisualBlock
        slug={content.applications.v2.visualSlug}
        caption={content.applications.v2.caption}
      />
      <ProseLane>
        <h3 className="igloo-section-label mt-8">
          {content.applications.v2.groupLabel}
        </h3>
        <AppRows apps={content.applications.v2.apps} />
      </ProseLane>

      <div className="mt-8 border-t border-blue-900/20 pt-6">
        <ProseLane>
          <h3 className="igloo-section-label">{content.applications.v1.groupLabel}</h3>
        </ProseLane>
        <VisualBlock
          slug={content.applications.v1.visualSlug}
          caption={content.applications.v1.caption}
        />
        <ProseLane>
          <AppRows apps={content.applications.v1.apps} />
        </ProseLane>
      </div>

      <ProseLane>
        <SectionLabel>{content.openSource.label}</SectionLabel>
        <p className="igloo-body text-slate-300">{content.openSource.body}</p>
        <div className="mt-4 flex flex-wrap gap-4 text-sm">
          {content.openSource.links.map((link) => (
            <a
              key={link.label}
              className="text-blue-400 hover:text-blue-300"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </div>

        <SectionLabel>{content.maintainers.label}</SectionLabel>
        <div className="mt-4 flex flex-wrap gap-6">
          {content.maintainers.people.map((person) => (
            <div key={person.name}>
              <div className="text-sm font-semibold text-blue-300">{person.name}</div>
              <div className="igloo-small text-slate-500">{person.handle}</div>
            </div>
          ))}
        </div>
      </ProseLane>
    </article>
  );
}

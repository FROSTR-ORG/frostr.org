/**
 * Paper-aligned About page visuals with Playwright export attributes.
 */
import type { AboutVisualSlug } from '@/data/about';
import { cn } from '@/lib/utils';

type VisualFrameProps = {
  slug: AboutVisualSlug;
  children: React.ReactNode;
  className?: string;
};

/** Capture root for About visual Playwright export. */
function VisualFrame({ slug, children, className }: VisualFrameProps) {
  return (
    <div
      data-about-visual={slug}
      className={cn(
        'w-full overflow-hidden rounded-xl border border-blue-500/30 bg-slate-950/40 p-5',
        className,
      )}
    >
      {children}
    </div>
  );
}

function StatusBadge({
  children,
  tone = 'success',
}: {
  children: React.ReactNode;
  tone?: 'success' | 'default' | 'muted';
}) {
  const styles = {
    success: 'border-green-500/30 bg-green-500/15 text-green-200',
    default: 'border-blue-400/40 bg-blue-500/15 text-blue-100',
    muted: 'border-slate-600/40 bg-slate-800/60 text-slate-400',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px]',
        styles[tone],
      )}
    >
      {tone === 'success' ? (
        <span className="size-1.5 rounded-full bg-green-400" />
      ) : null}
      {children}
    </span>
  );
}

function ShareRow({
  index,
  keyLabel,
  label,
  status,
  latency,
  muted = false,
}: {
  index: string;
  keyLabel: string;
  label: string;
  status: string;
  latency: string;
  muted?: boolean;
}) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 rounded-lg border px-2.5 py-2.5',
        muted
          ? 'border-blue-500/20 border-dashed bg-slate-950/40'
          : 'border-blue-500/30 bg-slate-950/65',
      )}
    >
      <div
        className={cn(
          'flex size-8 shrink-0 items-center justify-center rounded-full border font-mono text-xs',
          muted
            ? 'border-slate-600/40 text-slate-500'
            : 'border-blue-400/40 bg-blue-500/15 text-blue-200',
        )}
      >
        {index}
      </div>
      <div className="min-w-0 flex-1">
        <div
          className={cn(
            'font-mono text-[11px]',
            muted ? 'text-slate-500' : 'text-slate-200',
          )}
        >
          {keyLabel}
        </div>
        <div className="text-[11px] text-slate-400">{label}</div>
      </div>
      <StatusBadge tone={muted ? 'muted' : 'success'}>{status}</StatusBadge>
      <span className="w-8 shrink-0 text-right font-mono text-[10px] text-slate-500">
        {latency}
      </span>
    </div>
  );
}

/** At-a-glance threshold profile and share pool (Paper: IMAGE — At a glance). */
export function AtAGlanceVisual() {
  return (
    <VisualFrame slug="at-a-glance">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-stretch">
        <div className="flex-1 rounded-lg border border-blue-500/30 bg-slate-950/70 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue-300">
              Group Profile
            </span>
            <StatusBadge>Ready</StatusBadge>
          </div>
          <dl className="space-y-2 text-xs">
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">npub</dt>
              <dd className="font-mono text-slate-200">npub1qe3...7k4m</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">Threshold</dt>
              <dd className="font-mono text-slate-200">2 of 3</dd>
            </div>
            <div className="flex justify-between gap-4">
              <dt className="text-slate-400">nsec</dt>
              <dd className="font-mono text-blue-300">never local</dd>
            </div>
          </dl>
          <div className="mt-3 flex items-center gap-2">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full w-2/3 rounded-full bg-blue-600" />
            </div>
            <span className="font-mono text-[11px] text-blue-300">2/3</span>
          </div>
          <p className="mt-2 text-[11px] text-slate-400">
            2 shares online. nsec stays split.
          </p>
        </div>

        <div className="relative flex w-12 shrink-0 items-center justify-center self-stretch py-2">
          <svg
            className="h-full min-h-[140px] w-12"
            viewBox="0 0 48 156"
            preserveAspectRatio="xMidYMid meet"
            aria-hidden
          >
            <path
              d="M24 18 V138"
              stroke="#60A5FA"
              strokeDasharray="3 7"
              opacity="0.46"
            />
            <circle cx="24" cy="24" r="5" fill="#2563EB" />
            <circle cx="24" cy="132" r="5" fill="#2563EB" opacity="0.74" />
          </svg>
          <span className="absolute left-1 top-1/2 flex h-[22px] w-10 -translate-y-1/2 items-center justify-center rounded-full border border-blue-400/45 bg-blue-500/25 font-mono text-[10px] text-blue-100">
            sync
          </span>
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <ShareRow
            index="#0"
            keyLabel="02a3f8...8f2c"
            label="desktop share"
            status="Connected"
            latency="24ms"
          />
          <ShareRow
            index="#1"
            keyLabel="02d7e1...3b9e"
            label="phone share"
            status="Connected"
            latency="38ms"
          />
          <ShareRow
            index="#2"
            keyLabel="029c4a...6a1f"
            label="backup share"
            status="Standby"
            latency="—"
            muted
          />
        </div>
      </div>
    </VisualFrame>
  );
}

/** Before/after key custody comparison (Paper: IMAGE — Problem vs solution). */
export function ProblemSolutionVisual() {
  return (
    <VisualFrame slug="problem-solution">
      <div className="flex flex-col items-stretch gap-4 md:flex-row">
        <div className="flex-1 rounded-lg border border-red-500/30 bg-red-950/10 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-red-200">
              Before
            </span>
            <StatusBadge tone="default">Single point</StatusBadge>
          </div>
          <div className="mb-3 flex items-center gap-3 rounded-lg border border-slate-600/25 bg-slate-950/70 p-3">
            <div className="flex size-10 items-center justify-center rounded-lg border border-red-500/30 bg-red-500/10 font-mono text-xs text-red-200">
              nsec
            </div>
            <div>
              <div className="font-mono text-xs text-slate-200">one device</div>
              <div className="text-[11px] text-slate-400">full key held locally</div>
            </div>
          </div>
          <ul className="space-y-2 text-[11px] text-slate-300">
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-red-400" />
              device loss exposes everything
            </li>
            <li className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-red-400" />
              signing depends on one machine
            </li>
          </ul>
        </div>

        <div className="flex items-center justify-center md:w-14">
          <span className="flex size-9 items-center justify-center rounded-full border border-blue-400/45 bg-blue-950 font-mono text-blue-100">
            →
          </span>
        </div>

        <div className="flex-1 rounded-lg border border-blue-500/45 bg-blue-950/10 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue-200">
              After
            </span>
            <StatusBadge tone="default">2 of 3</StatusBadge>
          </div>
          <div className="mb-3 grid grid-cols-3 gap-2">
            {(
              [
                ['S0', 'desktop', false],
                ['S1', 'phone', false],
                ['S2', 'backup', true],
              ] as const
            ).map(([share, label, muted]) => (
              <div
                key={share}
                className={cn(
                  'flex flex-col items-center gap-1.5 rounded-lg border p-2',
                  muted
                    ? 'border-dashed border-blue-500/25 bg-slate-950/40'
                    : 'border-blue-500/30 bg-slate-950/70',
                )}
              >
                <span
                  className={cn(
                    'flex size-7 items-center justify-center rounded-full border font-mono text-[11px]',
                    muted
                      ? 'border-slate-600/40 text-slate-500'
                      : 'border-blue-400/40 bg-blue-500/15 text-blue-200',
                  )}
                >
                  {share}
                </span>
                <span className="text-[10px] text-slate-400">{label}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-green-500/25 bg-green-500/10 px-2.5 py-2 text-[11px] text-green-200">
            <span className="size-1.5 rounded-full bg-green-400" />
            any 2 shares produce one Nostr signature
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

/** nsec split into threshold shares (Paper: IMAGE — Split). */
export function SplitVisual() {
  return (
    <VisualFrame slug="split">
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        <div className="flex-1 rounded-lg border border-blue-500/30 bg-slate-950/70 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue-200">
              Input
            </span>
            <StatusBadge tone="default">local only</StatusBadge>
          </div>
          <div className="rounded-lg border border-blue-500/25 bg-slate-900/70 p-3">
            <div className="font-mono text-xs text-slate-200">nsec</div>
            <div className="text-[11px] text-slate-400">split into shares</div>
          </div>
          <p className="mt-3 text-sm text-slate-300">creates a keyset</p>
        </div>
        <span className="mx-auto rounded-full border border-blue-400/45 bg-blue-500/20 px-3 py-2 font-mono text-sm text-blue-100">
          split
        </span>
        <div className="flex-[1.7] rounded-lg border border-blue-500/30 bg-slate-950/70 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue-200">
              Shares
            </span>
            <StatusBadge tone="default">policy: 2 of 3</StatusBadge>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {[
              ['S0', 'desktop'],
              ['S1', 'phone'],
              ['S2', 'backup'],
            ].map(([share, label], index) => (
              <div
                key={share}
                className={cn(
                  'rounded-lg border p-2.5',
                  index === 2
                    ? 'border-dashed border-slate-600/35 bg-slate-900/50'
                    : 'border-blue-500/30 bg-slate-900/70',
                )}
              >
                <div className="font-mono text-xs text-blue-200">{share}</div>
                <div className="text-[11px] text-slate-400">{label}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg border border-green-500/25 bg-green-500/10 px-3 py-2 text-sm text-green-200">
            any two shares meet threshold
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

/** Relay coordination between signer peers (Paper: IMAGE — Coordinate). */
export function CoordinateVisual() {
  return (
    <VisualFrame slug="coordinate">
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        <div className="flex-1 rounded-lg border border-blue-500/30 bg-slate-950/70 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue-200">
              Signer Pool
            </span>
            <StatusBadge>2 online</StatusBadge>
          </div>
          {(
            [
              ['#0', '02a3f8…8f2c', 'ready', false],
              ['#1', '02d7e1…3b9e', 'ready', false],
              ['#2', '029c4a…6a1f', 'standby', true],
            ] as const
          ).map(([index, key, status, muted]) => (
            <div
              key={index}
              className={cn(
                'mb-2 flex items-center justify-between rounded-lg border px-3 py-2 text-xs',
                muted
                  ? 'border-slate-600/35 text-slate-500'
                  : 'border-blue-500/30 text-slate-300',
              )}
            >
              <span className="font-mono">{index}</span>
              <span className="font-mono">{key}</span>
              <span>{status}</span>
            </div>
          ))}
        </div>
        <div className="mx-auto rounded-lg border border-blue-400/50 bg-blue-500/20 px-5 py-4 text-center font-mono text-blue-100">
          relay
          <br />
          <span className="font-sans text-xs text-slate-300">chosen</span>
        </div>
        <div className="flex-1 rounded-lg border border-blue-500/30 bg-slate-950/70 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue-200">
              Encrypted Events
            </span>
            <StatusBadge tone="default">no custody</StatusBadge>
          </div>
          {[
            ['POOL', 'sync', 'w-2/3 bg-blue-500'],
            ['PING', '31ms', 'w-5/6 bg-green-400'],
            ['SIGN', '2/3', 'w-1/2 bg-blue-500'],
          ].map(([label, value, bar]) => (
            <div
              key={label}
              className="mb-2 flex items-center gap-4 rounded-lg border border-blue-500/30 px-3 py-2"
            >
              <span className="w-12 font-mono text-xs text-blue-200">{label}</span>
              <div className="h-2 flex-1 rounded-full bg-slate-800">
                <div className={cn('h-2 rounded-full', bar)} />
              </div>
              <span className="w-12 text-xs text-slate-400">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </VisualFrame>
  );
}

/** Same npub after threshold signing (Paper: IMAGE — Same npub). */
export function SameNpubVisual() {
  return (
    <VisualFrame slug="same-npub">
      <div className="flex flex-col items-stretch gap-4 md:flex-row md:items-center">
        <div className="flex-1 rounded-lg border border-blue-500/30 bg-slate-950/70 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue-200">
              Before
            </span>
            <StatusBadge tone="default">single key</StatusBadge>
          </div>
          <div className="rounded-lg border border-blue-500/30 bg-slate-900/70 p-3">
            <div className="text-xs text-slate-500">account npub</div>
            <div className="mt-2 font-mono text-sm text-slate-100">npub1qe3...7k4m</div>
          </div>
          <p className="mt-4 text-sm text-slate-300">Clients see the same identity.</p>
        </div>
        <span className="mx-auto flex size-10 items-center justify-center rounded-full border border-green-500/40 bg-green-500/20 text-green-200">
          ✓
        </span>
        <div className="flex-[1.7] rounded-lg border border-blue-500/30 bg-slate-950/70 p-3.5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue-200">
              After FROSTR
            </span>
            <StatusBadge>valid signature</StatusBadge>
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-lg border border-blue-500/30 bg-slate-900/70 p-3">
              <div className="text-xs text-slate-500">same keyset npub</div>
              <div className="mt-2 font-mono text-sm text-slate-100">npub1qe3...7k4m</div>
            </div>
            <div className="rounded-lg border border-blue-500/30 bg-slate-900/70 p-3">
              <div className="font-mono text-sm text-slate-100">S0 + S1</div>
              <div className="mt-3 h-2 rounded-full bg-slate-800">
                <div className="h-2 w-2/3 rounded-full bg-green-400" />
              </div>
            </div>
          </div>
          <div className="mt-3 rounded-lg border border-blue-500/30 bg-blue-500/15 px-3 py-2 text-sm text-blue-100">
            clients see one normal Schnorr signature
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

/** V2 app stack overview (Paper: IMAGE — V2 app stack). */
export function V2AppsVisual() {
  const apps = [
    ['Igloo Shell', 'CLI operator host'],
    ['Igloo Home', 'desktop signer'],
    ['Igloo PWA', 'browser node'],
    ['Igloo Chrome', 'NIP-07 extension'],
  ];

  return (
    <VisualFrame slug="v2-apps">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-blue-200">
          FROSTR V2 — current apps
        </span>
        <StatusBadge>4 hosts</StatusBadge>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map(([title, meta]) => (
          <div
            key={title}
            className="rounded-lg border border-blue-500/35 bg-slate-900/70 p-3"
          >
            <div className="font-mono text-xs text-slate-100">{title}</div>
            <div className="text-[11px] text-slate-400">{meta}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-blue-500/30 bg-blue-500/15 p-3">
        <div className="font-mono text-xs text-blue-200">bifrost-rs</div>
        <p className="mt-1 text-[11px] text-slate-400">
          shared Rust runtime for V2 signing, routing, bridge, codec, and host workflows
        </p>
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {[
          ['igloo-shared', 'browser adapters'],
          ['igloo-ui', 'Paper-aligned UI'],
        ].map(([title, meta]) => (
          <div
            key={title}
            className="rounded-lg border border-blue-500/35 bg-slate-900/70 p-3"
          >
            <div className="font-mono text-xs text-slate-100">{title}</div>
            <div className="text-[11px] text-slate-400">{meta}</div>
          </div>
        ))}
      </div>
    </VisualFrame>
  );
}

/** V1 legacy app stack (Paper: IMAGE — V1 app stack). */
export function V1AppsVisual() {
  const apps = [
    ['Igloo Signer', 'iOS / App Store'],
    ['Igloo Desktop', 'desktop signer'],
    ['Igloo Android', 'NIP-55 alpha'],
    ['Igloo CLI', 'V1 tooling'],
    ['frost2x', 'browser extension'],
    ['Igloo Web', 'web signer'],
    ['Igloo Server', 'NIP-46 / self-hosted'],
  ];

  return (
    <VisualFrame slug="v1-apps">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[11px] uppercase tracking-[0.08em] text-slate-300">
          FROSTR V1 — production / legacy apps
        </span>
        <StatusBadge tone="muted">7 apps</StatusBadge>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {apps.map(([title, meta]) => (
          <div
            key={title}
            className="rounded-lg border border-slate-600/35 bg-slate-900/60 p-3"
          >
            <div className="font-mono text-xs text-slate-300">{title}</div>
            <div className="text-[11px] text-slate-500">{meta}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 rounded-lg border border-slate-600/30 bg-slate-900/60 p-3">
        <div className="font-mono text-xs text-slate-300">JS bifrost</div>
        <p className="mt-1 text-[11px] text-slate-400">
          original JavaScript stack, V1 credentials, production deployments, and migration
          candidates
        </p>
      </div>
    </VisualFrame>
  );
}

/** @deprecated Use AtAGlanceVisual */
export const ThresholdProfileVisual = AtAGlanceVisual;

/** @deprecated Use CoordinateVisual */
export const RelayVisual = CoordinateVisual;

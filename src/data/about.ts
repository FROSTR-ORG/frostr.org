/**
 * About page content — canonical copy and structure for frostr.org home route.
 * Org profile README is updated manually to match (see docs/about-readme-sync.md).
 */

/** Stable slug for an About visual; used by page, registry, and Playwright export. */
export const ABOUT_VISUAL_SLUGS = [
  'at-a-glance',
  'problem-solution',
  'split',
  'coordinate',
  'same-npub',
  'v2-apps',
  'v1-apps',
] as const;

export type AboutVisualSlug = (typeof ABOUT_VISUAL_SLUGS)[number];

export type AboutLink = {
  label: string;
  href: string;
};

export type AboutMaintainer = {
  name: string;
  handle: string;
};

export type AboutAppSummary = {
  name: string;
  description: string;
};

export type AboutHowItWorksStep = {
  title: string;
  visualSlug?: AboutVisualSlug;
  caption?: string;
};

export type AboutContent = {
  hero: {
    title: string;
    lead: string;
    disclaimer: string;
    links: AboutLink[];
  };
  atAGlance: {
    visualSlug: AboutVisualSlug;
    caption: string;
  };
  whatIsFrostr: {
    label: string;
    body: string;
    visualSlug: AboutVisualSlug;
    caption: string;
  };
  howItWorks: {
    label: string;
    steps: AboutHowItWorksStep[];
  };
  applications: {
    label: string;
    intro: string;
    v2: {
      visualSlug: AboutVisualSlug;
      caption: string;
      groupLabel: string;
      apps: AboutAppSummary[];
    };
    v1: {
      visualSlug: AboutVisualSlug;
      caption: string;
      groupLabel: string;
      apps: AboutAppSummary[];
    };
  };
  openSource: {
    label: string;
    body: string;
    links: AboutLink[];
  };
  maintainers: {
    label: string;
    people: AboutMaintainer[];
  };
};

/** Canonical About page copy and section structure. */
export const ABOUT_CONTENT: AboutContent = {
  hero: {
    title: 'FROSTR',
    lead:
      'Threshold signing for Nostr — split your nsec (Nostr private key) into k-of-n shares across devices, sign together, keep the same keyset npub.',
    disclaimer:
      'FROSTR-ORG builds open-source Igloo apps and Bifrost libraries. We do not run signing servers, operate your relay path, or collect keys.',
    links: [
      { label: 'View apps', href: '/apps' },
      { label: 'GitHub', href: 'https://github.com/FROSTR-ORG' },
      { label: 'Glossary', href: '/glossary' },
    ],
  },
  atAGlance: {
    visualSlug: 'at-a-glance',
    caption:
      '2-of-3 shares can sign; the full nsec is never reconstructed during signing.',
  },
  whatIsFrostr: {
    label: 'What is FROSTR?',
    body:
      'FROSTR applies FROST threshold Schnorr to Nostr: your nsec becomes shares, individual secret key pieces held on separate devices. A threshold (for example, any 2 of 3 shares) must cooperate to sign; no single share can sign or reveal the private key. Clients still see the same keyset npub and a normal signature.',
    visualSlug: 'problem-solution',
    caption:
      'FROSTR replaces one local nsec with a keyset: related shares plus shared group configuration.',
  },
  howItWorks: {
    label: 'How it works',
    steps: [
      {
        title:
          '1. Split — Your nsec becomes shares in a keyset. No single share can sign or reveal the full private key.',
        visualSlug: 'split',
        caption:
          'Split once into S0, S1, and S2. Any two shares meet the 2-of-3 threshold.',
      },
      {
        title:
          '2. Coordinate — Peers coordinate over Nostr relays you choose. All signers need at least one common relay.',
        visualSlug: 'coordinate',
        caption:
          'Peers exchange encrypted coordination events over chosen relays. FROSTR-ORG does not run the relay path.',
      },
      {
        title:
          '3. Threshold sign — When enough shares cooperate, the group produces one valid Schnorr signature. Clients see a normal signature.',
      },
      {
        title:
          '4. Same keyset npub — The group public key stays the same. Replace or rotate shares without changing identity.',
        visualSlug: 'same-npub',
        caption:
          'The keyset npub is unchanged. Threshold signing still produces a normal, valid Nostr signature.',
      },
    ],
  },
  applications: {
    label: 'Applications',
    intro:
      'Hosts and libraries under github.com/FROSTR-ORG. V2 is the current bifrost-rs stack; V1 remains in production for existing deployments.',
    v2: {
      visualSlug: 'v2-apps',
      caption:
        'V2 is the current bifrost-rs app stack: four hosts above shared Rust and UI/runtime libraries.',
      groupLabel: 'FROSTR V2 — current',
      apps: [
        {
          name: 'Igloo Shell',
          description:
            'CLI operator host — profiles, daemons, shell-owned workflows.',
        },
        {
          name: 'Igloo Home',
          description: 'Desktop V2 signer — multi-profile local UX on bifrost-rs.',
        },
        {
          name: 'Igloo PWA',
          description:
            'Browser V2 node — keysets, shares, and signing in the browser.',
        },
        {
          name: 'Igloo Chrome',
          description: 'NIP-07 extension with FROSTR V2 threshold signing.',
        },
        {
          name: 'bifrost-rs',
          description: 'Rust core — signer, router, bridge, codec (library).',
        },
      ],
    },
    v1: {
      visualSlug: 'v1-apps',
      caption: 'Seven V1 app surfaces remain in use while V2 matures.',
      groupLabel: 'FROSTR V1 — production / legacy',
      apps: [
        { name: 'Igloo Signer', description: 'iOS app — App Store.' },
        { name: 'Igloo Desktop', description: 'Desktop signer.' },
        { name: 'Igloo Android', description: 'Android alpha — NIP-55.' },
        { name: 'Igloo CLI', description: 'CLI tooling.' },
        { name: 'frost2x', description: 'Chrome extension.' },
        { name: 'Igloo Web', description: 'Web signer.' },
        { name: 'Igloo Server', description: 'NIP-46 server.' },
      ],
    },
  },
  openSource: {
    label: 'Open source',
    body:
      'MIT licensed. Bugs and proposals live on GitHub; protocol terms live in the glossary.',
    links: [
      { label: 'GitHub', href: 'https://github.com/FROSTR-ORG' },
      { label: 'Apps', href: '/apps' },
      { label: 'Glossary', href: '/glossary' },
      { label: 'FAQ', href: '/faq' },
    ],
  },
  maintainers: {
    label: 'Maintainers',
    people: [
      { name: 'Austin Kelsay', handle: '@austinkelsay' },
      { name: '@cmdruid', handle: 'co-founder' },
    ],
  },
};

/**
 * Returns caption text keyed by About visual slug for registry/export parity checks.
 */
export function getAboutVisualCaptions(): Record<AboutVisualSlug, string> {
  const captions: Partial<Record<AboutVisualSlug, string>> = {
    [ABOUT_CONTENT.atAGlance.visualSlug]: ABOUT_CONTENT.atAGlance.caption,
    [ABOUT_CONTENT.whatIsFrostr.visualSlug]: ABOUT_CONTENT.whatIsFrostr.caption,
    [ABOUT_CONTENT.applications.v2.visualSlug]:
      ABOUT_CONTENT.applications.v2.caption,
    [ABOUT_CONTENT.applications.v1.visualSlug]:
      ABOUT_CONTENT.applications.v1.caption,
  };

  for (const step of ABOUT_CONTENT.howItWorks.steps) {
    if (step.visualSlug && step.caption) {
      captions[step.visualSlug] = step.caption;
    }
  }

  return captions as Record<AboutVisualSlug, string>;
}

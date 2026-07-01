/**
 * Static catalog of FROSTR applications and libraries (V1 vs V2).
 * V2 list aligned with frostr-infra submodules; V1 ported from legacy frostr-website.
 */

export const GITHUB_ORG = 'https://github.com/FROSTR-ORG';

export type AppVersion = 'v1' | 'v2';

export type AppCategory = 'app' | 'library' | 'demo';

export type AppReleaseStatus = 'released' | 'comingSoon';

export type CatalogItemType =
  | 'Mobile App'
  | 'Desktop App'
  | 'Web App'
  | 'Browser Extension'
  | 'Server'
  | 'CLI Tool'
  | 'Library';

export type CatalogIconName =
  | 'smartphone'
  | 'computer'
  | 'globe'
  | 'puzzle'
  | 'server'
  | 'terminal'
  | 'library';

export type CatalogLink =
  | { label: string; url: string }
  | { label: string; to: string };

export type CatalogItem = {
  id: string;
  title: string;
  description: string;
  version: AppVersion;
  category: AppCategory;
  type: CatalogItemType;
  links: CatalogLink[];
  icon: CatalogIconName;
  releaseStatus?: AppReleaseStatus;
  highlighted?: boolean;
};

export type CatalogFilter = {
  version?: AppVersion;
  category?: AppCategory;
};

/** All catalog entries in display order within each section. */
export const APP_CATALOG: CatalogItem[] = [
  // --- V2 Applications ---
  {
    id: 'igloo-pwa',
    title: 'Igloo PWA',
    description:
      'Planned browser app for running a FROSTR V2 node and managing shares and keysets.',
    version: 'v2',
    category: 'app',
    type: 'Web App',
    icon: 'globe',
    releaseStatus: 'comingSoon',
    links: [
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-pwa` },
    ],
  },
  {
    id: 'igloo-shell',
    title: 'Igloo Shell',
    description:
      'Run a FROSTR V2 signing node from the command line. Operator-focused host with profile management, daemons, and shell-owned workflows.',
    version: 'v2',
    category: 'app',
    type: 'CLI Tool',
    icon: 'terminal',
    releaseStatus: 'comingSoon',
    links: [
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-shell` },
    ],
  },
  {
    id: 'igloo-home',
    title: 'Igloo Home',
    description:
      'Desktop signing device for the FROSTR V2 protocol. Multi-profile local UX built on the Rust bifrost stack.',
    version: 'v2',
    category: 'app',
    type: 'Desktop App',
    icon: 'computer',
    releaseStatus: 'comingSoon',
    links: [
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-home` },
    ],
  },
  {
    id: 'igloo-chrome',
    title: 'Igloo Chrome',
    description:
      'A NIP-07 signing extension for Chrome with FROSTR V2 powers. Extension host and provider surface for browser apps.',
    version: 'v2',
    category: 'app',
    type: 'Browser Extension',
    icon: 'puzzle',
    releaseStatus: 'comingSoon',
    links: [
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-chrome` },
    ],
  },
  {
    id: 'igloo-mobile-android',
    title: 'Igloo Mobile for Android',
    description:
      'Planned Android host for FROSTR V2, bringing mobile share custody and signing workflows to Android devices.',
    version: 'v2',
    category: 'app',
    type: 'Mobile App',
    icon: 'smartphone',
    releaseStatus: 'comingSoon',
    links: [],
  },
  {
    id: 'igloo-mobile-ios',
    title: 'Igloo Mobile for iOS',
    description:
      'Planned iOS host for FROSTR V2, complementing the current V1 Igloo Signer with the new bifrost-rs stack.',
    version: 'v2',
    category: 'app',
    type: 'Mobile App',
    icon: 'smartphone',
    releaseStatus: 'comingSoon',
    links: [],
  },
  // --- V2 Libraries ---
  {
    id: 'bifrost-rs',
    title: 'Bifrost RS',
    description:
      'Rust implementation of the FROSTR signer, router, bridge, codec, and utility stack. Core runtime for V2 hosts.',
    version: 'v2',
    category: 'library',
    type: 'Library',
    icon: 'library',
    releaseStatus: 'released',
    links: [
      { label: 'View on GitHub', url: `${GITHUB_ORG}/bifrost-rs` },
    ],
  },
  {
    id: 'igloo-shared',
    title: 'Igloo Shared',
    description:
      'Shared runtime code and browser-facing adapters for web-based Igloo V2 projects.',
    version: 'v2',
    category: 'library',
    type: 'Library',
    icon: 'library',
    releaseStatus: 'released',
    links: [
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-shared` },
    ],
  },
  {
    id: 'igloo-ui',
    title: 'Igloo UI',
    description:
      'Shared presentational UI package for Igloo V2 applications, aligned with the Paper design system.',
    version: 'v2',
    category: 'library',
    type: 'Library',
    icon: 'library',
    releaseStatus: 'released',
    links: [
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-ui` },
    ],
  },

  // --- V1 Applications ---
  {
    id: 'igloo-ios',
    title: 'Igloo Signer',
    description:
      'The live iOS signer for FROSTR on the App Store, with QR onboarding, signer visibility, Demo Mode, and secure on-device credential storage.',
    version: 'v1',
    category: 'app',
    type: 'Mobile App',
    icon: 'smartphone',
    highlighted: true,
    links: [
      { label: 'Download on App Store', url: 'https://apps.apple.com/us/app/igloo-signer/id6758069194' },
      { label: 'View iOS Source', url: `${GITHUB_ORG}/igloo-ios` },
      { label: 'Privacy Policy', to: '/privacy' },
    ],
  },
  {
    id: 'igloo-desktop',
    title: 'Igloo Desktop',
    description:
      'A desktop application for FROSTR on the V1 stack. Download the latest release for your platform.',
    version: 'v1',
    category: 'app',
    type: 'Desktop App',
    icon: 'computer',
    links: [
      { label: 'View Releases', url: `${GITHUB_ORG}/igloo-desktop/releases` },
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-desktop` },
    ],
  },
  {
    id: 'igloo-android',
    title: 'Igloo Android (alpha)',
    description:
      'An Android signing app for FROSTR using NIP-55. Android builds remain in alpha on GitHub while Igloo Signer for iOS is on the App Store.',
    version: 'v1',
    category: 'app',
    type: 'Mobile App',
    icon: 'smartphone',
    links: [
      { label: 'View Releases', url: `${GITHUB_ORG}/igloo-android/releases` },
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-android` },
    ],
  },
  {
    id: 'igloo-cli',
    title: 'Igloo CLI',
    description:
      'A command-line utility for scaffolding and managing FROSTR V1 projects: keys, signing, peering, and recovery.',
    version: 'v1',
    category: 'app',
    type: 'CLI Tool',
    icon: 'terminal',
    links: [
      { label: 'View on npm', url: 'https://www.npmjs.com/package/@frostr/igloo-cli' },
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-cli` },
    ],
  },
  {
    id: 'frost2x',
    title: 'Frost2x',
    description:
      'A FROSTR browser extension forked from nos2x. Install from the Chrome Web Store or browse the source.',
    version: 'v1',
    category: 'app',
    type: 'Browser Extension',
    icon: 'puzzle',
    links: [
      { label: 'View on GitHub', url: `${GITHUB_ORG}/frost2x` },
      { label: 'View Releases', url: `${GITHUB_ORG}/frost2x/releases` },
      {
        label: 'Get on Chrome Store',
        url: 'https://chromewebstore.google.com/detail/frost2x/gpbndcgoaehgeckcfmmbmaaaeljnaiof',
      },
    ],
  },
  {
    id: 'igloo-web',
    title: 'Igloo Web',
    description:
      'The official FROSTR V1 web signer. A browser-based signing device for the original protocol stack.',
    version: 'v1',
    category: 'app',
    type: 'Web App',
    icon: 'globe',
    links: [
      { label: 'Open App', url: 'https://iglooweb.app' },
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-web` },
    ],
  },
  {
    id: 'igloo-server',
    title: 'Igloo Server',
    description:
      'A server-based signing device and personal ephemeral relay for FROSTR V1. Self-hostable with a web UI for configuration and monitoring.',
    version: 'v1',
    category: 'app',
    type: 'Server',
    icon: 'server',
    links: [
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-server` },
      { label: 'View Releases', url: `${GITHUB_ORG}/igloo-server/releases` },
    ],
  },

  // --- V1 Libraries ---
  {
    id: 'bifrost',
    title: 'Bifrost',
    description:
      'Reference JavaScript client for the FROSTR protocol. Each client custodies a share and coordinates signing over Nostr relays with end-to-end encrypted peer traffic.',
    version: 'v1',
    category: 'library',
    type: 'Library',
    icon: 'library',
    links: [
      { label: 'View on npm', url: 'https://www.npmjs.com/package/@frostr/bifrost' },
      { label: 'View on GitHub', url: `${GITHUB_ORG}/bifrost` },
    ],
  },
  {
    id: 'igloo-core',
    title: 'Igloo Core',
    description:
      'TypeScript library for FROSTR/Bifrost distributed key management and remote signing on the V1 stack.',
    version: 'v1',
    category: 'library',
    type: 'Library',
    icon: 'library',
    links: [
      { label: 'View on npm', url: 'https://www.npmjs.com/package/@frostr/igloo-core' },
      { label: 'View on GitHub', url: `${GITHUB_ORG}/igloo-core` },
    ],
  },
  {
    id: 'nostr-connect',
    title: 'nostr-connect',
    description:
      'Lightweight, opinionated implementation of the NIP-46 (Nostr Connect) remote signing standard.',
    version: 'v1',
    category: 'library',
    type: 'Library',
    icon: 'library',
    links: [
      { label: 'View on npm', url: 'https://www.npmjs.com/package/@cmdcode/nostr-connect' },
      { label: 'View on GitHub', url: `${GITHUB_ORG}/nostr-connect` },
    ],
  },

  // --- Demos ---
  {
    id: 'web-demo-v2',
    title: 'FROSTR Web Demo (V2)',
    description:
      'Browser demonstration of a FROSTR V2 node on the hard-cut stack (bifrost-rs and Igloo hosts).',
    version: 'v2',
    category: 'demo',
    type: 'Web App',
    icon: 'globe',
    links: [
      { label: 'View Live Demo', url: 'https://FROSTR-ORG.github.io/web-demo-v2/' },
      { label: 'View on GitHub', url: `${GITHUB_ORG}/web-demo-v2` },
    ],
  },
  {
    id: 'web-demo',
    title: 'FROSTR Web Demo (V1)',
    description:
      'Original browser demonstration of a FROSTR V1 node on the JavaScript bifrost stack.',
    version: 'v1',
    category: 'demo',
    type: 'Web App',
    icon: 'globe',
    links: [
      { label: 'View Live Demo', url: 'https://FROSTR-ORG.github.io/web-demo/' },
      { label: 'View on GitHub', url: `${GITHUB_ORG}/web-demo` },
    ],
  },
];

/**
 * Returns catalog items matching optional version and category filters.
 */
export function getCatalogItems(filter: CatalogFilter = {}): CatalogItem[] {
  return APP_CATALOG.filter((item) => {
    if (filter.version !== undefined && item.version !== filter.version) {
      return false;
    }
    if (filter.category !== undefined && item.category !== filter.category) {
      return false;
    }
    return true;
  });
}

/**
 * Site-wide constants and navigation configuration for frostr.org.
 */

/** GitHub organization slug used for the header link. */
export const ORG = 'FROSTR-ORG';

/** Official social profiles (from frostr@frostr.org NIP-05 and org accounts). */
export const SOCIAL_LINKS = {
  x: 'https://x.com/FrostrProtocol',
  nostr: 'https://njump.me/frostr@frostr.org',
  github: `https://github.com/${ORG}`,
} as const;

/** When false, the Roadmap route and nav item are omitted (matches legacy site). */
export const ROADMAP_ENABLED = false;

export type NavItem = {
  to: string;
  label: string;
  end?: boolean;
};

/** Primary header navigation tabs, mirroring frostr-website. */
export const navItems: NavItem[] = [
  { to: '/', label: 'About', end: true },
  { to: '/apps', label: 'Apps' },
  { to: '/glossary', label: 'Glossary' },
  { to: '/faq', label: 'FAQ' },
  { to: '/media', label: 'Media' },
  { to: '/privacy', label: 'Privacy' },
  ...(ROADMAP_ENABLED ? [{ to: '/roadmap', label: 'Roadmap' }] : []),
];

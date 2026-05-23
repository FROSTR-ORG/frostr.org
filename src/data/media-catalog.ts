/**
 * Media coverage items for the Media page (ported from frostr-website).
 * Sorted by date, most recent first.
 */

export type MediaType = 'Article' | 'Podcast' | 'Video' | 'Space';

export type MediaItem = {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  link: string;
  source: string;
  type: MediaType;
  date: string;
};

export const MEDIA_ITEMS: MediaItem[] = [
  {
    id: 'opensats-twelfth-wave',
    title: 'Twelfth Wave of Nostr Grants',
    thumbnail:
      'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fopensats.org%2Fstatic%2Fimages%2Fblog%2F66-opensats-2024-year-in-review.jpg&f=1&nofb=1&ipt=9fe59f9f528d5d7f8087b82b180b5c02d5a44451345e2d93b95bd4bbb3c93b4d',
    description:
      "OpenSats announced funding for Frostr, a threshold signing protocol implementing FROST signatures to enhance security by distributing users' cryptographic keys across multiple devices or services.",
    link: 'https://opensats.org/blog/twelfth-wave-of-nostr-grants',
    source: 'OpenSats',
    type: 'Article',
    date: '2025-07-01',
  },
  {
    id: 'bitcoin-2025-workshop',
    title: 'Frostr Workshop - Bitcoin 2025 Vegas',
    thumbnail:
      'https://plebdevs-bucket.nyc3.cdn.digitaloceanspaces.com/images/frostr-vegas-workshop.png',
    description:
      "Austin & Topher's FROSTR workshop. Walking through the basics of the protocol and going through a live demo with the audience (signing a 6/12 nostr multisig note live!)",
    link: 'https://www.youtube.com/watch?v=J1WG_InBsHg',
    source: 'Bitcoin 2025',
    type: 'Video',
    date: '2025-05-28',
  },
  {
    id: 'tgfn-frostr-explained',
    title: 'Frostr Explained',
    thumbnail: 'https://i.scdn.co/image/ab6765630000ba8ac6d48028ef9d5ba0483dc08a',
    description:
      "New TGFN episode is out, in which @cmd and @bitcoinplebdev tell us about FROSTR — stick around past the end credits for a bonus segment, in which they trash @fiatjaf's promenade project.",
    link: 'https://fountain.fm/episode/gWYJ5PgxwzdnBjuNuzyc',
    source: 'Thank God For Nostr Podcast',
    type: 'Podcast',
    date: '2025-04-08',
  },
  {
    id: 'pleb-underground-interview',
    title: 'NOSTR is a MASSIVE Paradigm Shift! PlebDevs and Frostr with Austin - bitcoinplebdev',
    thumbnail:
      'https://i.ytimg.com/vi/ebCGWjA29VE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBLof5gHOVUJu0IAj_JyMThJt83XA',
    description:
      "NOSTR Is a MASSIVE Paradigm Shift! i am joined by bitcoiner and dev Austin from pleb devs and he breaks down what he's done and what he's working on with nostr and it is not only bullishAF but mind blowing!. an awesome interview of pure bitcoin builder signal.",
    link: 'https://www.youtube.com/watch?v=ebCGWjA29VE',
    source: 'Pleb Underground',
    type: 'Video',
    date: '2025-04-04',
  },
  {
    id: 'bitcoin-magazine-article',
    title: 'No Password Reset? How Frostr Saves Your Nostr Identity',
    thumbnail:
      'https://plebdevs-bucket.nyc3.cdn.digitaloceanspaces.com/images/frostr-bitcoin-magazine.png',
    description:
      "Born out of a hackathon at TABCONF 2024, Frostr may have just solved Nostr's most pernicious issue: the inability to reset your password if your private key gets compromised.",
    link: 'https://bitcoinmagazine.com/business/no-password-reset-how-frostr-saves-your-nostr-identity',
    source: 'Bitcoin Magazine',
    type: 'Article',
    date: '2025-04-02',
  },
  {
    id: 'bitcoin-magazine-space',
    title: "Frostr.org: Solving Nostr's Biggest Problem",
    thumbnail: '/frostr-bitcoin-magazine-space.png',
    description:
      "Featured on Bitcoin Magazine's Space discussing Frostr, a project addressing critical challenges in the Nostr ecosystem. Speaking alongside JuanGalt and Topher.",
    link: 'https://creators.spotify.com/pod/show/bitcoin-magazine-po/episodes/FROSTR-Explained-A-Gamechanger-for-NOSTR-Identity-Management--The-Juan-Galt-Show-e30op20',
    source: 'Bitcoin Magazine',
    type: 'Space',
    date: '2025-03-27',
  },
];

const ACTION_LABEL: Record<MediaType, string> = {
  Article: 'Read more',
  Podcast: 'Listen',
  Video: 'Watch',
  Space: 'Listen',
};

/**
 * CTA label for a media item based on its type.
 */
export function getMediaActionLabel(type: MediaType): string {
  return ACTION_LABEL[type];
}

/**
 * Formats an ISO date string for display (e.g. Jul 1, 2025).
 */
export function formatMediaDate(isoDate: string): string {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Frequently asked questions for frostr.org.
 */

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type FaqSection = {
  id: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

export const FAQ_INTRO =
  'Quick answers about FROSTR threshold signing, V1 and V2 Igloo apps, and how FROSTR-ORG handles (or does not handle) your data.';

export const FAQ_SECTIONS: FaqSection[] = [
  {
    id: 'basics',
    title: 'Basics',
    description: 'What FROSTR is and how it fits with Nostr.',
    items: [
      {
        id: 'what-is-frostr',
        question: 'What is FROSTR?',
        answer:
          'FROSTR is threshold Schnorr signing for Nostr. You split one private key into multiple shares so that signing requires cooperation between devices — without changing your npub or how signatures look to the outside world.',
      },
      {
        id: 'npub-change',
        question: 'Does my npub change when I use FROSTR?',
        answer:
          'No. Your public Nostr identity (npub) stays the same. FROSTR is designed as a drop-in way to protect the underlying secret by splitting it across shares instead of keeping the full nsec on one device.',
      },
      {
        id: 'threshold-meaning',
        question: 'What does 2-of-3 mean?',
        answer:
          'In a t-of-n setup, 2-of-3 means threshold t = 2 and n = 3 shares — any two of three can produce a valid signature. You might keep one share on your phone, one in a browser extension, and one offline for recovery, but any two online signers are enough to sign.',
      },
    ],
  },
  {
    id: 'apps',
    title: 'Apps and versions',
    description: 'Which software to use and how V1 relates to V2.',
    items: [
      {
        id: 'which-apps',
        question: 'Which app should I use?',
        answer:
          'See the Apps page. For new V2 work, use Igloo Shell, Home, PWA, or Chrome (Rust bifrost-rs). Igloo Signer on iOS is the main production mobile signer today and remains on the V1 stack. V1 Desktop, Web, Server, frost2x, and CLI still serve existing deployments.',
      },
      {
        id: 'v1-vs-v2',
        question: 'What is the difference between V1 and V2?',
        answer:
          'V2 is the frostr-infra stack: bifrost-rs and hosts (shell, home, PWA, Chrome) with V2 packages (bfonboard, bfprofile, bfshare per the specs). V1 is the JavaScript bifrost library and Igloo apps that use V1 credentials (bfgroup and bfshare share strings). Both do threshold Schnorr signing with the same npub concept, but share blobs, profiles, and hosts are not interchangeable without explicit migration or creating a new keyset.',
      },
      {
        id: 'v1-shares-on-v2',
        question: 'Can I load a V1 share into a V2 app?',
        answer:
          'Not directly. V1 bfgroup / bfshare credentials and V2 encrypted packages follow different formats. Moving between stacks requires a deliberate migration or setting up a new keyset on the target stack — not a simple import.',
      },
      {
        id: 'ios-signer',
        question: 'Where is Igloo Signer for iOS?',
        answer:
          'Igloo Signer is on the App Store. Links and source are on the Apps page under V1 applications.',
      },
    ],
  },
  {
    id: 'privacy-data',
    title: 'Privacy and data',
    description: 'What FROSTR-ORG does and does not operate.',
    items: [
      {
        id: 'servers',
        question: 'Does FROSTR run servers that store my keys?',
        answer:
          'No. FROSTR-ORG does not operate application servers, databases, or cloud accounts that receive your credentials or signing traffic. Sensitive material stays on your device; apps talk to Nostr relays you configure.',
      },
      {
        id: 'relays',
        question: 'Who runs the relays?',
        answer:
          'You (or your group) choose Nostr relays. Relays are operated by third parties or yourself — not by FROSTR-ORG. Encrypted protocol traffic passes through them; FROSTR does not operate that infrastructure.',
      },
      {
        id: 'privacy-policy',
        question: 'Where is your privacy policy?',
        answer:
          'The Privacy page explains our posture for App Store and open-source apps: no FROSTR-operated backends and no user data collection by FROSTR-ORG.',
      },
    ],
  },
  {
    id: 'help',
    title: 'Getting help',
    items: [
      {
        id: 'bugs',
        question: 'How do I report a bug or ask a question?',
        answer:
          'Open-source apps are maintained on GitHub under FROSTR-ORG. Use the issue tracker for the specific repo (for example igloo-ios for Igloo Signer). FROSTR-ORG does not operate a support email or ticketing system for end users.',
      },
      {
        id: 'glossary',
        question: 'Where can I learn the terminology?',
        answer:
          'See the Glossary. Core concepts apply to both stacks; the V1 stack section covers bfgroup and V1 bfshare credentials; Artifacts & Protocol (V2) covers bfonboard, bfprofile, and V2 bfshare packages per frostr-infra.',
      },
    ],
  },
];

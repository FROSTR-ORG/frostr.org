/**
 * Privacy policy content for frostr.org (App Store URL for Igloo Signer).
 * FROSTR-ORG runs no servers and does not collect user data.
 */

export const PRIVACY_EFFECTIVE_DATE = 'May 20, 2026';

export const PRIVACY_SUMMARY =
  'FROSTR-ORG does not operate servers, databases, or user accounts. We do not collect or store your keys, shares, or signing activity. Open-source Igloo apps keep sensitive data on your device and communicate over Nostr relays you choose.';

const PRIVACY_CONTACT_REPO = 'https://github.com/FROSTR-ORG/igloo-ios';

export type PrivacyLink = {
  label: string;
  url: string;
};

export type PrivacySection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Optional link rendered after paragraphs (e.g. GitHub issues). */
  link?: PrivacyLink;
};

export const PRIVACY_SECTIONS: PrivacySection[] = [
  {
    id: 'in-short',
    title: 'In short',
    paragraphs: [
      'FROSTR-ORG publishes open-source signing apps (including Igloo Signer for iOS). We do not run application backends for end users, we do not operate Nostr relays for your traffic, and we do not maintain a service that receives your credentials or signing requests.',
      'Threshold signing happens on your device and between peers over the FROSTR protocol, using relays configured by you or other operators — not infrastructure operated by FROSTR-ORG.',
    ],
  },
  {
    id: 'who-this-covers',
    title: 'Who this policy covers',
    paragraphs: [
      'This policy applies to open-source Igloo and FROSTR applications distributed by FROSTR-ORG (for example, Igloo Signer on the App Store). Forks or repackages by third parties may add their own services; this page describes FROSTR-ORG’s apps only.',
    ],
  },
  {
    id: 'what-we-do-not-collect',
    title: 'What FROSTR-ORG does not collect',
    bullets: [
      'User accounts, registration, or login systems operated by FROSTR-ORG.',
      'Email addresses or contact information collected through our apps.',
      'Analytics, advertising identifiers, or cross-app tracking sent to FROSTR-ORG.',
      'Cloud backup of your keys, shares, or profiles on FROSTR-ORG servers (we do not run such servers).',
      'Centralized logs of your signing activity on infrastructure we operate.',
      'Sale of personal information or sharing with data brokers.',
    ],
  },
  {
    id: 'on-your-device',
    title: 'What happens on your device',
    paragraphs: [
      'The app on your device uses credentials and shares that you import or generate locally. That material is stored using your platform’s secure storage (for example, the iOS Keychain on Igloo Signer), not on servers run by FROSTR-ORG.',
    ],
    bullets: [
      'Profile passwords and package passwords you set are used on-device to encrypt or unlock local data.',
      'In-app diagnostics or event logs, when shown, are for your own visibility on that device and are not transmitted to FROSTR-ORG (we have no servers to receive them).',
    ],
  },
  {
    id: 'camera',
    title: 'Camera (Igloo Signer and QR-capable apps)',
    paragraphs: [
      'Some apps may request camera access so you can scan a QR code to import a share or onboarding package. The camera is used only when you initiate a scan. FROSTR-ORG does not receive camera images or video because we do not operate servers that could store them.',
    ],
  },
  {
    id: 'network-relays',
    title: 'Network and relays',
    paragraphs: [
      'When you use threshold signing, your device exchanges encrypted protocol messages with other signer peers via Nostr relays that you (or your group) configure. Those relays are run by third parties or yourself — not by FROSTR-ORG.',
      'Relay operators may have their own policies and retention practices. FROSTR-ORG does not control those relays.',
    ],
  },
  {
    id: 'tracking',
    title: 'Tracking and advertising',
    paragraphs: [
      'FROSTR-ORG apps do not include third-party advertising SDKs. We do not use app activity for cross-app tracking and do not operate analytics pipelines that profile users.',
    ],
  },
  {
    id: 'your-choices',
    title: 'Your choices',
    bullets: [
      'Revoke camera permission in your device settings at any time.',
      'Remove local app data by clearing credentials in the app or uninstalling the app.',
      'Choose which Nostr relays your signer uses.',
      'Stop using a relay or peer by changing your configuration.',
    ],
  },
  {
    id: 'app-store',
    title: 'App Store disclosure',
    paragraphs: [
      'This page is published primarily to meet Apple App Store requirements for apps such as Igloo Signer. In App Store Connect, data collection attributed to the developer should reflect that FROSTR-ORG does not collect user data on its own infrastructure: sensitive data remains on the device, camera use is optional and user-initiated for QR scanning, and network activity goes to user-configured Nostr relays rather than FROSTR-ORG servers.',
    ],
  },
  {
    id: 'contact',
    title: 'Contact',
    paragraphs: [
      'FROSTR-ORG does not operate a privacy inbox or support email for signer users. Questions about open-source apps can be raised via public issue trackers on GitHub:',
    ],
    link: {
      label: 'FROSTR-ORG/igloo-ios',
      url: PRIVACY_CONTACT_REPO,
    },
  },
  {
    id: 'changes',
    title: 'Changes to this policy',
    paragraphs: [
      'We may update this Privacy Policy from time to time. Updates will be posted on this page with a new effective date.',
    ],
  },
];

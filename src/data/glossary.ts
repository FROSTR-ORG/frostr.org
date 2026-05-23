/**
 * FROSTR glossary content aligned with Paper artboards:
 * Glossary — Core & Protocol, Operations/Setup/Infrastructure, Policies & Data Model.
 */

export type GlossaryEntry = {
  id: string;
  term: string;
  aliases?: string[];
  description: string;
};

export type GlossarySection = {
  id: string;
  title: string;
  description: string;
  entries: GlossaryEntry[];
};

export type GlossaryMeta = {
  intro: string;
  note: string;
};

export const glossaryMeta = {
  intro:
    'Definitions for FROSTR threshold signing across the V2 stack (Rust bifrost-rs, Igloo shell / home / PWA / Chrome) and the V1 stack (JavaScript bifrost, Igloo Signer, Desktop, Server, frost2x, and related apps). If you only remember three ideas: a keyset is the full setup, a share is one piece of it, and the threshold is how many pieces are needed to sign.',
  note:
    'V2 package prefixes (bfonboard, bfprofile, bfshare) follow frostr-infra specs. V1 apps also use bfgroup and bfshare with different meanings — see the V1 stack section before assuming a bech32 string is a V2 artifact.',
};

export const glossarySections: GlossarySection[] = [
  {
    id: 'core-concepts',
    title: 'Core Concepts',
    description: 'Start here if you are new to how FROSTR works at a high level.',
    entries: [
      {
        id: 'frost',
        term: 'FROST',
        description:
          'Flexible Round-Optimized Schnorr Threshold signing — the cryptographic scheme underneath FROSTR. FROSTR adds device profiles, relay transport, onboarding, backup, and rotation on top of FROST.',
      },
      {
        id: 'frostr',
        term: 'FROSTR',
        description:
          'The full threshold-signing system for Nostr: split an nsec into t-of-n shares (e.g. 2-of-3 — threshold t = 2, n = 3), coordinate signing over relays, and keep the same npub. Implemented by the V2 stack (bifrost-rs) and the V1 stack (JavaScript bifrost library and Igloo apps).',
      },
      {
        id: 'share',
        term: 'Share',
        description:
          "An individual secret key piece within a FROSTR keyset's group. A single share cannot sign or reveal the private key — only a threshold of shares working together can produce a signature. Each device holds exactly one share. For transport, a share is wrapped with group metadata into an onboarding package (bfonboard).",
      },
      {
        id: 'keyset',
        term: 'Keyset',
        description:
          'The complete FROSTR threshold signing unit: a group of related shares plus the shared group configuration (Group Profile). A keyset is identified by its keyset npub and name. Shares from different keysets cannot be combined.',
      },
      {
        id: 'nsec',
        term: '`nsec`',
        description:
          'Your Nostr private key. FROSTR splits it into shares for day-to-day signing without holding the full nsec on one device. An explicit recovery flow (for example Recover NSEC) can combine a threshold of shares to reconstruct the original nsec when you intend to.',
      },
      {
        id: 'threshold',
        term: 'Threshold',
        description:
          'The minimum number of shares required to sign (parameter t in a t-of-n setup). Example: 2-of-3 means threshold t = 2 and n = 3 — any 2 of 3 shares can produce a valid signature.',
      },
      {
        id: 'relay',
        term: 'Relay',
        description:
          'A Nostr relay server that facilitates communication between signer nodes. All signers in a group need at least one common relay.',
      },
      {
        id: 'index',
        term: 'Index',
        description:
          'The numeric identifier of a share within a keyset (e.g. #0, #1, #2). Each device holds one share at a specific index. During Create Keyset, the operator chooses which index stays on this device.',
      },
      {
        id: 'remote-signing-service',
        term: 'Remote Signing Service',
        description:
          'The app category label shown in the header. Refers to any igloo application that signs Nostr events on behalf of a user from a remote device or browser, using FROST threshold signatures.',
      },
      {
        id: 'keyset-npub',
        term: 'Keyset npub',
        description:
          'The group public key of a FROSTR keyset, displayed in npub format. Visible to all peers via the group profile. Derived from the signing key that was split into shares.',
      },
      {
        id: 'group',
        term: 'Group',
        description:
          'The collective signing unit within a keyset. Consists of all shares, the shared group configuration, and the group\'s public key. When we say "the group" we mean the set of participants and their shared parameters — distinct from any individual share.',
      },
    ],
  },
  {
    id: 'v1-stack',
    title: 'V1 Stack',
    description:
      'Terms for the legacy JavaScript bifrost ecosystem: production Igloo Signer (iOS), Desktop, Web, Server, frost2x, and related libraries. Share and package formats are not interchangeable with V2 without a new keyset or migration project.',
    entries: [
      {
        id: 'frostr-v1',
        term: 'FROSTR V1',
        description:
          'The first-generation Igloo and bifrost (JavaScript) stack still used in production deployments — notably Igloo Signer on the App Store, Igloo Desktop, Igloo Web, Igloo Server, and frost2x.',
      },
      {
        id: 'frostr-v2',
        term: 'FROSTR V2',
        description:
          'The current hard-cut stack in frostr-infra: bifrost-rs plus coordinated hosts (Igloo Shell, Home, PWA, Chrome). New operator and host work targets V2; npub-preserving migration from V1 is not automatic.',
      },
      {
        id: 'bifrost-js',
        term: 'Bifrost (JavaScript)',
        description:
          'The V1 bifrost library and node model used by Igloo Desktop, Web, Server, frost2x, and related apps. Different codebase and persistence from bifrost-rs.',
      },
      {
        id: 'bfgroup',
        term: '`bfgroup` (V1)',
        description:
          'The bech32 prefix for a V1 group credential (bfgroup1...). Describes group-level keyset data — threshold and which shares belong together — not a V2 bfonboard or bfprofile package.',
      },
      {
        id: 'bfshare-v1',
        term: '`bfshare` (V1)',
        aliases: ['Share credential'],
        description:
          'In V1 apps, the bech32 prefix for a share credential (bfshare1...) — one signer share you load or save on a device. Not the same artifact as a V2 password-protected bfshare recovery/rotation package.',
      },
      {
        id: 'group-credential',
        term: 'Group credential',
        aliases: ['`bfgroup...`'],
        description:
          'The V1 packaged group-level data for a keyset. Apps use it together with share credentials to understand threshold and membership.',
      },
      {
        id: 'frost2x',
        term: 'frost2x',
        description:
          'V1 Chrome extension signer. Exposes NIP-07 to websites while using FROSTR threshold signing underneath.',
      },
      {
        id: 'igloo-server',
        term: 'Igloo Server',
        description:
          'V1 headless or database-mode server that acts as a FROSTR signer and Nostr Connect (NIP-46) endpoint for remote clients and API keys.',
      },
      {
        id: 'nip-46',
        term: 'NIP-46',
        description:
          'Nostr Connect — the standard for remote signing over Nostr. Igloo Server and V2 Chrome expose NIP-46-style flows so clients can request signatures without holding the raw nsec.',
      },
      {
        id: 'nip-07',
        term: 'NIP-07',
        description:
          'Browser extension signing interface many Nostr sites already support. frost2x (V1) and Igloo Chrome (V2) plug into this pattern with FROSTR underneath.',
      },
      {
        id: 'soundscape-mode',
        term: 'Soundscape mode',
        description:
          'Igloo Signer (iOS) feature that helps keep the signer reachable in the background during remote signing, without leaving the app foregrounded.',
      },
    ],
  },
  {
    id: 'artifacts-protocol',
    title: 'Artifacts & Protocol (V2)',
    description:
      'Encrypted packages and protocol objects for the V2 stack (bifrost-rs, frostr-infra). Not interchangeable with V1 bfgroup / bfshare credentials without migration.',
    entries: [
      {
        id: 'bifrost-rs',
        term: 'Bifrost (bifrost-rs)',
        description:
          'The Rust FROSTR node runtime used by V2 hosts. Each node manages a Group Profile, Device Profile, and ephemeral Device State, and coordinates threshold signing with peers over relays.',
      },
      {
        id: 'peer',
        term: 'Peer',
        description:
          'Another signer node in your FROSTR threshold group. Peers coordinate over relays to co-sign requests.',
      },
      {
        id: 'onboarding-package',
        term: 'Onboarding Package',
        description:
          'The transport format for delivering a share to a device. Used for first-time onboarding and runtime Replace Share. Contains the share secret plus group metadata needed to save or migrate a profile. Encoded as a bech32m string with the bfonboard prefix. Colloquially: "here\'s your bfonboard."',
      },
      {
        id: 'bfonboard',
        term: '`bfonboard`',
        description:
          'The bech32m prefix for onboarding packages (bfonboard1...). Onboarding packages are produced outside runtime from an nsec or a threshold of source shares, then imported by Onboard or Replace Share.',
      },
      {
        id: 'bfprofile',
        term: '`bfprofile`',
        description:
          'The bech32m prefix for profile backups (bfprofile1...). Used when importing a saved profile from text or file.',
      },
      {
        id: 'profile-backup',
        term: 'Profile Backup',
        description:
          'A full encrypted export of a saved profile, including its share and configuration. Import it on another device to save the same profile there.',
      },
      {
        id: 'export-share',
        term: 'Export Share',
        description:
          "Create a password-protected bfshare package for this device's share. Used as a source package during keyset rotation.",
      },
      {
        id: 'bfshare',
        term: '`bfshare` (V2)',
        description:
          'The bech32m prefix for password-protected compact share packages (bfshare1...) in the V2 stack. Used for relay recovery, as trusted-dealer rotation input, and as Export Share output. Distinct from V1 bfshare strings that encode a bare share credential — see the V1 stack section.',
      },
      {
        id: 'package-password',
        term: 'Package Password',
        description:
          'Password used to decrypt bfonboard, bfprofile, or bfshare packages.',
      },
      {
        id: 'profile-password',
        term: 'Profile Password',
        description:
          'The password used to encrypt and unlock a saved profile on this device.',
      },
      {
        id: 'package-producer',
        term: 'Package Producer',
        description:
          'The outside-runtime process or operator that creates a bfonboard package from an nsec or threshold source shares. Runtime Replace Share only imports the finished package.',
      },
      {
        id: 'apply-package',
        term: 'Apply Package',
        description:
          'The process of decrypting, validating, and saving share data from a bfonboard package. Used for first-time onboarding and runtime Replace Share.',
      },
      {
        id: 'profile-name',
        term: 'Profile Name',
        description:
          'A human-readable name for a profile on this device, used to identify it in the peer list and profile selector.',
      },
    ],
  },
  {
    id: 'operations',
    title: 'Operations',
    description:
      'Day-to-day profile actions as labeled in V2 Igloo hosts. V1 apps use similar ideas (import, load, recover) with different screens and package formats.',
    entries: [
      {
        id: 'import',
        term: 'Import',
        description:
          'Bringing a profile onto this device from an external source.',
      },
      {
        id: 'recover',
        term: 'Recover',
        description: 'Recovering a profile from a relay using a share.',
      },
      {
        id: 'load',
        term: 'Load',
        description: 'Selecting a saved profile that already exists on this device.',
      },
      {
        id: 'recover-nsec',
        term: 'Recover NSEC',
        description: 'Combining a threshold of shares to recover the original nsec.',
      },
      {
        id: 'unlock',
        term: 'Unlock',
        description: 'Decrypting a saved local profile that is encrypted at rest.',
      },
      {
        id: 'lock-profile',
        term: 'Lock Profile',
        description:
          'Encrypting and unloading the active profile, returning to the profile list. The profile remains saved on this device.',
      },
      {
        id: 'clear-credentials',
        term: 'Clear Credentials',
        description:
          "Deleting this device's saved profile, share, password, and relay configuration. Shared group data and other peers are not changed.",
      },
      {
        id: 'switch-profile',
        term: 'Switch Profile',
        description:
          "Locking the current active profile and unlocking a different saved profile. Requires the target profile's password.",
      },
      {
        id: 'profile-list',
        term: 'Profile List',
        description:
          'The selection screen showing all saved profiles on this device, allowing the user to choose which to unlock.',
      },
    ],
  },
  {
    id: 'device-setup',
    title: 'Device Setup',
    description: 'Outside-runtime and in-app flows for creating, importing, and rotating key material.',
    entries: [
      {
        id: 'create-keyset',
        term: 'Create Keyset',
        description:
          'The outside-runtime flow for generating a new FROSTR threshold keyset from scratch. Generates a new signing key and initial share set, then converges into shared Create Profile — where the operator chooses the local share — and Distribute Shares.',
      },
      {
        id: 'import-device-profile',
        term: 'Import Device Profile',
        description:
          'A device setup path for bringing an existing profile onto this device from a backup or by recovering it from a relay.',
      },
      {
        id: 'onboard-device',
        term: 'Onboard Device',
        description:
          'A device setup path for applying an onboarding package (bfonboard) that was produced outside runtime. Used for first-time device onboarding and for replacing a loaded profile\'s local share in runtime.',
      },
      {
        id: 'rotate-keyset',
        term: 'Rotate Keyset',
        description:
          'Outside-runtime same-key rotation (V2): the operator supplies a threshold set of bfshare packages exported from current devices (not bfprofile). Those shares reconstruct the existing signing key, which is re-split into fresh shares for the same group public key. Adoption uses bfonboard packages. Launched from a saved profile card before load; the local device can supply one bfshare as Source Share #1.',
      },
      {
        id: 'replace-share',
        term: 'Replace Share',
        description:
          'Inside-runtime single-share replacement launched from Settings for the currently loaded profile. The operator imports a valid onboarding package and password, applies the replacement, and returns to the signer with the same group public key and a new local share.',
      },
    ],
  },
  {
    id: 'signing-infrastructure',
    title: 'Signing Infrastructure',
    description:
      'Runtime coordination, capacity, and health between V2 signer nodes (nonce pools, health checks). V1 apps use simpler peer connectivity without this capacity model.',
    entries: [
      {
        id: 'signing-capacity',
        term: 'Signing Capacity',
        description:
          'The number of signatures your node can produce with a given peer before needing to replenish. Each unit of capacity corresponds to a pre-exchanged nonce. Displayed as a visual bar and count in the peer list. When capacity runs low, it is automatically refilled during health checks.',
      },
      {
        id: 'nonce-pool',
        term: 'Nonce Pool',
        description:
          'A reserve of pre-computed cryptographic nonces exchanged between peers. Each peer maintains two pools per counterpart: an outgoing pool (nonces you sent) and an incoming pool (nonces you received). One nonce is consumed per signature. Surfaced in the UI as "signing capacity" — users see the pool level without needing to understand the cryptographic mechanism. Default pool size: 100, low threshold: 20, critical threshold: 5.',
      },
      {
        id: 'nonce',
        term: 'Nonce',
        description:
          'A one-time random value used in threshold signature generation. In FROSTR, peers pre-exchange nonces so that signatures can be produced instantly without an extra round trip. Each nonce can only be used once — reusing a nonce would compromise the private key. The term "nonce" is never shown in the user interface; it is abstracted as "signing capacity."',
      },
      {
        id: 'health-check',
        term: 'Health Check (Ping/Pong)',
        description:
          'A periodic ping/pong exchange between signer nodes. Confirms peer liveness, measures latency, and — critically — replenishes nonce pools when they fall below the minimum threshold. Health checks are the mechanism that keeps signing capacity topped up. Shown in the event log as PING events and, when nonces are exchanged, as SYNC events.',
      },
      {
        id: 'sync-event',
        term: 'Sync Event',
        description:
          'A log event indicating that nonce pools have been exchanged with a peer. Triggered during health checks when a peer\'s pool drops below the minimum threshold. The event reports how many nonces were exchanged in each direction (e.g., "Pool sync with peer #0 — 50 received · 50 sent"). Asymmetric exchanges are flagged. Displayed with a teal SYNC badge in the event log.',
      },
    ],
  },
  {
    id: 'permissions-policies',
    title: 'Permissions & Policies',
    description:
      'How V2 Igloo hosts approve peer actions and NIP-46-style external requests. V1 Igloo Server uses related but separate permission-policy UX.',
    entries: [
      {
        id: 'permission-tags',
        term: 'Permission Tags',
        description:
          'Labels assigned to peers that control allowed peer actions. Peer policy tags are SIGN, ECDH, PING, and ONBOARD. Requests not explicitly allowed by signer policies require a peer policy decision.',
      },
      {
        id: 'sign-tag',
        term: 'SIGN',
        description:
          'A permission tag that allows a peer to automatically trigger signing operations. When a peer has the SIGN tag, your node responds to their signature requests without manual approval.',
      },
      {
        id: 'ecdh-tag',
        term: 'ECDH',
        description:
          'A permission tag that allows a peer to trigger ECDH key exchange operations used by nip04/nip44 encryption flows. Requests not explicitly allowed by signer policies require a peer policy decision.',
      },
      {
        id: 'onboard-tag',
        term: 'ONBOARD',
        description:
          'A permission tag that allows onboarding operations for this peer/device relationship, including onboarding package exchange and handshake steps.',
      },
      {
        id: 'ping-tag',
        term: 'PING',
        description:
          'A permission tag that allows peer health-check actions (ping/pong). Grants this peer permission to participate in connectivity and latency checks.',
      },
      {
        id: 'signer-policy-prompt',
        term: 'Signer Policy Prompt',
        description:
          'A prompt shown for external requests not explicitly allowed by signer policies. Displays method details and requester pubkey. Options: Reject, Allow once, Allow forever, or Allow forever for kind X. If timeout expires, the request is rejected.',
      },
      {
        id: 'nip-44',
        term: 'NIP-44',
        description:
          'A Nostr encryption standard for private messages. Uses ECDH key exchange to derive a shared secret between two pubkeys. In Igloo, ECDH operations for NIP-44 require the ECDH permission tag or manual approval.',
      },
      {
        id: 'signer-policies',
        term: 'Signer Policies',
        description:
          'Rules that control how a V2 signer responds to external client requests using NIP-46 permission strings (get_public_key, sign_event, sign_event:<kind>, nip04_encrypt/decrypt, nip44_encrypt/decrypt, switch_relays). Decisions: Allow once, Allow forever, Allow forever for kind X, or Reject. Requests not explicitly allowed show a signer policy prompt.',
      },
    ],
  },
  {
    id: 'data-model',
    title: 'Data Model',
    description:
      'Group Profile, Device Profile, and Device State as modeled in bifrost-rs and V2 hosts. V1 signers persist analogous keyset and share data with different on-disk shapes.',
    entries: [
      {
        id: 'group-profile',
        term: 'Group Profile',
        description:
          'Shared keyset configuration visible to all peers. Contains keyset name, keyset npub, threshold, total keys, and created/updated timestamps. Synced via Nostr automatically — cannot be edited from a single device.',
      },
      {
        id: 'device-profile',
        term: 'Device Profile',
        description:
          'The local configuration for a single profile. Contains the share key, index, profile name, relay list, and peer policies. Each device configures its profiles independently — changes only affect this device.',
      },
      {
        id: 'device-state',
        term: 'Device State',
        description:
          'Ephemeral runtime data such as nonce pools and pending operations. Not persisted or shared between devices — regenerated each session.',
      },
      {
        id: 'profile',
        term: 'Profile',
        description:
          'A saved local profile containing one share plus the configuration needed to use it on this device.',
      },
    ],
  },
];

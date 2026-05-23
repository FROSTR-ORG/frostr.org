/**
 * Site footer with compact social links.
 */
import { SOCIAL_LINKS } from '@/config/site';

/**
 * App footer matching the Paper about-page treatment.
 */
export function Footer() {
  return (
    <footer className="mt-12 w-full border-t border-blue-900/20 pt-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="igloo-small text-slate-500">© FROSTR-ORG · MIT</div>
        <nav aria-label="Social" className="flex items-center gap-2 text-sm text-blue-400">
          <a href={SOCIAL_LINKS.nostr} className="hover:text-blue-300">Nostr</a>
          <span className="text-slate-600">·</span>
          <a href={SOCIAL_LINKS.x} className="hover:text-blue-300">X</a>
          <span className="text-slate-600">·</span>
          <a href={SOCIAL_LINKS.github} className="hover:text-blue-300">GitHub</a>
        </nav>
      </div>
    </footer>
  );
}

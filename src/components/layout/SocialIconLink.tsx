/**
 * External social link with icon from public/icons.svg sprite.
 */
import { cn } from '@/lib/utils';

type SocialIconLinkProps = {
  href: string;
  label: string;
  iconId: 'x-icon' | 'nostr-icon' | 'github-icon';
};

/**
 * @param props.href - Destination URL (opens in a new tab).
 * @param props.label - Accessible name for the link.
 * @param props.iconId - Sprite symbol id in /icons.svg.
 */
export function SocialIconLink({ href, label, iconId }: SocialIconLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-lg text-slate-500',
        'transition-colors hover:bg-slate-800/60 hover:text-blue-400',
      )}
    >
      <svg className="h-[18px] w-[18px]" aria-hidden>
        <use href={`/icons.svg#${iconId}`} width="100%" height="100%" />
      </svg>
    </a>
  );
}

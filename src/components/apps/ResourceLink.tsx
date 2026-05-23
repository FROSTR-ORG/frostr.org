/**
 * External or internal link row for resource cards.
 */
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { CatalogLink } from '@/data/apps-catalog';

type ResourceLinkProps = {
  link: CatalogLink;
};

/**
 * @param props.link - External URL or internal route.
 */
export function ResourceLink({ link }: ResourceLinkProps) {
  const className =
    'flex items-center text-sm text-blue-400 transition-colors hover:text-blue-300';

  if ('to' in link) {
    return (
      <Link to={link.to} className={className}>
        <ExternalLink className="mr-2 h-4 w-4 shrink-0" aria-hidden />
        <span>{link.label}</span>
      </Link>
    );
  }

  return (
    <a href={link.url} target="_blank" rel="noopener noreferrer" className={className}>
      <ExternalLink className="mr-2 h-4 w-4 shrink-0" aria-hidden />
      <span>{link.label}</span>
    </a>
  );
}

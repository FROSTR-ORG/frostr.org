/**
 * Maps catalog icon names to Lucide components.
 */
import {
  Computer,
  Globe,
  Library,
  Puzzle,
  Server,
  Smartphone,
  Terminal,
} from 'lucide-react';
import type { CatalogIconName } from '@/data/apps-catalog';

const ICON_MAP = {
  smartphone: Smartphone,
  computer: Computer,
  globe: Globe,
  puzzle: Puzzle,
  server: Server,
  terminal: Terminal,
  library: Library,
} as const satisfies Record<CatalogIconName, typeof Smartphone>;

/**
 * @param name - Catalog icon key from apps-catalog.
 */
export function CatalogIcon({ name }: { name: CatalogIconName }) {
  const Icon = ICON_MAP[name];
  return <Icon className="h-8 w-8 shrink-0 text-blue-400" aria-hidden />;
}

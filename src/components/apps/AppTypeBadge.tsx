/**
 * Badge for application or library type labels on resource cards.
 */
import { Badge } from '@/components/ui/Badge';
import type { CatalogItemType } from '@/data/apps-catalog';

type BadgeVariant = 'default' | 'success' | 'error' | 'warning' | 'info';

const TYPE_VARIANT: Record<CatalogItemType, BadgeVariant> = {
  'Mobile App': 'success',
  'Desktop App': 'info',
  'Web App': 'info',
  'Browser Extension': 'warning',
  Server: 'error',
  'CLI Tool': 'default',
  Library: 'warning',
};

type AppTypeBadgeProps = {
  type: CatalogItemType;
};

/**
 * @param props.type - Resource category label shown on the card.
 */
export function AppTypeBadge({ type }: AppTypeBadgeProps) {
  return <Badge variant={TYPE_VARIANT[type]}>{type}</Badge>;
}

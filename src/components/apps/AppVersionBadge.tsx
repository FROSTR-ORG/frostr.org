/**
 * Badge for FROSTR protocol generation (V1 vs V2) on resource cards.
 */
import { Badge } from '@/components/ui/Badge';
import type { AppVersion } from '@/data/apps-catalog';

const VERSION_VARIANT = {
  v2: 'info',
  v1: 'default',
} as const;

type AppVersionBadgeProps = {
  version: AppVersion;
};

/**
 * @param props.version - Catalog protocol generation (v1 or v2).
 */
export function AppVersionBadge({ version }: AppVersionBadgeProps) {
  const label = version === 'v2' ? 'V2' : 'V1';
  return <Badge variant={VERSION_VARIANT[version]}>{label}</Badge>;
}

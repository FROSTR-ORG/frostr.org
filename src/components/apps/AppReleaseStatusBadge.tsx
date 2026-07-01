/**
 * Badge for public release availability on catalog cards.
 */
import { Badge } from '@/components/ui/Badge';
import type { AppReleaseStatus } from '@/data/apps-catalog';

const RELEASE_STATUS_LABEL: Record<AppReleaseStatus, string> = {
  released: 'Released',
  comingSoon: 'Coming soon',
};

const RELEASE_STATUS_VARIANT = {
  released: 'success',
  comingSoon: 'warning',
} as const;

type AppReleaseStatusBadgeProps = {
  status: AppReleaseStatus;
};

/**
 * @param props.status - Public availability state for a catalog item.
 */
export function AppReleaseStatusBadge({ status }: AppReleaseStatusBadgeProps) {
  return (
    <Badge variant={RELEASE_STATUS_VARIANT[status]}>
      {RELEASE_STATUS_LABEL[status]}
    </Badge>
  );
}

/**
 * Badge for media item type (article, video, podcast, space).
 */
import { BookOpen, Mic, Radio, Video } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import type { MediaType } from '@/data/media-catalog';

const TYPE_CONFIG: Record<
  MediaType,
  { variant: 'info' | 'warning' | 'success' | 'default'; icon: typeof BookOpen }
> = {
  Article: { variant: 'info', icon: BookOpen },
  Podcast: { variant: 'warning', icon: Mic },
  Video: { variant: 'success', icon: Video },
  Space: { variant: 'default', icon: Radio },
};

type MediaTypeBadgeProps = {
  type: MediaType;
};

/**
 * @param props.type - Media category shown on coverage cards.
 */
export function MediaTypeBadge({ type }: MediaTypeBadgeProps) {
  const { variant, icon: Icon } = TYPE_CONFIG[type];

  return (
    <Badge variant={variant} className="gap-1.5">
      <Icon className="h-3.5 w-3.5" aria-hidden />
      {type}
    </Badge>
  );
}

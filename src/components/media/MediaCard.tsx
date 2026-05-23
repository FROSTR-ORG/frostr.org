/**
 * Card for a single media coverage item.
 */
import { ExternalLink } from 'lucide-react';
import { MediaTypeBadge } from '@/components/media/MediaTypeBadge';
import { Card, CardContent } from '@/components/ui/Card';
import {
  formatMediaDate,
  getMediaActionLabel,
  type MediaItem,
} from '@/data/media-catalog';
import { cn } from '@/lib/utils';

type MediaCardProps = {
  item: MediaItem;
};

/**
 * @param props.item - Media catalog entry to render.
 */
export function MediaCard({ item }: MediaCardProps) {
  return (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'block transition-transform duration-300 hover:scale-[1.02]',
        'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500',
      )}
    >
      <Card className="flex h-full flex-col overflow-hidden border-blue-900/20 bg-slate-900/40 transition-colors hover:border-blue-900/40">
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={item.thumbnail}
            alt=""
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <CardContent className="flex flex-grow flex-col p-5">
          <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
            <MediaTypeBadge type={item.type} />
            <div className="igloo-small flex items-center gap-2 text-slate-500">
              <span>{item.source}</span>
              <span aria-hidden>·</span>
              <time dateTime={item.date}>{formatMediaDate(item.date)}</time>
            </div>
          </div>
          <h3 className="mb-2 font-sans text-lg font-semibold text-slate-200">
            {item.title}
          </h3>
          <p className="igloo-body mb-4 line-clamp-3 flex-grow text-slate-400">
            {item.description}
          </p>
          <span className="flex items-center gap-1.5 text-sm text-blue-400">
            <ExternalLink className="h-4 w-4 shrink-0" aria-hidden />
            {getMediaActionLabel(item.type)}
          </span>
        </CardContent>
      </Card>
    </a>
  );
}

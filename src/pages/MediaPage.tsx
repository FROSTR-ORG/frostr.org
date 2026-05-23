/**
 * Media page — talks, articles, podcasts, and press coverage.
 */
import { MediaCard } from '@/components/media/MediaCard';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { MEDIA_ITEMS } from '@/data/media-catalog';

export function MediaPage() {
  return (
    <div>
      <Card>
        <CardHeader className="border-b border-blue-900/20 pb-4">
          <CardTitle className="font-sans text-2xl font-semibold text-slate-200">
            Media Coverage
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {MEDIA_ITEMS.map((item) => (
              <MediaCard key={item.id} item={item} />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

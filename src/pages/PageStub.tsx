/**
 * Reusable placeholder layout for routes pending content port from frostr-website.
 */
import { Card, CardContent } from '@/components/ui/Card';

type PageStubProps = {
  title: string;
};

/**
 * @param props.title - Page heading shown in the document.
 */
export function PageStub({ title }: PageStubProps) {
  return (
    <section className="max-w-3xl space-y-6">
      <h1 className="igloo-h1">{title}</h1>
      <Card>
        <CardContent className="pt-6">
          <p className="igloo-body text-slate-400">
            Content from frostr-website — coming soon.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}

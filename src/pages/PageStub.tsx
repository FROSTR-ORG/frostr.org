/**
 * Reusable placeholder layout for routes pending content port from frostr-website.
 */
import { ProseLane } from '@/components/layout/ProseLane';
import { Card, CardContent } from '@/components/ui/Card';

type PageStubProps = {
  title: string;
};

/**
 * @param props.title - Page heading shown in the document.
 */
export function PageStub({ title }: PageStubProps) {
  return (
    <section className="space-y-6">
      <ProseLane>
        <h1 className="igloo-h1">{title}</h1>
      </ProseLane>
      <Card>
        <CardContent className="pt-6">
          <ProseLane>
            <p className="igloo-body text-slate-400">
              Content from frostr-website — coming soon.
            </p>
          </ProseLane>
        </CardContent>
      </Card>
    </section>
  );
}

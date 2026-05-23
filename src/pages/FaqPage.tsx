/**
 * FAQ page — common questions about FROSTR and Igloo apps.
 */
import { ProseLane } from '@/components/layout/ProseLane';
import { FaqSection } from '@/components/faq/FaqSection';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { FAQ_INTRO, FAQ_SECTIONS } from '@/data/faq';

export function FaqPage() {
  return (
    <div className="space-y-8">
      <ProseLane>
        <Card>
        <CardHeader className="space-y-2 border-b border-blue-900/20 pb-4">
          <CardTitle className="font-sans text-2xl font-semibold text-slate-200">
            Frequently Asked Questions
          </CardTitle>
          <p className="igloo-body text-slate-400">{FAQ_INTRO}</p>
        </CardHeader>
        <CardContent className="space-y-8 pt-6">
          {FAQ_SECTIONS.map((section) => (
            <FaqSection key={section.id} section={section} />
          ))}
        </CardContent>
      </Card>
      </ProseLane>
    </div>
  );
}

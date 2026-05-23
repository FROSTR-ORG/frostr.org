/**
 * Application root: client-side routing for frostr.org pages.
 */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ROADMAP_ENABLED } from '@/config/site';
import { AboutPage } from '@/pages/AboutPage';
import { AppsPage } from '@/pages/AppsPage';
import { GlossaryPage } from '@/pages/GlossaryPage';
import { MediaPage } from '@/pages/MediaPage';
import { FaqPage } from '@/pages/FaqPage';
import { PrivacyPage } from '@/pages/PrivacyPage';
import { DesignSystemPage } from '@/pages/DesignSystemPage';
import { RoadmapPage } from '@/pages/RoadmapPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<AboutPage />} />
          <Route path="apps" element={<AppsPage />} />
          <Route path="glossary" element={<GlossaryPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="media" element={<MediaPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          {ROADMAP_ENABLED && <Route path="roadmap" element={<RoadmapPage />} />}
          {import.meta.env.DEV && (
            <Route path="design-system" element={<DesignSystemPage />} />
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

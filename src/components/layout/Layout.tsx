/**
 * Site shell: header, tab navigation, mobile menu, footer, and page outlet.
 */
import { useState } from 'react';
import { GitFork, Menu, X } from 'lucide-react';
import { NavLink, Outlet } from 'react-router-dom';
import { Footer } from '@/components/layout/Footer';
import { PageContent } from '@/components/layout/PageContent';
import { SiteNavLink } from '@/components/layout/SiteNavLink';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import { navItems, ORG } from '@/config/site';

type LayoutProps = {
  /** Optional global error message (e.g. GitHub API errors). */
  error?: string | null;
};

/**
 * @param props.error - Shown above page content when set.
 */
export function Layout({ error }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  function closeMobileMenu() {
    setMobileMenuOpen(false);
  }

  return (
    <div className="igloo-page-bg relative min-h-screen overflow-hidden">
      <div className="relative mx-auto max-w-7xl space-y-8 p-6 md:p-8 max-md:p-2">
        <header className="surface-elevated flex flex-col gap-4 rounded-xl px-5 py-3.5 md:flex-row md:items-center md:justify-between">
          <NavLink to="/" className="flex items-center gap-3">
            <img
              src="/frostr-logo-transparent.png"
              alt="Frostr logo"
              className="h-10 w-10 shrink-0"
            />
            <div className="flex flex-col gap-0.5">
              <span className="font-mono text-[32px] leading-none tracking-tight text-blue-300">
                FROSTR
              </span>
              <span className="igloo-small text-slate-500">
                Threshold Signing for Nostr
              </span>
            </div>
          </NavLink>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
            {navItems.map((item) => (
              <SiteNavLink
                key={item.to}
                to={item.to}
                label={item.label}
                end={item.end}
              />
            ))}
          </nav>

          <div className="flex items-center justify-end">
            <a
              href={`https://github.com/${ORG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-blue-400 transition-colors hover:text-blue-300"
            >
              <GitFork className="h-4 w-4" aria-hidden />
              <span className="hidden sm:inline">GitHub</span>
            </a>

            <button
              type="button"
              className="ml-4 text-blue-400 transition-colors hover:text-blue-300 md:hidden"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden />
              ) : (
                <Menu className="h-6 w-6" aria-hidden />
              )}
            </button>
          </div>
        </header>

        {mobileMenuOpen && (
          <nav
            className="absolute left-2 right-2 z-50 mt-2 rounded-lg border border-blue-900/20 bg-slate-900/80 p-4 shadow-lg backdrop-blur-lg md:hidden"
            aria-label="Mobile"
          >
            <div className="flex flex-col space-y-1">
              {navItems.map((item) => (
                <SiteNavLink
                  key={item.to}
                  to={item.to}
                  label={item.label}
                  end={item.end}
                  variant="mobile"
                  onNavigate={closeMobileMenu}
                />
              ))}
            </div>
          </nav>
        )}

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <main className="mt-2">
          <PageContent>
            <Outlet />
          </PageContent>
        </main>

        <Footer />
      </div>
    </div>
  );
}

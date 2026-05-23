/**
 * Styled router link for the site header and mobile menu (Igloo UI).
 */
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

type SiteNavLinkProps = {
  to: string;
  label: string;
  end?: boolean;
  onNavigate?: () => void;
  variant?: 'desktop' | 'mobile';
};

/**
 * @param props.to - Route path.
 * @param props.label - Visible link text.
 * @param props.end - When true, only match the path exactly (used for About `/`).
 * @param props.onNavigate - Called after click (e.g. close mobile menu).
 * @param props.variant - Desktop tab style or mobile drawer style.
 */
export function SiteNavLink({
  to,
  label,
  end,
  onNavigate,
  variant = 'desktop',
}: SiteNavLinkProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onNavigate}
      className={({ isActive }) => {
        if (variant === 'mobile') {
          return cn(
            'rounded-md px-4 py-3 text-sm font-medium transition-colors',
            isActive
              ? 'bg-blue-900/30 text-blue-300'
              : 'text-slate-300 hover:bg-slate-900/60',
          );
        }

        return cn(
          'border-b-2 px-4 py-2 text-sm font-medium transition-colors',
          isActive
            ? 'border-blue-600 text-blue-300'
            : 'border-transparent text-slate-400 hover:text-slate-200',
        );
      }}
    >
      {label}
    </NavLink>
  );
}

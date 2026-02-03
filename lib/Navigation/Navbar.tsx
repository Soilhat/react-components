import { type ReactNode } from 'react';
import { useTheme } from '../Theme/useTheme';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import { NavLink as RouterLink } from 'react-router-dom';

export type NavLink = {
  label: string;
  to: string;
  icon?: ReactNode;
};

type NavProps = {
  layout?: 'sidebar' | 'topbar';
  logoURl?: string;
  brandName?: string;
  links?: NavLink[];
  actions?: ReactNode;
  mobileNavLinks?: NavLink[];
  children?: ReactNode;
};

export const Navbar = ({
  layout = 'sidebar',
  logoURl,
  brandName,
  links,
  actions,
  mobileNavLinks,
  children,
}: NavProps) => {
  const { toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-surface-base dark:bg-surface-base-dark transition-colors duration-300">
      {/* --- TOPBAR VIEW (Normal Header) --- */}
      {layout === 'topbar' && (
        <header className="sticky top-0 z-40 w-full border-b border-border dark:border-border-dark bg-surface-panel/80 dark:bg-surface-panel-dark/80 backdrop-blur-md transition-colors">
          <div className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
            <Branding logo={logoURl} name={brandName} />
            <nav className="hidden md:flex items-center gap-1">
              <NavLinks links={links} direction="horizontal" />
            </nav>
            <div className="flex items-center gap-2">
              <ThemeToggle onToggle={toggleTheme} />
              <div className="hidden md:block">{actions}</div>
            </div>
          </div>
        </header>
      )}

      {/* --- SIDEBAR VIEW --- */}
      {layout === 'sidebar' && (
        <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col border-r border-border dark:border-border-dark bg-surface-panel dark:bg-surface-panel-dark">
          <div className="flex flex-col grow pt-5 pb-4 overflow-y-auto">
            <Branding logo={logoURl} name={brandName} />
            <nav className="mt-8 flex-1 px-4">
              <NavLinks links={links} direction="vertical" />
            </nav>
            <div className="px-4 py-4 border-t border-border dark:border-border-dark flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-text-secondary dark:text-text-secondary-dark uppercase">
                  Theme
                </span>
                <ThemeToggle onToggle={toggleTheme} />
              </div>
              {actions}
            </div>
          </div>
        </aside>
      )}

      {/* --- MOBILE COMPACT HEADER (Always on for Sidebar Layout) --- */}
      {layout === 'sidebar' && (
        <header className="lg:hidden sticky top-0 z-40 flex h-16 shrink-0 items-center justify-between border-b border-border dark:border-border-dark bg-surface-panel/80 dark:bg-surface-panel-dark/80 backdrop-blur-md px-4">
          <Branding logo={logoURl} name={brandName} />
          <ThemeToggle onToggle={toggleTheme} />
        </header>
      )}

      {/* --- MAIN CONTENT --- */}
      <main
        className={`
        ${layout === 'sidebar' ? 'lg:pl-64' : ''}
        transition-all
        pb-24 md:pb-8
      `}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">{children}</div>
      </main>

      {/* --- MOBILE NAV SLOT (App injects its own BottomBar here) --- */}
      <div className="lg:hidden">
        <StandardizedBottomBar links={mobileNavLinks ?? links} />
      </div>
    </div>
  );
};

// --- INTERNAL HELPERS ---

const Branding = ({ logo, name }: { logo?: string; name?: string }) => (
  <div className="flex items-center gap-3">
    {logo && <img src={logo} alt="" className="h-8 w-8 rounded-lg shadow-sm" />}
    {name && (
      <span className="text-xl font-black tracking-tight text-text-primary dark:text-text-primary-dark uppercase italic">
        {name}
      </span>
    )}
  </div>
);

const ThemeToggle = ({ onToggle }: { onToggle: () => void }) => (
  <button
    onClick={onToggle}
    className="p-2 rounded-lg text-text-secondary dark:text-text-secondary-dark hover:bg-surface-base dark:hover:bg-surface-base-dark transition-all"
  >
    <SunIcon className="size-5 hidden dark:block" />
    <MoonIcon className="size-5 block dark:hidden" />
  </button>
);

const NavLinks = ({ links, direction }: { links?: NavLink[]; direction: 'vertical' | 'horizontal' }) => (
  <ul className={`flex ${direction === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-1'}`}>
    {links?.map((l) => (
      <li key={l.label}>
        <RouterLink
          to={l.to}
          className={({ isActive }) => `
            group flex items-center gap-3 px-3 py-2.5 text-sm font-bold transition-all rounded-xl
            ${
              isActive
                ? 'bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark'
                : 'text-text-secondary hover:text-primary dark:text-text-secondary-dark dark:hover:text-primary-dark hover:bg-surface-base dark:hover:bg-surface-base-dark'
            }
          `}
        >
          {l.icon && <span className="size-5 shrink-0 opacity-70 group-hover:opacity-100">{l.icon}</span>}
          <span>{l.label}</span>
        </RouterLink>
      </li>
    ))}
  </ul>
);

const StandardizedBottomBar = ({ links }: { links?: NavLink[] }) => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 pb-safe border-t border-border dark:border-border-dark bg-surface-panel/90 dark:bg-surface-panel-dark/90 backdrop-blur-xl flex items-center justify-around lg:hidden">
    {links?.map((link) => (
      <RouterLink
        key={link.to}
        to={link.to}
        className={({ isActive }) => `
          flex flex-col items-center gap-1 transition-all duration-300 min-w-[64px]
          ${isActive ? 'text-primary dark:text-primary-dark scale-105' : 'text-text-secondary dark:text-text-secondary-dark'}
        `}
      >
        {link.icon && <span className="size-5">{link.icon}</span>}
        <span className="text-[10px] font-bold uppercase tracking-tighter">{link.label}</span>
      </RouterLink>
    ))}
  </nav>
);

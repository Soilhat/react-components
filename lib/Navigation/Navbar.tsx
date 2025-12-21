import { type ReactNode, useState } from 'react';
import { useTheme } from '../Theme/useTheme';

type NavProps = {
  logoURl?: string;
  brandName?: string;
  links?: { label: string; element: ReactNode }[];
  actions?: ReactNode;
};

export const Navbar = ({ logoURl, brandName, links, actions }: NavProps) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border dark:border-border-dark bg-surface-panel/80 dark:bg-surface-panel-dark/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Left: Branding & Logo */}
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 group">
              {logoURl && (
                <img
                  src={logoURl}
                  alt=""
                  className="h-8 w-8 rounded-lg object-cover shadow-sm group-hover:scale-105 transition-transform"
                />
              )}
              {brandName && (
                <span className="text-xl font-bold tracking-tight text-text-primary dark:text-text-primary-dark">
                  {brandName}
                </span>
              )}
            </a>

            {/* Mobile Toggle Button */}
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-text-secondary hover:bg-surface-base dark:hover:bg-surface-base-dark focus:outline-none focus:ring-2 focus:ring-state-focus"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Center: Desktop Navigation */}
          {links && (
            <nav className="hidden md:block" aria-label="Main Navigation">
              <NavLinks links={links} />
            </nav>
          )}

          {/* Right: Actions & Theme Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-3">{actions}</div>

            <button
              aria-label="Toggle color theme"
              onClick={toggleTheme}
              className="p-2 rounded-lg text-text-secondary hover:text-primary dark:hover:text-primary-dark hover:bg-surface-base dark:hover:bg-surface-base-dark transition-all"
            >
              {/* Sun Icon (Show in Dark) */}
              <svg className="size-5 hidden dark:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707-.707M12 5a7 7 0 100 14 7 7 0 000-14z"
                />
              </svg>
              {/* Moon Icon (Show in Light) */}
              <svg className="size-5 block dark:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Panel */}
        {mobileOpen && (
          <div className="md:hidden animate-in slide-in-from-top duration-200 border-t border-border dark:border-border-dark py-4 space-y-4">
            {links && <NavLinks links={links} isMobile />}
            {actions && (
              <div className="flex flex-col gap-2 pt-2 border-t border-border dark:border-border-dark">{actions}</div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

function NavLinks({ links, isMobile = false }: { links?: NavProps['links']; isMobile?: boolean }) {
  return (
    <ul className={`flex ${isMobile ? 'flex-col gap-1' : 'flex-row items-center gap-1'}`}>
      {links?.map((l) => (
        <li key={l.label} className="w-full">
          <div
            className={`
            text-sm font-medium transition-all rounded-md
            ${
              isMobile
                ? 'px-3 py-2 text-text-primary hover:bg-surface-base dark:hover:bg-surface-base-dark'
                : 'px-4 py-2 text-text-secondary hover:text-primary dark:text-text-secondary-dark dark:hover:text-primary-dark'
            }
          `}
          >
            {l.element}
          </div>
        </li>
      ))}
    </ul>
  );
}

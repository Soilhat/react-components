import { type ReactNode, useState } from 'react';
import { useTheme } from '../Theme/useTheme';
import { MoonIcon, SunIcon, Bars3Icon } from '@heroicons/react/24/outline';
import { NavLink as RouterLink } from 'react-router-dom';
import { Modal } from '../main';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-surface-base dark:bg-surface-base-dark transition-colors duration-300">
      {/* --- TOPBAR VIEW --- */}
      {layout === 'topbar' && (
        <header className="sticky top-0 z-40 w-full border-b border-border dark:border-border-dark bg-surface-panel/80 dark:bg-surface-panel-dark/80 backdrop-blur-md">
          <div className="mx-auto max-w-[1600px] px-6 sm:px-10 h-16 flex items-center justify-between">
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
        <aside className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-72 lg:flex-col border-r border-border dark:border-border-dark bg-surface-panel dark:bg-surface-panel-dark">
          <div className="flex flex-col grow pt-5 pb-4 overflow-y-auto">
            <Branding logo={logoURl} name={brandName} className="px-6 mb-2" />
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

      {/* --- MAIN CONTENT --- */}
      <main className={`${layout === 'sidebar' ? 'lg:pl-72' : ''} transition-all pb-24 md:pb-8`}>
        <div className="mx-auto max-w-[1600px] w-full px-4 sm:px-10 lg:px-12 2xl:px-16 py-8">{children}</div>
      </main>

      {/* --- MOBILE NAV & ACTIONS MODAL --- */}
      <div className="lg:hidden">
        <StandardizedBottomBar
          links={mobileNavLinks?.slice(0, 4) ?? links?.slice(0, 4)}
          onOpenMenu={() => setIsMenuOpen(true)}
        />

        <Modal open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <Modal.Header>Menu</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <nav>
                <p className="text-xs font-bold text-text-secondary uppercase mb-3 px-3">Navigation</p>
                <NavLinks links={links} direction="vertical" onLinkClick={() => setIsMenuOpen(false)} />
              </nav>

              <div className="pt-4 border-t border-border dark:border-border-dark">
                <div
                  className="flex items-center justify-between p-4 rounded-2xl bg-surface-base/50 dark:bg-surface-base-dark/50 cursor-pointer"
                  onClick={toggleTheme}
                >
                  <span className="text-sm font-bold">Switch Theme</span>
                  <ThemeToggle onToggle={toggleTheme} />
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <div className="w-full flex flex-col gap-2">{actions}</div>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

// --- INTERNAL HELPERS ---

const Branding = ({ logo, name, className = '' }: { logo?: string; name?: string; className?: string }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    {logo && <img src={logo} alt="" className="h-9 w-9 rounded-xl shadow-sm border border-border/50 object-cover" />}
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
    className="p-2 rounded-lg text-text-secondary dark:text-text-secondary-dark hover:bg-surface-base dark:hover:bg-surface-base-dark transition-all cursor-pointer"
  >
    <SunIcon className="size-5 hidden dark:block" />
    <MoonIcon className="size-5 block dark:hidden" />
  </button>
);

const NavLinks = ({
  links,
  direction,
  onLinkClick,
}: {
  links?: NavLink[];
  direction: 'vertical' | 'horizontal';
  onLinkClick?: () => void;
}) => (
  <ul className={`flex ${direction === 'vertical' ? 'flex-col gap-2' : 'flex-row gap-1'}`}>
    {links?.map((l) => (
      <li key={l.label}>
        <RouterLink
          to={l.to}
          onClick={onLinkClick}
          className={({ isActive }) => `
            group flex items-center gap-3 px-3 py-2.5 text-sm font-bold transition-all rounded-xl
            ${
              isActive
                ? 'bg-primary/10 text-primary dark:bg-primary-dark/10 dark:text-primary-dark'
                : 'text-text-secondary dark:text-text-secondary-dark hover:bg-surface-base dark:hover:bg-surface-base-dark'
            }
          `}
        >
          {l.icon && <span className="size-5 shrink-0">{l.icon}</span>}
          <span>{l.label}</span>
        </RouterLink>
      </li>
    ))}
  </ul>
);

const StandardizedBottomBar = ({ links, onOpenMenu }: { links?: NavLink[]; onOpenMenu: () => void }) => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 pb-safe border-t border-border dark:border-border-dark bg-surface-panel/90 dark:bg-surface-panel-dark/90 backdrop-blur-xl flex items-center justify-around lg:hidden">
    {links?.map((link) => (
      <RouterLink
        key={link.to}
        to={link.to}
        className={({ isActive }) => `
          flex flex-col items-center gap-1 transition-all duration-300 min-w-[64px]
          ${isActive ? 'text-primary dark:text-primary-dark' : 'text-text-secondary dark:text-text-secondary-dark'}
        `}
      >
        {link.icon && <span className="size-5">{link.icon}</span>}
        <span className="text-[10px] font-bold uppercase tracking-tighter">{link.label}</span>
      </RouterLink>
    ))}
    <button
      onClick={onOpenMenu}
      className="flex flex-col items-center gap-1 text-text-secondary dark:text-text-secondary-dark min-w-[64px] cursor-pointer"
    >
      <Bars3Icon className="size-5" />
      <span className="text-[10px] font-bold uppercase tracking-tighter">Menu</span>
    </button>
  </nav>
);

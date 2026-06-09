import { type ReactNode, useState } from 'react';
import { Menu, ChevronLeft, ChevronRight } from 'lucide-react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Modal, ThemeToggle, useTheme } from '../main';

export type NavLink = {
  label: string;
  to: string;
  icon?: ReactNode;
};

type NavProps = {
  layout?: 'sidebar' | 'topbar';
  logo?: ReactNode;
  brandName?: string;
  links?: NavLink[];
  actions?: ReactNode;
  userAvatarUrl?: string;
  mobileNavLinks?: NavLink[];
  children?: ReactNode;
  menuName?: string;
};

export const Navbar = ({
  layout = 'sidebar',
  logo,
  brandName,
  links,
  actions,
  userAvatarUrl = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop',
  mobileNavLinks,
  children,
  menuName = 'Menu',
}: NavProps) => {
  const { toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 antialiased selection:bg-primary/20">
      {layout === 'topbar' && (
        <header className="sticky top-0 z-40 w-full border-b border-border bg-card/80 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <Branding logo={logo} name={brandName} />

            <nav className="hidden md:flex items-center gap-1">
              <NavLinks links={links} direction="horizontal" />
            </nav>

            <div className="flex items-center gap-3">
              <ThemeToggle onToggle={toggleTheme} />
              {actions && <div className="hidden md:flex items-center gap-2">{actions}</div>}
              <Avatar src={userAvatarUrl} />
            </div>
          </div>
        </header>
      )}

      {layout === 'sidebar' && (
        <>
          {/* Universal Mobile/Tablet Top Utility Header */}
          <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-border bg-card/80 px-4 backdrop-blur-md lg:hidden">
            <Branding logo={logo} name={brandName} isMobileHeader />

            <div className="flex items-center gap-2 ml-auto">
              <ThemeToggle onToggle={toggleTheme} />
              <Avatar src={userAvatarUrl} />
            </div>
          </header>

          {/* Desktop Left Fixed/Collapsible Panel */}
          <aside
            className={`
              hidden lg:fixed lg:inset-y-0 lg:left-0 lg:z-40 lg:flex lg:flex-col p-4 bg-background
              transition-all duration-300 ease-in-out
              ${isCollapsed ? 'lg:w-24' : 'lg:w-72'}
            `}
          >
            <div className="relative flex flex-col grow h-full rounded-2xl border border-border bg-card shadow-xs overflow-x-hidden">
              <button
                onClick={() => setIsCollapsed(!isCollapsed)}
                className="absolute top-5 -right-1 z-50 transform translate-x-1/2 p-1.5 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground shadow-xs transition-transform active:scale-90 cursor-pointer"
                aria-label={isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              >
                {isCollapsed ? <ChevronRight className="size-3.5" /> : <ChevronLeft className="size-3.5" />}
              </button>

              <div className="pt-6 pb-2 shrink-0">
                <Branding logo={logo} name={brandName} isCollapsed={isCollapsed} className="px-5" />
              </div>

              <nav className="mt-6 flex-1 px-3">
                <NavLinks links={links} direction="vertical" isCollapsed={isCollapsed} />
              </nav>

              {actions && !isCollapsed && (
                <div className="p-4 border-t border-border/60 flex flex-col gap-2 animate-in fade-in duration-200">
                  {actions}
                </div>
              )}
            </div>
          </aside>
        </>
      )}

      <main
        className={`
          transition-all duration-300 ease-in-out pb-24 md:pb-8
          ${layout === 'sidebar' ? (isCollapsed ? 'lg:pl-24' : 'lg:pl-72') : ''}
        `}
      >
        <div className="mx-auto max-w-7xl w-full px-4 sm:px-6 lg:px-8 py-6">{children}</div>
      </main>

      <div className="lg:hidden">
        {actions && (
          <div className="fixed bottom-20 right-4 z-40 flex flex-col items-center animate-in fade-in slide-in-from-bottom-4 duration-300">
            <div className="shadow-xl rounded-xl bg-primary text-primary-foreground [&_button]:bg-primary [&_button]:text-primary-foreground [&_button]:shadow-none [&_a]:bg-primary [&_a]:text-primary-foreground">
              {actions}
            </div>
          </div>
        )}

        <StandardizedBottomBar
          links={mobileNavLinks?.slice(0, 4) ?? links?.slice(0, 4)}
          onOpenMenu={() => setIsMenuOpen(true)}
          menuName={menuName}
        />

        <Modal open={isMenuOpen} onClose={() => setIsMenuOpen(false)}>
          <Modal.Header>{menuName}</Modal.Header>
          <Modal.Body>
            <div className="space-y-6">
              <nav>
                <p className="text-[10px] font-black tracking-widest text-muted-foreground uppercase mb-3 px-3">
                  Navigation
                </p>
                <NavLinks links={links} direction="vertical" onLinkClick={() => setIsMenuOpen(false)} />
              </nav>
            </div>
          </Modal.Body>

          {actions && (
            <Modal.Footer>
              <div className="w-full flex flex-col gap-2 pt-2">{actions}</div>
            </Modal.Footer>
          )}
        </Modal>
      </div>
    </div>
  );
};

const Branding = ({
  logo,
  name,
  className = '',
  isMobileHeader = false,
  isCollapsed = false,
}: {
  logo?: ReactNode;
  name?: string;
  className?: string;
  isMobileHeader?: boolean;
  isCollapsed?: boolean;
}) => {
  const renderLogo = () => {
    if (!logo) return null;
    if (typeof logo === 'string')
      return <img src={logo} alt="Logo" className="h-8 w-8 rounded-xl object-cover shrink-0" />;
    return (
      <div className="h-8 w-8 rounded-xl border border-border/60 bg-muted/30 flex items-center justify-center text-sm font-black text-primary overflow-hidden shrink-0">
        {logo}
      </div>
    );
  };
  return (
    <div
      className={`flex items-center gap-3 h-9 transition-all duration-300 ${className} ${isMobileHeader ? 'lg:hidden' : ''} ${isCollapsed ? 'justify-center' : 'justify-start'}`}
    >
      {renderLogo()}
      {name && (
        <span
          className={`text-base font-black tracking-tight text-foreground uppercase italic select-none truncate transition-all duration-200 origin-left ${isCollapsed ? 'w-0 opacity-0 pointer-events-none ml-0' : 'w-auto opacity-100'}`}
        >
          {name}
        </span>
      )}
    </div>
  );
};

const Avatar = ({ src }: { src: string }) => (
  <div className="relative shrink-0 cursor-pointer group active:scale-95 transition-transform">
    <img src={src} alt="User Profile" className="h-8 w-8 rounded-full ring-2 ring-border object-cover" />
    <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-emerald-500 ring-2 ring-card" />
  </div>
);

const NavLinks = ({
  links,
  direction,
  onLinkClick,
  isCollapsed = false,
}: {
  links?: NavLink[];
  direction: 'vertical' | 'horizontal';
  onLinkClick?: () => void;
  isCollapsed?: boolean;
}) => (
  <ul className={`flex ${direction === 'vertical' ? 'flex-col gap-1' : 'flex-row gap-1'}`}>
    {links?.map((l) => (
      <li key={l.label}>
        <RouterLink
          to={l.to}
          onClick={onLinkClick}
          title={isCollapsed ? l.label : undefined}
          className={({ isActive }) =>
            `group flex items-center px-3.5 py-2.5 text-sm font-semibold transition-all rounded-xl focus-visible:outline-2 focus-visible:outline-primary ${direction === 'vertical' ? 'w-full' : ''} ${isCollapsed ? 'justify-center gap-0 px-2' : 'gap-3'} ${isActive ? 'bg-primary text-primary-foreground shadow-sm' : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'}`
          }
        >
          {l.icon && <span className="size-5 shrink-0 transition-transform group-hover:scale-105">{l.icon}</span>}
          <span
            className={`truncate transition-all duration-200 origin-left ${isCollapsed ? 'w-0 opacity-0 ml-0 overflow-hidden pointer-events-none' : 'w-auto opacity-100'}`}
          >
            {l.label}
          </span>
        </RouterLink>
      </li>
    ))}
  </ul>
);

const StandardizedBottomBar = ({
  links,
  onOpenMenu,
  menuName,
}: {
  links?: NavLink[];
  onOpenMenu: () => void;
  menuName: string;
}) => (
  <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 pb-safe border-t border-border bg-card/80 backdrop-blur-xl flex items-center justify-around">
    {links?.map((link) => (
      <RouterLink
        key={link.to}
        to={link.to}
        className={({ isActive }) =>
          `flex flex-col items-center gap-1 transition-all duration-200 min-w-16 py-1 rounded-xl focus-visible:outline-2 focus-visible:outline-primary ${isActive ? 'text-primary scale-105 font-bold' : 'text-muted-foreground hover:text-foreground'}`
        }
      >
        {link.icon && <span className="size-5">{link.icon}</span>}
        <span className="text-[10px] tracking-tight font-medium">{link.label}</span>
      </RouterLink>
    ))}
    <button
      onClick={onOpenMenu}
      className="flex flex-col items-center gap-1 text-muted-foreground min-w-16 cursor-pointer hover:text-foreground transition-colors py-1 focus-visible:outline-2 focus-visible:outline-primary"
    >
      <Menu className="size-5" />
      <span className="text-[10px] tracking-tight font-medium">{menuName}</span>
    </button>
  </nav>
);

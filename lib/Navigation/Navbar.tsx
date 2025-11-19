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
    <header className="sticky top-0 z-40 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo and title */}
          <div className="flex items-center gap-3 text-gray-900 dark:text-gray-100">
            {brandName ||
              (logoURl && (
                <a href="/" className="flex items-center gap-2">
                  {logoURl && <img src={logoURl} alt="Logo" className="h-8 w-8 rounded" aria-hidden="true" />}
                  {brandName && <span className="font-semibold text-gray-900 dark:text-gray-100">{brandName}</span>}
                </a>
              ))}

            <button
              className="md:hidden inline-flex items-center justify-center rounded p-2 hover:bg-gray-100 dark:hover:bg-gray-800 focus-ring"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((o) => !o)}
            >
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                {mobileOpen ? (
                  <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeWidth="2" strokeLinecap="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Links */}
          {links && (
            <nav className="hidden md:block" aria-label="Default Navigation">
              <NavLinks links={links} />
            </nav>
          )}

          {/* Actions rights */}
          <div className="hidden md:flex items-center gap-3">
            <button aria-label="Toggle dark mode" onClick={toggleTheme}>
              <svg
                className="size-4 dark:hidden"
                id="moon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>
              </svg>
              <svg
                className="size-4 hidden dark:block fill-white"
                id="sun"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>
              </svg>
            </button>
            {actions}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden pb-3">
            {links && (
              <div className="pt-2">
                <NavLinks links={links} />
              </div>
            )}
            {actions && <div className="flex items-center gap-3">{actions}</div>}
          </div>
        )}
      </div>
    </header>
  );
};

function NavLinks({ links }: { links?: NavProps['links'] } = {}) {
  return (
    <ul className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
      {links?.map((l) => (
        <li key={l.label}>
          <div className="text-gray-700 hover:text-accent dark:text-gray-200 transition-colors"> {l.element} </div>
        </li>
      ))}
    </ul>
  );
}

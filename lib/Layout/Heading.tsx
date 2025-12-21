import type { ReactNode, AnchorHTMLAttributes } from 'react';

type variant = 'page' | 'card';
type meta = { key: string; value: string; svg?: ReactNode };
type filters = { key: string; value: string; active?: boolean; props: AnchorHTMLAttributes<HTMLAnchorElement> };

export type HeadingProps = {
  title?: string;
  children?: ReactNode;
  variant?: variant;
  meta?: meta[];
  filters?: filters[];
};

export const Heading = ({ title, variant = 'page', meta, filters, children }: HeadingProps) => {
  const isCard = variant === 'card';

  const containerClasses = isCard
    ? 'border-b border-border dark:border-border-dark py-3 px-0'
    : 'py-6 bg-surface-base dark:bg-surface-base-dark';

  const innerClasses = isCard ? 'w-full px-4 sm:px-6 lg:px-8' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8';

  return (
    <div className={`${containerClasses} transition-colors duration-200`}>
      <div className={innerClasses}>
        <div className="md:flex md:items-center md:justify-between gap-4">
          <div className="min-w-0 flex-1">
            <div className="flex items-baseline gap-4 flex-wrap">
              <h2
                className={`
                font-bold tracking-tight text-text-primary dark:text-text-primary-dark
                ${isCard ? 'text-xl' : 'text-2xl sm:text-3xl'}
              `}
              >
                {title}
              </h2>

              {filters && (
                <nav
                  className="flex items-center gap-4 text-sm border-l border-border dark:border-border-dark pl-4 ml-2"
                  aria-label="Filters"
                >
                  {filters.map((f) => (
                    <a
                      key={f.key}
                      {...f.props}
                      className={`
                        transition-colors font-medium
                        ${
                          f.active
                            ? 'text-primary dark:text-primary-dark underline underline-offset-8 decoration-2'
                            : 'text-text-secondary hover:text-primary dark:hover:text-primary-dark'
                        }
                      `}
                    >
                      {f.value}
                    </a>
                  ))}
                </nav>
              )}
            </div>

            {meta && (
              <div className="mt-2 flex flex-col sm:flex-row sm:flex-wrap sm:gap-x-6 gap-y-2">
                {meta.map((m) => (
                  <div
                    key={m.key}
                    className="flex items-center text-sm text-text-secondary dark:text-text-secondary-dark"
                  >
                    {m.svg && <span className="shrink-0 mr-1.5 text-text-secondary/70">{m.svg}</span>}
                    <span>{m.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mt-4 flex md:ml-4 md:mt-0 gap-3 items-center">{children}</div>
        </div>
      </div>
    </div>
  );
};

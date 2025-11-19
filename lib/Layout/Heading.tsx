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
  const additionalClasses = variant === 'card' ? 'border-b border-gray-300 dark:border-gray-600' : '';
  return (
    <div className={`py-4 text-gray-900 dark:text-gray-100 ${additionalClasses}`}>
      <div className="text-2xl font-bold mb-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:justify-between md:items-center md:flex">
          <div className="min-w-0">
            <div className="flex gap-6 flex-wrap sm:flex-nowrap">
              <h2 className="text-2xl font-bold text-black dark:text-white sm:truncate sm:text-3xl sm:tracking-wide">
                {title}
              </h2>
              {filters && (
                <div className="flex gap-2 text-sm sm:w-auto sm:border-l items-center sm:border-gray-300 sm:pl-6">
                  {filters.map((f) => (
                    <a
                      {...f.props}
                      key={f.key}
                      className={`cursor-pointer ${f.active ? 'text-accent' : 'hover:text-accent'}`}
                    >
                      {f.value}
                    </a>
                  ))}
                </div>
              )}
            </div>
            {meta && (
              <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                {meta.map((m) => (
                  <div key={m.key} className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-400">
                    {m.svg && <span className="flex-shrink-0 mr-1.5">{m.svg}</span>}
                    <span>{m.value}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">{children}</div>
        </div>
      </div>
    </div>
  );
};

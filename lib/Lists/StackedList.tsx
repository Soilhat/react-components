import type { ReactNode } from 'react';
import React from 'react';
import { PlusIcon } from '@heroicons/react/24/outline';

interface StackedListProps {
  children?: ReactNode;
  onEmptyClick?: () => void;
  emptyMessage?: string;
  gridCols?: string;
}

export const StackedList = ({
  children,
  onEmptyClick,
  emptyMessage = 'Add a new item',
  gridCols,
}: StackedListProps) => {
  if (!children || React.Children.count(children) === 0) {
    return (
      <div className="px-4 py-12">
        <div className="mx-auto max-w-lg">
          <button
            type="button"
            onClick={onEmptyClick}
            className={`
              relative block w-full rounded-xl p-12 text-center transition-all duration-200
              border-2 border-dashed border-border dark:border-border-dark
              hover:border-primary dark:hover:border-primary-dark
              hover:bg-surface-panel/50 dark:hover:bg-surface-panel-dark/50
              focus:outline-none focus:ring-2 focus:ring-state-focus focus:ring-offset-2
              group
            `}
          >
            <PlusIcon className="mx-auto h-12 w-12 text-text-secondary group-hover:text-primary dark:group-hover:text-primary-dark transition-colors" />
            <span className="mt-4 block text-sm font-semibold text-text-primary dark:text-text-primary-dark">
              {emptyMessage}
            </span>
          </button>
        </div>
      </div>
    );
  }

  const childArray = React.Children.toArray(children);

  return (
    /* Grille responsive utilisant tes variables d'espacement et de breakpoints */
    <ul
      className={`
      list-none gap-6 grid 
      ${gridCols || 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5'}
    `}
    >
      {childArray.map((child, index) => (
        <li key={(child as React.ReactElement)?.key || index} className="flex flex-col h-full">
          {child}
        </li>
      ))}
    </ul>
  );
};

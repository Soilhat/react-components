import type { ReactNode } from 'react';
import React from 'react';

export const StackedList = ({
  children,
  onEmptyClick,
  emptyMessage,
}: {
  children?: ReactNode;
  onEmptyClick?: () => void;
  emptyMessage?: string;
}) => {
  if (!children) {
    return (
      <div className="px-4 py-12 ">
        <div className="mx-auto max-w-lg">
          <button
            onClick={onEmptyClick}
            className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 dark:text-white p-12 text-center cursor-pointer"
          >
            {emptyMessage ?? 'Add an item'}
          </button>
        </div>
      </div>
    );
  }
  const childArray = React.Children.toArray(children);
  return (
    <ul className="list-none grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6">
      {childArray.map((child) => (
        <li key={(child as React.ReactElement)?.key ?? undefined} className={`py-4`}>
          {child}
        </li>
      ))}
    </ul>
  );
};

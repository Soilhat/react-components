import React from 'react';

interface GridListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  emptyState?: React.ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4 | 5 | 6;
  gap?: 'sm' | 'md' | 'lg' | 'xl';
}

const gapClasses = {
  sm: 'gap-3',
  md: 'gap-4 sm:gap-5',
  lg: 'gap-6 sm:gap-8',
  xl: 'gap-8 sm:gap-12',
};

const columnClasses = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4',
  5: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5',
  6: 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6',
};

export function GridList<T>({
  items,
  renderItem,
  emptyState,
  className = '',
  columns = 3,
  gap = 'md',
}: Readonly<GridListProps<T>>) {
  const hasItems = items && items.length > 0;

  if (!hasItems) {
    return (
      emptyState ?? (
        <div className="flex flex-col items-center justify-center p-12 text-center rounded-2xl border-2 border-dashed border-border/60 bg-muted/5">
          <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
            No entries to display
          </span>
        </div>
      )
    );
  }

  return (
    <div
      className={`
                grid w-full auto-rows-fr transition-all duration-300
                ${columnClasses[columns]}
                ${gapClasses[gap]}
                ${className}
            `}
    >
      {items.map((item, index) => {
        const hasId = typeof item === 'object' && item !== null && 'id' in item;
        const itemKey = hasId ? String((item as { id: unknown }).id) : index;

        return (
          <div
            key={itemKey}
            className="group/grid-item relative flex flex-col focus-within:ring-2 focus-within:ring-primary/40 rounded-xl transition-transform duration-200"
          >
            {renderItem(item, index)}
          </div>
        );
      })}
    </div>
  );
}

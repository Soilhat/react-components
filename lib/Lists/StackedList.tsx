import React from 'react';

interface StackedListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  emptyState?: React.ReactNode;
  className?: string;
  headerActions?: React.ReactNode;
  title?: string;
}

export function StackedList<T>({
  items,
  renderItem,
  emptyState,
  className = '',
  headerActions,
  title,
}: Readonly<StackedListProps<T>>) {
  const hasItems = items && items.length > 0;

  return (
    <div className={`w-full rounded-2xl border border-border bg-card shadow-xs overflow-hidden ${className}`}>
      {(title || headerActions) && (
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/10">
          {title && <h4 className="text-sm font-bold text-foreground tracking-tight">{title}</h4>}
          {headerActions && <div className="flex items-center gap-2">{headerActions}</div>}
        </div>
      )}

      {hasItems ? (
        <ul className="divide-y divide-border/60">
          {items.map((item, index) => {
            const hasId = typeof item === 'object' && item !== null && 'id' in item;
            const itemKey = hasId ? String((item as { id: unknown }).id) : index;

            return (
              <li
                key={itemKey}
                className="px-5 py-3.5 hover:bg-muted/30 transition-colors duration-150 flex items-center justify-between gap-4"
              >
                {renderItem(item, index)}
              </li>
            );
          })}
        </ul>
      ) : (
        (emptyState ?? (
          <div className="flex flex-col items-center justify-center p-8 text-center text-muted-foreground">
            <span className="text-xs font-semibold uppercase tracking-wider opacity-60">No items found</span>
          </div>
        ))
      )}
    </div>
  );
}

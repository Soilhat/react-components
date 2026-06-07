import React, { useState } from 'react';
import { SwipeableRow } from '../Lists/SwipeableRow';

export interface TreeItem {
  id: string;
  parent_id?: string | null;
  [key: string]: unknown;
}

interface SwipeAction<T extends TreeItem = TreeItem> {
  icon: React.ReactNode;
  label: string;
  color?: string;
  onClick: (item: T) => void;
}

interface CategoryTreeProps<T extends TreeItem> {
  items: T[];
  parentId?: string | null;
  level?: number;
  renderItem: (
    item: T,
    level: number,
    state: { isExpanded: boolean; toggle: () => void; hasChildren: boolean }
  ) => React.ReactNode;
  leftSwipeActions?: SwipeAction<T>[];
  rightSwipeActions?: SwipeAction<T>[];
}

export function CategoryTree<T extends TreeItem>({
  items,
  parentId = null,
  level = 0,
  renderItem,
  leftSwipeActions = [],
  rightSwipeActions = [],
}: Readonly<CategoryTreeProps<T>>) {
  const [collapsedIds, setCollapsedIds] = useState<Set<string>>(new Set());

  const toggle = (id: string) => {
    setCollapsedIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const children = items.filter((item) => item.parent_id === parentId);
  if (children.length === 0) return null;

  return (
    <div
      className={`
        ${
          level > 0
            ? 'ml-2.5 pl-3 border-l border-border/60 sm:ml-6 sm:pl-4 transition-all'
            : 'space-y-1.5 sm:space-y-2'
        }
      `}
    >
      {children.map((item) => {
        const hasChildren = items.some((child) => child.parent_id === item.id);
        const isExpanded = !collapsedIds.has(item.id);

        const renderedRow = (
          <div className="w-full min-h-11 sm:min-h-12 flex items-center">
            {renderItem(item, level, {
              isExpanded,
              toggle: () => toggle(item.id),
              hasChildren,
            })}
          </div>
        );

        return (
          <React.Fragment key={item.id}>
            {leftSwipeActions.length > 0 || rightSwipeActions.length > 0 ? (
              <SwipeableRow
                leftActions={leftSwipeActions.map((action) => ({
                  ...action,
                  onClick: () => action.onClick(item),
                }))}
                rightActions={rightSwipeActions.map((action) => ({
                  ...action,
                  onClick: () => action.onClick(item),
                }))}
              >
                {renderedRow}
              </SwipeableRow>
            ) : (
              renderedRow
            )}

            {isExpanded && (
              <CategoryTree
                items={items}
                parentId={item.id}
                level={level + 1}
                renderItem={renderItem}
                leftSwipeActions={leftSwipeActions}
                rightSwipeActions={rightSwipeActions}
              />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

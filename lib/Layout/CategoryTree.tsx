import React, { useState } from 'react';

interface TreeItem {
  id: string;
  parent_id?: string | null;
  [key: string]: unknown;
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
}

export function CategoryTree<T extends TreeItem>({
  items,
  parentId = null,
  level = 0,
  renderItem,
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
    <div className={level > 0 ? 'ml-6 border-l border-border dark:border-border-dark pl-4' : 'space-y-2'}>
      {children.map((item) => {
        const hasChildren = items.some((child) => child.parent_id === item.id);
        const isExpanded = !collapsedIds.has(item.id);

        return (
          <React.Fragment key={item.id}>
            {renderItem(item, level, {
              isExpanded,
              toggle: () => toggle(item.id),
              hasChildren,
            })}

            {isExpanded && <CategoryTree items={items} parentId={item.id} level={level + 1} renderItem={renderItem} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

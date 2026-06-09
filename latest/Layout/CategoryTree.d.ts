import { default as React } from '../../node_modules/react';
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
    renderItem: (item: T, level: number, state: {
        isExpanded: boolean;
        toggle: () => void;
        hasChildren: boolean;
    }) => React.ReactNode;
    leftSwipeActions?: SwipeAction<T>[];
    rightSwipeActions?: SwipeAction<T>[];
}
export declare function CategoryTree<T extends TreeItem>({ items, parentId, level, renderItem, leftSwipeActions, rightSwipeActions, }: Readonly<CategoryTreeProps<T>>): React.JSX.Element | null;
export {};

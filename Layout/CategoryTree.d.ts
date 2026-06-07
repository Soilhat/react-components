import { default as React } from '../../node_modules/react';
interface TreeItem {
    id: string;
    parent_id?: string | null;
    [key: string]: unknown;
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
}
export declare function CategoryTree<T extends TreeItem>({ items, parentId, level, renderItem, }: Readonly<CategoryTreeProps<T>>): import("react/jsx-runtime").JSX.Element | null;
export {};

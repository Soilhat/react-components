import { default as React } from '../../node_modules/react';
interface StackedListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    emptyState?: React.ReactNode;
    className?: string;
    headerActions?: React.ReactNode;
    title?: string;
}
export declare function StackedList<T>({ items, renderItem, emptyState, className, headerActions, title, }: Readonly<StackedListProps<T>>): import("react/jsx-runtime").JSX.Element;
export {};

import { default as React } from '../../node_modules/react';
interface GridListProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    emptyState?: React.ReactNode;
    className?: string;
    columns?: 1 | 2 | 3 | 4 | 5 | 6;
    gap?: 'sm' | 'md' | 'lg' | 'xl';
}
export declare function GridList<T>({ items, renderItem, emptyState, className, columns, gap, }: Readonly<GridListProps<T>>): string | number | bigint | boolean | Iterable<React.ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | React.ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | null | undefined> | React.JSX.Element;
export {};

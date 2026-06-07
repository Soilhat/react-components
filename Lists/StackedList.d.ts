import { ReactNode } from '../../node_modules/react';
interface StackedListProps {
    children?: ReactNode;
    onEmptyClick?: () => void;
    emptyMessage?: string;
    gridCols?: string;
}
export declare const StackedList: ({ children, onEmptyClick, emptyMessage, gridCols, }: StackedListProps) => import("react/jsx-runtime").JSX.Element;
export {};

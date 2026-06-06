import { default as React, ReactNode } from '../../node_modules/react';
interface SwipeAction {
    icon: ReactNode;
    label: string;
    color?: string;
    onClick: () => void;
}
interface SwipeableRowProps {
    children: ReactNode;
    leftActions?: SwipeAction[];
    rightActions?: SwipeAction[];
    threshold?: number;
}
export declare const SwipeableRow: React.FC<SwipeableRowProps>;
export default SwipeableRow;

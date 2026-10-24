import { default as React } from '../../node_modules/react';
export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'danger' | 'warning' | 'success';
export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: BadgeVariant;
    icon?: React.ReactNode;
    children: React.ReactNode;
}
export declare const Badge: React.FC<BadgeProps>;

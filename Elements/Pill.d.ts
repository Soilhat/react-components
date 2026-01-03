import { default as React } from '../../node_modules/react';
export type PillVariant = 'primary' | 'success' | 'danger' | 'warning' | 'ghost';
interface PillProps {
    label: string;
    active?: boolean;
    onClick?: () => void;
    icon?: React.ReactNode;
    variant?: PillVariant;
    className?: string;
    disabled?: boolean;
}
export declare const Pill: ({ label, active, onClick, icon, variant, className, disabled, }: PillProps) => import("react/jsx-runtime").JSX.Element;
export {};

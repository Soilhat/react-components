interface ProgressProps {
    value: number;
    max?: number;
    label?: string;
    showValue?: boolean;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    variant?: 'primary' | 'success' | 'info';
}
export declare const Progress: ({ value, max, label, showValue, size, className, variant, }: ProgressProps) => import("react/jsx-runtime").JSX.Element;
export {};

import { default as React } from '../../node_modules/react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    children: React.ReactNode;
    isLoading?: boolean;
}
export declare const Button: ({ variant, children, className, isLoading, ...props }: ButtonProps) => React.JSX.Element;
export {};

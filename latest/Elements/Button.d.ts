import { default as React } from '../../node_modules/react';
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
    children: React.ReactNode;
}
export declare const Button: ({ variant, children, className, ...props }: ButtonProps) => React.JSX.Element;
export {};

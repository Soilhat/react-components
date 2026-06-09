import { default as React } from '../../node_modules/react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
}
export declare const Input: ({ label, className, ...props }: InputProps) => React.JSX.Element;
export {};

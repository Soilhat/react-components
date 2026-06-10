import { default as React } from '../../node_modules/react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    leadingIcon?: React.ReactNode;
    trailingIcon?: React.ReactNode;
    onTrailingIconClick?: () => void;
}
export declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export {};

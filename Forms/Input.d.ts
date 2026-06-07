import { InputHTMLAttributes, ReactNode } from '../../node_modules/react';
type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'outline' | 'soft' | 'underline';
export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
    label?: string;
    hint?: string;
    error?: string;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    size?: InputSize;
    variant?: InputVariant;
    fullWidth?: boolean;
    containerClassName?: string;
}
export declare const Input: import('../../node_modules/react').ForwardRefExoticComponent<InputProps & import('../../node_modules/react').RefAttributes<HTMLInputElement>>;
export default Input;

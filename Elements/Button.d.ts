import { ButtonHTMLAttributes, ReactNode } from '../../node_modules/react';
import { ColorName } from '../utils/types';
type ButtonVariant = 'default' | 'border' | 'ghost';
type Size = 'small' | 'medium' | 'large';
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    variant?: ButtonVariant;
    color_name?: ColorName;
    size?: Size;
    isLoading?: boolean;
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
}
export declare const Button: import('../../node_modules/react').ForwardRefExoticComponent<ButtonProps & import('../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Button;

import { ButtonHTMLAttributes } from '../../node_modules/react';
type ButtonVariant = 'default' | 'border';
type ColorName = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
type Size = 'small' | 'medium' | 'large';
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    variant?: ButtonVariant;
    color_name?: ColorName;
    size?: Size;
}
export declare const Button: import('../../node_modules/react').ForwardRefExoticComponent<ButtonProps & import('../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Button;

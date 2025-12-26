import { ButtonHTMLAttributes } from '../../node_modules/react';
import { ColorName } from '../utils/types';
type ButtonVariant = 'default' | 'border';
type Size = 'small' | 'medium' | 'large';
export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
    variant?: ButtonVariant;
    color_name?: ColorName;
    size?: Size;
}
export declare const Button: import('../../node_modules/react').ForwardRefExoticComponent<ButtonProps & import('../../node_modules/react').RefAttributes<HTMLButtonElement>>;
export default Button;

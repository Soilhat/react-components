import { InputHTMLAttributes, ReactNode } from '../../node_modules/react';
export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'title'> {
    label?: ReactNode;
    description?: ReactNode;
    containerClassName?: string;
    indeterminate?: boolean;
}
export declare const Checkbox: import('../../node_modules/react').ForwardRefExoticComponent<CheckboxProps & import('../../node_modules/react').RefAttributes<HTMLInputElement>>;

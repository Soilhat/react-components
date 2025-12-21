import { ReactNode } from '../../node_modules/react';
export interface DropdownItem {
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
    isDanger?: boolean;
    disabled?: boolean;
}
export interface DropdownSection {
    items: DropdownItem[];
}
interface DropdownProps {
    label: string;
    sections: DropdownSection[];
    buttonVariant?: 'primary' | 'secondary' | 'light';
}
export declare function Dropdown({ label, sections, buttonVariant }: DropdownProps): import("react/jsx-runtime").JSX.Element;
export {};

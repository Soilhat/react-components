import { ReactNode } from '../../node_modules/react';
export interface DropdownItem {
    id?: string;
    label: string;
    icon?: ReactNode;
    onClick?: () => void;
    isDanger?: boolean;
    disabled?: boolean;
}
export interface DropdownSection {
    id?: string;
    items: DropdownItem[];
}
interface DropdownProps {
    label: string;
    sections: DropdownSection[];
    buttonVariant?: 'primary' | 'secondary' | 'light';
}
export declare function Dropdown({ label, sections, buttonVariant }: Readonly<DropdownProps>): import("react/jsx-runtime").JSX.Element;
export {};

import { ReactNode } from '../../node_modules/react';
export type NavLink = {
    label: string;
    to: string;
    icon?: ReactNode;
};
type NavProps = {
    layout?: 'sidebar' | 'topbar';
    logoURl?: string;
    brandName?: string;
    links?: NavLink[];
    actions?: ReactNode;
    mobileNavLinks?: NavLink[];
    children?: ReactNode;
};
export declare const Navbar: ({ layout, logoURl, brandName, links, actions, mobileNavLinks, children, }: NavProps) => import("react/jsx-runtime").JSX.Element;
export {};

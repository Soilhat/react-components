import { ReactNode } from '../../node_modules/react';
export type NavLink = {
    label: string;
    to: string;
    icon?: ReactNode;
};
type NavProps = {
    layout?: 'sidebar' | 'topbar';
    logo?: ReactNode;
    brandName?: string;
    links?: NavLink[];
    actions?: ReactNode;
    userAvatarUrl?: string;
    mobileNavLinks?: NavLink[];
    children?: ReactNode;
    menuName?: string;
};
export declare const Navbar: ({ layout, logo, brandName, links, actions, userAvatarUrl, mobileNavLinks, children, menuName, }: NavProps) => import("react/jsx-runtime").JSX.Element;
export {};

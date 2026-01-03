import { ReactNode } from '../../node_modules/react';
export type NavLink = {
    label: string;
    element: ReactNode;
    icon?: ReactNode;
};
type NavProps = {
    layout?: 'sidebar' | 'topbar';
    logoURl?: string;
    brandName?: string;
    links?: NavLink[];
    actions?: ReactNode;
    mobileNav?: ReactNode;
    children?: ReactNode;
};
export declare const Navbar: ({ layout, logoURl, brandName, links, actions, mobileNav, children }: NavProps) => import("react/jsx-runtime").JSX.Element;
export {};

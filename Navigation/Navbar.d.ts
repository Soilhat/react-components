import { ReactNode } from '../../node_modules/react';
type NavProps = {
    logoURl?: string;
    brandName?: string;
    links?: {
        label: string;
        element: ReactNode;
    }[];
    actions?: ReactNode;
};
export declare const Navbar: ({ logoURl, brandName, links, actions }: NavProps) => import("react/jsx-runtime").JSX.Element;
export {};

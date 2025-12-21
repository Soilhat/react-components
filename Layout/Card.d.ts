import { default as React, ReactNode } from '../../node_modules/react';
import { HeadingProps } from './Heading';
interface CardSubComponents {
    Header: typeof Header;
    Body: typeof Body;
    Footer: typeof Footer;
}
export declare const Card: React.FC<React.HTMLAttributes<HTMLElement>> & CardSubComponents;
declare const Header: React.FC<HeadingProps>;
declare const Body: {
    ({ children, className }: {
        children: ReactNode;
        className?: string;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const Footer: {
    ({ children, className }: {
        children: ReactNode;
        className?: string;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Card;

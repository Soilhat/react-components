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
    ({ children }: {
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
declare const Footer: {
    ({ children }: {
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export default Card;

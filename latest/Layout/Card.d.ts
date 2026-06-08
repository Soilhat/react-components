import { default as React } from '../../node_modules/react';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
}
export declare const Card: {
    ({ children, className, ...props }: CardProps): import("react/jsx-runtime").JSX.Element;
    Header({ children, className }: {
        children: React.ReactNode;
        className?: string;
    }): import("react/jsx-runtime").JSX.Element;
    Title({ children, className }: {
        children: React.ReactNode;
        className?: string;
    }): import("react/jsx-runtime").JSX.Element;
    Description({ children, className }: {
        children: React.ReactNode;
        className?: string;
    }): import("react/jsx-runtime").JSX.Element;
    Body({ children, className }: {
        children: React.ReactNode;
        className?: string;
    }): import("react/jsx-runtime").JSX.Element;
    Footer({ children, className }: {
        children: React.ReactNode;
        className?: string;
    }): import("react/jsx-runtime").JSX.Element;
};
export default Card;

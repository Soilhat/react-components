import { default as React } from '../../node_modules/react';
type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'small' | 'detail';
interface TextProps<T extends React.ElementType> {
    as?: T;
    variant?: TextVariant;
    bold?: boolean;
    className?: string;
    children: React.ReactNode;
}
export declare const Text: <T extends React.ElementType = "p">({ as, variant, bold, className, children, ...props }: TextProps<T> & React.ComponentPropsWithoutRef<T>) => import("react/jsx-runtime").JSX.Element;
export {};

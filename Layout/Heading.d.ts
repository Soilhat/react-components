import { ReactNode, AnchorHTMLAttributes } from '../../node_modules/react';
type variant = 'page' | 'card';
type meta = {
    key: string;
    value: string;
    svg?: ReactNode;
};
type filters = {
    key: string;
    value: string;
    active?: boolean;
    props: AnchorHTMLAttributes<HTMLAnchorElement>;
};
export type HeadingProps = {
    title?: string;
    children?: ReactNode;
    variant?: variant;
    meta?: meta[];
    filters?: filters[];
};
export declare const Heading: ({ title, variant, meta, filters, children }: HeadingProps) => import("react/jsx-runtime").JSX.Element;
export {};

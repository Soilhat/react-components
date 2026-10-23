import { default as React, ReactNode } from '../../node_modules/react';
interface SubComponentProps {
    children: ReactNode;
}
interface StickyActionProps {
    sticky?: boolean;
}
interface AsideProps {
    open?: boolean;
    children?: ReactNode;
    onClose?: () => void;
    position?: 'right' | 'left';
    stickyHeader?: boolean;
    stickyFooter?: boolean;
}
interface AsideComponent extends React.FC<AsideProps> {
    Header: React.FC<SubComponentProps & StickyActionProps>;
    Body: React.FC<SubComponentProps>;
    Footer: React.FC<SubComponentProps & StickyActionProps>;
}
export declare const Aside: AsideComponent;
export {};

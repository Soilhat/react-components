import { default as React, ReactNode } from '../../node_modules/react';
interface SubComponentProps {
    children: ReactNode;
}
interface ModalProps {
    open?: boolean;
    children?: ReactNode;
    onClose?: () => void;
    stickyHeader?: boolean;
    stickyFooter?: boolean;
}
interface ModalComponent extends React.FC<ModalProps> {
    Header: React.FC<SubComponentProps>;
    Body: React.FC<SubComponentProps>;
    Footer: React.FC<SubComponentProps>;
}
export declare const Modal: ModalComponent;
export {};

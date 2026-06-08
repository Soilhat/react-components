import { default as React, ReactNode } from '../../node_modules/react';
interface SubComponentProps {
    children: ReactNode;
}
interface StickyActionProps {
    sticky?: boolean;
}
interface ModalProps {
    open?: boolean;
    children?: ReactNode;
    onClose?: () => void;
    stickyHeader?: boolean;
    stickyFooter?: boolean;
}
interface ModalComponent extends React.FC<ModalProps> {
    Header: React.FC<SubComponentProps & StickyActionProps>;
    Body: React.FC<SubComponentProps>;
    Footer: React.FC<SubComponentProps & StickyActionProps>;
}
export declare const Modal: ModalComponent;
export {};

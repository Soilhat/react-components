import { default as React, ReactNode } from '../../node_modules/react';
interface ModalProps {
    open?: boolean;
    children?: ReactNode;
    onClose?: () => void;
}
interface ModalSubComponents {
    Footer: typeof Footer;
    Body: typeof Body;
}
export declare const Modal: React.FC<ModalProps> & ModalSubComponents;
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
export {};

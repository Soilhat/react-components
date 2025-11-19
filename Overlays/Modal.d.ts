import { ReactNode } from '../../node_modules/react';
interface ModalProps {
    open?: boolean;
    children?: ReactNode;
    onClose?: () => void;
}
interface ModalSubComponents {
    Footer: typeof Footer;
}
export declare const Modal: React.FC<ModalProps> & ModalSubComponents;
declare const Footer: {
    ({ children }: {
        children: ReactNode;
    }): import("react/jsx-runtime").JSX.Element;
    displayName: string;
};
export {};

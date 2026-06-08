import { default as React } from '../../node_modules/react';
export type ToastType = 'success' | 'error' | 'info';
export interface ToastProps {
    message: React.ReactNode;
    type?: ToastType;
    onClose: () => void;
}
export declare function Toast({ message, type, onClose }: Readonly<ToastProps>): import("react/jsx-runtime").JSX.Element;

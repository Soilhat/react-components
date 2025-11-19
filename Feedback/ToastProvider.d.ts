import { default as React } from '../../node_modules/react';
import { ToastType } from './Toast';
export interface ShowOptions {
    type?: ToastType;
    duration?: number;
}
export declare function ToastProvider({ children }: Readonly<{
    children: React.ReactNode;
}>): import("react/jsx-runtime").JSX.Element;

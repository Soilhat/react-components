import { default as React } from '../../node_modules/react';
import { ToastType } from './Toast';
export interface ShowOptions {
    type?: ToastType;
    duration?: number;
}
export interface ToastContextValue {
    showToast: (message: React.ReactNode, options?: ShowOptions) => string;
    dismiss: (id?: string) => void;
}
export declare const ToastContext: React.Context<ToastContextValue | undefined>;
export declare function useToastContext(): ToastContextValue;

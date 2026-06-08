import { ShowOptions } from './ToastProvider';
export interface UseToastResult {
    showToast: (message: React.ReactNode, options?: ShowOptions) => void;
    dismiss: () => void;
    success: (message: React.ReactNode, duration?: number) => void;
    error: (message: React.ReactNode, duration?: number) => void;
    info: (message: React.ReactNode, duration?: number) => void;
}
export declare function useToast(): UseToastResult;

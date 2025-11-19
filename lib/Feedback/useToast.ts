import { type ShowOptions } from './ToastProvider';
import { useToastContext } from './useToastContext';

export interface UseToastResult {
  showToast: (message: React.ReactNode, options?: ShowOptions) => void;
  dismiss: () => void;
  success: (message: React.ReactNode, duration?: number) => void;
  error: (message: React.ReactNode, duration?: number) => void;
  info: (message: React.ReactNode, duration?: number) => void;
}

export function useToast(): UseToastResult {
  const { showToast, dismiss } = useToastContext();

  return {
    showToast,
    dismiss,
    success: (message: React.ReactNode, duration = 3000) => showToast(message, { type: 'success', duration }),
    error: (message: React.ReactNode, duration = 3500) => showToast(message, { type: 'error', duration }),
    info: (message: React.ReactNode, duration = 3000) => showToast(message, { type: 'info', duration }),
  };
}

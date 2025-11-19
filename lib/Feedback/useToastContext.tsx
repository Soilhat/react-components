import React, { createContext, useContext } from 'react';
import { type ToastType } from './Toast';

export interface ShowOptions {
  type?: ToastType;
  duration?: number; // in ms
}

export interface ToastContextValue {
  showToast: (message: React.ReactNode, options?: ShowOptions) => string;
  dismiss: (id?: string) => void;
}

export const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function useToastContext(): ToastContextValue {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToastContext must be used within a ToastProvider');
  return ctx;
}

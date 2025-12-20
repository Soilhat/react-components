import React from 'react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  message: React.ReactNode;
  type?: ToastType;
  onClose: () => void;
}

const typeStyles: Record<ToastType, string> = {
  success: 'bg-surface-panel ring-border dark:bg-state-success-dark dark:ring-state-success-dark/100',
  error:
    'bg-state-danger text-text-on-danger ring-state-danger/100 dark:bg-state-danger-dark dark:text-text-on-danger-dark dark:ring-state-danger-dark/100',
  info: 'bg-surface-panel ring-border dark:bg-state-info-dark dark:ring-state-info-dark/100',
};

const typeIcon: Record<ToastType, string> = {
  success: '✅',
  error: '⚠️',
  info: 'ℹ️',
};

export function Toast({ message, type = 'success', onClose }: Readonly<ToastProps>) {
  return (
    <div
      aria-live="polite"
      className={`pointer-events-auto w-full rounded-md shadow-lg ring-1 px-4 py-3 text-sm flex items-center gap-3 ${typeStyles[type]}`}
    >
      <span aria-hidden="true">{typeIcon[type]}</span>
      <div className="min-w-0 wrap-break-word">{message}</div>
      <button onClick={onClose} className="ml-auto transition" aria-label="Close" title="Close">
        ✕
      </button>
    </div>
  );
}

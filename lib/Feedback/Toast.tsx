import React from 'react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  message: React.ReactNode;
  type?: ToastType;
  onClose: () => void;
}

const typeStyles: Record<ToastType, string> = {
  success: 'bg-gray-900 text-white ring-gray-800 dark:bg-green-600 dark:ring-green-500',
  error: 'bg-red-600 text-white ring-red-500 dark:bg-red-700 dark:ring-red-600',
  info: 'bg-gray-800 text-white ring-gray-700 dark:bg-blue-600 dark:ring-blue-500',
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
      <div className="min-w-0 break-words">{message}</div>
      <button
        onClick={onClose}
        className="ml-auto text-white/80 hover:text-white transition"
        aria-label="Close"
        title="Close"
      >
        ✕
      </button>
    </div>
  );
}

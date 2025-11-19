import React, { useCallback, useMemo, useRef, useState } from 'react';
import { Toast, type ToastType } from './Toast';
import { ToastContext, type ToastContextValue } from './useToastContext';
import { genId } from '../utils';

interface ToastItem {
  id: string;
  message: React.ReactNode;
  type: ToastType;
  duration: number;
}

export interface ShowOptions {
  type?: ToastType;
  duration?: number; // in ms
}

const DEFAULT_DURATION = 3000;

export function ToastProvider({ children }: Readonly<{ children: React.ReactNode }>) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const timersRef = useRef<Map<string, number | ReturnType<typeof setTimeout>>>(new Map());

  const dismiss = useCallback((id?: string) => {
    if (!id) {
      // close everything
      for (const t of timersRef.current) {
        clearTimeout(t as unknown as number);
      }
      timersRef.current.clear();
      setToasts([]);
      return;
    }
    const timer = timersRef.current.get(id);
    if (timer) clearTimeout(timer as number);
    timersRef.current.delete(id);
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback(
    (message: React.ReactNode, options?: ShowOptions) => {
      const id = genId();
      const toast: ToastItem = {
        id,
        message,
        type: options?.type ?? 'success',
        duration: Math.max(1000, options?.duration ?? DEFAULT_DURATION),
      };
      setToasts((prev) => [...prev, toast]);

      const timer = setTimeout(() => dismiss(id), toast.duration);
      timersRef.current.set(id, timer);

      return id;
    },
    [dismiss]
  );

  const value = useMemo<ToastContextValue>(() => ({ showToast, dismiss }), [showToast, dismiss]);

  return (
    <ToastContext.Provider value={value}>
      {children}

      {/* Viewport global toasts */}
      <div className="fixed bottom-4 right-4 z-9999 w-80 max-w-[calc(100vw-2rem)] flex flex-col gap-2">
        {toasts.map((t) => (
          <Toast key={t.id} message={t.message} type={t.type} onClose={() => dismiss(t.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

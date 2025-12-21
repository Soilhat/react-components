import { type ReactNode, useEffect } from 'react';
import { getChildrenOnDisplayName, getChildrenExcludingDisplayName } from '../utils';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

interface ModalSubComponents {
  Footer: typeof Footer;
}

export const Modal: React.FC<ModalProps> & ModalSubComponents = ({ open, children, onClose }) => {
  const footer = getChildrenOnDisplayName(children, 'Modal.Footer');
  const nonFooter = getChildrenExcludingDisplayName(children, ['Modal.Header', 'Modal.Footer']);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose?.();
      }
    };

    document.body.style.overflow = 'hidden';
    globalThis.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = 'unset';
      globalThis.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Overlay / Backdrop */}
      <div
        className="fixed inset-0 bg-surface-base/60 dark:bg-surface-base-dark/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div
        className={`
        relative w-full max-w-lg transform overflow-hidden rounded-2xl
        bg-surface-panel dark:bg-surface-panel-dark
        text-text-primary dark:text-text-primary-dark
        shadow-2xl border border-border dark:border-border-dark
        transition-all animate-in fade-in zoom-in-95 duration-200
      `}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-1 rounded-full text-text-secondary hover:bg-surface-base dark:hover:bg-surface-base-dark hover:text-text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-state-focus"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {/* Body */}
        <div className="px-6 pt-8 pb-6 text-base">{nonFooter}</div>

        {/* Footer */}
        {footer}
      </div>
    </div>
  );
};

const Footer = ({ children }: { children: ReactNode }) => (
  <div className="bg-surface-base/50 dark:bg-surface-base-dark/50 px-6 py-4 flex flex-row-reverse gap-3 border-t border-border dark:border-border-dark">
    {children}
  </div>
);

Footer.displayName = 'Modal.Footer';
Modal.Footer = Footer;

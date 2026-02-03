import React, { type ReactNode, useEffect } from 'react';
import { getChildrenOnDisplayName, getChildrenExcludingDisplayName } from '../utils';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface ModalProps {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

interface ModalSubComponents {
  Footer: typeof Footer;
  Body: typeof Body;
}

export const Modal: React.FC<ModalProps> & ModalSubComponents = ({ open, children, onClose }) => {
  const footer = getChildrenOnDisplayName(children, 'Modal.Footer');
  const bodyChildren = getChildrenOnDisplayName(children, 'Modal.Body');
  const nonFooter = getChildrenExcludingDisplayName(children, ['Modal.Header', 'Modal.Footer']);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
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
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-6">
      <div
        className="fixed inset-0 bg-surface-base/60 dark:bg-surface-base-dark/60 backdrop-blur-sm"
        onClick={onClose}
      />

      <div
        className={`
          relative flex flex-col w-full max-w-lg max-h-[92vh] sm:max-h-[85vh]
          bg-surface-panel dark:bg-surface-panel-dark
          shadow-2xl border-t sm:border border-border dark:border-border-dark
          rounded-t-[2rem] sm:rounded-2xl
          overflow-hidden
          transition-all animate-in slide-in-from-bottom sm:zoom-in-95 duration-300
        `}
      >
        {/* Mobile Drag Handle */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden shrink-0">
          <div className="w-12 h-1.5 rounded-full bg-border dark:bg-border-dark opacity-50" />
        </div>

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 sm:top-4 sm:right-5 z-20 p-2 rounded-full bg-surface-panel/80 dark:bg-surface-panel-dark/80 backdrop-blur-md text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {bodyChildren && bodyChildren.length > 0 ? bodyChildren : <Body>{nonFooter}</Body>}
        {footer}
      </div>
    </div>
  );
};

const Body = ({ children }: { children: ReactNode }) => (
  <div
    className="flex-1 overflow-y-auto min-h-0 px-6 pt-12 pb-8 scrollbar-thin scrollbar-thumb-rounded-full"
    style={{ scrollbarGutter: 'stable' }}
  >
    {children}
  </div>
);
Body.displayName = 'Modal.Body';
Modal.Body = Body;

const Footer = ({ children }: { children: ReactNode }) => (
  <div className="shrink-0 bg-surface-base/30 dark:bg-surface-base-dark/30 px-6 py-4 flex flex-col sm:flex-row-reverse gap-3 border-t border-border dark:border-border-dark pb-safe-bottom">
    {children}
  </div>
);
Footer.displayName = 'Modal.Footer';
Modal.Footer = Footer;

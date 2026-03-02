import React, { type ReactNode, useEffect } from 'react';
import { getChildrenOnDisplayName, getChildrenExcludingDisplayName } from '../utils';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SubComponentProps {
  children: ReactNode;
}

interface ModalProps {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
}

interface ModalComponent extends React.FC<ModalProps> {
  Header: React.FC<SubComponentProps>;
  Body: React.FC<SubComponentProps>;
  Footer: React.FC<SubComponentProps>;
}

export const Modal: ModalComponent = ({ open, children, onClose }) => {
  const header = getChildrenOnDisplayName(children, 'Modal.Header');
  const footer = getChildrenOnDisplayName(children, 'Modal.Footer');
  const bodyChildren = getChildrenOnDisplayName(children, 'Modal.Body');
  const nonManaged = getChildrenExcludingDisplayName(children, ['Modal.Header', 'Modal.Footer', 'Modal.Body']);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose?.();
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
    <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`
          relative flex flex-col w-full max-w-lg 
          bg-surface-panel dark:bg-surface-panel-dark
          shadow-[0_-8px_30px_rgb(0,0,0,0.12)] border-t sm:border border-border dark:border-border-dark
          rounded-t-[2rem] sm:rounded-2xl
          max-h-[92vh] sm:max-h-[85vh]
          transform-gpu transition-all animate-in slide-in-from-bottom duration-300 ease-out
        `}
      >
        <div className="flex justify-center pt-3 pb-1 sm:hidden shrink-0">
          <div className="w-12 h-1.5 rounded-full bg-border dark:bg-border-dark opacity-50" />
        </div>

        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-[110] p-2 rounded-full bg-surface-base/10 hover:bg-surface-base/20 transition-colors"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {header}

        {bodyChildren && bodyChildren.length > 0 ? bodyChildren : <Body>{nonManaged}</Body>}

        {footer}
      </div>
    </div>
  );
};

const Header: React.FC<SubComponentProps> = ({ children }) => (
  <div className="shrink-0 px-6 py-4 border-b border-border/50 dark:border-border-dark/50">
    <h3 className="text-lg font-semibold text-text-primary dark:text-text-primary-dark pr-8">{children}</h3>
  </div>
);
Header.displayName = 'Modal.Header';

const Body: React.FC<SubComponentProps> = ({ children }) => (
  <div
    className="flex-1 overflow-y-auto min-h-0 px-6 py-4 scrollbar-thin"
    style={{
      scrollbarGutter: 'stable',
      WebkitOverflowScrolling: 'touch',
    }}
  >
    <div className="pb-4">{children}</div>
  </div>
);
Body.displayName = 'Modal.Body';

const Footer: React.FC<SubComponentProps> = ({ children }) => (
  <div className="shrink-0 bg-surface-base/20 dark:bg-surface-base-dark/20 px-6 py-4 flex flex-col sm:flex-row-reverse gap-3 border-t border-border dark:border-border-dark pb-safe">
    {children}
  </div>
);
Footer.displayName = 'Modal.Footer';

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

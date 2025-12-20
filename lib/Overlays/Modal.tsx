import { type ReactNode, useEffect } from 'react';
import { getChildrenOnDisplayName, getChildrenExcludingDisplayName } from '../utils';

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

  // Listen for Escape at the window level while open to avoid adding keyboard handlers
  // to non-interactive DOM elements (satisfies lint rules).
  useEffect(() => {
    if (!open) return;

    const handleDismiss = () => {
      if (typeof onClose === 'function') return onClose();
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleDismiss();
      }
    };
    globalThis.addEventListener('keydown', onKey);
    return () => globalThis.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <dialog open={open} className="relative z-10">
      <button
        type="button"
        className="fixed inset-0 bg-gray-50 dark:bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        // clicking the backdrop dismisses the modal
        onClick={() => {
          if (typeof onClose === 'function') return onClose();
        }}
        aria-label="Close dialog"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-gray-900/10 dark:outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
            {/* Close button (top-right) */}
            <button
              type="button"
              onClick={() => {
                if (typeof onClose === 'function') return onClose();
              }}
              aria-label="Close dialog"
              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-md text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white bg-transparent hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:focus:ring-indigo-400 cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-4 w-4"
                aria-hidden
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="px-4 pt-5 pb-4 sm:p-6 sm:pb-4 text-black dark:text-white">{nonFooter}</div>
            {footer}
          </div>
        </div>
      </div>
    </dialog>
  );
};

const Footer = ({ children }: { children: ReactNode }) => (
  <div className="bg-gray-300/25 dark:bg-gray-700/25 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">{children}</div>
);
Footer.displayName = 'Modal.Footer';
Modal.Footer = Footer;

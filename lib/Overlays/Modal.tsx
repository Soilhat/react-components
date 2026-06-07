import React, { type ReactNode, useEffect, useRef } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

interface SubComponentProps {
  children: ReactNode;
}

interface StickyActionProps {
  sticky?: boolean;
}

interface ModalProps {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  stickyHeader?: boolean;
  stickyFooter?: boolean;
}

interface ModalComponent extends React.FC<ModalProps> {
  Header: React.FC<SubComponentProps & StickyActionProps>;
  Body: React.FC<SubComponentProps>;
  Footer: React.FC<SubComponentProps & StickyActionProps>;
}

export const Modal: ModalComponent = ({ open, children, onClose, stickyHeader = false, stickyFooter = false }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  const childrenArray = React.Children.toArray(children);

  const header = childrenArray.find((child) => React.isValidElement(child) && child.type === Header);
  const footer = childrenArray.find((child) => React.isValidElement(child) && child.type === Footer);
  const bodyComponent = childrenArray.find((child) => React.isValidElement(child) && child.type === Body);

  const remainder = childrenArray.filter(
    (child) => React.isValidElement(child) && child.type !== Header && child.type !== Footer && child.type !== Body
  );

  useEffect(() => {
    if (!open) return;

    previousActiveElement.current = document.activeElement as HTMLElement;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    if (modalRef.current) {
      const focusable = modalRef.current.querySelector('button, [href], input, select, textarea, [tabindex="0"]');
      if (focusable instanceof HTMLElement) {
        focusable.focus();
      } else {
        modalRef.current.focus();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
        return;
      }

      if (e.key === 'Tab' && modalRef.current) {
        const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            lastElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastElement) {
            firstElement.focus();
            e.preventDefault();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-1000 flex items-end sm:items-center justify-center"
      role="dialog"
      aria-modal="true"
      ref={modalRef}
      tabIndex={-1}
    >
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        className={`
          relative flex flex-col w-full max-w-lg 
          bg-card text-foreground
          shadow-2xl border-t sm:border border-border
          rounded-t-4xl sm:rounded-2xl
          max-h-[92vh] sm:max-h-[85vh]
          transform-gpu transition-all animate-in slide-in-from-bottom duration-300 ease-out
          outline-none
        `}
      >
        {/* Mobile Drag Indicator Sheet Handle */}
        <div className="flex justify-center pt-3 pb-1 sm:hidden shrink-0">
          <div className="w-12 h-1.5 rounded-full bg-border opacity-50" />
        </div>

        {/* Close Button Action trigger */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-1010 p-2 rounded-full hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none"
          aria-label="Close modal"
        >
          <XMarkIcon className="h-5 w-5" />
        </button>

        {header && React.isValidElement(header)
          ? React.cloneElement(header as React.ReactElement<StickyActionProps>, { sticky: stickyHeader })
          : null}

        {bodyComponent}

        {remainder.length > 0 && !bodyComponent && <Body>{remainder}</Body>}

        {footer && React.isValidElement(footer)
          ? React.cloneElement(footer as React.ReactElement<StickyActionProps>, { sticky: stickyFooter })
          : null}
      </div>
    </div>
  );
};

const Header: React.FC<SubComponentProps & StickyActionProps> = ({ children, sticky = false }) => (
  <div className={`shrink-0 px-6 py-4 border-b border-border/50 ${sticky ? 'sticky top-0 bg-card z-10' : ''}`}>
    <h3 className="text-lg font-semibold text-foreground pr-8">{children}</h3>
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

const Footer: React.FC<SubComponentProps & StickyActionProps> = ({ children, sticky = false }) => (
  <div
    className={`shrink-0 px-6 py-4 flex flex-col sm:flex-row-reverse gap-3 border-t border-border pb-safe ${sticky ? 'sticky bottom-0 bg-card z-10' : 'bg-transparent'}`}
  >
    {children}
  </div>
);
Footer.displayName = 'Modal.Footer';

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;

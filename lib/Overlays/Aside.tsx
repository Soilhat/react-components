import React, { type ReactNode, useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface SubComponentProps {
  children: ReactNode;
}

interface StickyActionProps {
  sticky?: boolean;
}

interface AsideProps {
  open?: boolean;
  children?: ReactNode;
  onClose?: () => void;
  position?: 'right' | 'left';
  stickyHeader?: boolean;
  stickyFooter?: boolean;
}

interface AsideComponent extends React.FC<AsideProps> {
  Header: React.FC<SubComponentProps & StickyActionProps>;
  Body: React.FC<SubComponentProps>;
  Footer: React.FC<SubComponentProps & StickyActionProps>;
}

export const Aside: AsideComponent = ({
  open,
  children,
  onClose,
  position = 'right',
  stickyHeader = false,
  stickyFooter = false,
}) => {
  const asideRef = useRef<HTMLDivElement>(null);
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

    if (asideRef.current) {
      const focusable = asideRef.current.querySelector('button, [href], input, select, textarea, [tabindex="0"]');
      if (focusable instanceof HTMLElement) {
        focusable.focus();
      } else {
        asideRef.current.focus();
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose?.();
        return;
      }

      if (e.key === 'Tab' && asideRef.current) {
        const focusableElements = asideRef.current.querySelectorAll<HTMLElement>(
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

    globalThis.addEventListener('keydown', handleKeyDown);

    return () => {
      globalThis.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previousActiveElement.current) {
        previousActiveElement.current.focus();
      }
    };
  }, [open, onClose]);

  if (!open) return null;

  const isRight = position === 'right';

  return (
    <div
      className="fixed inset-0 z-1000 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-300"
      role="presentation"
    >
      <div
        ref={asideRef}
        role="dialog"
        aria-modal="true"
        className={`
          relative flex flex-col h-full w-full max-w-xl
          bg-card text-foreground shadow-2xl border-l border-border
          transform-gpu transition-all duration-300 ease-out
          ${isRight ? 'animate-in slide-in-from-right' : 'animate-in slide-in-from-left'}
          outline-none
        `}
      >
        {/* Close Button Action trigger */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-1010 p-2 rounded-full hover:bg-muted transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none cursor-pointer"
          aria-label="Close panel"
        >
          <X className="h-5 w-5" />
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
  <div className={`shrink-0 px-6 py-5 border-b border-border/50 pr-14 ${sticky ? 'sticky top-0 bg-card z-10' : ''}`}>
    <h2 className="text-lg font-semibold text-foreground">{children}</h2>
  </div>
);
Header.displayName = 'Aside.Header';

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
Body.displayName = 'Aside.Body';

const Footer: React.FC<SubComponentProps & StickyActionProps> = ({ children, sticky = false }) => (
  <div
    className={`shrink-0 px-6 py-4 flex flex-col sm:flex-row-reverse gap-3 border-t border-border pb-safe ${sticky ? 'sticky bottom-0 bg-card z-10' : 'bg-transparent'}`}
  >
    {children}
  </div>
);
Footer.displayName = 'Aside.Footer';

Aside.Header = Header;
Aside.Body = Body;
Aside.Footer = Footer;

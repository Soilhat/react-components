import React, { type ReactNode } from 'react';
import { Heading, type HeadingProps } from './Heading';
import { getChildrenOnDisplayName, getChildrenExcludingDisplayName } from '../utils';

interface CardSubComponents {
  Header: typeof Header;
  Body: typeof Body;
  Footer: typeof Footer;
}

export const Card: React.FC<React.HTMLAttributes<HTMLElement>> & CardSubComponents = ({
  children,
  className = '',
  ...props
}) => {
  const header = getChildrenOnDisplayName(children, 'Card.Header');
  const footer = getChildrenOnDisplayName(children, 'Card.Footer');
  const bodyChildren = getChildrenOnDisplayName(children, 'Card.Body');
  const nonHeaderFooter = getChildrenExcludingDisplayName(children, ['Card.Header', 'Card.Footer']);

  return (
    <div
      className={`
        ${className} 
        /* 1. Use Semantic Theme Variables */
        bg-surface-panel dark:bg-surface-panel-dark
        text-text-primary dark:text-text-primary-dark
        border border-border dark:border-border-dark
        
        /* 2. Visual Polish */
        rounded-xl shadow-sm transition-shadow duration-300 hover:shadow-md
        
        /* 3. Responsive Width Logic */
        w-full mx-auto
        sm:max-w-md    /* Tablet/Small screen */
        lg:max-w-2xl   /* Large screen (wider) */
        xl:max-w-4xl   /* Ultra wide screens */
      `}
      {...props}
    >
      {header}
      {bodyChildren && bodyChildren.length > 0
        ? bodyChildren
        : nonHeaderFooter && nonHeaderFooter.length > 0 && <Body>{nonHeaderFooter}</Body>}
      {footer}
    </div>
  );
};

const Header: React.FC<HeadingProps> = ({ title, children }) => (
  <Heading title={title} variant="card">
    {children}
  </Heading>
);
Header.displayName = 'Card.Header';
Card.Header = Header;

const Body = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div className={`p-4 sm:p-6 space-y-4 ${className}`}>{children}</div>
);
Body.displayName = 'Card.Body';
Card.Body = Body;

const Footer = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
  <div
    className={`p-4 sm:p-6 border-t border-border dark:border-border-dark bg-surface-base/50 dark:bg-surface-base-dark/50 ${className}`}
  >
    {children}
  </div>
);
Footer.displayName = 'Card.Footer';
Card.Footer = Footer;

export default Card;

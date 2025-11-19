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
  className,
  ...props
}) => {
  const header = getChildrenOnDisplayName(children, 'Card.Header');
  const footer = getChildrenOnDisplayName(children, 'Card.Footer');
  const bodyChildren = getChildrenOnDisplayName(children, 'Card.Body');
  const nonHeaderFooter = getChildrenExcludingDisplayName(children, ['Card.Header', 'Card.Footer']);

  return (
    <div
      className={`${className} border rounded-lg shadow transition-all duration-300 
        bg-white text-gray-900 border-gray-300 
        dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600 
        w-full`}
      {...props}
    >
      {header}
      {/* Render Card.Body if present, otherwise render all non-header/footer children in a default body */}
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

const Body = ({ children }: { children: ReactNode }) => <div className="p-4 sm:p-6 space-y-4">{children}</div>;
Body.displayName = 'Card.Body';
Card.Body = Body;

const Footer = ({ children }: { children: ReactNode }) => (
  <div className="p-4 sm:p-6 border-t border-gray-300 dark:border-gray-600">{children}</div>
);
Footer.displayName = 'Card.Footer';
Card.Footer = Footer;

export default Card;

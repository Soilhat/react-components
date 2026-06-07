import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const Card = ({ children, className = '', ...props }: CardProps) => {
  return (
    <div
      className={`bg-card text-card-foreground border border-border rounded-xl p-5 shadow-sm transition-colors ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

Card.Header = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mb-4 ${className}`}>{children}</div>
);
Card.Title = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <h3 className={`text-lg font-semibold text-foreground ${className}`}>{children}</h3>
);
Card.Description = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <p className={`text-sm text-muted-foreground ${className}`}>{children}</p>
);
Card.Body = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`space-y-2 ${className}`}>{children}</div>
);
Card.Footer = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
  <div className={`mt-4 ${className}`}>{children}</div>
);

export default Card;

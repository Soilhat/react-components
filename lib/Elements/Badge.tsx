import React from 'react';

export type BadgeVariant = 'default' | 'secondary' | 'outline' | 'danger' | 'warning' | 'success';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'default', icon, children, className = '', ...props }) => {
  const variantStyles: Record<BadgeVariant, string> = {
    default: 'bg-primary text-primary-foreground border-transparent hover:bg-primary/80',
    secondary: 'bg-secondary text-secondary-foreground border-transparent hover:bg-secondary/80',
    outline: 'text-foreground border-border bg-transparent',
    danger: 'bg-danger text-danger-foreground border-transparent hover:bg-danger/80',
    warning: 'bg-warning text-warning-foreground border-transparent hover:bg-warning/80',
    success: 'bg-success text-success-foreground border-transparent hover:bg-success/80',
  };

  const baseClasses = [
    'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    variantStyles[variant],
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={baseClasses} {...props}>
      {icon && <span className="flex items-center justify-center h-3 w-3 shrink-0">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};

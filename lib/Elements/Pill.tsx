import React from 'react';

export type PillVariant = 'primary' | 'success' | 'danger' | 'warning' | 'ghost';

interface PillProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
  icon?: React.ReactNode;
  variant?: PillVariant;
  className?: string;
  disabled?: boolean;
}

export const Pill = ({
  label,
  active = false,
  onClick,
  icon,
  variant = 'primary',
  className = '',
  disabled = false,
}: PillProps) => {
  const isInteractive = !!onClick && !disabled;
  const Component = onClick ? 'button' : 'div';

  const activeStyles: Record<PillVariant, string> = {
    primary: 'bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20',
    success: 'bg-success text-success-foreground border-success shadow-lg shadow-success/20',
    danger: 'bg-danger text-danger-foreground border-danger shadow-lg shadow-danger/20',
    warning: 'bg-warning text-warning-foreground border-warning shadow-lg shadow-warning/20',
    ghost: `bg-muted text-muted-foreground border-muted ${
      isInteractive ? 'hover:bg-muted/50 hover:text-muted-foreground/80' : ''
    }`,
  };

  const inactiveInteractiveStyles = disabled
    ? 'cursor-not-allowed'
    : 'hover:border-primary/50 hover:text-primary cursor-pointer';

  const inactiveStyles = onClick
    ? `bg-card text-muted-foreground border-border ${inactiveInteractiveStyles}`
    : 'bg-card text-muted-foreground border-border cursor-default';

  const componentProps = onClick
    ? {
        type: 'button' as const,
        disabled,
        onClick: disabled ? undefined : onClick,
      }
    : {};

  const baseClasses = [
    'flex-none inline-flex items-center justify-center gap-1.5',
    'px-4 py-1.5 rounded-full text-xs font-bold transition-all border capitalize',
    disabled ? 'opacity-50' : '',
    active ? activeStyles[variant] : inactiveStyles,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <Component {...componentProps} className={baseClasses}>
      {icon && <span className="flex items-center justify-center h-3.5 w-3.5 shrink-0">{icon}</span>}
      <span>{label.replaceAll('_', ' ')}</span>
    </Component>
  );
};

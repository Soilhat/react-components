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
  // Styles based on active state and variant
  const activeStyles: Record<PillVariant, string> = {
    primary:
      'bg-primary dark:bg-primary-dark text-text-on-primary dark:text-text-on-primary-dark border-primary dark:border-primary-dark shadow-lg shadow-primary/20 dark:shadow-primary-dark/40',
    success:
      'bg-state-success dark:bg-state-success-dark text-text-on-primary dark:text-text-on-primary-dark border-state-success dark:border-state-success-dark shadow-lg shadow-state-success/20 dark:shadow-state-success-dark/40',
    danger:
      'bg-state-danger dark:bg-state-danger-dark text-text-on-primary dark:text-text-on-primary-dark border-state-danger dark:border-state-danger-dark shadow-lg shadow-state-danger/20 dark:shadow-state-danger-dark/40',
    warning:
      'bg-state-warning dark:bg-state-warning-dark text-text-on-primary dark:text-text-on-primary-dark border-state-warning dark:border-state-warning-dark shadow-lg shadow-state-warning/20 dark:shadow-state-warning-dark/40',
    ghost:
      'bg-text-primary dark:bg-text-primary-dark text-text-on-primary dark:text-text-on-primary-dark border-text-primary dark:border-text-primary-dark',
  };

  const inactiveStyles =
    'bg-surface-panel dark:bg-surface-panel-dark text-text-secondary border-border hover:border-primary/50 hover:text-primary';

  return (
    <button
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`
        flex-none inline-flex items-center justify-center gap-1.5 
        px-4 py-1.5 rounded-full text-xs font-bold transition-all border capitalize
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${active ? activeStyles[variant] : inactiveStyles}
        ${className}
      `.trim()}
    >
      {icon && <span className="h-3.5 w-3.5 shrink-0">{icon}</span>}
      {label.replaceAll('_', ' ')}
    </button>
  );
};

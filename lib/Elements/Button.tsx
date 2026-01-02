import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import type { ColorName } from '../utils/types';
import { ArrowPathIcon } from '@heroicons/react/20/solid';

type ButtonVariant = 'default' | 'border' | 'ghost';
type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: ButtonVariant;
  color_name?: ColorName;
  size?: Size;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  {
    children,
    variant = 'default',
    color_name = 'primary',
    size = 'medium',
    isLoading = false,
    leftIcon,
    rightIcon,
    className = '',
    ...props
  },
  ref
) {
  const variantClasses: Record<ButtonVariant, Record<ColorName, string>> = {
    default: {
      primary:
        'bg-primary dark:bg-primary-dark text-text-on-primary dark:text-text-on-primary-dark shadow-sm hover:opacity-90',
      secondary: 'bg-secondary dark:bg-secondary-dark',
      success: 'bg-state-success dark:bg-state-success-dark',
      danger: 'bg-state-danger dark:bg-state-danger-dark',
      warning: 'bg-state-warning dark:bg-state-warning-dark',
      info: 'bg-state-info dark:bg-state-info-dark',
      light: 'bg-light dark:bg-light-dark text-text-primary dark:text-text-primary-dark',
      dark: 'bg-dark',
    },
    border: {
      primary:
        'border border-primary dark:border-primary-dark text-primary dark:text-primary-dark bg-transparent hover:bg-primary/5',
      secondary:
        'border border-secondary dark:border-secondary-dark text-secondary dark:text-secondary-dark bg-transparent',
      success: 'border border-state-success text-state-success bg-transparent',
      danger:
        'border border-state-danger dark:border-state-danger-dark text-state-danger dark:text-state-danger-dark bg-transparent',
      warning:
        'border border-state-warning dark:border-state-warning-dark text-state-warning dark:text-state-warning-dark bg-transparent',
      info: 'border border-state-info dark:border-state-info-dark text-state-info dark:text-state-info-dark bg-transparent',
      light:
        'border border-border dark:border-border-dark text-text-secondary dark:text-text-secondary-dark bg-transparent',
      dark: 'border border-dark text-dark bg-transparent',
    },
    ghost: {
      primary: 'text-primary dark:text-primary-dark bg-transparent hover:bg-primary/10 dark:hover:bg-primary-dark/20',
      secondary:
        'text-secondary dark:text-secondary-dark bg-transparent hover:bg-secondary/10 dark:hover:bg-secondary-dark/20',
      success: 'text-state-success bg-transparent hover:bg-state-success/10 dark:hover:bg-state-success-dark/20',
      danger: 'text-state-danger bg-transparent hover:bg-state-danger/10 dark:hover:bg-state-danger-dark/20',
      warning: 'text-state-warning bg-transparent hover:bg-state-warning/10 dark:hover:bg-state-warning-dark/20',
      info: 'text-state-info bg-transparent hover:bg-state-info/10 dark:hover:bg-state-info-dark/20',
      light:
        'text-text-secondary dark:text-text-secondary-dark bg-transparent hover:bg-surface-base dark:hover:bg-surface-base-dark',
      dark: 'text-text-primary dark:text-text-primary-dark bg-transparent hover:bg-slate-100',
    },
  };

  const sizeClasses: Record<Size, string> = {
    small: 'text-xs px-3 py-1.5 rounded-lg gap-1.5',
    medium: 'text-sm px-4 py-2 rounded-xl gap-2',
    large: 'text-base px-6 py-3 rounded-2xl gap-3',
  };

  const combinedClasses = [
    'inline-flex items-center justify-center font-bold transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed outline-none focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary-dark/40',
    variantClasses[variant][color_name],
    sizeClasses[size],
    className,
  ]
    .join(' ')
    .trim();

  return (
    <button className={combinedClasses} ref={ref} disabled={isLoading} {...props}>
      {isLoading ? (
        <ArrowPathIcon className="h-4 w-4 animate-spin" />
      ) : (
        <>
          {leftIcon && <span className="shrink-0">{leftIcon}</span>}
          {children}
          {rightIcon && <span className="shrink-0">{rightIcon}</span>}
        </>
      )}
    </button>
  );
});

export default Button;

import React from 'react';
import { Loader } from 'lucide-react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'danger' | 'ghost' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children?: React.ReactNode;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  ...props
}: ButtonProps) => {
  const baseStyles =
    'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50 select-none';

  const variants: Record<ButtonVariant, string> = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
    outline: 'border border-border bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
    danger: 'bg-danger text-danger-foreground hover:bg-danger/90 shadow-sm',
    ghost: 'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
    link: 'bg-transparent text-primary underline-offset-4 hover:underline p-0 h-auto',
  };

  const sizes: Record<ButtonSize, string> = {
    sm: 'h-8 px-3 text-xs rounded-md gap-1.5',
    md: 'h-10 px-4 py-2 text-sm rounded-lg gap-2',
    lg: 'h-12 px-6 text-base rounded-lg gap-2.5',
    icon: 'h-10 w-10 p-0 rounded-lg',
  };

  const isDisabled = isLoading || disabled;

  return (
    <button
      className={[baseStyles, variants[variant], variant !== 'link' ? sizes[size] : '', className]
        .filter(Boolean)
        .join(' ')}
      disabled={isDisabled}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader className="animate-spin h-4 w-4 shrink-0" />
          {size !== 'icon' && children && <span>{children}</span>}
        </>
      ) : (
        <>
          {leftIcon && <span className="shrink-0 flex items-center justify-center">{leftIcon}</span>}
          {children && <span>{children}</span>}
          {rightIcon && <span className="shrink-0 flex items-center justify-center">{rightIcon}</span>}
        </>
      )}
    </button>
  );
};

import { forwardRef, type ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'default' | 'border';
type ColorName = 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
type Size = 'small' | 'medium' | 'large';

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'size'> {
  variant?: ButtonVariant;
  color_name?: ColorName;
  size?: Size;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { children, variant = 'default', className, color_name = 'primary', size = 'medium', ...props },
  ref
) {
  const variantClasses: Record<ButtonVariant, Record<ColorName, string>> = {
    default: {
      primary: 'bg-primary dark:bg-primary-dark text-text-on-primary dark:text-text-on-primary-dark',
      secondary: 'bg-secondary dark:bg-secondary-dark',
      success: 'bg-sate-success dark:bg-state-success-dark',
      danger: 'bg-state-danger dark:bg-state-danger-dark',
      warning: 'bg-state-warning dark:bg-state-warning-dark',
      info: 'bg-state-info dark:bg-state-info-dark',
      light: 'bg-light dark:bg-light-dark',
      dark: 'bg-dark',
    },
    border: {
      primary: `border border-primary bg-transparent hover:bg-primary dark:bg-primary-dark`,
      secondary: `border border-secondary bg-transparent hover:bg-secondary dark:bg-secondary-dark`,
      success: `border border-state-success bg-transparent hover:bg-state-success dark:bg-state-success-dark`,
      danger: `border border-state-danger bg-transparent hover:bg-state-danger dark:bg-state-danger-dark`,
      warning: `border border-state-warning bg-transparent hover:bg-state-warning dark:bg-state-warning-dark`,
      info: `border border-state-info bg-transparent hover:bg-state-info dark:bg-state-info-dark`,
      light: `border border-light-border dark:border-light-border-dark bg-transparent hover:bg-light-hover dark:hover:bg-light-hover-dark`,
      dark: `border border-dark bg-transparent hover:bg-dark`,
    },
  };

  const sizeClasses: Record<Size, string> = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-lg',
  };

  // Combine all classes

  const inputClasses = [
    className,
    'w-full font-semibold p-2 rounded-md transition-colors cursor-pointer',
    variantClasses[variant][color_name],
    sizeClasses[size],
    'hover:opacity-90',
  ]
    .join(' ')
    .trim();

  return (
    <button className={inputClasses} ref={ref} {...props}>
      {children}
    </button>
  );
});
export default Button;

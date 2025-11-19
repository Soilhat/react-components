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
      primary: 'bg-primary',
      secondary: 'bg-secondary',
      success: 'bg-success',
      danger: 'bg-danger',
      warning: 'bg-warning',
      info: 'bg-info',
      light: 'bg-light text-gray-800',
      dark: 'bg-dark',
    },
    border: {
      primary: `border border-primary bg-transparent hover:bg-primary`,
      secondary: `border border-secondary bg-transparent hover:bg-secondary`,
      success: `border border-success bg-transparent hover:bg-success`,
      danger: `border border-danger bg-transparent hover:bg-danger`,
      warning: `border border-warning bg-transparent hover:bg-warning`,
      info: `border border-info bg-transparent hover:bg-info`,
      light: `border border-light bg-transparent hover:bg-light text-gray-800`,
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

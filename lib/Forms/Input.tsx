import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';
import { genId } from '../utils';

type InputSize = 'sm' | 'md' | 'lg';
type InputVariant = 'outline' | 'soft' | 'underline';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  hint?: string;
  error?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: InputSize;
  variant?: InputVariant;
  fullWidth?: boolean;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    label,
    hint,
    error,
    leftIcon,
    rightIcon,
    size = 'md',
    variant = 'outline',
    fullWidth = true,
    className = '',
    containerClassName = '',
    required,
    disabled,
    ...props
  },
  ref
) {
  const inputId = id || props.name || `input-${genId()}`;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  // Sizes using standardized padding and text scales
  const sizeClasses = {
    sm: 'py-1.5 px-3 text-sm rounded-md',
    md: 'py-2 px-4 text-base rounded-lg',
    lg: 'py-3 px-5 text-lg rounded-xl',
  };

  // State-based border and ring logic
  const stateClasses = error
    ? 'border-state-danger dark:border-state-danger-dark focus:ring-state-danger/20'
    : 'border-border dark:border-border-dark focus:border-state-focus focus:ring-state-focus/20';

  const variantClasses: Record<InputVariant, string> = {
    outline: `border bg-surface-panel dark:bg-surface-panel-dark focus:ring-4 shadow-sm`,
    soft: `border border-transparent bg-surface-base dark:bg-surface-base-dark/50 focus:bg-surface-panel dark:focus:bg-surface-panel-dark focus:ring-4`,
    underline: `border-0 border-b rounded-none bg-transparent px-0 focus:ring-0`,
  };

  const iconPaddingLeft = leftIcon ? (size === 'sm' ? 'pl-9' : 'pl-11') : '';
  const iconPaddingRight = rightIcon ? (size === 'sm' ? 'pr-9' : 'pr-11') : '';

  const inputClasses = [
    'w-full transition-all duration-200 focus:outline-none',
    'text-text-primary dark:text-text-primary-dark',
    'placeholder:text-text-secondary/50 dark:placeholder:text-text-secondary-dark/50',
    'disabled:opacity-50 disabled:bg-surface-base/50 disabled:cursor-not-allowed',
    sizeClasses[size],
    variantClasses[variant],
    stateClasses,
    iconPaddingLeft,
    iconPaddingRight,
    className,
  ].join(' ');

  return (
    <div className={`${fullWidth ? 'w-full' : ''} space-y-1.5 ${containerClassName}`}>
      {label && (
        <label htmlFor={inputId} className="label flex items-center gap-1">
          {label}
          {required && (
            <span className="text-state-danger dark:text-state-danger-dark" aria-hidden="true">
              *
            </span>
          )}
        </label>
      )}

      <div className="relative group">
        {leftIcon && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-text-secondary group-focus-within:text-state-focus transition-colors">
            {leftIcon}
          </span>
        )}

        <input
          id={inputId}
          ref={ref}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={[errorId, hintId].filter(Boolean).join(' ') || undefined}
          required={required}
          disabled={disabled}
          className={inputClasses}
          {...props}
        />

        {rightIcon && (
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-text-secondary group-focus-within:text-state-focus transition-colors">
            {rightIcon}
          </span>
        )}
      </div>

      {(error || hint) && (
        <p
          id={errorId || hintId}
          className={`text-sm ${
            error
              ? 'text-state-danger dark:text-state-danger-dark font-medium'
              : 'text-text-secondary dark:text-text-secondary-dark'
          }`}
        >
          {error || hint}
        </p>
      )}
    </div>
  );
});

export default Input;

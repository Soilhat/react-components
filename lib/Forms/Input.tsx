import { forwardRef, type InputHTMLAttributes, type ReactNode } from 'react';

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
  const inputId = id || props.name || `input-${Math.random().toString(36).slice(2, 8)}`;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;

  const sizePaddingX = {
    sm: 'px-3',
    md: 'px-4',
    lg: 'px-5',
  };

  const sizePaddingY = {
    sm: 'py-2 text-sm',
    md: 'py-2.5 text-base',
    lg: 'py-3 text-base',
  };

  const variantClasses: Record<InputVariant, string> = {
    outline:
      'border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-accent focus:ring-4 focus:ring-accent/20',
    soft: 'border border-transparent bg-gray-100 dark:bg-gray-900/50 focus:bg-white dark:focus:bg-gray-900 focus:border-accent focus:ring-4 focus:ring-accent/20',
    underline:
      'border-0 border-b border-gray-300 dark:border-gray-700 rounded-none bg-transparent focus:border-accent focus:ring-0',
  };

  const basePX = variant !== 'underline' ? sizePaddingX[size] : 'px-0';
  const basePY = sizePaddingY[size];

  const iconPaddingLeft = leftIcon ? 'pl-9' : '';
  const iconPaddingRight = rightIcon ? 'pr-9' : '';

  const inputClasses = [
    'w-full rounded-md text-gray-900 dark:text-white placeholder-gray-400',
    'transition focus:outline-none disabled:opacity-60 disabled:cursor-not-allowed',
    variantClasses[variant],
    basePX,
    basePY,
    iconPaddingLeft,
    iconPaddingRight,
    className,
  ].join(' ');

  const containerClasses = [fullWidth ? 'w-full' : '', 'space-y-1', containerClassName].join(' ');

  const wrapperClasses = ['relative', fullWidth ? 'w-full' : ''].join(' ');

  let hintOrError: React.ReactNode = null;
  if (error) {
    hintOrError = (
      <p id={errorId} className="text-sm text-red-600">
        {error}
      </p>
    );
  } else if (hint) {
    hintOrError = (
      <p id={hintId} className="text-sm text-gray-500 dark:text-gray-400">
        {hint}
      </p>
    );
  }

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={inputId} className="label">
          {label}
          {required && <span className="text-red-600"> *</span>}
        </label>
      )}

      <div className={wrapperClasses}>
        {leftIcon && (
          <span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 text-gray-400">
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
          <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-400">
            {rightIcon}
          </span>
        )}
      </div>

      {hintOrError}
    </div>
  );
});
export default Input;

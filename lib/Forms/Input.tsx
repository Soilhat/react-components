import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onTrailingIconClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, leadingIcon, trailingIcon, onTrailingIconClick, className = '', disabled, ...props }, ref) => {
    const isTrailingClickable = !!onTrailingIconClick && !disabled;

    const inputElement = (
      <div className={`relative w-full ${disabled ? 'opacity-50 select-none' : ''}`}>
        {leadingIcon && (
          <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none flex items-center justify-center size-5">
            {leadingIcon}
          </div>
        )}

        <input
          ref={ref}
          disabled={disabled}
          className={`w-full py-3 bg-card text-foreground border border-input rounded-xl text-base placeholder:text-muted-foreground/60 transition-all
            disabled:bg-muted/30 disabled:text-muted-foreground disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent
            active:bg-card/90 [webkit-tap-highlight-color:transparent] ${
              leadingIcon ? 'pl-11' : 'pl-4'
            } ${trailingIcon ? 'pr-12' : 'pr-4'} ${className}`}
          {...props}
        />

        {trailingIcon && (
          <div className="absolute right-1.5 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center justify-center">
            {isTrailingClickable ? (
              <button
                type="button"
                onClick={onTrailingIconClick}
                className="flex items-center justify-center size-10 cursor-pointer text-muted-foreground hover:text-foreground active:scale-95 focus:outline-none transition-all rounded-xl hover:bg-muted/20"
              >
                <div className="size-5 flex items-center justify-center">{trailingIcon}</div>
              </button>
            ) : (
              <div
                className={`size-10 flex items-center justify-center pointer-events-none ${disabled ? 'cursor-not-allowed' : ''}`}
              >
                <div className="size-5 flex items-center justify-center">{trailingIcon}</div>
              </div>
            )}
          </div>
        )}
      </div>
    );

    if (!label) return inputElement;

    return (
      <label
        className={`block w-full space-y-2 text-sm font-bold tracking-tight text-text-primary dark:text-text-primary-dark transition-colors ${
          disabled ? 'text-muted-foreground/80 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <span className="px-0.5">{label}</span>
        {inputElement}
      </label>
    );
  }
);

Input.displayName = 'Input';

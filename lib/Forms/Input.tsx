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
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none flex items-center justify-center">
            {leadingIcon}
          </div>
        )}

        <input
          ref={ref}
          disabled={disabled}
          className={`w-full py-2 bg-card text-foreground border border-input rounded-lg text-sm placeholder:text-muted-foreground transition-colors
            disabled:bg-muted/30 disabled:text-muted-foreground disabled:cursor-not-allowed
            focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent ${
              leadingIcon ? 'pl-10' : 'pl-3'
            } ${trailingIcon ? 'pr-10' : 'pr-3'} ${className}`}
          {...props}
        />

        {trailingIcon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground flex items-center justify-center">
            {isTrailingClickable ? (
              <button
                type="button"
                onClick={onTrailingIconClick}
                className="cursor-pointer hover:text-foreground focus:outline-none transition-colors rounded p-0.5"
              >
                {trailingIcon}
              </button>
            ) : (
              <div className={`pointer-events-none ${disabled ? 'cursor-not-allowed' : ''}`}>{trailingIcon}</div>
            )}
          </div>
        )}
      </div>
    );

    if (!label) return inputElement;

    return (
      <label
        className={`block w-full space-y-1.5 text-sm font-medium text-foreground transition-colors ${
          disabled ? 'text-muted-foreground/80 cursor-not-allowed' : 'cursor-pointer'
        }`}
      >
        <span>{label}</span>
        {inputElement}
      </label>
    );
  }
);

Input.displayName = 'Input';

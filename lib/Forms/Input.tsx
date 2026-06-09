import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  onTrailingIconClick?: () => void;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, leadingIcon, trailingIcon, onTrailingIconClick, className = '', ...props }, ref) => {
    const isTrailingClickable = !!onTrailingIconClick;

    const inputElement = (
      <div className="relative w-full">
        {leadingIcon && (
          <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none flex items-center justify-center">
            {leadingIcon}
          </div>
        )}

        <input
          ref={ref}
          className={`w-full py-2 bg-card text-foreground border border-input rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors ${
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
                className="cursor-pointer hover:text-foreground focus:outline-hidden transition-colors rounded p-0.5"
              >
                {trailingIcon}
              </button>
            ) : (
              <div className="pointer-events-none">{trailingIcon}</div>
            )}
          </div>
        )}
      </div>
    );

    if (!label) return inputElement;

    return (
      <label className="block w-full space-y-1.5 text-sm font-medium text-foreground cursor-pointer">
        <span>{label}</span>
        {inputElement}
      </label>
    );
  }
);

Input.displayName = 'Input';

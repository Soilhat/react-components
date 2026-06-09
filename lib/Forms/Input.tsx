import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  leadingIcon?: React.ReactNode;
}

export const Input = ({ label, leadingIcon, className = '', ...props }: InputProps) => {
  const inputElement = (
    <div className="relative w-full">
      {leadingIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none flex items-center justify-center">
          {leadingIcon}
        </div>
      )}
      <input
        className={`w-full py-2 bg-card text-foreground border border-input rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors ${
          leadingIcon ? 'pl-10 pr-3' : 'px-3'
        } ${className}`}
        {...props}
      />
    </div>
  );

  if (!label) return inputElement;

  return (
    <label className="block w-full space-y-1.5 text-sm font-medium text-foreground cursor-pointer">
      <span>{label}</span>
      {inputElement}
    </label>
  );
};

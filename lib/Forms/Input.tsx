import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input = ({ label, className = '', ...props }: InputProps) => {
  const inputElement = (
    <input
      className={`w-full px-3 py-2 bg-card text-foreground border border-input rounded-lg text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors ${className}`}
      {...props}
    />
  );

  if (!label) return inputElement;

  return (
    <label className="block w-full space-y-1.5 text-sm font-medium text-foreground cursor-pointer">
      <span>{label}</span>
      {inputElement}
    </label>
  );
};

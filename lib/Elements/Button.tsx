import React from 'react';
import { Loader } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  children: React.ReactNode;
  isLoading?: boolean;
}

export const Button = ({ variant = 'primary', children, className = '', isLoading, ...props }: ButtonProps) => {
  const baseStyles =
    'px-4 py-2 rounded-lg font-medium text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 cursor-pointer disabled:cursor-not-allowed disabled:opacity-50';

  const variants = {
    primary: 'bg-primary text-primary-foreground hover:bg-primary-hover',
    secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary-hover',
    danger: 'bg-danger text-danger-foreground opacity-90 hover:opacity-100',
    ghost: 'bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground',
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${isLoading ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      {...props}
      disabled={isLoading || props.disabled}
    >
      {isLoading ? <Loader className="animate-spin" /> : children}
    </button>
  );
};

import React from 'react';

type TextVariant = 'h1' | 'h2' | 'h3' | 'body' | 'small' | 'detail';

interface TextProps<T extends React.ElementType> {
  as?: T;
  variant?: TextVariant;
  bold?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<TextVariant, string> = {
  h1: 'text-3xl font-bold tracking-tight',
  h2: 'text-2xl font-semibold',
  h3: 'text-xl font-medium',
  body: 'text-base leading-relaxed',
  small: 'text-sm',
  detail: 'text-xs uppercase tracking-wider opacity-70',
};

export const Text = <T extends React.ElementType = 'p'>({
  as,
  variant = 'body',
  bold = false,
  className = '',
  children,
  ...props
}: TextProps<T> & React.ComponentPropsWithoutRef<T>) => {
  const Component = as ?? 'p';

  return (
    <Component
      className={`
        ${variantStyles[variant]} 
        ${bold ? 'font-bold' : ''} 
        ${className}
      `.trim()}
      {...props}
    >
      {children}
    </Component>
  );
};

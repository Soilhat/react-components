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
  h1: 'text-2xl sm:text-3xl font-black tracking-tight',
  h2: 'text-xl sm:text-2xl font-bold',
  h3: 'text-lg sm:text-xl font-bold',
  body: 'text-sm sm:text-base leading-snug sm:leading-relaxed',
  small: 'text-[13px] sm:text-sm',
  detail: 'text-[10px] sm:text-xs uppercase tracking-widest font-bold opacity-60',
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
      `
        .trim()
        .replace(/\s+/g, ' ')} // Cleans up double spaces
      {...props}
    >
      {children}
    </Component>
  );
};

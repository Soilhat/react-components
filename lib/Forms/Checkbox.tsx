import { forwardRef, type InputHTMLAttributes, type ReactNode, useEffect, useRef } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'title'> {
  label?: ReactNode;
  description?: ReactNode;
  containerClassName?: string;
  indeterminate?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { label, description, className = '', containerClassName = '', id, indeterminate, ...props },
  ref
) {
  const defaultRef = useRef<HTMLInputElement>(null);
  const resolvedRef = ref || defaultRef;
  const checkboxId = id || `checkbox-${Math.random().toString(36).slice(2, 9)}`;

  useEffect(() => {
    if ('current' in resolvedRef && resolvedRef.current) {
      resolvedRef.current.indeterminate = !!indeterminate;
    }
  }, [resolvedRef, indeterminate]);

  return (
    <div
      className={`relative flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-surface-base/50 dark:hover:bg-surface-base-dark/30 ${containerClassName}`}
    >
      <div className="flex h-6 items-center">
        <input
          id={checkboxId}
          ref={resolvedRef}
          type="checkbox"
          className={`
            h-5 w-5 rounded border-border dark:border-border-dark
            bg-surface-panel dark:bg-surface-panel-dark
            text-primary focus:ring-primary/20 focus:ring-offset-0
            transition-all cursor-pointer
            disabled:opacity-50 disabled:cursor-not-allowed
            ${indeterminate ? 'bg-primary border-primary' : ''}
            ${className}
          `}
          {...props}
        />
      </div>
      <div className="text-sm leading-6 flex-1 cursor-pointer">
        <label
          htmlFor={checkboxId}
          className="font-bold text-text-primary dark:text-text-primary-dark cursor-pointer select-none"
        >
          {label}
        </label>
        {description && <div className="text-text-secondary dark:text-text-secondary-dark mt-0.5">{description}</div>}
      </div>
    </div>
  );
});

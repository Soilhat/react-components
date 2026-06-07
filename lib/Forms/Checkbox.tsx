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
    if (resolvedRef && 'current' in resolvedRef && resolvedRef.current) {
      resolvedRef.current.indeterminate = !!indeterminate;
    }
  }, [resolvedRef, indeterminate]);

  return (
    <div
      className={`group relative flex items-start gap-3 p-3 rounded-xl transition-colors hover:bg-muted/50 cursor-pointer ${containerClassName}`}
    >
      <div className="flex h-6 items-center">
        <input
          id={checkboxId}
          ref={resolvedRef}
          type="checkbox"
          className={`
            /* 1. RESET CRITICAL: Strips native OS styling so rounded-md works 🎯 */
            appearance-none shrink-0 
            
            /* 2. Layout & Shape Layouts */
            h-5 w-5 rounded-md border border-border bg-card
            
            /* 3. Smooth Transitions & Interactive Cursors */
            transition-all cursor-pointer relative
            
            /* 4. Automated Checkmark Layout via CSS Pseudo-elements */
            checked:bg-primary checked:border-primary
            checked:after:content-[''] checked:after:absolute checked:after:left-[6px] checked:after:top-[2px]
            checked:after:w-[6px] checked:after:h-[10px] 
            checked:after:border-r-2 checked:after:border-b-2 checked:after:border-primary-foreground
            checked:after:rotate-45
            
            /* 5. Indeterminate States Layout Rules */
            ${indeterminate ? "bg-primary border-primary after:content-[''] after:absolute after:left-[4px] after:top-[8px] after:w-[10px] after:h-[2px] after:bg-primary-foreground" : ''}
            
            /* 6. Interaction Ring Highlights */
            focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:outline-none
            group-hover:border-primary/50
            disabled:opacity-50 disabled:cursor-not-allowed
            ${className}
          `}
          {...props}
        />
      </div>

      <div className="text-sm leading-6 flex-1 select-none">
        <label htmlFor={checkboxId} className="block font-bold text-foreground cursor-pointer">
          {label}
        </label>
        {description && (
          <label htmlFor={checkboxId} className="block text-muted-foreground mt-0.5 text-xs font-normal cursor-pointer">
            {description}
          </label>
        )}
      </div>
    </div>
  );
});

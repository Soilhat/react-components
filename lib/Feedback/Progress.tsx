import { useMemo } from 'react';

interface ProgressProps {
  value: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  variant?: 'primary' | 'success' | 'info';
}

export const Progress = ({
  value,
  max = 100,
  label,
  showValue = false,
  size = 'md',
  className = '',
  variant = 'primary',
}: ProgressProps) => {
  const percentage = useMemo(() => {
    const p = (value / max) * 100;
    return Math.min(100, Math.max(0, p));
  }, [value, max]);

  const heights = {
    sm: 'h-1.5',
    md: 'h-2.5',
    lg: 'h-4',
  };

  const variants = {
    primary: 'bg-primary dark:bg-primary-dark',
    success: 'bg-state-success dark:bg-state-success-dark',
    info: 'bg-state-info dark:bg-state-info-dark',
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-end mb-1.5 px-1">
          {label && <span className="text-xs font-bold text-text-secondary uppercase tracking-wider">{label}</span>}
          {showValue && (
            <span className="text-xs font-mono font-bold text-text-primary">{Math.round(percentage)}%</span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        className={`w-full ${heights[size]} bg-surface-base dark:bg-surface-base-dark rounded-full overflow-hidden border border-border/50 dark:border-border-dark/50`}
      >
        {/* Indicator */}
        <div
          className={`h-full ${variants[variant]} transition-all duration-500 ease-out rounded-full`}
          style={{ width: `${percentage}%` }}
          role="progressbar"
          aria-label={label}
          aria-valuenow={value}
          aria-valuemin={0}
          aria-valuemax={max}
        />
      </div>
    </div>
  );
};

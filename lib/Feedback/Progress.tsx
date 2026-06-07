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

  // Maps target properties directly into cross-browser engine pseudo classes
  const variants = {
    primary: '[&::-webkit-progress-value]:bg-primary [&::-moz-progress-bar]:bg-primary',
    success: '[&::-webkit-progress-value]:bg-success [&::-moz-progress-bar]:bg-success',
    info: '[&::-webkit-progress-value]:bg-info [&::-moz-progress-bar]:bg-info',
  };

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-end mb-1.5 px-1">
          {label && <span className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{label}</span>}
          {showValue && <span className="text-xs font-mono font-bold text-foreground">{Math.round(percentage)}%</span>}
        </div>
      )}

      {/* Track */}
      <div className={`w-full ${heights[size]} flex items-center`}>
        <progress
          className={`
            w-full h-full appearance-none rounded-full overflow-hidden border border-border/50
            bg-muted text-primary
            [&::-webkit-progress-bar]:bg-muted
            ${variants[variant]}
            transition-all duration-500 ease-out
          `}
          aria-label={label}
          value={value}
          max={max}
        >
          {Math.round(percentage)}%
        </progress>
      </div>
    </div>
  );
};

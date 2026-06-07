import React, { useRef, useState, type ReactNode } from 'react';

interface SwipeAction {
  icon: ReactNode;
  label: string;
  color?: string;
  onClick: () => void;
}

interface SwipeableRowProps {
  children: ReactNode;
  leftActions?: SwipeAction[];
  rightActions?: SwipeAction[];
  threshold?: number;
}

export const SwipeableRow: React.FC<SwipeableRowProps> = ({
  children,
  leftActions = [],
  rightActions = [],
  threshold = 80,
}) => {
  const [dragX, setDragX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(0);
  const currentX = useRef(0);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    startX.current = clientX;
    currentX.current = clientX;
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    currentX.current = clientX;
    const deltaX = clientX - startX.current;
    setDragX(deltaX);
  };

  const handleEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const deltaX = currentX.current - startX.current;
    const absDeltaX = Math.abs(deltaX);

    if (absDeltaX > threshold) {
      if (deltaX > 0 && leftActions.length > 0) {
        // Swipe right - trigger first left action
        leftActions[0]?.onClick();
      } else if (deltaX < 0 && rightActions.length > 0) {
        // Swipe left - trigger first right action
        rightActions[0]?.onClick();
      }
    }

    setDragX(0);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0] || e.changedTouches[0];
    if (touch) handleStart(touch.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.cancelable) e.preventDefault();

    const touch = e.touches[0] || e.changedTouches[0];
    if (touch) handleMove(touch.clientX);
  };

  const handleTouchEnd = () => {
    handleEnd();
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    handleStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      e.preventDefault();
      handleMove(e.clientX);
    }
  };

  const handleMouseUp = () => {
    handleEnd();
  };

  const transform = `translateX(${dragX}px)`;

  return (
    <div className="relative overflow-hidden">
      {leftActions.length > 0 && (
        <div className="absolute left-0 top-0 bottom-0 flex items-center bg-background">
          {leftActions.map((action, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-16 h-full"
              style={{ backgroundColor: action.color }}
            >
              {action.icon}
            </div>
          ))}
        </div>
      )}

      {rightActions.length > 0 && (
        <div className="absolute right-0 top-0 bottom-0 flex items-center bg-background">
          {rightActions.map((action, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-16 h-full"
              style={{ backgroundColor: action.color }}
            >
              {action.icon}
            </div>
          ))}
        </div>
      )}

      <div
        className="relative bg-card transition-transform duration-200 ease-out"
        style={{ transform }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        {children}
      </div>
    </div>
  );
};

export default SwipeableRow;

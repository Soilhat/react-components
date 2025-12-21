import { useState, type KeyboardEvent, type FocusEvent, useMemo } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { genId } from '../utils';

interface TagInputProps {
  label?: string;
  placeholder?: string;
  tags: string[];
  onChange: (tags: string[]) => void;
  className?: string;
}

export const TagInput = ({ label, placeholder, tags, onChange, className = '' }: TagInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const inputId = useMemo(() => genId(), []);

  const addTag = (value: string) => {
    const trimmedValue = value.trim().replace(/,$/, '');
    if (trimmedValue && !tags.includes(trimmedValue)) {
      onChange([...tags, trimmedValue]);
    }
    setInputValue('');
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addTag(inputValue);
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    addTag(e.target.value);
  };

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-sm font-bold text-text-primary dark:text-text-primary-dark" htmlFor={inputId}>
          {label}
        </label>
      )}

      <div className="flex flex-wrap items-center gap-2 p-2 min-h-11 rounded-lg border border-border dark:border-border-dark bg-surface-panel dark:bg-surface-panel-dark focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary border border-primary/20 animate-in fade-in zoom-in duration-200"
          >
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className="hover:text-primary-hover transition-colors">
              <XMarkIcon className="h-3 w-3" />
            </button>
          </span>
        ))}

        <input
          type="text"
          id={inputId}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleBlur}
          placeholder={tags.length === 0 ? placeholder : ''}
          className="flex-1 min-w-30 bg-transparent border-none p-0 text-sm focus:ring-0 text-text-primary dark:text-text-primary-dark placeholder:text-text-secondary/50"
        />
      </div>
    </div>
  );
};

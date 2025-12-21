import { useState, useMemo, type KeyboardEvent, useRef, useEffect } from 'react';
import { XMarkIcon } from '@heroicons/react/20/solid';
import { genId } from '../utils';

interface TagInputProps {
  label?: string;
  placeholder?: string;
  tags: string[];
  suggestions?: string[];
  onChange: (tags: string[]) => void;
  className?: string;
}

export const TagInput = ({ label, placeholder, tags, suggestions = [], onChange, className = '' }: TagInputProps) => {
  const [inputValue, setInputValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputId = useMemo(() => genId(), []);
  const containerRef = useRef<HTMLDivElement>(null);

  const filteredSuggestions = useMemo(() => {
    const query = inputValue.toLowerCase().trim();
    if (!query) return [];
    return suggestions.filter((s) => s.toLowerCase().includes(query) && !tags.includes(s)).slice(0, 5);
  }, [inputValue, suggestions, tags]);

  const addTag = (value: string) => {
    const trimmedValue = value.trim().replace(/,$/, '');
    if (trimmedValue && !tags.includes(trimmedValue)) {
      onChange([...tags, trimmedValue]);
    }
    setInputValue('');
    setIsOpen(false);
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setIsOpen(true);
      setSelectedIndex((prev) => (prev < filteredSuggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (isOpen && filteredSuggestions[selectedIndex]) {
        addTag(filteredSuggestions[selectedIndex]);
      } else {
        addTag(inputValue);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    } else if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
      removeTag(tags[tags.length - 1]);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={`flex flex-col gap-1.5 relative ${className}`} ref={containerRef}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-bold text-text-primary dark:text-text-primary-dark">
          {label}
        </label>
      )}

      <div className="flex flex-wrap items-center gap-2 p-2 min-h-11 rounded-lg border border-border dark:border-border-dark bg-surface-panel dark:bg-surface-panel-dark focus-within:ring-2 focus-within:ring-primary/20 focus-within:border-primary transition-all">
        {tags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 px-2 py-1 text-xs font-bold rounded-md bg-primary text-text-on-primary dark:bg-primary-dark dark:text-text-on-primary-dark animate-in fade-in zoom-in duration-200"
          >
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className="hover:text-white/80 transition-colors">
              <XMarkIcon className="h-3.5 w-3.5" />
            </button>
          </span>
        ))}

        <input
          id={inputId}
          type="text"
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            setIsOpen(true);
            setSelectedIndex(0);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={tags.length === 0 ? placeholder : ''}
          autoComplete="off"
          className="flex-1 min-w-30 bg-transparent border-none p-0 text-sm focus:ring-0 text-text-primary dark:text-text-primary-dark"
        />
      </div>

      {isOpen && filteredSuggestions.length > 0 && (
        <ul className="absolute z-50 top-full left-0 right-0 mt-1 bg-surface-panel dark:bg-surface-panel-dark border border-border dark:border-border-dark shadow-xl rounded-lg overflow-hidden animate-in fade-in slide-in-from-top-1 duration-200">
          {filteredSuggestions.map((suggestion, index) => (
            <li key={suggestion}>
              <button
                type="button"
                onClick={() => addTag(suggestion)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                  index === selectedIndex
                    ? 'bg-primary text-text-on-primary dark:bg-primary-dark dark:text-text-on-primary-dark'
                    : 'text-text-primary hover:bg-surface-base dark:hover:bg-surface-base-dark dark:text-text-primary-dark'
                }`}
              >
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

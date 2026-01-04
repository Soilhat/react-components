import { useState, Fragment } from 'react';
import {
  Combobox,
  ComboboxInput,
  ComboboxButton,
  ComboboxOption,
  ComboboxOptions,
  Transition,
} from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';

export interface ComboOption {
  value: string | number;
  label: string;
  description?: string;
}

interface ComboboxProps {
  label?: string;
  options: ComboOption[];
  value?: string | number;
  defaultValue?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  error?: string;
  className?: string;
}

export function SearchableCombobox({
  label,
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Search...',
  error,
  className = '',
}: Readonly<ComboboxProps>) {
  const [query, setQuery] = useState('');

  // Determine active value for controlled/uncontrolled
  const activeValue = value ?? defaultValue;

  // Filter logic
  const filteredOptions =
    query === ''
      ? options
      : options.filter(
          (opt) =>
            opt.label.toLowerCase().includes(query.toLowerCase()) ||
            opt.description?.toLowerCase().includes(query.toLowerCase())
        );

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label className="text-[10px] font-black uppercase tracking-widest text-text-secondary dark:text-text-secondary-dark ml-2">
          {label}
        </label>
      )}

      <Combobox
        value={activeValue}
        onChange={(val) => {
          onChange(val as string | number);
          setQuery(''); // Reset search on select
        }}
      >
        <div className="relative">
          <div
            className={`
            relative w-full flex items-center overflow-hidden rounded-2xl border transition-all duration-200
            bg-surface-panel dark:bg-surface-panel-dark
            ${error ? 'border-state-danger dark:border-state-danger-dark' : 'border-border dark:border-border-dark focus-within:ring-4 focus-within:ring-primary/10 dark:focus-within:ring-primary-dark/90 focus-within:border-primary dark:focus-within:border-primary-dark'}
          `}
          >
            <MagnifyingGlassIcon className="ml-4 h-4 w-4 text-text-secondary/50 dark:text-text-secondary-dark/50" />

            <ComboboxInput
              className="w-full border-none bg-transparent py-3 pl-2 pr-10 text-sm text-text-primary dark:text-text-primary-dark focus:ring-0 outline-none"
              displayValue={(val: string | number) => options.find((o) => o.value === val)?.label || ''}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
            />

            <ComboboxButton className="absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-text-secondary dark:text-text-secondary-dark"
                aria-hidden="true"
              />
            </ComboboxButton>
          </div>

          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions
              anchor="bottom start"
              className="z-9999 mt-2 max-h-60 w-(--input-width) overflow-auto rounded-2xl border border-border dark:border-border-dark bg-surface-panel/95 dark:bg-surface-panel-dark/5 p-1 shadow-2xl backdrop-blur-xl [--anchor-gap:4px]"
            >
              {filteredOptions.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-4 px-4 text-center text-sm text-text-secondary dark:text-text-secondary-dark">
                  No results found for "{query}"
                </div>
              ) : (
                filteredOptions.map((option) => (
                  <ComboboxOption
                    key={option.value}
                    value={option.value}
                    className="group relative cursor-pointer select-none rounded-xl py-2.5 pl-10 pr-4 text-sm transition-colors data-focus:bg-primary/10 dark:data-focus:bg-primary-dark/90"
                  >
                    {({ selected }) => (
                      <>
                        <div className="flex flex-col">
                          <span
                            className={`block truncate ${selected ? 'font-bold text-primary dark:text-primary-dark' : 'text-text-primary dark:text-text-primary-dark'}`}
                          >
                            {option.label}
                          </span>
                          {option.description && (
                            <span className="text-[10px] text-text-secondary dark:text-text-secondary-dark opacity-70">
                              {option.description}
                            </span>
                          )}
                        </div>
                        {selected && (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary dark:text-primary-dark">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        )}
                      </>
                    )}
                  </ComboboxOption>
                ))
              )}
            </ComboboxOptions>
          </Transition>
        </div>
      </Combobox>
      {error && <p className="ml-2 text-xs text-state-danger dark:text-state-danger-sark font-medium">{error}</p>}
    </div>
  );
}

import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { genId } from '../utils';

export interface Option {
  value: string | number;
  label: string;
  description?: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value?: string | number;
  defaultValue?: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function Select({
  label,
  options,
  value,
  defaultValue,
  onChange,
  placeholder = 'Choose...',
  className = '',
  disabled = false,
}: Readonly<SelectProps>) {
  const selectId = useMemo(() => genId(), []);
  const activeValue = value ?? defaultValue;
  const selectedOption = useMemo(() => options.find((opt) => opt.value === activeValue), [options, activeValue]);

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-[10px] font-black uppercase tracking-widest text-text-secondary dark:text-text-secondary-dark ml-1"
        >
          {label}
        </label>
      )}

      <Listbox value={activeValue} onChange={onChange} disabled={disabled}>
        <div className="relative">
          <ListboxButton
            id={selectId}
            className={`
              relative w-full cursor-pointer rounded-xl border border-border dark:border-border-dark 
              bg-surface-panel dark:bg-surface-panel-dark py-3 pl-4 pr-10 text-left text-sm
              hover:border-primary/50 dark:hover:border-primary-dark/50 transition-all duration-200
              focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary dark:focus:ring-primary-dark/90 dark:focus:border-primary-dark
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            <span
              className={`block truncate font-medium ${selectedOption ? 'text-text-primary dark:text-text-primary-dark' : 'text-text-secondary/60 dark:text-text-secondary-dark/40'}`}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronUpDownIcon
                className="h-5 w-5 text-text-secondary dark:text-text-secondary-dark"
                aria-hidden="true"
              />
            </span>
          </ListboxButton>

          {/* IMPORTANT: 'anchor="bottom start"' and 'z-[9999]' ensure visibility inside modals.
              We use 'w-(--button-width)' to match the input's width.
          */}
          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <ListboxOptions
              anchor="bottom start"
              className={`
                z-9999 mt-2 max-h-60 w-(--button-width) overflow-auto rounded-xl 
                bg-surface-panel dark:bg-surface-panel-dark py-1.5 shadow-2xl ring-1 ring-black/5 
                focus:outline-none border border-border dark:border-border-dark
                backdrop-blur-xl
                [--anchor-gap:4px]
              `}
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option.value}
                  className="group relative cursor-pointer select-none py-2.5 pl-10 pr-4 text-sm transition-colors data-focus:bg-primary/10 dark:data-focus:bg-primary-dark/90"
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
                          <span className="text-[10px] text-text-secondary dark:text-text-secondary-dark truncate">
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
                </ListboxOption>
              ))}
            </ListboxOptions>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}

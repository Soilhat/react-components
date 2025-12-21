import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import { ChevronUpDownIcon, CheckIcon } from '@heroicons/react/20/solid';
import { genId } from '../utils';

export interface Option {
  value: string | number;
  label: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value: string | number;
  onChange: (value: string | number) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function Select({
  label,
  options,
  value,
  onChange,
  placeholder,
  className = '',
  disabled = false,
}: SelectProps) {
  const selectId = useMemo(() => genId(), []);

  const selectedOption = useMemo(() => options.find((opt) => opt.value === value), [options, value]);

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={selectId} className="text-sm font-bold text-text-primary dark:text-text-primary-dark">
          {label}
        </label>
      )}

      <Listbox value={value} onChange={onChange} disabled={disabled}>
        <div className="relative">
          <ListboxButton
            id={selectId}
            className={`
              relative w-full cursor-pointer rounded-lg border border-border dark:border-border-dark 
              bg-surface-panel dark:bg-surface-panel-dark py-2 pl-3 pr-10 text-left text-sm
              focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary
              disabled:opacity-50 disabled:cursor-not-allowed transition-all
            `}
          >
            <span
              className={`block truncate ${!selectedOption ? 'text-text-secondary/50' : 'text-text-primary dark:text-text-primary-dark'}`}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-text-secondary" aria-hidden="true" />
            </span>
          </ListboxButton>

          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            {/* 
              L'attribut 'anchor' est LA CLÉ :
              - Il détache le menu du flux CSS de la modale (Portal).
              - Il gère les collisions (si pas de place en bas, il s'ouvre en haut).
            */}
            <ListboxOptions
              anchor="bottom start"
              className={`
                z-9999 mt-1 max-h-60 w-(--button-width) overflow-auto rounded-md 
                bg-surface-panel dark:bg-surface-panel-dark py-1 shadow-xl ring-1 ring-black/5 
                focus:outline-none border border-border dark:border-border-dark
                [--anchor-gap:4px]
              `}
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option.value}
                  className="group relative cursor-pointer select-none py-2 pl-10 pr-4 text-sm data-focus:bg-primary data-focus:text-text-on-primary text-text-primary dark:text-text-primary-dark"
                >
                  {({ selected }) => (
                    <>
                      <span className={`block truncate ${selected ? 'font-bold' : 'font-normal'}`}>{option.label}</span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary group-data-focus:text-text-on-primary">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
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

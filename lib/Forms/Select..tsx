import { Fragment } from 'react';
import { Listbox, ListboxOptions, ListboxOption, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

export interface Option {
  id: string | number;
  label: string;
  [key: string]: unknown;
}

interface SelectProps<T extends Option> {
  options: T[];
  value?: T;
  onChange: (value: T) => void;
  label?: string;
  placeholder?: string;
}

export function Select<T extends Option>({
  options,
  value,
  onChange,
  label,
  placeholder = 'Select an option',
}: SelectProps<T>) {
  return (
    <div className="w-full">
      <Listbox value={value} onChange={onChange}>
        {({ open }) => (
          <>
            {label && (
              <Listbox.Label className="block text-sm font-medium leading-6 text-text-primary dark:text-text-primary-dark mb-1">
                {label}
              </Listbox.Label>
            )}
            <div className="relative mt-2">
              <Listbox.Button className="relative w-full cursor-default rounded-md bg-surface-panel dark:bg-surface-panel-dark py-1.5 pl-3 pr-10 text-left text-text-primary dark:text-text-primary-dark shadow-sm ring-1 ring-inset ring-border dark:ring-border-dark focus:outline-none focus:ring-2 focus:ring-state-focus sm:text-sm sm:leading-6 border-none">
                <span className="block truncate">
                  {value ? value.label : <span className="text-text-secondary">{placeholder}</span>}
                </span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon className="h-5 w-5 text-text-secondary" aria-hidden="true" />
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <ListboxOptions className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-surface-panel dark:bg-surface-panel-dark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm border border-border dark:border-border-dark">
                  {options.map((option) => (
                    <ListboxOption
                      key={option.id}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-3 pr-9 transition-colors ${
                          active
                            ? 'bg-light text-primary dark:bg-light-dark dark:text-primary-dark'
                            : 'text-text-primary dark:text-text-primary-dark'
                        }`
                      }
                      value={option}
                    >
                      {({ selected, active }) => (
                        <>
                          <span className={`block truncate ${selected ? 'font-semibold' : 'font-normal'}`}>
                            {option.label}
                          </span>

                          {selected ? (
                            <span
                              className={`absolute inset-y-0 right-0 flex items-center pr-4 ${
                                active ? 'text-primary dark:text-primary-dark' : 'text-primary'
                              }`}
                            >
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
          </>
        )}
      </Listbox>
    </div>
  );
}

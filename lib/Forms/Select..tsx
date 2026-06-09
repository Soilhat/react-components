import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react';
import { Fragment, useMemo } from 'react';
import { ChevronsUpDown, Check } from 'lucide-react';
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
    <div className={`flex flex-col gap-1.5 text-left ${className}`}>
      {label && (
        <label
          htmlFor={selectId}
          className="text-[10px] font-black uppercase tracking-widest text-muted-foreground ml-1"
        >
          {label}
        </label>
      )}

      <Listbox value={activeValue} onChange={onChange} disabled={disabled}>
        <div className="relative">
          <ListboxButton
            id={selectId}
            className={`
              relative w-full cursor-pointer rounded-xl border border-border
              bg-card py-3 pl-4 pr-10 text-left text-sm text-foreground
              hover:border-primary/50 transition-all duration-200
              focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary
              disabled:opacity-50 disabled:cursor-not-allowed
            `}
          >
            <span
              className={`block truncate font-medium ${selectedOption ? 'text-foreground' : 'text-muted-foreground'}`}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
              <ChevronsUpDown className="h-5 w-5 text-muted-foreground/50" aria-hidden="true" />
            </span>
          </ListboxButton>

          <Transition as={Fragment} leave="transition ease-in duration-100" leaveFrom="opacity-100" leaveTo="opacity-0">
            <ListboxOptions
              portal
              anchor={{ to: 'bottom start', gap: 4 }}
              className={`
                z-9999 max-h-60 w-(--button-width) overflow-auto rounded-xl 
                bg-card py-1.5 shadow-2xl ring-1 ring-black/5 
                focus:outline-none border border-border
                backdrop-blur-xl
              `}
            >
              {options.map((option) => (
                <ListboxOption
                  key={option.value}
                  value={option.value}
                  className="group relative cursor-pointer select-none py-2.5 pl-10 pr-4 text-sm transition-colors data-focus:bg-primary/10"
                >
                  {({ selected }) => (
                    <>
                      <div className="flex flex-col">
                        <span className={`block truncate ${selected ? 'font-bold text-primary' : 'text-foreground'}`}>
                          {option.label}
                        </span>
                        {option.description && (
                          <span className="text-[10px] text-muted-foreground truncate">{option.description}</span>
                        )}
                      </div>

                      {selected && (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-primary">
                          <Check className="h-5 w-5" aria-hidden="true" />
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

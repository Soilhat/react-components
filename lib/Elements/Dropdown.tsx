import { Menu, Transition, MenuItem, MenuButton } from '@headlessui/react';
import { Fragment, useMemo, type ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { genId } from '../utils';

export interface DropdownItem {
  id?: string;
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  isDanger?: boolean;
  disabled?: boolean;
}

export interface DropdownSection {
  id?: string;
  items: DropdownItem[];
}

interface DropdownProps {
  label: string;
  sections: DropdownSection[];
  buttonVariant?: 'primary' | 'secondary' | 'light';
}

export function Dropdown({ label, sections, buttonVariant = 'primary' }: Readonly<DropdownProps>) {
  const processedSections = useMemo(() => {
    return sections.map((section) => ({
      ...section,
      id: section.id || genId(),
      items: section.items.map((item) => ({
        ...item,
        id: item.id || genId(),
      })),
    }));
  }, [sections]);

  const buttonStyles = {
    primary: 'bg-primary text-text-on-primary hover:bg-primary-hover data-[active]:bg-primary-hover',
    secondary: 'bg-secondary text-text-on-primary hover:bg-secondary-hover data-[active]:bg-secondary-hover',
    light:
      'bg-light text-primary border border-light-border hover:bg-light-hover data-[active]:bg-light-hover dark:bg-light-dark dark:text-primary-dark dark:border-light-border-dark',
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className={`inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-state-focus ${buttonStyles[buttonVariant]}`}
        >
          {label}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 transition-transform duration-200 data-active:rotate-180"
            aria-hidden="true"
          />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-border dark:divide-border-dark rounded-md bg-surface-panel dark:bg-surface-panel-dark shadow-lg ring-1 ring-black/5 focus:outline-none border border-border dark:border-border-dark">
          {processedSections.map((section) => (
            <div key={section.id} className="px-1 py-1">
              {section.items.map((item) => (
                <MenuItem key={item.id} disabled={item.disabled}>
                  <button
                    type="button"
                    onClick={item.onClick}
                    className={`
                      group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors
                      text-text-primary dark:text-text-primary-dark disabled:opacity-50 disabled:cursor-not-allowed
                      data-focus:bg-light data-focus:text-primary dark:data-focus:bg-light-dark dark:data-focus:text-primary-dark
                      ${item.isDanger ? 'text-state-danger dark:text-state-danger-dark data-focus:bg-state-danger data-focus:text-white' : ''}
                    `}
                  >
                    {item.icon && (
                      <span className="mr-2 h-5 w-5 text-text-secondary group-data-focus:text-current">
                        {item.icon}
                      </span>
                    )}
                    <span className="flex-1 text-left">{item.label}</span>
                  </button>
                </MenuItem>
              ))}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

import { Menu, Transition } from '@headlessui/react';
import { Fragment, type ReactNode } from 'react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';

export interface DropdownItem {
  label: string;
  icon?: ReactNode; // Support for HeroIcons or any element
  onClick?: () => void;
  isDanger?: boolean;
  disabled?: boolean;
}

export interface DropdownSection {
  items: DropdownItem[];
}

interface DropdownProps {
  label: string;
  sections: DropdownSection[];
  buttonVariant?: 'primary' | 'secondary' | 'light';
}

export function Dropdown({ label, sections, buttonVariant = 'primary' }: DropdownProps) {
  // Map variant to your theme variables
  const buttonStyles = {
    primary: 'bg-primary text-text-on-primary hover:bg-primary-hover',
    secondary: 'bg-secondary text-text-on-primary hover:bg-secondary-hover',
    light:
      'bg-light text-primary hover:bg-light-hover border border-light-border dark:bg-light-dark dark:text-primary-dark dark:hover:bg-light-hover-dark dark:border-light-border-dark',
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button
          className={`inline-flex w-full justify-center gap-x-1.5 rounded-md px-4 py-2 text-sm font-semibold shadow-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-state-focus ${buttonStyles[buttonVariant]}`}
        >
          {label}
          <ChevronDownIcon className="-mr-1 h-5 w-5" aria-hidden="true" />
        </Menu.Button>
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-border dark:divide-border-dark rounded-md bg-surface-panel dark:bg-surface-panel-dark shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none border border-border dark:border-border-dark">
          {sections.map((section, sIdx) => (
            <div key={sIdx} className="px-1 py-1">
              {section.items.map((item, iIdx) => (
                <Menu.Item key={iIdx} disabled={item.disabled}>
                  {({ active, disabled }) => (
                    <button
                      onClick={item.onClick}
                      className={`
                        ${active && !item.isDanger ? 'bg-light text-primary dark:bg-light-dark dark:text-primary-dark' : ''}
                        ${active && item.isDanger ? 'bg-state-danger text-text-on-danger dark:bg-state-danger-dark dark:text-text-on-danger-dark' : ''}
                        ${!active && item.isDanger ? 'text-state-danger dark:text-state-danger-dark' : ''}
                        ${!active && !item.isDanger ? 'text-text-primary dark:text-text-primary-dark' : ''}
                        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        group flex w-full items-center rounded-md px-2 py-2 text-sm transition-colors
                      `}
                    >
                      {item.icon && (
                        <span
                          className={`mr-2 h-5 w-5 ${!active && !item.isDanger ? 'text-text-secondary' : 'text-current'}`}
                        >
                          {item.icon}
                        </span>
                      )}
                      {item.label}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </div>
          ))}
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

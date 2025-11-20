import { Navbar as NavbarEl } from '../../lib/main';

import type { Meta } from '@storybook/react-vite';

import { fn } from 'storybook/test';

const meta = {
  title: 'Navigation/Navbar',
  component: NavbarEl,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    logoURl: 'https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600',
    brandName: 'BrandName',
    links: [
      { label: 'Home', element: 'a' },
      { label: 'About', element: 'a' },
      { label: 'Contact', element: 'a' },
    ],
    actions: undefined,
  },
  argTypes: {
    logoURl: { control: 'text', description: 'Logo image URL' },
    brandName: { control: 'text', description: 'Brand name to display' },
    links: { control: 'object', description: 'Navigation links' },
    actions: {
      control: false,
      description: 'Custom actions (ReactNode), e.g. a button',
      table: { type: { summary: 'ReactNode' } },
    },
  },
} satisfies Meta<typeof NavbarEl>;

export default meta;

export const Navbar = (args: Meta<typeof NavbarEl>['args'] = {}) => {
  // Provide a default action button with Storybook's fn for action logging
  const handleAction = fn();
  return (
    <NavbarEl
      {...args}
      actions={
        args.actions ?? (
          <button
            onClick={handleAction}
            className="px-4 py-2 bg-accent text-white rounded hover:bg-accent focus:ring"
            data-testid="action-btn"
          >
            Action
          </button>
        )
      }
    />
  );
};

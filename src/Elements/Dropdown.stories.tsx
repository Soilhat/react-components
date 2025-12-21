import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from '../../lib/main';
import {
  UserIcon,
  PencilSquareIcon,
  TrashIcon,
  ArchiveBoxIcon,
  ArrowRightStartOnRectangleIcon,
} from '@heroicons/react/20/solid';

const meta: Meta<typeof Dropdown> = {
  title: 'Elements/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  // Ensure the background is visible for light/dark testing
  decorators: [
    (Story) => (
      <div className="p-20 bg-surface-base dark:bg-surface-base-dark min-h-75 rounded-lg">
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    label: 'Options',
    buttonVariant: 'primary',
    sections: [
      {
        items: [
          {
            label: 'View Profile',
            icon: <UserIcon className="h-5 w-5" />,
            onClick: () => console.log('Profile clicked'),
          },
          {
            label: 'Edit Recipe',
            icon: <PencilSquareIcon className="h-5 w-5" />,
            onClick: () => console.log('Edit clicked'),
          },
        ],
      },
      {
        items: [
          {
            label: 'Delete',
            icon: <TrashIcon className="h-5 w-5" />,
            isDanger: true,
            onClick: () => alert('Delete action triggered'),
          },
        ],
      },
    ],
  },
};

export const TonalVariant: Story = {
  args: {
    ...Default.args,
    label: 'Manage Action',
    buttonVariant: 'light',
  },
};

export const ComplexMenu: Story = {
  args: {
    label: 'Project Actions',
    buttonVariant: 'secondary',
    sections: [
      {
        items: [
          { label: 'Archive', icon: <ArchiveBoxIcon className="h-5 w-5" /> },
          { label: 'Move to Folder', disabled: true },
        ],
      },
      {
        items: [{ label: 'Logout', icon: <ArrowRightStartOnRectangleIcon className="h-5 w-5" />, isDanger: true }],
      },
    ],
  },
};

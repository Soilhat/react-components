import type { Meta, StoryObj } from '@storybook/react-vite';
import { Dropdown } from '../../lib/main';
import { User, Edit, Trash2, Archive, LogOut } from 'lucide-react';

const meta: Meta<typeof Dropdown> = {
  title: 'Elements/Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  // Ensure the background is visible for light/dark testing
  decorators: [
    (Story) => (
      <div className="p-20 bg-background min-h-75 rounded-lg">
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
            icon: <User className="h-5 w-5" />,
            onClick: () => console.log('Profile clicked'),
          },
          {
            label: 'Edit Recipe',
            icon: <Edit className="h-5 w-5" />,
            onClick: () => console.log('Edit clicked'),
          },
        ],
      },
      {
        items: [
          {
            label: 'Delete',
            icon: <Trash2 className="h-5 w-5" />,
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
          { label: 'Archive', icon: <Archive className="h-5 w-5" /> },
          { label: 'Move to Folder', disabled: true },
        ],
      },
      {
        items: [{ label: 'Logout', icon: <LogOut className="h-5 w-5" />, isDanger: true }],
      },
    ],
  },
};

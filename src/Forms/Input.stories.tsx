import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../../lib/main';

const meta: Meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'checkbox'],
    },
  },
};
export default meta;

type Story = StoryObj;

export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name',
  },
};

export const Password: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
};

export const Checkbox: Story = {
  args: {
    label: 'Checkbox',
    type: 'checkbox',
    placeholder: 'Click to select value',
  },
};

export const WithLeadingIcon: Story = {
  args: {
    label: 'Search',
    placeholder: 'Type to search...',
    leadingIcon: (
      <svg className="h-4 w-4 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn, expect } from 'storybook/test';
import { Button as ButtonEl } from '../../lib/main';
import { Trash2, Plus, ArrowRight } from 'lucide-react';

const meta = {
  title: 'Elements/Button',
  component: ButtonEl,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
    isLoading: false,
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'danger', 'ghost', 'link'],
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg', 'icon'],
    },
  },
} satisfies Meta<typeof ButtonEl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Primary Action',
    variant: 'primary',
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button'));
    await expect(args.onClick).toHaveBeenCalled();
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Action',
    variant: 'secondary',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline Action',
    variant: 'outline',
  },
};

export const Danger: Story = {
  args: {
    children: 'Delete Account',
    variant: 'danger',
    leftIcon: <Trash2 className="h-4 w-4" />,
  },
};

export const Ghost: Story = {
  args: {
    children: 'Cancel',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: 'Read Documentation',
    variant: 'link',
    rightIcon: <ArrowRight className="h-4 w-4" />,
  },
};

export const Loading: Story = {
  args: {
    children: 'Saving Changes',
    isLoading: true,
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4 bg-background p-6 rounded-xl border border-border">
      <ButtonEl variant="primary">Primary</ButtonEl>
      <ButtonEl variant="secondary">Secondary</ButtonEl>
      <ButtonEl variant="outline">Outline</ButtonEl>
      <ButtonEl variant="danger">Danger</ButtonEl>
      <ButtonEl variant="ghost">Ghost</ButtonEl>
      <ButtonEl variant="link">Link</ButtonEl>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4 bg-background p-6 rounded-xl border border-border">
      <ButtonEl size="sm">Small</ButtonEl>
      <ButtonEl size="md">Medium</ButtonEl>
      <ButtonEl size="lg">Large</ButtonEl>
      <ButtonEl size="icon" aria-label="Add item">
        <Plus className="h-4 w-4" />
      </ButtonEl>
    </div>
  ),
};

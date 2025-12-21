import type { Meta, StoryObj } from '@storybook/react-vite';
import { Progress } from '../../lib/main';

const meta: Meta<typeof Progress> = {
  title: 'Feedback/Progress',
  component: Progress,
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100 },
      description: 'The current progress value',
    },
    variant: {
      control: 'select',
      options: ['primary', 'success', 'info'],
    },
    size: {
      control: 'inline-radio',
      options: ['sm', 'md', 'lg'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Progress>;

export const Default: Story = {
  args: {
    value: 45,
    label: 'Loading Ingredients',
    showValue: true,
  },
};

export const Small: Story = {
  args: {
    value: 70,
    size: 'sm',
    label: 'Compact Progress',
  },
};

export const Large: Story = {
  args: {
    value: 30,
    size: 'lg',
    label: 'Storage space',
    showValue: true,
  },
};

export const Completed: Story = {
  args: {
    value: 100,
    variant: 'success',
    label: 'Grocery List Status',
    showValue: true,
  },
};

export const InfoVariant: Story = {
  args: {
    value: 60,
    variant: 'info',
    label: 'Current Month Budget',
    showValue: true,
  },
};

export const WithoutLabel: Story = {
  args: {
    value: 50,
    size: 'md',
  },
};

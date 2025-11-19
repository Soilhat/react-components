import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../../lib/Forms/Input';

const meta: Meta = {
  title: 'Forms/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  args: {
    type: 'string',
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

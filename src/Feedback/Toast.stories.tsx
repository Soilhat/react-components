import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from '../../lib/Feedback';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  args: {
    message: 'This is a toast message!',
    onClose: () => alert('Toast closed!'),
  },
};
export default meta;
type Story = StoryObj<typeof Toast>;

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Operation successful!',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Something went wrong!',
  },
};

export const Info: Story = {
  args: {
    type: 'info',
    message: 'Here is some information.',
  },
};

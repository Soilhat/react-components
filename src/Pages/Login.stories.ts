import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn, expect } from 'storybook/test';

import LoginPage from './Login';

const meta = {
  title: 'Pages/Login',
  component: LoginPage,
  parameters: {
    layout: 'centered',
  },
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof LoginPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.type(canvas.getByLabelText('Username'), 'email@provider.com');
    await userEvent.type(canvas.getByLabelText('Password'), 'a-random-password');
    await userEvent.click(canvas.getByRole('button', { name: 'Login' }));

    // 👇 Now we can assert that the onSubmit arg was called
    await expect(args.onSubmit).toHaveBeenCalled();
  },
};

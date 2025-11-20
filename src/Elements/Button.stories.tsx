import type { Meta, StoryObj } from '@storybook/react-vite';

import { fn, expect } from 'storybook/test';

import { Button as ButtonEl } from '../../lib/main';

const meta = {
  title: 'Elements/Button',
  component: ButtonEl,
  parameters: {
    layout: 'centered',
  },
  args: {
    onClick: fn(),
  },
} satisfies Meta<typeof ButtonEl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Button: Story = {
  args: {
    children: 'Button',
  },
  play: async ({ args, canvas, userEvent }) => {
    await userEvent.click(canvas.getByRole('button'));

    await expect(args.onClick).toHaveBeenCalled();
  },
};

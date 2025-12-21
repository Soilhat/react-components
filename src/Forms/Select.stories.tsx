import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select, Option } from '../../lib/main';

const categories = [
  { id: 1, label: 'Dessert' },
  { id: 2, label: 'Main Dish' },
  { id: 3, label: 'Starter' },
];

const meta: Meta<typeof Select> = {
  title: 'Forms/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  // We define default tags here
  args: {
    label: 'Recipe Category',
    options: categories,
    placeholder: 'Choose a category...',
  },
};

export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  render: (args) => {
    // We use a "Template" approach to manage state inside the story
    const [value, setValue] = useState<Option | undefined>(undefined);

    return (
      <div className="w-72">
        <Select
          {...args}
          value={value}
          onChange={(val) => {
            setValue(val);
            args.onChange?.(val);
          }}
        />
      </div>
    );
  },
};

export const Preselected: Story = {
  render: (args) => {
    const [value, setValue] = useState<Option | undefined>(categories[1]);

    return (
      <div className="w-72">
        <Select {...args} value={value} onChange={setValue} />
      </div>
    );
  },
};

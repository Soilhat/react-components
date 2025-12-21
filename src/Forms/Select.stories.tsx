import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select, type Option } from '../../lib/main';

const categories: Option[] = [
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
  args: {
    label: 'Recipe Category',
    options: categories,
    placeholder: 'Choose a category...',
  },
};

export default meta;
type Story = StoryObj<typeof Select>;

const SelectTemplate = (args) => {
  const [value, setValue] = useState<Option | undefined>(undefined);

  return (
    <div className="w-72">
      <Select
        {...args}
        value={value}
        onChange={(e) => {
          setValue(e);
          args.onChange?.(e);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <SelectTemplate {...args} />,
};

export const Preselected: Story = {
  args: {
    value: { id: 2, label: 'Main Dish' },
  },
  render: (args) => <SelectTemplate {...args} />,
};

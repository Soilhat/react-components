import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pill } from '../../lib/main';
import { FireIcon, TagIcon } from '@heroicons/react/24/outline';

const meta: Meta<typeof Pill> = {
  title: 'Elements/Pill',
  component: Pill,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'success', 'danger', 'warning', 'ghost'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Pill>;

export const Default: Story = {
  args: {
    label: 'Housing',
    active: false,
  },
};

export const Active: Story = {
  args: {
    label: 'Subscription',
    active: true,
    variant: 'primary',
  },
};

export const WithIcon: Story = {
  args: {
    label: 'Critical',
    active: true,
    variant: 'danger',
    icon: <FireIcon />,
  },
};

/**
 * Common use case: A horizontal filter bar
 */
export const FilterBar: Story = {
  render: () => {
    const [selected, setSelected] = React.useState('all');
    const categories = ['all', 'shopping', 'health', 'travel', 'food'];

    return (
      <div className="flex items-center gap-2 bg-surface-panel dark:bg-surface-panel-dark p-4 rounded-xl">
        {categories.map((cat) => (
          <Pill
            key={cat}
            label={cat}
            active={selected === cat}
            onClick={() => setSelected(cat)}
            icon={cat === 'all' ? <TagIcon /> : undefined}
          />
        ))}
      </div>
    );
  },
};

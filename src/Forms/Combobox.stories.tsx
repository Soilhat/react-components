import type { Meta, StoryObj } from '@storybook/react-vite';
import { SearchableCombobox } from '../../lib/main';

const meta: Meta = {
  title: 'Forms/SearchableCombobox',
  component: SearchableCombobox,
  tags: ['autodocs'],
  argTypes: {
    onChange: { action: 'changed' },
  },
  decorators: [
    (Story) => (
      <div className="p-10 max-w-md mx-auto min-h-100 bg-surface-base dark:bg-surface-base-dark rounded-3xl">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj;

const CATEGORY_OPTIONS = [
  { value: 'food', label: 'Food & Drinks', description: 'Restaurants, Groceries, Bars' },
  { value: 'housing', label: 'Housing', description: 'Rent, Mortgage, Utilities' },
  { value: 'transport', label: 'Transport', description: 'Fuel, Uber, Train tickets' },
  { value: 'shopping', label: 'Shopping', description: 'Clothes, Electronics, Home' },
  { value: 'health', label: 'Health', description: 'Pharmacy, Gym, Doctor' },
];

export const Default: Story = {
  args: {
    label: 'Category',
    options: CATEGORY_OPTIONS,
    placeholder: 'Search categories...',
  },
};

export const Preselected: Story = {
  args: {
    label: 'Edit Category',
    options: CATEGORY_OPTIONS,
    defaultValue: 'transport',
  },
};

export const WithError: Story = {
  args: {
    label: 'Savings Goal',
    options: [
      { value: 'car', label: 'New Car', description: 'Target: 15,000€' },
      { value: 'vacation', label: 'Summer Trip', description: 'Target: 2,000€' },
    ],
    error: 'Please select a valid savings goal to continue.',
  },
};

export const LargeDataset: Story = {
  args: {
    label: 'Select Merchant',
    placeholder: 'Type to filter 100+ merchants...',
    options: Array.from({ length: 100 }).map((_, i) => ({
      value: i,
      label: `Merchant ${i + 1}`,
      description: `Description for merchant number ${i + 1}`,
    })),
  },
};

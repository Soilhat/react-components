import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { TagInput } from '../../lib/main';
import { userEvent, within, expect, fn } from 'storybook/test';

const meta: Meta<typeof TagInput> = {
  title: 'Forms/TagInput',
  component: TagInput,
  parameters: {
    layout: 'centered',
  },
  args: {
    onChange: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof TagInput>;

const TagInputTemplate = (args) => {
  const [tags, setTags] = useState<string[]>(args.tags || []);

  return (
    <div className="w-96">
      <TagInput
        {...args}
        tags={tags}
        onChange={(newTags) => {
          setTags(newTags);
          args.onChange?.(newTags);
        }}
      />
    </div>
  );
};

export const Default: Story = {
  args: {
    label: 'Recipe Tags',
    placeholder: 'Add a tag and press Enter...',
    tags: ['Dinner', 'Quick'],
  },
  render: (args) => <TagInputTemplate {...args} />,
};

export const InteractionTest: Story = {
  args: {
    label: 'Automated Test',
    placeholder: 'Testing...',
    tags: [],
  },
  render: (args) => <TagInputTemplate {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    const input = canvas.getByLabelText('Automated Test');

    await step('Add a new tag', async () => {
      await userEvent.type(input, 'Pizza{enter}');
      const newTag = await canvas.findByText('Pizza');
      expect(newTag).toBeInTheDocument();
    });

    await step('Add another tag via comma', async () => {
      await userEvent.type(input, 'Pasta,');
      const pastaTag = await canvas.findByText('Pasta');
      expect(pastaTag).toBeInTheDocument();
    });

    await step('Check placeholder disappearance', async () => {
      expect(input).not.toHaveAttribute('placeholder', 'Testing...');
    });
  },
};

export const WithSuggestions: Story = {
  args: {
    label: 'Categorize Recipe',
    placeholder: 'Type "ve" for suggestions...',
    suggestions: ['Vegan', 'Vegetarian', 'Veggies', 'Meat', 'Fish', 'Dessert'],
    tags: [],
  },
  render: (args) => <TagInputTemplate {...args} />,
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByLabelText('Categorize Recipe');

    await step('Type to trigger suggestions', async () => {
      await userEvent.type(input, 've');
      const suggestion = await canvas.findByText('Vegan');
      expect(suggestion).toBeInTheDocument();
    });

    await step('Navigate suggestions with keyboard', async () => {
      await userEvent.keyboard('{ArrowDown}');

      await userEvent.keyboard('{Enter}');

      const badge = await canvas.findByText('Vegetarian');
      expect(badge).toBeInTheDocument();

      expect(input).toHaveValue('');
    });

    await step('Verify filtered suggestions', async () => {
      await userEvent.type(input, 've');
      const dropdownOptions = canvas.queryAllByRole('button');
      const hasVegetarian = dropdownOptions.some((opt) => opt.textContent === 'Vegetarian');
      expect(hasVegetarian).toBe(false);
    });
  },
};

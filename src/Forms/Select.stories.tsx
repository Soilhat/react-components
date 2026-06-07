import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { Select, Button, Modal, type Option } from '../../lib/main';
import { userEvent, within, expect } from 'storybook/test';

const categories: Option[] = [
  { value: 1, label: 'Dessert' },
  { value: 2, label: 'Main Dish' },
  { value: 3, label: 'Starter' },
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

interface TemplateProps {
  label?: string;
  options: Option[];
  placeholder?: string;
  value?: string | number;
}

const SelectTemplate = (args: TemplateProps) => {
  const [value, setValue] = useState<string | number | undefined>(args.value);

  return (
    <div className="w-72">
      <Select {...args} value={value} onChange={(e) => setValue(e)} />
    </div>
  );
};

export const Default: Story = {
  render: (args) => <SelectTemplate {...args} />,
};

export const Preselected: Story = {
  args: {
    value: 2,
  },
  render: (args) => <SelectTemplate {...args} />,
};

const collisionOptions: Option[] = [
  { value: '1', label: 'Option One' },
  { value: '2', label: 'Option Two' },
  { value: '3', label: 'Option Three' },
  { value: '4', label: 'Option Four' },
  { value: '5', label: 'Option Last' },
];

export const InsideModalCollision: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const [val, setVal] = useState<string | number>('');

    return (
      <div className="p-10 text-center">
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          <Modal.Header>Settings</Modal.Header>

          <Modal.Body>
            <div className="h-125 bg-muted/30 rounded-xl flex items-center justify-center text-muted-foreground italic border-2 border-dashed border-border mb-6">
              Long Content Area (Scroll down)
            </div>

            <Select
              label="Bottom Select"
              placeholder="Choose an option..."
              options={collisionOptions}
              value={val}
              onChange={setVal}
            />
          </Modal.Body>
        </Modal>
      </div>
    );
  },
  play: async ({ canvasElement, step }) => {
    const canvas = within(canvasElement);

    await step('Open the modal', async () => {
      const openButton = canvas.getByRole('button', { name: /Open Modal/i });
      await userEvent.click(openButton);
    });

    const body = within(document.body);

    await step('Find Select by its Label', async () => {
      await body.findByText('Settings');

      const selectButton = await body.findByRole('button', { name: /Bottom Select/i });
      selectButton.scrollIntoView({ block: 'center' });

      await expect(selectButton).toBeVisible();
      await userEvent.click(selectButton);
    });

    await step('Verify auto-positioning (Collision)', async () => {
      const lastOption = await body.findByText('Option Last');

      const rect = lastOption.getBoundingClientRect();
      const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;

      expect(isInViewport).toBe(true);

      await userEvent.click(lastOption);
    });
  },
};

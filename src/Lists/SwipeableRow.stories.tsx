import type { Meta, StoryObj } from '@storybook/react-vite';
import { SwipeableRow } from '../../lib/main';
import { Trash2, Archive, Check, Mail } from 'lucide-react';
import { expect, fn, within, fireEvent } from 'storybook/test';

const meta: Meta<typeof SwipeableRow> = {
  title: 'Lists/SwipeableRow',
  component: SwipeableRow,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
  },
  argTypes: {
    threshold: {
      control: { type: 'number', min: 20, max: 200, step: 10 },
      description: 'The swipe drag distance (in pixels) required to trigger the corresponding action hook.',
      defaultValue: 80,
    },
    children: {
      control: false,
      description: 'The primary row element container surface.',
    },
    leftActions: { control: false },
    rightActions: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof SwipeableRow>;

// --- CONTENT MOCKUP WRAPPER FOR PREVIEWS ---
const RowMockupTemplate = ({ title, description }: { title: string; description: string }) => (
  <div className="flex items-center justify-between p-4 border-b border-border select-none w-full">
    <div className="flex gap-3 items-center min-w-0">
      <div className="size-10 rounded-full bg-muted flex items-center justify-center shrink-0">
        <Mail className="size-5 text-foreground" />
      </div>
      <div className="min-w-0">
        <p className="text-sm font-bold text-foreground truncate">{title}</p>
        <p className="text-xs text-muted-foreground truncate">{description}</p>
      </div>
    </div>
    <span className="text-[10px] text-muted-foreground font-medium shrink-0">12:45 PM</span>
  </div>
);

/**
 * Standard setup containing typical transactional choices (Archive on swipe-right, Delete on swipe-left).
 */
export const Default: Story = {
  args: {
    threshold: 80,
    leftActions: [
      {
        label: 'Archive',
        icon: <Archive className="size-5 text-primary-foreground" />,
        color: 'var(--color-primary)',
        onClick: fn(),
      },
    ],
    rightActions: [
      {
        label: 'Delete',
        icon: <Trash2 className="size-5 text-danger-foreground" />,
        color: 'var(--color-danger)',
        onClick: fn(),
      },
    ],
    children: (
      <RowMockupTemplate
        title="Weekly Financial Summary"
        description="Your Plan d'Épargne en Actions (PEA) performance report is ready."
      />
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto border border-border rounded-xl bg-card overflow-hidden shadow-xs">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const swipeableElement = canvas.getByText('Weekly Financial Summary').closest('.relative');

    expect(swipeableElement).toBeInTheDocument();

    const leftAction = args.leftActions?.[0];
    const rightAction = args.rightActions?.[0];
    if (!leftAction || !rightAction) {
      throw new Error('SwipeableRow story requires configured left and right actions for interaction tests.');
    }

    // --- Test Case 1: Swipe Right below threshold (Should NOT trigger action) ---
    if (swipeableElement) {
      fireEvent.mouseDown(swipeableElement, { clientX: 100 });
      fireEvent.mouseMove(swipeableElement, { clientX: 150 });
      fireEvent.mouseUp(swipeableElement);
    }

    expect(leftAction.onClick).not.toHaveBeenCalled();

    // --- Test Case 2: Swipe Right past threshold (Triggers Left Action) ---
    if (swipeableElement) {
      fireEvent.mouseDown(swipeableElement, { clientX: 100 });
      fireEvent.mouseMove(swipeableElement, { clientX: 220 });
      fireEvent.mouseUp(swipeableElement);
    }

    expect(leftAction.onClick).toHaveBeenCalledTimes(1);
  },
};

/**
 * Demonstrates a confirmation workflow style layout (e.g., ticking off an educational checklist tracking node).
 */
export const SuccessAction: Story = {
  args: {
    threshold: 60,
    leftActions: [
      {
        label: 'Complete',
        icon: <Check className="size-5 text-success-foreground" />,
        color: 'var(--color-success)',
        onClick: fn(),
      },
    ],
    children: (
      <RowMockupTemplate
        title="Montessori Activity Plan"
        description="Set up morning motor skill toy rotation sequences."
      />
    ),
  },
  decorators: [
    (Story) => (
      <div className="max-w-md mx-auto border border-border rounded-xl bg-card overflow-hidden shadow-xs">
        <Story />
      </div>
    ),
  ],
  play: async ({ canvasElement, args }) => {
    const canvas = within(canvasElement);
    const row = canvas.getByText('Montessori Activity Plan').closest('.relative');

    if (row) {
      fireEvent.mouseDown(row, { clientX: 100 });
      fireEvent.mouseMove(row, { clientX: 170 });
      fireEvent.mouseUp(row);
    }

    const leftAction = args.leftActions?.[0];
    if (!leftAction) {
      throw new Error('This SwipeableRow story requires configured left actions for interaction tests.');
    }
    expect(leftAction.onClick).toHaveBeenCalledTimes(1);
  },
};

/**
 * Full structural wrapper showing how multiple rows stack and behave together inside an interactive list container view.
 */
export const StackingListContext: Story = {
  render: (args) => (
    <div className="max-w-md mx-auto border border-border rounded-2xl bg-card overflow-hidden shadow-xs divide-y divide-border">
      <SwipeableRow {...args}>
        <RowMockupTemplate
          title="Sourcing Update"
          description="Deadstock merino wool lot shipment has cleared logistics borders."
        />
      </SwipeableRow>

      <SwipeableRow threshold={args.threshold} leftActions={args.leftActions} rightActions={args.rightActions}>
        <RowMockupTemplate
          title="Cookibud Deployment Pipeline"
          description="GitHub Actions build succeeded. Production container assets updated."
        />
      </SwipeableRow>

      <SwipeableRow threshold={args.threshold} leftActions={args.leftActions} rightActions={args.rightActions}>
        <RowMockupTemplate
          title="Structural Preservation Note"
          description="Review masonry inspection scheduling options for stone properties."
        />
      </SwipeableRow>
    </div>
  ),
  args: {
    ...Default.args,
  },
};

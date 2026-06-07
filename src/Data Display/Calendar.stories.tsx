import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Calendar } from '../../lib/main';
import { within, expect, waitFor, fn, userEvent } from 'storybook/test';

/**
 * # Calendar Component Documentation
 * * The `Calendar` is a high-level data display component designed for planning and event management.
 * * ### Key Functionalities:
 * 1. **Hybrid Grid Rendering**: Uses `sm:hidden` and `sm:contents` to toggle between a mobile-optimized
 * list/stack view and a traditional 7-column desktop grid.
 * 2. **Native Drag & Drop**: Implements HTML5 Drag and Drop API. Events are made draggable via
 * the `EventList` child, and `DayCard` acts as the drop target.
 * 3. **Date Navigation**: Supports Month and Week views with state-controlled navigation (`goPrev`, `goNext`).
 * 4. **Touch Support**: Built-in swipe gestures for mobile users to navigate between periods.
 * 5. **Event Normalization**: Processes raw event arrays into a consistent `NormalizedEntry` format,
 * supporting nested items (e.g., meals within a daily plan).
 */
const meta: Meta = {
  title: 'Data Display/Calendar',
  component: Calendar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A versatile calendar supporting drag-and-drop event rescheduling and responsive layouts.',
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);

const iso = (d: Date) => {
  const pad = (n: number) => (n < 10 ? `0${n}` : `${n}`);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
};

const initialEvents = {
  [iso(today)]: [{ id: 'drag-me', title: 'Drag This Meal' }],
  [iso(tomorrow)]: [],
};

const removeEventFromDates = (events: Record<string, { id: string; title: string }[]>, eventId: string) => {
  const next = { ...events };
  let foundItem: { id: string; title: string } | null = null;

  for (const dateKey of Object.keys(next)) {
    const index = next[dateKey].findIndex((e) => e.id === eventId);
    if (index !== -1) {
      [foundItem] = next[dateKey].splice(index, 1);
      break;
    }
  }

  return { next, foundItem };
};

const DragAndDropWrapper = () => {
  const [events, setEvents] = useState<Record<string, { id: string; title: string }[]>>(initialEvents);

  const handleEventDrop = (eventId: string, targetDate: Date) => {
    const targetIso = iso(targetDate);
    setEvents((prev) => {
      const { next, foundItem } = removeEventFromDates(prev, eventId);

      if (foundItem) {
        next[targetIso] = [...(next[targetIso] || []), foundItem];
      }
      return next;
    });
  };

  return (
    <div className="p-8 bg-background min-h-screen">
      <Calendar
        year={today.getFullYear()}
        month={today.getMonth()}
        eventsByDate={events}
        onEventDrop={handleEventDrop}
        actionLabel="Plan"
      />
    </div>
  );
};

/**
 * ## Drag and DropInteraction Test (Automated)
 * * This story demonstrates the "Real" interaction flow. It uses a `play` function to
 * simulate a user dragging an event from today to tomorrow.
 * * **Technical Note on Testing:**
 * Since the component renders two versions of the grid (Mobile/Desktop), the test
 * specifically targets the `.sm:contents` container to avoid "Multiple elements found" errors.
 */
export const DragAndDropInteractionTest: Story = {
  render: () => <DragAndDropWrapper />,
  play: async ({ canvasElement }) => {
    // 1. Identify Desktop Scope
    const desktopGrid = canvasElement.querySelector(String.raw`.hidden.sm\:contents`);
    if (!desktopGrid) throw new Error('Desktop grid not found');
    const desktopCanvas = within(desktopGrid as HTMLElement);

    // 2. Locate Source and Target
    const draggableEvent = await desktopCanvas.findByText('Drag This Meal');
    const sourceElement = draggableEvent.closest('[draggable="true"]');

    const tomorrowDateStr = iso(tomorrow);
    const targetDay = desktopGrid.querySelector(`[id="dt-${tomorrowDateStr}"]`);

    if (!sourceElement || !targetDay) {
      throw new Error('Could not find source or target elements in the desktop view');
    }

    // 3. Native Event Simulation
    const dataTransfer = new DataTransfer();

    sourceElement.dispatchEvent(
      new DragEvent('dragstart', {
        bubbles: true,
        cancelable: true,
        dataTransfer,
      })
    );

    targetDay.dispatchEvent(
      new DragEvent('dragover', {
        bubbles: true,
        cancelable: true,
        dataTransfer,
      })
    );

    targetDay.dispatchEvent(
      new DragEvent('drop', {
        bubbles: true,
        cancelable: true,
        dataTransfer,
      })
    );

    sourceElement.dispatchEvent(
      new DragEvent('dragend', {
        bubbles: true,
        cancelable: true,
        dataTransfer,
      })
    );

    // 4. Assert Results
    await waitFor(
      () => {
        const eventInNewLocation = within(targetDay as HTMLElement).queryByText('Drag This Meal');
        expect(eventInNewLocation).toBeInTheDocument();
      },
      { timeout: 2000 }
    );
  },
};

/**
 * ## Static Month View
 * Standard usage with predefined events to test layout and color schemes.
 */
export const StaticMonthView: Story = {
  args: {
    year: today.getFullYear(),
    month: today.getMonth(),
    eventsByDate: initialEvents,
    initialView: 'month',
  },
};

/**
 * ## Click Interaction Test
 * This test ensures that meal items are "clickable" and navigate correctly.
 * It specifically checks that pointer-events are not blocked and that
 * the onEventClick callback receives the clean ID (without the index suffix).
 */
export const ClickInteractionTest: Story = {
  args: {
    year: today.getFullYear(),
    month: today.getMonth(),
    eventsByDate: {
      [iso(today)]: [{ id: 'test-meal-123', title: 'Clickable Recipe' }],
    },
    onEventClick: fn(),
  },
  play: async ({ canvasElement, args }) => {
    const desktopGrid = canvasElement.querySelector(String.raw`.hidden.sm\:contents`);
    if (!desktopGrid) throw new Error('Desktop grid not found');

    const mealButton = await within(desktopGrid as HTMLElement).findByRole('button', {
      name: /Clickable Recipe/i,
    });

    const style = globalThis.getComputedStyle(mealButton);
    if (style.pointerEvents === 'none') {
      throw new Error('Test failed: Button still has pointer-events: none');
    }

    await userEvent.click(mealButton);

    await waitFor(() => {
      expect(args.onEventClick).toHaveBeenCalledWith('test-meal-123');
    });
  },
};

import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import Calendar from '../../lib/Data Display/Calendar';

const meta: Meta = {
  title: 'Data Display/Calendar',
  component: Calendar,
  parameters: { layout: 'centered' },
};
export default meta;

type Story = StoryObj<typeof Calendar>;

const today = new Date();
const iso = (d: Date) => d.toISOString().slice(0, 10);

// Build a set of sample events with varying shapes so you can see different render states in Storybook
const tomorrow = new Date(today);
tomorrow.setDate(today.getDate() + 1);
const inThree = new Date(today);
inThree.setDate(today.getDate() + 3);
const twoBack = new Date(today);
twoBack.setDate(today.getDate() - 2);
const nextWeek = new Date(today);
nextWeek.setDate(today.getDate() + 7);

// A minimal event type that matches the shapes shown in these stories.
type StoryEvent = {
  id?: string;
  title?: string;
  name?: string;
  items?: Array<{ title?: string }>;
  events?: Array<{ name?: string }>;
};

const sampleEvents: Record<string, StoryEvent[]> = {
  [iso(today)]: [
    { id: 'evt-today-1', title: 'Team Meeting' },
    { id: 'evt-today-2', title: '1:1', items: [{ title: 'Discuss roadmap' }] },
  ],
  [iso(tomorrow)]: [{ id: 'evt-tomorrow-1', title: 'Deploy' }],
  [iso(inThree)]: [
    { id: 'evt-deadline', title: 'Project Deadline' },
    { id: 'evt-workshop', title: 'Workshop', items: [{ title: 'Prep' }, { title: 'Run' }] },
  ],
  [iso(twoBack)]: [{ id: 'evt-past', title: 'Client Call' }],
  [iso(nextWeek)]: [
    // demonstrate event object with `events` field (the Calendar code accepts items|events)
    { id: 'evt-events-1', events: [{ name: 'Recipe A' }, { name: 'Recipe B' }] },
  ],
};

export const MonthView: Story = {
  render: () => (
    <Calendar
      year={today.getFullYear()}
      month={today.getMonth()}
      eventsByDate={sampleEvents}
      onAction={(d) => console.log('onAction', d)}
      onEventClick={(id) => console.log('onEventClick', id)}
      actionLabel="Plan"
    />
  ),
};

export const WeekView: Story = {
  render: () => (
    <Calendar
      year={today.getFullYear()}
      month={today.getMonth()}
      initialView="week"
      eventsByDate={sampleEvents}
      onAction={(d) => console.log('onAction', d)}
      onEventClick={(id) => console.log('onEventClick', id)}
      actionLabel="Plan"
    />
  ),
};

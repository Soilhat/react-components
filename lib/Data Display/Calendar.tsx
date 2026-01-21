import { useState } from 'react';
import { Button } from '../Elements/Button';

interface CalendarProps {
  year: number;
  month: number; // 0-11
  title?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onAction?: (date: Date) => void; // generic action on a day (e.g. plan, add)
  onEventClick?: (eventId: string) => void;
  eventsByDate?: Record<string, unknown[]>;
  actionLabel?: string;
  initialView?: 'month' | 'week';
}

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`;
}
function toISODate(d: Date) {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

function buildWeeks(year: number, month: number) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const days: Date[] = [];
  const start = new Date(first);
  start.setDate(first.getDate() - start.getDay());
  const end = new Date(last);
  end.setDate(last.getDate() + (6 - end.getDay()));
  for (let d = new Date(start); d <= end; d.setDate(d.getDate() + 1)) days.push(new Date(d));
  const weeks: Date[][] = [];
  for (let i = 0; i < days.length; i += 7) weeks.push(days.slice(i, i + 7));
  return weeks;
}

// Small helper to render events for a day. Normalize all supported shapes and render
// each logical event as an independent button so multiple events are clearly separated.
// Normalize many possible event shapes into a flat list of entries
export type EventObject = {
  id?: string;
  title?: string;
  name?: string;
  items?: unknown[];
  events?: unknown[];
};

type NormalizedEntry = { id?: string; title?: string; key: string };

function getChildren(x: unknown): unknown[] | null {
  if (typeof x !== 'object' || x === null) return null;
  const obj = x as EventObject;
  if (Array.isArray(obj.items)) return obj.items;
  if (Array.isArray(obj.events)) return obj.events;
  return null;
}

function getTitle(x: unknown): string | undefined {
  if (x == null) return undefined;
  if (typeof x === 'string' || typeof x === 'number') return String(x);
  if (typeof x === 'object') {
    const o = x as Record<string, unknown>;
    if (typeof o.title === 'string') return o.title;
    if (typeof o.name === 'string') return o.name;
  }
  return undefined;
}

function normalizeDayEvents(dayEvents: unknown[]): NormalizedEntry[] {
  const entries: NormalizedEntry[] = [];
  if (!Array.isArray(dayEvents) || dayEvents.length === 0) return entries;

  function pushChildren(parent: EventObject | undefined, children: unknown[], parentIndex: number) {
    for (const [ri, it] of children.entries()) {
      const key = parent?.id ? `${parent.id}-${ri}` : `evt-${parentIndex}-${ri}`;
      entries.push({ id: parent?.id, title: getTitle(it) ?? `item-${ri}`, key });
    }
  }

  for (const [ei, evt] of dayEvents.entries()) {
    if (evt == null) continue;
    const children = getChildren(evt);
    if (children?.length) {
      pushChildren((evt as EventObject) ?? undefined, children, ei);
      continue;
    }

    if (typeof evt === 'object') {
      const obj = evt as EventObject;
      const id = obj.id ?? `evt-${ei}`;
      const title = obj.title ?? obj.name ?? getTitle(obj) ?? id;
      entries.push({ id, title, key: id });
      continue;
    }

    // primitive value
    const key = `evt-${ei}`;
    entries.push({ id: key, title: getTitle(evt) ?? key, key });
  }

  return entries;
}

// Small helper to render events for a day. Render each normalized entry as an independent button
const EventList = ({ dayEvents, onEventClick }: { dayEvents: unknown[]; onEventClick?: (id: string) => void }) => {
  const entries = normalizeDayEvents(dayEvents ?? []);
  if (entries.length === 0) return null;

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {entries.map((entry) => (
        <Button
          key={entry.key}
          onClick={() => entry.id && onEventClick?.(entry.id)}
          title={entry.title}
          aria-label={entry.title}
          color_name="light"
          className="text-left text-xs p-1.5 w-full h-auto min-h-fit leading-tight border-none bg-primary/10 hover:bg-primary/20 text-primary-dark dark:text-primary"
        >
          <div className="line-clamp-2 break-words overflow-hidden">{entry.title}</div>
        </Button>
      ))}
    </div>
  );
};

const DayCard = ({
  d,
  isCurrentMonth,
  dayEvents,
  actionLabel,
  onAction,
  onEventClick,
  containerClass,
}: {
  d: Date;
  isCurrentMonth: boolean;
  dayEvents: unknown[];
  actionLabel: string;
  onAction?: (date: Date) => void;
  onEventClick?: (id: string) => void;
  containerClass?: string;
}) => {
  const iso = toISODate(d);
  const dayName = d.toLocaleDateString(undefined, { weekday: 'short' });

  // Use flex-col on mobile to prevent horizontal squishing
  return (
    <div
      key={iso}
      className={`${containerClass} border rounded-xl p-3 transition-all ${
        isCurrentMonth
          ? 'bg-surface-panel dark:bg-surface-panel-dark shadow-sm'
          : 'bg-surface-base/50 dark:bg-surface-base-dark/50 opacity-60'
      } border-border dark:border-border-dark flex flex-col gap-2`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span
            className={`text-lg font-bold ${isCurrentMonth ? 'text-text-primary dark:text-text-primary-dark' : 'text-text-secondary'}`}
          >
            {d.getDate()}
          </span>
          {/* Show day name only on mobile list view */}
          <span className="sm:hidden text-xs font-medium uppercase tracking-wider text-text-secondary">{dayName}</span>
        </div>

        <Button
          type="button"
          onClick={() => onAction?.(d)}
          color_name="primary"
          className="py-1 px-3 text-[10px] h-7 w-auto!"
        >
          {actionLabel}
        </Button>
      </div>

      <div className="flex-1">
        <EventList dayEvents={dayEvents} onEventClick={onEventClick} />
      </div>
    </div>
  );
};

export function Calendar({
  year,
  month,
  title,
  onPrev,
  onNext,
  onAction,
  onEventClick,
  eventsByDate = {},
  actionLabel = 'Plan',
  initialView,
}: Readonly<CalendarProps>) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(year, month, 1));
  const [view, setView] = useState<'month' | 'week'>(initialView ?? 'month');

  const weeks = buildWeeks(currentDate.getFullYear(), currentDate.getMonth());
  const allDays = weeks.flat();

  // build week days for currentDate (Sunday..Saturday)
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay());
  const weekDays: Date[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    weekDays.push(d);
  }
  const goPrev = () => {
    if (view === 'month') {
      const d = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
      setCurrentDate(d);
    } else {
      const d = new Date(currentDate);
      d.setDate(d.getDate() - 7);
      setCurrentDate(d);
    }
    onPrev?.();
  };

  const goNext = () => {
    if (view === 'month') {
      const d = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
      setCurrentDate(d);
    } else {
      const d = new Date(currentDate);
      d.setDate(d.getDate() + 7);
      setCurrentDate(d);
    }
    onNext?.();
  };

  const daysToDisplay = view === 'month' ? allDays : weekDays;

  // Filter to only show the current month for a cleaner mobile list
  const mobileDays =
    view === 'month' ? daysToDisplay.filter((d) => d.getMonth() === currentDate.getMonth()) : daysToDisplay; // In week view, show all 7 days even on mobile

  return (
    <div className="w-full max-w-full overflow-hidden">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold tracking-tight">
          {title ?? `${currentDate.toLocaleString(undefined, { month: 'long', year: 'numeric' })}`}
        </h2>

        <div className="flex items-center justify-between sm:justify-end gap-2">
          <div className="flex bg-surface-panel dark:bg-surface-panel-dark p-1 rounded-lg border border-border dark:border-border-dark">
            <button
              onClick={() => setView('month')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${view === 'month' ? 'bg-primary text-white shadow-md' : 'text-text-secondary'}`}
            >
              Month
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${view === 'week' ? 'bg-primary text-white shadow-md' : 'text-text-secondary'}`}
            >
              Week
            </button>
          </div>

          <div className="flex gap-1">
            <Button onClick={goPrev} color_name="light" className="px-3">
              Prev
            </Button>
            <Button onClick={goNext} color_name="light" className="px-3">
              Next
            </Button>
          </div>
        </div>
      </div>

      {/* Day Headers (Hidden on Mobile) */}
      <div className="hidden sm:grid sm:grid-cols-7 gap-3 mb-2 px-1">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div
            key={d}
            className="text-xs font-bold uppercase tracking-widest text-text-secondary dark:text-text-secondary-dark opacity-70"
          >
            {d}
          </div>
        ))}
      </div>

      {/* Calendar Body */}
      <div className="grid gap-3 grid-cols-1 sm:grid-cols-7">
        {/* MOBILE VIEW: Only current month days */}
        <div className="contents sm:hidden">
          {mobileDays.map((d) => (
            <DayCard
              key={`mob-${toISODate(d)}`}
              d={d}
              isCurrentMonth={d.getMonth() === currentDate.getMonth()}
              dayEvents={eventsByDate[toISODate(d)] ?? []}
              actionLabel={actionLabel}
              onAction={onAction}
              onEventClick={onEventClick}
              containerClass="min-h-[5rem]"
            />
          ))}
        </div>

        {/* DESKTOP VIEW: Full 7-column grid with padding days */}
        <div className="hidden sm:contents">
          {daysToDisplay.map((d) => (
            <DayCard
              key={`dt-${toISODate(d)}`}
              d={d}
              isCurrentMonth={d.getMonth() === currentDate.getMonth()}
              dayEvents={eventsByDate[toISODate(d)] ?? []}
              actionLabel={actionLabel}
              onAction={onAction}
              onEventClick={onEventClick}
              containerClass={view === 'week' ? 'min-h-[12rem]' : 'min-h-[8rem]'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

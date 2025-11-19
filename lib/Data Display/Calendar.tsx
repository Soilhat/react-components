import { useState } from 'react';

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
    <div className="space-y-1">
      {entries.map((entry) => (
        <button
          key={entry.key}
          type="button"
          onClick={() => entry.id && onEventClick?.(entry.id)}
          title={entry.title}
          aria-label={entry.title}
          className="w-full text-left text-xs py-1 px-2 rounded cursor-pointer bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          <div className="truncate">{entry.title}</div>
        </button>
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
  const baseClass = containerClass ?? 'min-h-[6rem]';
  return (
    <div
      key={iso}
      className={`${baseClass} border rounded-lg p-3 ${isCurrentMonth ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'} border-gray-200 dark:border-gray-700`}
    >
      <div className="flex items-start justify-between">
        <div
          className={`text-sm font-medium ${isCurrentMonth ? 'text-gray-800 dark:text-gray-100' : 'text-gray-400 dark:text-gray-500'}`}
        >
          {d.getDate()}
        </div>
        <button
          type="button"
          onClick={() => onAction?.(d)}
          className="text-xs px-2 py-1 rounded cursor-pointer bg-indigo-50 dark:bg-indigo-900 text-indigo-600 dark:text-indigo-200 hover:bg-indigo-100"
        >
          {actionLabel}
        </button>
      </div>
      <div className="mt-2 space-y-1">
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
  // internal date keeps track of current focused month/week
  const [currentDate, setCurrentDate] = useState<Date>(new Date(year, month, 1));
  const [view, setView] = useState<'month' | 'week'>(initialView ?? 'month');

  const weeks = buildWeeks(currentDate.getFullYear(), currentDate.getMonth());

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

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-3">
          <div>
            <h2 className="text-lg font-semibold text-gray-600 dark:text-gray-300">
              {title ?? `${currentDate.toLocaleString(undefined, { month: 'long', year: 'numeric' })}`}
            </h2>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => setView('month')}
              className={`px-2 py-1 rounded ${view === 'month' ? 'bg-blue-100 text-blue-700' : 'bg-transparent text-gray-600'}`}
            >
              Month
            </button>
            <button
              onClick={() => setView('week')}
              className={`px-2 py-1 rounded ${view === 'week' ? 'bg-blue-100 text-blue-700' : 'bg-transparent text-gray-600'}`}
            >
              Week
            </button>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button onClick={goPrev} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800">
            Prev
          </button>
          <button onClick={goNext} className="px-3 py-1 rounded bg-gray-100 dark:bg-gray-800">
            Next
          </button>
        </div>
      </div>

      <div className="hidden sm:grid sm:grid-cols-7 gap-2 text-left">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="font-semibold py-2 text-sm text-gray-600 dark:text-gray-300">
            {d}
          </div>
        ))}
      </div>

      {view === 'month' ? (
        <div className="grid sm:grid-cols-7 grid-cols-2 gap-3 mt-3">
          {weeks.flat().map((d) => {
            const iso = toISODate(d);
            const isCurrentMonth = d.getMonth() === currentDate.getMonth();
            const dayEvents = eventsByDate[iso] ?? [];
            return (
              <DayCard
                key={iso}
                d={d}
                isCurrentMonth={isCurrentMonth}
                dayEvents={dayEvents}
                actionLabel={actionLabel}
                onAction={onAction}
                onEventClick={onEventClick}
                containerClass="min-h-[6rem]"
              />
            );
          })}
        </div>
      ) : (
        <div className="grid sm:grid-cols-7 grid-cols-1 gap-3 mt-3">
          {weekDays.map((d) => {
            const iso = toISODate(d);
            const isCurrentMonth = d.getMonth() === currentDate.getMonth();
            const dayEvents = eventsByDate[iso] ?? [];
            return (
              <DayCard
                key={iso}
                d={d}
                isCurrentMonth={isCurrentMonth}
                dayEvents={dayEvents}
                actionLabel={actionLabel}
                onAction={onAction}
                onEventClick={onEventClick}
                containerClass="min-h-[8rem]"
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react';
import { Button } from '../Elements/Button';

interface CalendarProps {
  year: number;
  month: number; // 0-11
  title?: string;
  onPrev?: () => void;
  onNext?: () => void;
  onAction?: (date: Date) => void;
  onEventClick?: (eventId: string) => void;
  onEventDrop?: (eventId: string, date: Date) => void;
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
    const key = `evt-${ei}`;
    entries.push({ id: key, title: getTitle(evt) ?? key, key });
  }
  return entries;
}

const EventList = ({ dayEvents, onEventClick }: { dayEvents: unknown[]; onEventClick?: (id: string) => void }) => {
  const entries = normalizeDayEvents(dayEvents ?? []);
  if (entries.length === 0) return null;

  const onDragStart = (e: React.DragEvent, eventKey: string) => {
    e.dataTransfer.setData('eventId', eventKey);
    e.dataTransfer.effectAllowed = 'move';

    if (e.currentTarget instanceof HTMLElement) {
      e.currentTarget.style.opacity = '0.4';
    }
  };

  return (
    <div className="flex flex-col gap-1.5 w-full">
      {entries.map((entry) => (
        <div
          key={entry.key}
          draggable={true}
          onDragStart={(e) => onDragStart(e, entry.key)}
          onDragEnd={(e) => {
            (e.currentTarget as HTMLElement).style.opacity = '1';
          }}
          className="group relative cursor-grab active:cursor-grabbing"
        >
          <Button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              if (entry.id) onEventClick?.(entry.id);
            }}
            color_name="light"
            className="text-left text-xs p-1.5 w-full h-auto min-h-fit border-none bg-primary/10 hover:bg-primary/20"
          >
            <div className="line-clamp-2 pointer-events-none">{entry.title}</div>
          </Button>
        </div>
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
  onEventDrop,
  containerClass,
  id,
}: {
  d: Date;
  isCurrentMonth: boolean;
  dayEvents: unknown[];
  actionLabel: string;
  onAction?: (date: Date) => void;
  onEventClick?: (id: string) => void;
  onEventDrop?: (eventId: string, date: Date) => void;
  containerClass?: string;
  id?: string;
}) => {
  const [isOver, setIsOver] = useState(false);
  const iso = toISODate(d);
  const dayName = d.toLocaleDateString(undefined, { weekday: 'short' });
  const isToday = toISODate(new Date()) === iso;

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(true);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsOver(false);
    const eventId = e.dataTransfer.getData('eventId');
    if (eventId && onEventDrop) {
      onEventDrop(eventId, d);
    }
  };

  return (
    <div
      id={id}
      onDragOver={handleDragOver}
      onDragLeave={() => setIsOver(false)}
      onDrop={handleDrop}
      className={`${containerClass} border rounded-xl p-3 transition-all ${
        isOver ? 'ring-4 ring-primary/30 border-primary bg-primary/10 scale-[1.02]' : ''
      } ${
        isToday
          ? 'ring-2 ring-primary border-primary bg-primary/5 shadow-md'
          : isCurrentMonth
            ? 'bg-surface-panel dark:bg-surface-panel-dark shadow-sm'
            : 'bg-surface-base/50 dark:bg-surface-base-dark/50 opacity-60'
      } border-border dark:border-border-dark flex flex-col gap-2 relative z-0`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-baseline gap-2">
          <span
            className={`text-lg font-bold ${isToday ? 'text-primary' : isCurrentMonth ? 'text-text-primary dark:text-text-primary-dark' : 'text-text-secondary'}`}
          >
            {d.getDate()}
          </span>
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
  onEventDrop,
  onEventClick,
  eventsByDate = {},
  actionLabel = 'Plan',
  initialView,
}: Readonly<CalendarProps>) {
  const [currentDate, setCurrentDate] = useState<Date>(new Date(year, month, 1));
  const [view, setView] = useState<'month' | 'week'>(initialView ?? 'month');
  const [showFloatingToday, setShowFloatingToday] = useState(false);

  // Swipe gesture state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 640) {
        setShowFloatingToday(window.scrollY > 300);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const goPrev = () => {
    if (view === 'month') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    } else {
      const d = new Date(currentDate);
      d.setDate(d.getDate() - 7);
      setCurrentDate(d);
    }
    onPrev?.();
  };

  const goNext = () => {
    if (view === 'month') {
      setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
    } else {
      const d = new Date(currentDate);
      d.setDate(d.getDate() + 7);
      setCurrentDate(d);
    }
    onNext?.();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) goNext();
    if (isRightSwipe) goPrev();
  };

  const goToToday = () => {
    const today = new Date();
    if (currentDate.getMonth() !== today.getMonth() || currentDate.getFullYear() !== today.getFullYear()) {
      setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1));
    }

    setTimeout(() => {
      const todayId = `mob-${toISODate(today)}`;
      const element = document.getElementById(todayId);
      if (element) {
        const offset = 100;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 100);
  };

  const weeks = buildWeeks(currentDate.getFullYear(), currentDate.getMonth());
  const allDays = weeks.flat();
  const weekStart = new Date(currentDate);
  weekStart.setDate(currentDate.getDate() - currentDate.getDay());
  const weekDays: Date[] = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(weekStart);
    d.setDate(weekStart.getDate() + i);
    return d;
  });

  const renderDays = (days: Date[], isMobile = false) =>
    days.map((d) => (
      <DayCard
        id={isMobile ? `mob-${toISODate(d)}` : `dt-${toISODate(d)}`}
        key={`${isMobile ? 'mob' : 'dt'}-${toISODate(d)}`}
        d={d}
        isCurrentMonth={d.getMonth() === currentDate.getMonth()}
        dayEvents={eventsByDate[toISODate(d)] ?? []}
        actionLabel={actionLabel}
        onAction={onAction}
        onEventClick={onEventClick}
        onEventDrop={onEventDrop}
        containerClass={isMobile ? 'min-h-[5rem]' : view === 'week' ? 'min-h-[12rem]' : 'min-h-[8rem]'}
      />
    ));

  const daysToDisplay = view === 'month' ? allDays : weekDays;
  const mobileDays =
    view === 'month' ? daysToDisplay.filter((d) => d.getMonth() === currentDate.getMonth()) : daysToDisplay;

  return (
    <div
      className="w-full max-w-full overflow-hidden relative touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {showFloatingToday && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 sm:hidden">
          <Button
            onClick={goToToday}
            color_name="primary"
            className="shadow-2xl px-6 py-3 rounded-full font-bold animate-in fade-in slide-in-from-bottom-4"
          >
            Go to Today
          </Button>
        </div>
      )}

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-3">
          <h2 className="text-2xl font-bold tracking-tight">
            {title ?? `${currentDate.toLocaleString(undefined, { month: 'long', year: 'numeric' })}`}
          </h2>
          <Button
            onClick={goToToday}
            color_name="light"
            className="hidden sm:flex text-[10px] px-2 h-7 py-0 uppercase font-bold tracking-wider"
          >
            Today
          </Button>
        </div>

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

      <div className="hidden sm:grid sm:grid-cols-7 gap-3 mb-2 px-1 text-center">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
          <div key={d} className="text-xs font-bold uppercase tracking-widest text-text-secondary opacity-70">
            {d}
          </div>
        ))}
      </div>

      <div className="grid gap-3 grid-cols-1 sm:grid-cols-7">
        <div className="contents sm:hidden">{renderDays(mobileDays, true)}</div>
        <div className="hidden sm:contents">{renderDays(daysToDisplay)}</div>
      </div>
    </div>
  );
}

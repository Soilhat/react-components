interface CalendarProps {
    year: number;
    month: number;
    title?: string;
    onPrev?: () => void;
    onNext?: () => void;
    onAction?: (date: Date) => void;
    onEventClick?: (eventId: string) => void;
    eventsByDate?: Record<string, unknown[]>;
    actionLabel?: string;
    initialView?: 'month' | 'week';
}
export type EventObject = {
    id?: string;
    title?: string;
    name?: string;
    items?: unknown[];
    events?: unknown[];
};
export declare function Calendar({ year, month, title, onPrev, onNext, onAction, onEventClick, eventsByDate, actionLabel, initialView, }: Readonly<CalendarProps>): import("react/jsx-runtime").JSX.Element;
export {};

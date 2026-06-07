import type { Meta, StoryObj } from '@storybook/react-vite';
import { ErrorBoundary, Button, Text, Heading } from '../../lib/main';
import { useState } from 'react';

/**
 * ### ErrorBoundary Component
 * * The `ErrorBoundary` is a safety wrapper that catches JavaScript errors anywhere in its child component tree,
 * logs those errors, and displays a fallback UI instead of crashing the whole application.
 * * #### Key Features:
 * - **Full Page vs Inline:** Use the `fullPage` prop to toggle between a full-screen takeover and a local widget fallback.
 * - **Support Integration:** Provide a `supportEmail` to automatically generate a `mailto` link for users in production.
 * - **Development DX:** Automatically shows a technical stack trace when `import.meta.env.DEV` is true.
 * - **Custom Fallbacks:** Pass a custom ReactNode or a render function to the `fallback` prop.
 * * #### Usage:
 * ```tsx
 * <ErrorBoundary
 * supportEmail="support@company.com"
 * onError={(err, info) => logToSentry(err, info)}
 * >
 * <MyCriticalComponent />
 * </ErrorBoundary>
 * ```
 */
const meta: Meta<typeof ErrorBoundary> = {
  title: 'Feedback/ErrorBoundary',
  component: ErrorBoundary,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A robust error handling wrapper for React component trees.',
      },
    },
  },
  argTypes: {
    fullPage: { control: 'boolean' },
    supportEmail: { control: 'text' },
  },
};

export default meta;

// --- HELPER ---
const Crasher = ({ shouldCrash }: { shouldCrash: boolean }) => {
  if (shouldCrash) {
    throw new Error('🚀 Simulation: The component has crashed!');
  }
  return (
    <div className="p-6 bg-success/10 border border-success/20 rounded-xl text-center">
      <Text className="text-success font-bold">Everything is running smoothly.</Text>
    </div>
  );
};

/**
 * **Default Full Page Error**
 * * Use this at the top level of your `App.tsx` or main routing file.
 * It ensures that if a major crash happens, the user sees a branded recovery page
 * rather than a white screen.
 */
const FullPageCrashStory = () => {
  const [hasError, setHasError] = useState(false);
  return (
    <ErrorBoundary onReset={() => setHasError(false)} supportEmail="dev-team@example.com">
      <div className="p-10 flex flex-col items-center gap-6">
        <Heading title="Main Application Shell" />
        <Crasher shouldCrash={hasError} />
        <Button variant="danger" onClick={() => setHasError(true)}>
          Trigger Fatal Error
        </Button>
      </div>
    </ErrorBoundary>
  );
};

export const FullPageCrash: StoryObj<typeof ErrorBoundary> = {
  render: () => <FullPageCrashStory />,
};

/**
 * **Widget Level (Local) Crash**
 * * By setting `fullPage={false}`, the boundary only occupies the space of its container.
 * This is ideal for dashboards where you want one failing widget to stay isolated
 * without breaking the rest of the navigation or UI.
 */
const WidgetCrashStory = () => {
  const [crashLeft, setCrashLeft] = useState(false);
  return (
    <div className="p-8 space-y-8">
      <div className="bg-card p-4 rounded-lg border border-border">
        <h2 className="font-bold">Global Navigation (Always Safe)</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <Text className="font-bold uppercase text-xs">Analytics Module</Text>
          <ErrorBoundary fullPage={false} onReset={() => setCrashLeft(false)}>
            <div className="border-2 border-dashed border-border p-4 rounded-2xl">
              <Crasher shouldCrash={crashLeft} />
              {!crashLeft && (
                <Button className="mt-4" onClick={() => setCrashLeft(true)}>
                  Crash Module
                </Button>
              )}
            </div>
          </ErrorBoundary>
        </div>
        <div className="p-4 rounded-2xl">
          <Text>Secondary content remains interactive even if the primary module crashes.</Text>
        </div>
      </div>
    </div>
  );
};

export const WidgetLevelCrash: StoryObj<typeof ErrorBoundary> = {
  render: () => <WidgetCrashStory />,
};

/**
 * **Custom Fallback UI**
 * * If the default Card UI doesn't fit your design, use the `fallback` prop.
 * You can provide a custom component or a function that receives the `error` and `reset` trigger.
 */
const CustomFallbackStory = () => {
  const [isCrashed, setIsCrashed] = useState(false);
  return (
    <div className="p-10">
      <ErrorBoundary
        onReset={() => setIsCrashed(false)}
        fallback={(error, reset) => (
          <div className="p-4 bg-danger text-danger-foreground rounded-lg flex justify-between items-center shadow-lg animate-pulse">
            <span className="font-mono text-sm">Critical Error: {error.message}</span>
            <Button onClick={reset} variant="danger">
              RETRY
            </Button>
          </div>
        )}
      >
        <div className="p-8 bg-card rounded-2xl shadow-xl border border-border">
          <h3 className="text-xl font-bold mb-4">Stock Ticker Widget</h3>
          <Crasher shouldCrash={isCrashed} />
          {!isCrashed && (
            <Button variant="ghost" className="mt-4" onClick={() => setIsCrashed(true)}>
              Simulate API Failure
            </Button>
          )}
        </div>
      </ErrorBoundary>
    </div>
  );
};

export const CustomFallback: StoryObj<typeof ErrorBoundary> = {
  render: () => <CustomFallbackStory />,
};

/// <reference types="vite/client" />

import React, { type ReactNode, type ErrorInfo } from 'react';
import { Card, Button } from '../main';

interface Props {
  children: ReactNode;
  fallback?: ReactNode | ((error: Error, reset: () => void) => ReactNode);
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
  onReset?: () => void;
  fullPage?: boolean;
  supportEmail?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
    error: null,
    errorInfo: null,
  };

  static getDerivedStateFromError(error: Error): Partial<State> {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    this.props.onError?.(error, errorInfo);

    this.setState({ errorInfo });
  }

  resetError = () => {
    this.props.onReset?.();
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
    });
  };

  render() {
    const { hasError, error, errorInfo } = this.state;
    const { children, fallback, fullPage = true, supportEmail } = this.props;

    if (hasError) {
      if (typeof fallback === 'function') return fallback(error!, this.resetError);
      if (fallback) return fallback;

      const isDevelopment = !!(import.meta.env && import.meta.env.DEV);

      const supportLink = supportEmail
        ? `mailto:${supportEmail}?subject=App Error Report&body=Error: ${error?.message}%0A%0AStack: ${errorInfo?.componentStack?.slice(0, 500)}`
        : null;

      return (
        <div
          className={`flex items-center justify-center p-5 ${
            fullPage
              ? 'min-h-screen bg-gradient-to-br from-primary/30 to-secondary/30 dark:from-primary-dark/10 dark:to-secondary-dark/10'
              : 'w-full py-10'
          }`}
        >
          <Card className="max-w-xl w-full">
            <Card.Header title="⚠️ Something Went Wrong" />

            <div className="p-6">
              <p className="mb-4 text-text-secondary dark:text-text-secondary-dark">
                An unexpected error occurred. Please try again or return to the home page.
              </p>

              {!isDevelopment && supportLink && (
                <p className="mb-6 text-sm">
                  Need help?{' '}
                  <a href={supportLink} className="text-primary hover:underline font-bold">
                    Contact Support
                  </a>
                </p>
              )}

              {isDevelopment && error && (
                <details className="mb-6 p-3 bg-surface-base dark:bg-surface-base-dark border border-border rounded-lg overflow-hidden">
                  <summary className="font-semibold cursor-pointer select-none text-sm">
                    Technical Details (Dev Mode)
                  </summary>
                  <pre className="mt-3 p-4 bg-slate-950 text-slate-300 rounded font-mono text-xs overflow-auto max-h-40 shadow-inner">
                    {error.toString()}
                    {'\n\n'}
                    {errorInfo?.componentStack}
                  </pre>
                </details>
              )}
            </div>

            <Card.Footer className="flex gap-4">
              <Button onClick={this.resetError} className="flex-1">
                Try Again
              </Button>
              <Button
                onClick={() => (window.location.href = '/')}
                color_name="secondary"
                variant="border"
                className="flex-1"
              >
                Go Home
              </Button>
            </Card.Footer>
          </Card>
        </div>
      );
    }

    return children;
  }
}

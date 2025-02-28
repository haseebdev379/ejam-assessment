import React from 'react';

import { AiOutlineWarning } from 'react-icons/ai';
import { FiRefreshCw } from 'react-icons/fi';

import Button from '@/components/button';

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex flex-col items-center justify-center h-screen text-center space-y-4">
          <AiOutlineWarning className="text-error text-6xl" />
          <h1 className="text-2xl font-bold text-error">
            Something went wrong.
          </h1>
          <p className="text-gray-600">An unexpected error occurred.</p>
          <Button
            onClick={() => window.location.reload()}
            startIcon={<FiRefreshCw />}
          >
            Reload Page
          </Button>
        </div>
      );
    }

    return this.props.children;
  }
}

"use client";
import { Component, ErrorInfo, ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Flashcard error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Alert variant="destructive">
          <AlertTitle>Something went wrong</AlertTitle>
          <AlertDescription>
            <p>There was an error loading the flashcards.</p>
            <Button
              variant="outline"
              onClick={() => this.setState({ hasError: false })}
              className="mt-4"
            >
              Try again
            </Button>
          </AlertDescription>
        </Alert>
      );
    }

    return this.props.children;
  }
}
import React, { Component, ErrorInfo } from 'react';
import { State } from './types';
import { AppError } from 'components/AppError';

class ErrorBoundary extends Component<{}, State> {
  constructor() {
    super({});
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error: Error, info: ErrorInfo) {
    return { error };
  }

  render() {
    if (this.state.error) {
      const { error, info } = this.state;
      return <AppError
        title="Boom!"
        message="Parece que um erro inesperado aconteceu."
        icon="explosion"
        error={error}
        info={info}
      />
    };
    return this.props.children;
  }
}

export default ErrorBoundary;
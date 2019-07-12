import React, { Component, ErrorInfo } from 'react';
import { ModalError } from 'components/ModalError';
import { State } from './types';

class ModalErrorBoundary extends Component<{}, State> {
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
      return <ModalError
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

export default ModalErrorBoundary;
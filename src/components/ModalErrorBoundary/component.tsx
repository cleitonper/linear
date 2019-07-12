import React, { Component, ErrorInfo } from 'react';
import { ModalError } from 'components/ModalError';
import { StepFooter } from 'components/StepFooter';
import { StepButton } from 'components/StepButton';
import { State, Props } from './types';

class ModalErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { error: null, info: null };
  }

  static getDerivedStateFromError(error: Error, info: ErrorInfo) {
    return { error, info };
  }

  render() {
    if (this.state.error) {
      const { error, info } = this.state;
      const { onClose } = this.props;
      return (
        <>
          <ModalError
            title="Boom!"
            message="Parece que um erro inesperado aconteceu."
            icon="explosion"
            error={error}
            info={info}
          />
          <StepFooter style={{ marginTop: '18px' }}>
            <StepButton action="prev" type="button" disabled />
            <StepButton action="close" type="button" onClick={onClose} />
            <StepButton action="next" type="submit" disabled />
          </StepFooter>
        </>
      );
    };
    return this.props.children;
  }
}

export default ModalErrorBoundary;
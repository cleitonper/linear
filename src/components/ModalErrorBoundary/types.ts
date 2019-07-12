import { ErrorInfo } from 'react';

export interface Props {
  onClose: () => void;
}

export interface State {
  error: Error | null;
  info: ErrorInfo | null;
}

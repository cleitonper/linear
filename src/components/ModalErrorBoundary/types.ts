import { ErrorInfo } from 'react';

export interface State {
  error: Error | null;
  info: ErrorInfo | null;
}

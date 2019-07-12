import { ErrorInfo } from 'react';

export interface Props {
  className?: string;
  title: string;
  message: string;
  icon: string;
  error?: Error | null;
  info?: ErrorInfo | null;
}
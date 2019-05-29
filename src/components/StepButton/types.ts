import { ButtonHTMLAttributes } from 'react';

export interface Props extends ButtonHTMLAttributes<Element> {
  className?: string;
  action: 'prev' | 'close' | 'next';
}

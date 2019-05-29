import { ReactElement } from 'react';

export interface Step {
  title: string;
}

export type StepElement = ReactElement<Step>;

export interface Config {
  initialStep?: number;
  steps: ReactElement<Step>[];
}

export interface Context {
  step: StepElement;
  current: number;
  last: number;
  navigation: {
    next: () => void;
    prev: () => void;
  };
}

export interface Props {
  className?: string;
  children: ReactElement<Step>[] | ReactElement<Step>;
}

import { Dispatch } from 'react';
import { Fraction } from 'mathjs';

export interface Store {
  method: string;
  size: number;
  coefficients: Fraction[][];
  results: Fraction[][];
}

export interface Action {
  type: string;
  payload: Partial<Store>;
}

export interface Reducer {
  (state: Store, action: Action): Store;
}

export interface Context {
  store: Store;
  dispatch: Dispatch<Action>;
}

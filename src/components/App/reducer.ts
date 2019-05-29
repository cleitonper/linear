import { Reducer, Store } from './types';

export const initialState: Store = {
  method: '',
  size: 3,
  results: [],
  coefficients: [],
};

export const reducer: Reducer = (state, action) => {
  switch (action.type) {
    case 'update':
      return { ...state, ...action.payload };
    case 'reset':
      return initialState;
    default:
      throw new Error(`[app-reducer]: invalid action ${action.type}`);
  }
};

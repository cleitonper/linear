import { createContext } from 'react';
import { Context } from './types';

export const AppContext = createContext<Context | null>(null);

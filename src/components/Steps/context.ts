import { createContext } from 'react';
import { Context } from './types';

export const StepsContext = createContext<Context | null>(null);

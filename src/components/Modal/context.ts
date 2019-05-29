import { createContext } from 'react';

/**
 * This context is used to share state
 * between modal children components.
 */
export const ModalContext = createContext({ open: false, close: () => {} });

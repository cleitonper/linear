import { useState } from 'react';
import { CloseModal, OpenModal, ToggleModal } from './types';

/**
 * Hook used to manage Modal State.
 *
 * @param {boolean} initialState
 * the default value to the `isOpen` state.
 *
 * @returns {Array} returns an array containing
 * the following properties: `isOpen`, `close`, `open`
 * and `toggle` respectively. The property `isOpen`
 * must be used to control the modal state, and the others
 * are used to change this state.
 */
const useModal = (
  initialState = false
): [boolean, CloseModal, OpenModal, ToggleModal] => {
  const [isOpen, setIsOpen] = useState(initialState);

  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);
  const toggle = () => setIsOpen(!isOpen);

  return [isOpen, close, open, toggle];
};

export { useModal };

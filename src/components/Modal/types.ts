export interface Props {
  /**
   * Boolean state that controls the modal behavior.
   * When sets to **true**, the modal will be opened.
   * When set to **false**, the modal will be closed.
   *
   * This prop must be initialized with the **boolean**
   * *isOpen* returned by the *useModal hook*.
   */
  open: boolean;

  /**
   * Function that set the *open* state
   * of the modal to **false**.
   *
   * This prop must be initialized with the **function**
   * *close* returned by the *useModal hook*.
   */
  close: CloseModal;

  /**
   * The modal title
   */
  title?: string;

  /**
   * Show close button?
   */
  showCloseButton?: boolean;
}

/**
 * Function used to close the modal
 */
export interface CloseModal {
  (): void;
}

/**
 * Function used to open the modal
 */
export interface OpenModal {
  (): void;
}

/**
 * Function used to toggle the modal
 */
export interface ToggleModal {
  (): void;
}

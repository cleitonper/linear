import React, {
  FunctionComponent,
  HTMLAttributes,
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import { animated, useTransition } from 'react-spring';
import styled from 'styled-components';
import { ModalContext } from './context';
import { Props } from './types';
import { ModalErrorBoundary } from 'components/ModalErrorBoundary';
import { useDimensions } from 'hooks';
import { breakpoint } from 'helpers';

/**
 * This component contains animations definitions
 * to be used in **Overlay** *component*.
 */
const BaseOverlay: FunctionComponent<HTMLAttributes<Element>> = ({
  className,
  onClick,
}) => {
  const { open } = useContext(ModalContext);
  const transitions = useTransition(open, null, {
    from: { backgroundColor: 'rgba(0, 0, 0, 0)' },
    enter: { backgroundColor: 'rgba(0, 0, 0, 0.75)' },
    leave: { backgroundColor: 'rgba(0, 0, 0, 0)', pointerEvents: 'none' },
  });
  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              key={key}
              className={className}
              style={props}
              onClick={onClick}
            />
          )
      )}
    </>
  );
};

/**
 * This component contains animations definitions
 * to be used in **Wrapper** *component*.
 */
const BaseWrapper: FunctionComponent<HTMLAttributes<Element>> = ({
  children,
  className,
}) => {
  const { open } = useContext(ModalContext);
  const transitions = useTransition(open, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div className={className} key={key} style={props}>
              {children}
            </animated.div>
          )
      )}
    </>
  );
};

/**
 * This component contains animations definitions
 * to be used in **Content** *component*.
 */
const BaseContent: FunctionComponent<HTMLAttributes<Element>> = ({
  children,
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { width: elementWidth } = useDimensions(ref);
  const { open } = useContext(ModalContext);
  const transitions = useTransition(open, null, {
    from: { opacity: 0, transform: 'translateY(-32px)' },
    enter: { opacity: 1, transform: 'translateY(0px)' },
    leave: { opacity: 0, transform: 'translateY(32px)' },
  });

  useEffect(() => {
    const addMargin = () => {
      if (!ref.current) return;

      const screenWidth = window.innerWidth
      || document.documentElement.clientWidth
      || document.body.clientWidth;

      const margin = (elementWidth + 64) >= screenWidth
        ? '32px'
        : 'auto';

      ref.current.style.marginLeft = margin;
      ref.current.style.marginRight = margin;
    };

    window.addEventListener('resize', addMargin);
    return () => { window.removeEventListener('resize', addMargin) };
  });

  return (
    <>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <animated.div
              aria-modal
              ref={ref}
              key={key}
              style={props}
              className={className}
            >
              {children}
            </animated.div>
          )
      )}
    </>
  );
};

/**
 * This component contains a default HTML
 * structure for the **CloseButton** *component*.
 */
const BaseCloseButton: FunctionComponent<HTMLAttributes<Element>> = ({
  className,
  onClick,
}) => (
  <button
    data-dismiss="modal"
    aria-label="close"
    className={className}
    onClick={onClick}
  >
    <span aria-hidden="true">&times;</span>
  </button>
);

/**
 * This component is used to show an
 * overlay behind floating modal
 * component.
 */
const Overlay = styled(BaseOverlay)`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;

/**
 * This component is used to put the modal
 * component above of any others components,
 * making the floating effect.
 */
const Wrapper = styled(BaseWrapper)`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;

  @media (min-width: ${breakpoint.sm + 1}px) and (min-height: ${breakpoint.sm + 1}px) {
    pointer-events: none;
  }
`;

/**
 * This component is used to align the modal
 * content at the center of the screen and
 * show the scroll bar when necessary.
 */
const ScrollArea = styled.div`
  width: 100%;
  height: 100%;
  overflow: auto;
  text-align: center;
  white-space: nowrap;

  ::before {
    content: '';
    display: inline-block;
    vertical-align: middle;
    visibility: hidden;
    height: 100%;
  }

  @media (max-width: ${breakpoint.sm}px), (max-height: ${breakpoint.sm}px) {
    background-color: #ffffff;
  }
`;

/**
 * This component represents the modal
 * content area.
 */
const Content = styled(BaseContent)`
  text-align: left;
  white-space: normal;
  background-color: #ffffff;
  position: relative;
  pointer-events: auto;
  min-width: 280px;
  padding: 32px;
  display: inline-block;
  vertical-align: middle;
  margin: 32px auto;

  @media (max-width: ${breakpoint.sm}px), (max-height: ${breakpoint.sm}px) {
    border: 1px solid rgba(180,180,180,0.75);
  }
`;

/**
 * This component is designed to render
 * the modal modal title and close button
 */
const Header = styled.div`
  display: grid;
  align-items: center;
  grid:
    'title button' auto /
    1fr 24px;
  transform: translateY(-65%);
`;

/**
 * This component is used to explain
 * the main purpose of the modal with
 * a featured text at the top of the modal.
 */
const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 18px;
  grid-area: title;
`;

/**
 * This component is used to close the modal.
 */
const CloseButton = styled(BaseCloseButton)`
  margin: 0;
  padding: 5px;
  width: 32px;
  height: 32px;
  border: 0px;
  outline: 0px;
  opacity: 0.75;
  font-size: 24px;
  background-color: transparent;
  transition: opacity 400ms;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  grid-area: button;

  ::-moz-focus-inner {
    border: 0px;
  }

  &:hover {
    opacity: 1;
  }
`;

/**
 * This component is used  to render
 * the modal's **{children}**
 */
const Body = styled.div`
  font-size: 18px;
`;

/**
 * Use this component to show a floating
 * box where you can put your content inside.
 */
const Modal: FunctionComponent<Props> = ({
  open,
  close,
  title,
  showCloseButton,
  children,
}) => {
  useEffect(() => {
    const exitOnEsc = ({ keyCode }: KeyboardEvent) => {
      const ESC = 27;
      if (keyCode === ESC) close();
    };

    document.addEventListener('keydown', exitOnEsc);
    return () => document.removeEventListener('keydown', exitOnEsc);
  }, [close]);

  useLayoutEffect(() => {
    if (open) document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = '' };
  }, [open]);

  return createPortal(
    <ModalContext.Provider value={{ open, close }}>
      <Overlay className="modal-overlay" onClick={close} />
      <Wrapper>
        <ScrollArea>
          <Content>
            <ModalErrorBoundary onClose={close}>
              {(title || showCloseButton) && (
                <Header>
                  {title && <Title>{title}</Title>}
                  {showCloseButton && <CloseButton onClick={close} />}
                </Header>
              )}
              <Body>{children}</Body>
            </ModalErrorBoundary>
          </Content>
        </ScrollArea>
      </Wrapper>
    </ModalContext.Provider>,
    document.body
  );
};

export default Modal;

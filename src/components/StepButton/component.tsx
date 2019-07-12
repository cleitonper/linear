import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import { StepsContext } from 'components/Steps';
import { Props } from './types';

const BaseStepButton: FunctionComponent<Props> = ({
  className,
  disabled,
  action,
  ...props
}) => {
  const stepsContext = useContext(StepsContext);
  if (!stepsContext) {
    return (
      <button className={className} disabled={disabled} {...props}>
        <span aria-hidden="true">
          {action === 'prev' && String.fromCharCode(8249)}
          {action === 'close' && String.fromCharCode(215)}
          {action === 'next' && String.fromCharCode(8250)}
        </span>
      </button>
    );
  };

  const { current, last } = stepsContext;
  const hasPrev = current > 0;
  const hasNext = current < last;
  const isDisabled =
    action === 'prev' && !hasPrev
      ? true
      : action === 'next' && !hasNext
      ? true
      : false;

  return (
    <button className={className} {...{ ...props, disabled: disabled || isDisabled }}>
      <span aria-hidden="true">
        {action === 'prev' && String.fromCharCode(8249)}
        {action === 'close' && String.fromCharCode(215)}
        {action === 'next' && String.fromCharCode(8250)}
      </span>
    </button>
  );
};

const StepButton = styled(BaseStepButton)`
  --color: ${props =>
    props.action === 'close' ? 'var(--color-danger)' : 'var(--color-primary)'};

  width: 32px;
  height: 32px;
  padding: 0px;
  display: inline-flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: var(--color);
  color: var(--color);
  background: transparent;
  font-family: inherit;
  font-weight: bold;
  font-size: 16px;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;

  ::-moz-focus-inner {
    border: 0px;
  }

  :disabled {
    opacity: 0.45;
    cursor: no-drop;
  }
`;

export default StepButton;

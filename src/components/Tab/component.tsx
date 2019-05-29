import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const TabBase: FunctionComponent<Props> = ({
  className,
  onClick,
  disabled,
  children,
}) => (
  <button className={className} onClick={onClick} disabled={disabled}>
    {children}
  </button>
);

const Tab = styled(TabBase)`
  border: 1px solid #ffffff;
  color: #ffffff;
  background: transparent;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.2;
  white-space: nowrap;
  text-decoration: none;
  cursor: pointer;

  :first-child {
    border-radius: 5px 0px 0px 5px;
  }

  :last-child {
    border-radius: 0px 5px 5px 0px;
  }

  :disabled {
    opacity: 0.35 !important;
    cursor: not-allowed;
  }
`;

export default Tab;

import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Tab } from 'components/Tab';
import { Props } from './types';

const TabsBase: FunctionComponent<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const Tabs = styled(TabsBase)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-content: center;

  ${Tab} {
    opacity: 0.8;
    box-sizing: content-box;
    text-transform: uppercase;
    text-align: center;
    padding: 8px 16px;
    width: 100px;

    &:not(:last-child) {
      border-right: 1px solid #ffffff;
    }
  }
`;

export default Tabs;

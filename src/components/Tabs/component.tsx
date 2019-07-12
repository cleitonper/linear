import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { breakpoint } from 'helpers';
import { Tab } from 'components/Tab';
import { Props } from './types';

const TabsBase: FunctionComponent<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const Tabs = styled(TabsBase)`
  display: flex;
  justify-content: center;
  align-content: center;

  @media (max-width: ${breakpoint.sm}px) {
    flex-flow: column wrap;
  }

  @media (min-width: ${breakpoint.sm + 1}px) {
    flex-flow: row wrap;
  }

  ${Tab} {
    opacity: 0.8;
    box-sizing: content-box;
    text-transform: uppercase;
    text-align: center;
    padding: 8px 16px;
    width: 100px;

    @media (max-width: ${breakpoint.sm}px) {
      :first-child { border-radius: 5px 5px 0px 0px; }
      :last-child { border-radius: 0px 0px 5px 5px; }
      :not(:last-child) { border-bottom: none; }
    }

    @media (min-width: ${breakpoint.sm + 1}px) {
      :first-child { border-radius: 5px 0px 0px 5px; }
      :last-child { border-radius: 0px 5px 5px 0px; }
      :not(:last-child) { border-right: none; }
    }
  }
`;

export default Tabs;

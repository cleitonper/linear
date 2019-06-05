import React, { FunctionComponent } from 'react';
import styled, { css } from 'styled-components';
import { media } from 'helpers';
import { Tab } from 'components/Tab';
import { Props } from './types';

const TabsBase: FunctionComponent<Props> = ({ className, children }) => (
  <div className={className}>{children}</div>
);

const Tabs = styled(TabsBase)`
  display: flex;
  justify-content: center;
  align-content: center;

  ${media('xs', 'sm')(css`
    flex-flow: column wrap;
  `)}

  ${media('sm')(css`
    flex-flow: row wrap;
  `)}

  ${Tab} {
    opacity: 0.8;
    box-sizing: content-box;
    text-transform: uppercase;
    text-align: center;
    padding: 8px 16px;
    width: 100px;

    ${media('xs', 'sm')(css`
      :first-child { border-radius: 5px 5px 0px 0px; }
      :last-child { border-radius: 0px 0px 5px 5px; }
      :not(:last-child) { border-bottom: none; }
    `)}

    ${media('sm')(css`
      :first-child { border-radius: 5px 0px 0px 5px; }
      :last-child { border-radius: 0px 5px 5px 0px; }
      :not(:last-child) { border-right: none; }
    `)}
  }
`;

export default Tabs;

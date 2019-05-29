import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const BaseStep: FunctionComponent<Props> = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Step = styled(BaseStep)`
  width: 100%;
`;

export default Step;

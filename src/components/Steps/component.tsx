import React, { FunctionComponent, Children } from 'react';
import styled from 'styled-components';
import { StepHeader } from 'components/StepHeader';
import { StepsContext } from './context';
import { useSteps } from './hook';
import { Props, StepElement } from './types';

const BaseSteps: FunctionComponent<Props> = ({ children, className }) => {
  const steps = Children.toArray<StepElement>(children);
  const { step, current, last, navigation } = useSteps({ steps });

  return (
    <StepsContext.Provider value={{ step, current, last, navigation }}>
      <div className={className}>
        <StepHeader />
        {steps.map((child, index) => index === current && child)}
      </div>
    </StepsContext.Provider>
  );
};

const Steps = styled(BaseSteps)`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export default Steps;

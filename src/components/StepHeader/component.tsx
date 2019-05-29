import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import { StepsContext } from 'components/Steps';
import { Props } from './types';

const StepDetail = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const StepNumber = styled.div`
  width: 32px;
  height: 32px;
  font-size: 16px;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  border-color: #1890ff;
  color: #1890ff;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
`;

const StepTitle = styled.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.65);
  margin: 16px 0px;
`;

const StepHeader: FunctionComponent<Props> = ({ className }) => {
  const stepsContext = useContext(StepsContext);
  if (!stepsContext) return null;
  const { step, current } = stepsContext;

  return (
    <div className={className}>
      <StepDetail>
        <StepNumber>{current + 1}</StepNumber>
        <StepTitle>{step.props.title}</StepTitle>
      </StepDetail>
    </div>
  );
};

export default StepHeader;

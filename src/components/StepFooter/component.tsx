import styled from 'styled-components';
import { StepButton } from 'components/StepButton';

const StepFooter = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 32px;
  transform: translateY(24px);
  width: 100%;

  ${StepButton}:nth-child(2) {
    margin: 0px 12px;
  }
`;

export default StepFooter;

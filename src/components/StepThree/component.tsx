import React, { useContext, FunctionComponent } from 'react';
import styled from 'styled-components';
import { ModalError } from 'components/ModalError';
import { StepButton } from 'components/StepButton';
import { StepFooter } from 'components/StepFooter';
import { AppContext } from 'components/App';
import { ModalContext } from 'components/Modal';
import { StepsContext } from 'components/Steps';
import { Matrix } from 'components/Matrix';
import { det, breakpoint, } from 'helpers';
import { solveEquation } from './helpers';
import { Props } from './types';

const BaseStepThree: FunctionComponent<Props> = ({ className }) => {
  const appContext = useContext(AppContext);
  const modalContext = useContext(ModalContext);
  const stepsContext = useContext(StepsContext);
  if (!appContext || !modalContext || !stepsContext) return null;
  const { store } = appContext;
  const { coefficients, results, method } = store;
  const { close } = modalContext;
  const { navigation } = stepsContext;
  const { lower, upper, solution } = solveEquation(method, coefficients, results);
  const isSingular = det(coefficients) === 0;

  return (
    <div className={className}>
      {isSingular
        ? <ModalError
          icon="matrix"
          title="Matriz Singular"
          message="Não foi possível resolver a equação, pois a matriz inserida é singular." />
        :(
          <div className="matrices">
            { !!lower.length && <Matrix name="L" elements={lower} /> }
            { !!upper.length && <Matrix name="U" elements={upper} /> }
            <Matrix name="x" elements={solution} />
          </div>
        )}

      <StepFooter>
        <StepButton action="prev" type="button" onClick={navigation.prev} />
        <StepButton action="close" type="button" onClick={close} />
        <StepButton action="next" type="submit" />
      </StepFooter>
    </div>
  );
};

const StepThree = styled(BaseStepThree)`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  .matrices {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 16px;

    @media (max-width: ${breakpoint.sm}px) {
      flex-flow: column wrap;

      ${Matrix} {
        margin: 32px;
        transform: translateX(-15px);
      }
    }

    @media (min-width: ${breakpoint.sm}px) {
      flex-flow: row nowrap;

      ${Matrix}:not(:last-child) {
        margin-right: 24px;
      }
    }
  }
`;

export default StepThree;

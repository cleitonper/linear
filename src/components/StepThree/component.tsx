import React, { useContext, FunctionComponent } from 'react';
import styled from 'styled-components';
import { AppError } from 'components/AppError';
import { StepButton } from 'components/StepButton';
import { StepFooter } from 'components/StepFooter';
import { AppContext } from 'components/App';
import { ModalContext } from 'components/Modal';
import { StepsContext } from 'components/Steps';
import { Matrix } from 'components/Matrix';
import { generateLUMatrices, lusolve, det } from 'helpers';
import { Props } from './types';

const BaseStepThree: FunctionComponent<Props> = ({ className }) => {
  const appContext = useContext(AppContext);
  const modalContext = useContext(ModalContext);
  const stepsContext = useContext(StepsContext);
  if (!appContext || !modalContext || !stepsContext) return null;
  const { store } = appContext;
  const { coefficients, results } = store;
  const { close } = modalContext;
  const { navigation } = stepsContext;

  const isSingular = det(coefficients) === 0;

  const { lower = [], upper = [] } = !isSingular
    ? generateLUMatrices(coefficients)
    : {};

  const solution = !isSingular
    ? lusolve(coefficients, results)
    : [];

  return (
    <div className={className}>
      {isSingular
        ? <AppError
          icon="matrix"
          title="Matriz Singular"
          message="Não foi possível resolver a equação, pois a matriz inserida é singular." />
        :(
          <div className="matrices">
            <Matrix name="L" elements={lower} />
            <Matrix name="U" elements={upper} />
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
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }

  ${Matrix}:not(:last-child) {
    margin-right: 24px;
  }
`;

export default StepThree;

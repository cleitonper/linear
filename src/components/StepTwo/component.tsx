import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import { Form } from 'components/Form';
import { MatrixForm } from 'components/MatrixForm';
import { Props } from './types';
import { StepsContext } from 'components/Steps';
import { ModalContext } from 'components/Modal';
import { StepFooter } from 'components/StepFooter';
import { StepButton } from 'components/StepButton';
import { AppContext } from 'components/App/context';
import { objectToMatrix, matrixToObject } from 'helpers';

const BaseStepTwo: FunctionComponent<Props> = ({ className }) => {
  const appContext = useContext(AppContext);
  const modalContext = useContext(ModalContext);
  const stepsContext = useContext(StepsContext);
  if (!appContext || !modalContext || !stepsContext) return null;
  const { store, dispatch } = appContext;
  const { size, coefficients, results } = store;
  const { close } = modalContext;
  const { navigation } = stepsContext;

  let coefficientsObject = {};
  let resultsObject = {};

  if (coefficients.length === size) {
    coefficientsObject = matrixToObject(coefficients, size, size, 'a');
    resultsObject = matrixToObject(results, size, 1, 'b');
  }

  const initialData = { ...coefficientsObject, ...resultsObject };

  const handleSubmit = (data: object) => {
    let coefficients = objectToMatrix(data, size, size, 'a');
    let results = objectToMatrix(data, size, 1, 'b');

    dispatch({ type: 'update', payload: { coefficients, results } });
    navigation.next();
  };

  return (
    <Form
      initialData={initialData}
      onSubmit={handleSubmit}
      className={className}
    >
      <div className="matrices">
        <MatrixForm rows={size} columns={size} name="a" label="A | b" />
        <MatrixForm rows={size} columns={1} name="b" />
      </div>

      <StepFooter>
        <StepButton action="prev" type="button" onClick={navigation.prev} />
        <StepButton action="close" type="button" onClick={close} />
        <StepButton action="next" type="submit" />
      </StepFooter>
    </Form>
  );
};

const StepTwo = styled(BaseStepTwo)`
  .matrices {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    margin-top: 16px;
  }

  ${MatrixForm}:first-child {
    padding-right: 6px;
  }

  ${MatrixForm}:last-child {
    padding-left: 6px;
    border-left: 1px dashed #656565;
  }
`;

export default StepTwo;

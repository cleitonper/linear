import React, { FunctionComponent, useContext } from 'react';
import styled from 'styled-components';
import { Form, Input, Select } from 'components/Form';
import { Props, FormContent } from './types';
import { StepsContext } from 'components/Steps';
import { ModalContext } from 'components/Modal';
import { StepFooter } from 'components/StepFooter';
import { StepButton } from 'components/StepButton';
import { AppContext } from 'components/App/context';
import * as Yup from 'yup';

const BaseStepOne: FunctionComponent<Props> = ({ className }) => {
  const appContext = useContext(AppContext);
  const modalContext = useContext(ModalContext);
  const stepsContext = useContext(StepsContext);
  if (!appContext || !modalContext || !stepsContext) return null;
  const { store, dispatch } = appContext;
  const { method, size } = store;
  const { close } = modalContext;
  const { navigation } = stepsContext;
  const initialData = { method, size };

  const handleSubmit = (data: FormContent) => {
    dispatch({ type: 'update', payload: data });
    navigation.next();
  };

  const options = [
    { id: 'gauss', title: 'Gauss', disabled: true },
    { id: 'lu', title: 'LU' },
  ];

  const schema = Yup.object().shape({
    size: Yup.number()
      .transform(value => (isNaN(value) ? undefined : value))
      .required()
      .integer()
      .min(2)
      .max(5),
  });

  return (
    <Form
      className={className}
      onSubmit={handleSubmit}
      initialData={initialData}
      schema={schema}
    >
      <Select multiple={false} name="method" label="Selecione um método" options={options} />
      <Input
        name="size"
        label="Informe a ordem do sistema"
        placeholder="3"
        type="text"
      />
      <StepFooter>
        <StepButton action="prev" type="button" onClick={navigation.prev} />
        <StepButton action="close" type="reset" onClick={close} />
        <StepButton action="next" type="submit" />
      </StepFooter>
    </Form>
  );
};

const StepOne = styled(BaseStepOne)`
  margin-top: 16px;

  select,
  input {
    width: 100%;
  }
`;

export default StepOne;

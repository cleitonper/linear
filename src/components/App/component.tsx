import React, { FunctionComponent, useReducer } from 'react';
import styled from 'styled-components';
import { Steps } from 'components/Steps';
import { Step } from 'components/Step';
import { StepOne } from 'components/StepOne';
import { StepTwo } from 'components/StepTwo';
import { StepThree } from 'components/StepThree';
import { Modal, useModal } from 'components/Modal';
import { AppPresentation } from 'components/AppPresentation';
import { ParticlesBackground } from 'components/ParticlesBackground';
import { Logo } from 'components/Logo';
import { Tabs } from 'components/Tabs';
import { Tab } from 'components/Tab';
import { AppContext } from './context';
import { reducer, initialState } from './reducer';

const Container = styled.div`
  overflow: auto;
  min-width: calc(100vw - (100vw - 100%));
  min-height: 100vh;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  padding: 24px 16px;
  position: relative;
  background: #0f0c29;
  background: linear-gradient(to right, #0f0c29, #302b63, #24243e);
  color: #fff;

  ${Logo}, ${Tabs} {
    position: relative;
  }

  ${Logo}::after, ${Tabs}::before {
    content: '';
    background-color: #ffffff;
    position: absolute;
    display: block;
    height: 64px;
    width: 1px;
  }

  ${Logo} {
    border: 1px solid #ffffff;
    border-radius: 50%;
    margin-bottom: 64px;
    padding: 16px;
  }

  ${Logo}::after {
    bottom: 0;
    left: 50%;
    transform: translateY(100%);
  }

  ${AppPresentation} {
    min-width: 320px;
  }

  ${Tabs} {
    margin-top: 64px;
  }

  ${Tabs}::before {
    top: 0;
    left: 50%;
    transform: translateY(-100%);
  }
`;

const App: FunctionComponent = () => {
  const [store, dispatch] = useReducer(reducer, initialState);
  const [isOpen, close, open] = useModal(false);

  const openModal = (method: string) => {
    return () => {
      dispatch({ type: 'update', payload: { method } });
      open();
    };
  };

  return (
    <AppContext.Provider value={{ store, dispatch }}>
      <Container>
        <ParticlesBackground />
        <Logo />
        <AppPresentation />
        <Tabs>
          <Tab onClick={openModal('gauss')}>Gauss</Tab>
          <Tab onClick={openModal('lu')}>LU</Tab>
        </Tabs>
        <Modal open={isOpen} close={close}>
          <Steps>
            <Step title="Definições">
              <StepOne />
            </Step>
            <Step title="Matriz">
              <StepTwo />
            </Step>
            <Step title="Resultado">
              <StepThree />
            </Step>
          </Steps>
        </Modal>
      </Container>
    </AppContext.Provider>
  );
};

export default App;

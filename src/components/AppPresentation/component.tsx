import React, { FunctionComponent, useRef } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import { useDimensions } from 'hooks';
import { Link } from 'components/Link';
import { Props } from './types';

const AppPresentationBase: FunctionComponent<Props> = ({ className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const { height } = useDimensions(ref);
  const styles = useSpring({
    from: { height: '0px' },
    to: { height: `${height}px` },
    delay: 150,
  });

  return (
    <animated.div
      className={className}
      style={{ ...styles, maxHeight: height }}
    >
      <div className="inner" ref={ref}>
        <h1>Calculadora de Sistemas Lineares</h1>

        <p>
          Esta ferramenta realiza a resolução de{' '}
          <Link to="https://bit.ly/2J9EZBg">Sistemas de Equações Lineares</Link>{' '}
          usando o método de{' '}
          <Link to="https://bit.ly/2Yb18n7">Decomposição em LU</Link>. O
          método de{' '}
          <Link to="https://bit.ly/2JgGAFd"> Eliminação de Gauss</Link> ainda
          não está disponível, mas será adicionado em breve.
        </p>
      </div>
    </animated.div>
  );
};

const AppPresentation = styled(AppPresentationBase)`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  position: relative;
  border-width: 1px 0px;
  border-color: #ffffff;
  border-style: solid;
  max-width: 860px;
  overflow: hidden;
  width: 100%;

  .inner {
    overflow: visible;
    padding: 64px 0px;
  }

  h1 {
    font-size: 24px;
    line-height: 1.45em;
    letter-spacing: 0.3em;
    text-transform: uppercase;
    margin: 0px 0px 32px;
    text-align: center;
  }

  p {
    font-size: 16px;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.17em;
    line-height: 1.85em;
    padding: 0px 64px;
    opacity: 0.8;
  }
`;

export default AppPresentation;

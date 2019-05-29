import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const BaseFraction: FunctionComponent<Props> = ({
  className,
  title,
  value,
}) => {
  if (!value) return null;
  const { d: denominator, n: numerator, s: signal } = value;
  const decimal = numerator / denominator;
  const isInteger = Number.isInteger(decimal);

  return (
    <span className={className} title={title}>
      {signal === -1 && <span className="minus">&#8722;</span>}
      {isInteger ? (
        <span>{decimal}</span>
      ) : (
        <span className="fraction">
          <span className="numerator">{numerator}</span>
          <span className="denominator">{denominator}</span>
        </span>
      )}
    </span>
  );
};

const Fraction = styled(BaseFraction)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 12px;
  transform: ${({ value }) =>
    value && value.s === -1 ? 'translateX(-8px)' : 'translateX(0px)'};

  .minus {
    transform: translateY(-1px);
    display: inline-block;
    margin-right: 6px;
  }

  .fraction {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;
    align-items: center;
    position: relative;
    font-size: 1em;
  }

  .fraction::after {
    content: '';
    display: block;
    width: 90%;
    height: 1px;
    background-color: #000000;
    position: absolute;
    top: 50%;
    left: 5%;
  }

  .numerator {
    color: 666;
  }

  .denominator {
    color: #333;
  }
`;

export default Fraction;

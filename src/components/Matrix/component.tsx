import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Fraction } from 'components/Fraction';
import { repeatContent } from 'helpers';
import { Props } from './types';

const BaseMatrix: FunctionComponent<Props> = ({
  name,
  className,
  elements,
}) => (
  <div className={className}>
    {name && <span className="name">{`${name} = `}</span>}
    <div className="matrix">
      {elements.map((row, rindex) =>
        row.map((value, cindex) => (
          <Fraction
            key={`L${rindex}C${cindex}`}
            title={`L${rindex}C${cindex}`}
            value={value}
          />
        ))
      )}
    </div>
  </div>
);

const Matrix = styled(BaseMatrix)`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;

  .name {
    margin-right: 6px;
  }

  .matrix {
    padding: 0px 16px;
    position: relative;
    border: 1px solid #000000;
    display: inline-grid;
    grid: ${({ elements }) =>
      `${repeatContent('1fr', elements.length)} /
     ${repeatContent('1fr', elements[0].length)}`};

    ::before,
    ::after {
      content: '';
      position: absolute;
      background-color: #ffffff;
      width: calc(100% - 32px);
      height: 3px;
    }

    ::before {
      top: 0;
      left: 16px;
      transform: translateY(-50%);
    }

    ::after {
      bottom: 0;
      left: 16px;
      transform: translateY(50%);
    }
  }
`;

export default Matrix;

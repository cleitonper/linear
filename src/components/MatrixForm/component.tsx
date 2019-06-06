import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';
import { repeatContent, generateMatrixFields } from 'helpers';

const BaseMatrixForm: FunctionComponent<Props> = ({
  rows,
  columns,
  className,
  label,
  name,
}) => (
  <div className={className}>
    {label && <span className="label">{`${label} = `}</span>}
    <div className="matrix">{generateMatrixFields(rows, columns, name)}</div>
  </div>
);

const MatrixForm = styled(BaseMatrixForm)`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transform: translateX(-15px);

  .label {
    display: block;
    margin-right: 6px;
    min-width: 60px;
  }

  .matrix {
    display: grid;
    grid-gap: 6px;
    grid: ${props =>
      `${repeatContent('50px', props.rows)} /
      ${repeatContent('50px', props.columns)}`};
    justify-content: center;
  }
`;

export default MatrixForm;

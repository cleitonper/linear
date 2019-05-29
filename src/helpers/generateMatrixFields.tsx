import React, { ReactElement } from 'react';
import { Input } from 'components/Form';

export const generateMatrixFields = (
  rows: number,
  columns: number,
  name = ''
): ReactElement[] => {
  const fields = [];
  for (let row = 0; row < rows; ++row) {
    for (let column = 0; column < columns; ++column) {
      const placeholder = `${name}${row + 1}${column + 1}`;
      fields.push(
        <Input key={placeholder} name={placeholder} placeholder={placeholder} />
      );
    }
  }
  return fields;
};

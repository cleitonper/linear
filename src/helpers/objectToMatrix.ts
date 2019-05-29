import { fraction, Fraction } from 'mathjs';
import { generateMatrix } from 'helpers';

export const objectToMatrix = (
  obj: object,
  rows: number,
  columns: number,
  name: string
): Fraction[][] => {
  let matrix = generateMatrix<Fraction>(rows, columns, fraction(1) as Fraction);
  for (let row = 0; row < rows; ++row) {
    for (let column = 0; column < columns; ++column) {
      let value = obj[`${name}${row + 1}${column + 1}`];
      matrix[row][column] = fraction(value) as Fraction;
    }
  }
  return matrix;
};

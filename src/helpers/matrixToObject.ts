import { Fraction } from 'mathjs';

interface MatrixObject {
  [key: string]: number;
}

export const matrixToObject = (
  matrix: Fraction[][],
  rows: number,
  columns: number,
  name: string
): MatrixObject => {
  const matrixObject = {};
  for (let line = 0; line < rows; ++line) {
    for (let column = 0; column < columns; ++column) {
      const { n: numerator, d: denominator, s: signal } = matrix[line][column];
      const value = (numerator / denominator) * signal;
      matrixObject[`${name}${line + 1}${column + 1}`] = value;
    }
  }
  return matrixObject;
};

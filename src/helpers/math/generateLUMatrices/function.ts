import * as math from 'mathjs';
import {
  summation,
  generateDefaultLower,
  generateDefaultUpper,
} from './helpers';
import { LU } from './types';

export const generateLUMatrices = (matrix: math.Fraction[][]): LU => {
  const size = matrix.length;
  const lower = generateDefaultLower(size);
  const upper = generateDefaultUpper(size);

  for (let row = 0; row < size; ++row) {
    for (let column = 0; column < size; ++column) {
      if (row <= column) {
        const upperValue = matrix[row][column];
        const lineSummation = summation('line', row, column, { lower, upper });
        upper[row][column] = math.subtract(
          upperValue,
          lineSummation
        ) as math.Fraction;
      }

      if (row > column) {
        const matrixValue = matrix[row][column];
        const upperValue = upper[column][column];
        const columnSummation = summation('column', row, column, {
          lower,
          upper,
        });
        lower[row][column] = math.divide(
          math.subtract(matrixValue, columnSummation),
          upperValue || 1
        ) as math.Fraction;
      }
    }
  }

  return { lower, upper };
};

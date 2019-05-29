import { det as mathdet, Fraction } from 'mathjs';
import { matrixFractionToDecimal } from 'helpers';

export const det = (matrix: Fraction[][]): number => {
  return mathdet(
    matrixFractionToDecimal(matrix)
  );
};

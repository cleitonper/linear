import { Fraction } from 'mathjs';

export const matrixFractionToDecimal = (matrix: Fraction[][]): number[][] =>
  matrix.map(_ => _.map(value => (value.n / value.d) * value.s));

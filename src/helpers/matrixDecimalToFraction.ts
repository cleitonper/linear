import { fraction, Fraction } from 'mathjs';

export const matrixDecimalToFraction = (matrix: number[][]): Fraction[][] =>
  matrix.map(_ => _.map(value => fraction(value) as Fraction));

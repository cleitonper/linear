import { Fraction } from 'mathjs';

export type Matrix = (Fraction | null)[][];

export interface LU {
  lower: Matrix;
  upper: Matrix;
}

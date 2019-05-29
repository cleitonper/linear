import { lusolve as mathlusolve, Fraction } from 'mathjs';
import { matrixFractionToDecimal, matrixDecimalToFraction } from 'helpers';

export const lusolve = (
  coefficients: Fraction[][],
  results: Fraction[][]
): Fraction[][] => {
  const decimalResult = mathlusolve(
    matrixFractionToDecimal(coefficients),
    matrixFractionToDecimal(results)
  ) as number[][];

  const fractionResult = matrixDecimalToFraction(decimalResult);

  return fractionResult;
};

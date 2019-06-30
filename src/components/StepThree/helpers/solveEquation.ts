import { Fraction } from "mathjs";
import { lusolve, gausssolve, det, generateLUMatrices } from 'helpers';

export const solveEquation = (
  method: string,
  coefficients: Fraction[][],
  results: Fraction[][],
) => {
  let lower: Fraction[][] = [];
  let upper: Fraction[][] = [];
  let solution: Fraction[][] = [];

  switch (method) {
    case 'gauss':
      solution = gausssolve(coefficients, results);
      break;
    case 'lu': {
      if (det(coefficients) === 0) break;
      solution = lusolve(coefficients, results);
      const lu = generateLUMatrices(coefficients);
      lower = lu.lower as Fraction[][];
      upper = lu.upper as Fraction[][];
      break;
    }
    default:
      throw new Error(`[solveEquation]: ${method} is an invalid value for method parameter`);
  }

  return { lower, upper, solution };
};
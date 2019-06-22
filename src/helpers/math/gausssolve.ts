import {
  Fraction,
  fraction,
  sum,
  subtract,
  multiply,
  divide,
} from "mathjs";
import { generateMatrix } from '../generateMatrix';

/**
 * Create a augmented matrix based on `coefficients`
 * and `results` matrices.
 *
 * @param coefficients The matrix of coeficients [NxN]
 * @param results The matrix of results [Nx1]
 * @returns An augmented matrix [NxN+1]
 */
const generateAugmentedMatrix = (
  coefficients: Fraction[][],
  results: Fraction[][]
): Fraction[][] => {
  const augmented = coefficients.map(
    (row, rowindex) => [...row, results[rowindex][0]]
  );
  return augmented;
};

/**
 * Move zeros of the first column to bottom
 * of the `matrix`.
 *
 * @see generateAugmentedMatrix()
 * @param matrix An augmented matrix
 * @returns An augmented `matrix` with
 * its first column ordered
 */
const swapMatrixRows = (matrix: Fraction[][]): Fraction[][] => {
  let ordered: Fraction[][] = matrix.map((row) => [...row]);
  const size = {
    rows: matrix.length,
    columns: matrix[0].length,
  };

  for (let rowIndex = 0, columnIndex = 0; rowIndex < (size.rows - 1); ++rowIndex) {
    if (ordered[rowIndex][columnIndex].n !== 0) continue;
    for (let nextRowIndex = (rowIndex + 1); nextRowIndex < size.rows; ++nextRowIndex) {
      if (ordered[nextRowIndex][columnIndex].n === 0) continue;
      const [currentRow, nextRow] = [ordered[rowIndex], ordered[nextRowIndex]];
      ordered[rowIndex] = nextRow;
      ordered[nextRowIndex] = currentRow;
      break;
    }
  }

  return ordered;
};

/**
 * Generate a stepped matrix based on
 * an input `matrix` param.
 *
 * @param matrix An augmented matrix
 * @returns An stepped matrix.
 */
const staggerMatrix = (matrix: Fraction[][]): Fraction[][] => {
  let stepped: Fraction[][] = matrix.map((row) => [...row]);
  const size = {
    rows: matrix.length,
    columns: matrix[0].length,
  };

  for (let diagonalIndex = 0; diagonalIndex < (size.rows - 1); ++diagonalIndex) {
    for (let rowIndex = (diagonalIndex + 1); rowIndex < size.rows; ++rowIndex) {
      if (stepped[diagonalIndex][diagonalIndex].n === 0) continue;
      const scalar = divide(
        stepped[rowIndex][diagonalIndex],
        stepped[diagonalIndex][diagonalIndex]
      ) as Fraction;
      for (let columnIndex = 0; columnIndex < size.columns; ++columnIndex) {
        stepped[rowIndex][columnIndex] = subtract(
          stepped[rowIndex][columnIndex],
          multiply(stepped[diagonalIndex][columnIndex], scalar) as Fraction
        ) as Fraction;
      }
    }
  }

  return stepped;
};

/**
 * Solve a linear equation system.
 *
 * In order to use this function, you'll
 * need to provide an **augmented** and
 * **stepped** matrix to the `matrix` param.
 *
 * @see staggerMatrix()
 * @see generateAugmentedMatrix()
 * @param matrix An augmented and stepped matrix
 * @returns The solution for a linear equation system
 */
const solve = (matrix: Fraction[][]): Fraction[][] => {
  const size = {
    rows: matrix.length,
    columns: matrix[0].length,
  };
  const solution = generateMatrix(size.rows, 1, fraction('1') as Fraction);
  const lastRowIndex = size.rows - 1;
  const lastColumnIndex = size.columns - 2;

  for (let rowIndex = lastRowIndex; rowIndex >= 0; --rowIndex) {
    let lineSumation = fraction('0') as Fraction;
    for (let columnIndex = lastColumnIndex; columnIndex > rowIndex; --columnIndex) {
      lineSumation = sum(
        lineSumation,
        multiply(matrix[rowIndex][columnIndex], solution[columnIndex][0]) as Fraction
      );
    }
    solution[rowIndex][0] = matrix[rowIndex][rowIndex].n === 0
      ? fraction('0') as Fraction
      : divide(
        subtract(matrix[rowIndex][lastColumnIndex + 1], lineSumation) as Fraction,
        matrix[rowIndex][rowIndex]
      ) as Fraction;
  }

  return solution;
};

/**
 * Solve a linear equation system.
 *
 * @param coefficients The coefficients matrix [NxN]
 * @param results The results matrix [Nx1]
 * @returns The solution for a linear equation system [Nx1]
 */
export const gausssolve = (
  coefficients: Fraction[][],
  results: Fraction[][]
) => {
  const augmented = generateAugmentedMatrix(coefficients, results);
  const ordered = swapMatrixRows(augmented);
  const pivoted = staggerMatrix(ordered);
  const solution = solve(pivoted);

  return solution;
};

import * as math from 'mathjs';
import { LU, Matrix } from './types';

/**
 * Make the summation of the product of a range of elements
 * in a matrix. The product is defied be the following recipe:
 *
 * `product = lower[i][k] * upper[k][j]`
 *
 * **where:**\
 * `lower`: is the lower triangular matrix\
 * `upper`: is the upper triangular matrix\
 * `i`: is the row of the `lower` matrix\
 * `j`: is the column of the `upper` matrix\
 * `k`: is a variable that begins with value `1`\
 * and goes to `i - 1` or `j - 1` depending of the
 * value of the `type` parameter.
 *
 * @param type - define which orientation will be used to
 * determine the last element of the sum. when its value is `line`, the last
 * value of `k` will be `line - 1`. if its value is `column`, the last value
 * of `k` will be `column -1`.
 * @param line - can be used to define the last element that will be summed.
 * @param column - can be used to define the last element that will be summed.
 * @param matrices - object containing the `lower` and the `upper` matrices
 * that will be used to compose the summation.
 *
 */
export const summation = (
  type: 'line' | 'column',
  line: number,
  column: number,
  matrices: LU
): math.Fraction => {
  let sum = math.fraction(0) as math.Fraction;
  let product = math.fraction(0) as math.Fraction;
  const start = 0;
  const end = type === 'line' ? line - 1 : column - 1;
  const { lower, upper } = matrices;

  const i = line;
  const j = column;
  let k = start;

  while (k <= end) {
    const lowerValue = lower[i][k];
    const upperValue = upper[k][j];
    if (!lowerValue || !upperValue) continue;
    product = math.multiply(lowerValue, upperValue) as math.Fraction;
    sum = math.sum(sum, product);
    ++k;
  }

  return sum;
};

export const generateDefaultLower = (size: number): Matrix => {
  const identity = math.identity([size, size]) as number[][];
  const lower = identity.map((_, row) =>
    _.map((value, column) =>
      row > column ? null : (math.fraction(value) as math.Fraction)
    )
  );
  return lower;
};

export const generateDefaultUpper = (size: number): Matrix => {
  const zeros = math.zeros([size, size]) as number[][];
  const upper = zeros.map((_, row) =>
    _.map((value, column) =>
      row <= column ? null : (math.fraction(value) as math.Fraction)
    )
  );
  return upper;
};

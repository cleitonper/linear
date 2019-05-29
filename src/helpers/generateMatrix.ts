/**
 * Generate a square initary matrix.
 *
 * @param dimension - the dimension of the matrix.
 * @param fill - the default value for the matrix elements.
 */
export const generateMatrix = <T>(
  rows: number,
  columns: number,
  fill: T
): T[][] => {
  return new Array(rows)
    .fill(fill || null)
    .map(() => new Array(columns).fill(fill || null));
};

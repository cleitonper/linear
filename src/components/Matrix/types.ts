import { Fraction } from 'mathjs';

export interface Props {
  className?: string;
  name?: string;
  elements: (Fraction | null)[][];
}

import { useState } from 'react';
import { Config } from './types';

const useSteps = ({ initialStep = 0, steps }: Config) => {
  const [current, setCurrent] = useState(initialStep);
  const step = steps[current];
  const last = steps.length - 1;

  const deltaSetCurrent = (delta = 1) => {
    setCurrent((current + steps.length + delta) % steps.length);
  };

  const navigation = {
    next: () => deltaSetCurrent(1),
    prev: () => deltaSetCurrent(-1),
    // go: (newStep: number) => {
    //   if (newStep < 0 || newStep > steps.length) {
    //     throw new Error(`[useStep]: index out of range in go(${newStep})`);
    //   }
    //   setStep(newStep);
    // },
  };

  return { step, current, last, navigation };
};

export { useSteps };

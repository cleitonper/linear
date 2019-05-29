import {
  useState,
  useCallback,
  useLayoutEffect,
  MutableRefObject as RefObject,
} from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { Dimensions } from './types';

function getDimensions(element: HTMLElement | null): Dimensions {
  if (!element) return { width: 0, height: 0 };
  return { width: element.offsetWidth, height: element.offsetHeight };
}

function useDimensions(ref: RefObject<HTMLElement | null>): Dimensions {
  const initialDimensions = getDimensions(ref.current);
  const [dimensions, setDimensions] = useState(initialDimensions);

  const handleResize = useCallback(async () => {
    if (ref.current) setDimensions(getDimensions(ref.current));
  }, [ref]);

  useLayoutEffect(() => {
    if (!ref.current) return;
    handleResize();
    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(ref.current);
    return () => resizeObserver.disconnect();
  }, [ref, handleResize]);

  return dimensions;
}

export default useDimensions;

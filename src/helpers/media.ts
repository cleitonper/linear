import { css } from 'styled-components';

interface Breakpoints {
  readonly [breakpoint: string]: number;
}

const defaultBreakpoints: Breakpoints = {
  xs: 0,
  sm: 600,
  md: 768,
  bg: 992,
  lg: 1200,
  xl: 1400,
};

const getBreakpointValue = (
  value: number | string | null | undefined,
  breakpoints: Breakpoints
): number => {
  switch (typeof value) {
    case 'number':
      return value;
    case 'string':
      if (!breakpoints.hasOwnProperty(value)) {
        throw new Error(
          `[media]: you passed a value that is not defined in the 'breakpoints' object.`
        );
      }
      if (typeof breakpoints[value] !== 'number') {
        throw new Error(
          `[media]: you passed a value that is not a proper number.`
        );
      }

      return breakpoints[value];
    default:
      return -1;
  }
};

/**
 * Helper function to manage media queries
 * in styled-components, originally created by
 * `@microcipcip`.
 *
 * ### Usage
 * ```js
 * import { styled, css } from 'styled-components';
 * import { media } from 'util/media';
 *
 * const ComponentStyled = styled.div`
 *  position: relative;
 *  ${media('xs')(css`
 *    position: absolute;
 *  `)}
 *  ${media('sm', 'md')(css`
 *    position: fixed;
 *  `)}
 *  ${media(null, 'lg')(css`
 *    position: fixed;
 *  `)}
 * `
 * ```
 *
 * @param min   Min width to be passed to the media query.
 * @param max   Max width to be passed to the media query.
 * @returns     A styled-component css string.
 *
 * @see {@link https://github.com/microcipcip/styled-components-media-query}
 */
const media = (({ breakpoints = defaultBreakpoints } = {}) => (
  min?: string | number | null,
  max?: string | number | null
) => (contentCSS: any) => {
  if (!Array.isArray(contentCSS) && typeof contentCSS !== 'string') {
    throw new Error(
      `[media]: you passed a invalid argument. Valid arguments are 'string' or the styled components 'css' helper.`
    );
  }

  const minWidth = getBreakpointValue(min, breakpoints);
  const maxWidth = getBreakpointValue(max, breakpoints);
  const content = Array.isArray(contentCSS)
    ? contentCSS
    : css`
        ${contentCSS}
      `;

  if (minWidth === -1 && maxWidth === -1) {
    throw new Error(`[media]: you must set a value to min or max width`);
  } else if (minWidth > maxWidth && maxWidth !== -1) {
    throw new Error(`[media]: min width can not be grater than max width`);
  }
  if (minWidth >= 0 && maxWidth === -1) {
    return css`
      @media (min-width: ${minWidth}px) {
        ${content}
      }
    `;
  } else if (minWidth === -1 && maxWidth > 0) {
    return css`
      @media (max-width: ${maxWidth - 1}px) {
        ${content}
      }
    `;
  } else if (minWidth >= 0 && maxWidth >= 0) {
    return css`
      @media (min-width: ${minWidth}px) and (max-width: ${maxWidth - 1}px) {
        ${content}
      }
    `;
  }
  return css``;
})();

export { media };

import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Props } from './types';

const LogoBase: FunctionComponent<Props> = ({ className }) => (
  <div className={className}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
      version="1.1"
      x="0px"
      y="0px"
    >
      <g>
        <g>
          <path
            d="M79.514,28C69.118,28,57.723,33.792,50,42.577C42.275,33.792,30.881,28,20.486,28   C10.582,28,0,33.779,0,50s10.582,21.999,20.486,22l0,0C30.883,72,42.275,66.209,50,57.426C57.723,66.209,69.117,72,79.512,72   C89.418,72,100,66.221,100,50S89.418,28,79.514,28z M20.486,63.201C12.926,63.201,9.09,58.76,9.09,50   c0-8.757,3.836-13.2,11.396-13.2c8.361,0,18.07,5.427,24.031,13.2C38.557,57.773,28.85,63.201,20.486,63.201z M79.512,63.201   c-8.361,0-18.07-5.428-24.029-13.201c5.959-7.773,15.67-13.2,24.031-13.2c7.562,0,11.396,4.442,11.396,13.2   C90.908,58.76,87.074,63.201,79.512,63.201z"
            data-original="#030104"
            data-old_color="#DD1414"
          />
        </g>
      </g>
    </svg>
  </div>
);

const Logo = styled(LogoBase)`
  width: ${prop => prop.width || 40}px;
  height: ${prop => prop.height || 40}px;
  fill: ${props => props.color || '#ffffff'};
  box-sizing: content-box;
`;

export default Logo;

import React, { FunctionComponent } from 'react';
import Particles from 'react-particles-js';
import styled from 'styled-components';
import { params } from './params';
import { Props } from './types';

const BaseParticlesBackground: FunctionComponent<Props> = ({ className }) => (
  <div className={className}>
    <Particles params={params} />
  </div>
);

const ParticlesBackground = styled(BaseParticlesBackground)`
  width: 93%;
  max-height: 100%;
  overflow: hidden;
  transform: translate3d(-50%, -50%, 0);
  position: absolute;
  top: 50%;
  left: 50%;
`;

export default ParticlesBackground;

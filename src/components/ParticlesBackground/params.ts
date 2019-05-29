import { IParticlesParams } from 'react-particles-js';

/* eslint-disable @typescript-eslint/camelcase */

export const params: IParticlesParams = {
  particles: {
    number: {
      value: 80,
      density: {
        enable: true,
        value_area: 800,
      },
    },
    color: {
      value: '#c8c6de',
    },
    opacity: {
      value: 0.27,
      random: false,
    },
    size: {
      value: 3,
      random: true,
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      random: true,
      speed: 2.85,
      direction: 'none',
      straight: false,
      out_mode: 'bounce',
      bounce: false,
    },
  },
};

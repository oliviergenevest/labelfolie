import { keyframes } from '@emotion/react';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const fadeInUp = keyframes`
    from {
    transform: translate3d(0, -2rem, 0);
    opacity: .25;
  }

  to {
   transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;


export const fadeInDown = keyframes`
    from {
    transform: translate3d(0, 2rem, 0);
    opacity: .25;
  }

  to {
   transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const slideIn = keyframes`
  from {
    transform: translateX(-100%);
    opacity: 0;
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

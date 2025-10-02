import { css, keyframes } from 'styled-components';

import { Theme } from '@8x8/oxygen-theme';

const animationKeyframe = ({ theme }: { theme: Theme }) => keyframes`
  from { background-color: ${theme.ui01}; }
  to { background-color: ${theme.ui02}; }
`;

const skeletonAnimation = css`
  animation: ${animationKeyframe} 1.5s infinite;
  animation-direction: alternate;
  animation-timing-function: cubic-bezier(0.2, 0, 0.38, 0.9);
`;

export default skeletonAnimation;

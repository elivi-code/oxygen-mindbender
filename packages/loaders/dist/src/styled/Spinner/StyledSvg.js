import styled, { css, keyframes } from 'styled-components';
const rotate = keyframes `
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;
const animation = css `
  animation: ${rotate} ${({ theme }) => theme.transitionSpeedSpinner} linear
    infinite;
`;
const StyledSvg = styled.svg `
  ${({ hasAnimation }) => (hasAnimation ? animation : '')}
`;
export default StyledSvg;

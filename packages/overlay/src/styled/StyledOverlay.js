import styled from 'styled-components';
import * as config from '@8x8/oxygen-config';

const StyledOverlay = styled.div.attrs(() => ({
  ...config.getTestAttributes('OVERLAY_CONTAINER'),
}))`
  text-align: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: ${({ theme }) => theme.backgroundColor};
  z-index: ${({ theme }) => theme.zIndex};
  ${({ theme }) => theme.animation};
`;

export default StyledOverlay;

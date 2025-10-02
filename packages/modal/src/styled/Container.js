import styled from 'styled-components';

import { getTestAttributes } from '@8x8/oxygen-config';

const Container = styled.div.attrs(() => ({
  ...getTestAttributes('MODAL_CONTAINER'),
}))`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Container;

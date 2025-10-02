import styled from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';
import getWidth from './utils/getWidth';

const ToasterWrapper = styled.div.attrs(() => ({
  ...getTestAttributes('TOASTER_WRAPPER'),
}))`
  width: ${getWidth};
  max-width: ${({ theme }) => (theme.isClassic ? '100%' : 'calc(100% - 24px)')};
  position: fixed;
  top: 24px;
  left: ${({ theme }) => (theme.isClassic ? '0' : 'auto')};
  right: ${({ theme }) => (theme.isClassic ? '0' : '24px')};
  margin: 0 auto;
  z-index: ${({ theme }) => theme.zIndex};

  @media screen and (width <= 1200px) {
    top: 16px;
    right: ${({ theme }) => (theme.isClassic ? '0' : '16px')};
    max-width: ${({ theme }) =>
      theme.isClassic ? '100%' : 'calc(100% - 16px)'};
  }

  @media screen and (width <= 320px) {
    right: 0;
    max-width: 100%;
  }
`;

export default ToasterWrapper;

import styled from 'styled-components';

import { getTestAttributes } from '@8x8/oxygen-config';

const ModalContent = styled.div.attrs(() => ({
  ...getTestAttributes('MODAL_CONTENT'),
}))`
  color: ${({ theme }) => theme.contentColor};
  padding: ${({ theme }) => theme.contentPadding};
  font-family: ${({ theme }) => theme.contentFontFamily};
  font-size: ${({ theme }) => theme.contentFontSize};
  line-height: ${({ theme }) => theme.contentLineHeight};
  font-weight: ${({ theme }) => theme.contentFontWeight};
  letter-spacing: ${({ theme }) => theme.contentFontLetterSpacing};
  overflow: auto;

  /* WCAG: Minimum height provides us with at least two lines of text, especially with browser zoom */
  min-height: 42px;
`;

export default ModalContent;

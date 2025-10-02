import styled from 'styled-components';

import { getTestAttributes } from '@8x8/oxygen-config';

const alignMap = {
  left: 'flex-start',
  right: 'flex-end',
};

function getModalFooterPadding({ theme, isSmall, modalHasContent }) {
  if (isSmall) {
    if (theme.footerPaddingSmall) {
      return theme.footerPaddingSmall;
    }

    // deprecated, should remain with `footerPaddingSmall` (might also deprecate with Novo in v2)
    return `${theme.footerPaddingVertical} ${theme.footerPaddingSmallHorizontal}`;
  }

  if (!modalHasContent && theme.footerPaddingNoContent) {
    return theme.footerPaddingNoContent;
  }

  if (theme.footerPadding) {
    return theme.footerPadding;
  }

  // deprecated, should remain with only `footerPadding`
  return `${theme.footerPaddingVertical} ${theme.footerPaddingHorizontal}`;
}

const FooterContainer = styled.div.attrs(({ testId }) => ({
  ...getTestAttributes(testId),
}))`
  display: flex;
  flex-flow: wrap;
  justify-content: ${({ align }) => alignMap[align] || align};
  gap: ${({ theme, hasButtonSpacing }) =>
    hasButtonSpacing ? theme.footerButtonSpacing : '0'};
  padding: ${props => getModalFooterPadding(props)};
  box-shadow: ${({ hasBorderTop, theme }) =>
    hasBorderTop
      ? `inset ${theme.footerShadowSize} ${theme.footerShadowColor}`
      : 'none'};
`;

export default FooterContainer;

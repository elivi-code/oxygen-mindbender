import styled from 'styled-components';
import PropTypes from 'prop-types';

import { getTestAttributes } from '@8x8/oxygen-config';
import themes from '@8x8/oxygen-theme';

const { novo } = themes;

const HeaderContainer = styled.div.attrs(({ testId }) => ({
  ...getTestAttributes(testId),
}))`
  padding: ${({ theme, modalHasContent }) =>
    !modalHasContent && theme.headerPaddingNoContent
      ? theme.headerPaddingNoContent
      : theme.headerPadding};
  ${({ theme }) =>
    theme.headerTitleColor && `color: ${theme.headerTitleColor};`}
  box-shadow: ${({ hasBorderBottom, theme }) =>
    hasBorderBottom
      ? `${theme.headerShadowSize} ${theme.headerShadowColor}`
      : 'none'};
  ${{ ...novo.body01 }}
  font-family: ${({ theme }) => theme.headerFontFamily};
`;

HeaderContainer.propTypes = {
  hasBorderBottom: PropTypes.bool,
  modalHasContent: PropTypes.bool,
  onClose: PropTypes.func,
  testId: PropTypes.string.isRequired,
};

HeaderContainer.defaultProps = {
  hasBorderBottom: false,
  modalHasContent: true,
  onClose: undefined,
};

export default HeaderContainer;

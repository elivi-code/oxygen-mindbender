import styled from 'styled-components';
import { ellipsis } from 'polished';
import PropTypes from 'prop-types';

import { getTestAttributes } from '@8x8/oxygen-config';

import { MODAL_HEADER_ALIGN_TITLE } from '../constants';

const HeaderTitle = styled.h1.attrs(() => ({
  ...getTestAttributes('MODAL_HEADER_TITLE'),
}))`
  flex-grow: 1;
  font-family: ${({ theme }) => theme.headerFontFamily};
  font-size: ${({ theme }) => theme.headerTitleFontSize};
  line-height: ${({ theme }) => theme.headerTitleLineHeight};
  font-weight: ${({ theme }) => theme.headerTitleFontWeight};
  text-align: ${({ alignTitle }) => alignTitle};
  ${({ theme }) =>
    theme.headerTitleFontLetterSpacing &&
    `letter-spacing: ${theme.headerTitleFontLetterSpacing};`}
  ${({ theme }) => theme.headerTitleWrap && ellipsis()};
  margin: 0;
`;

HeaderTitle.propTypes = {
  alignTitle: PropTypes.oneOf(Object.values(MODAL_HEADER_ALIGN_TITLE)),
};

HeaderTitle.defaultProps = {
  alignTitle: MODAL_HEADER_ALIGN_TITLE.LEFT,
};

export default HeaderTitle;

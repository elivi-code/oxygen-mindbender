import styled from 'styled-components';
import { ellipsis } from 'polished';
import * as config from '@8x8/oxygen-config';

import { getSize, getWeight, getParagraph } from '../utils';

const TypographyWrapper = styled.div.attrs(({ testId }) => ({
  ...config.getTestAttributes(testId),
}))`
  ${({ weight, theme }) =>
    weight ? getWeight(weight) : getWeight(theme.typographyFontWeight)};
  display: ${props => props.display};
  text-align: ${props => props.align};
  ${({ size, theme }) =>
    size ? getSize(size) : getSize(theme.typographyFontSize)};
  ${props => !props.shouldWrap && ellipsis()};
  color: ${({ theme, color }) => color || theme.typographyColor};
  ${({ isParagraph, theme }) => getParagraph(isParagraph, theme)};
`;

export default TypographyWrapper;

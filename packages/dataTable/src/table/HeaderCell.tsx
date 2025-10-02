import React from 'react';
import styled, { DefaultTheme, ThemeProps } from 'styled-components';

import { ellipsis } from '../styled/mixins/ellipsis';

interface Props {
  text: string | number;
  title?: string;
  wrapText?: boolean;
}
interface StyledHeaderCellProps {
  wrapText?: boolean;
}

const getTextStyle = (
  props: StyledHeaderCellProps & ThemeProps<DefaultTheme>,
) => {
  if (props.wrapText) {
    return `
      text-align: center;
      white-space: normal; /* allow wrapping */
      word-break: break-word; /* break long words */
      max-height: calc(3 * ${props.theme.labelBold01.lineHeight}); /* height for exactly 3 lines */
      overflow-y: auto; /* make it scrollable if content exceeds 3 lines */
    `;
  }

  return ellipsis;
};

const StyledHeaderCell = styled.div`
  ${props => ({ ...props.theme.labelBold01 })};
  color: ${props => props.theme.textColor01};
  text-align: left;
  ${getTextStyle}
`;

const HeaderCell: React.FC<Props> = ({ text, title, ...rest }) => (
  <StyledHeaderCell {...rest} title={title || `${text}`}>
    {text}
  </StyledHeaderCell>
);

export { HeaderCell };

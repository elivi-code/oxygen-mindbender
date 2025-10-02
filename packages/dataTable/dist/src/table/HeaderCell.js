import React from 'react';
import styled from 'styled-components';
import { ellipsis } from '../styled/mixins/ellipsis';
const getTextStyle = (props) => {
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
const StyledHeaderCell = styled.div `
  ${props => ({ ...props.theme.labelBold01 })};
  color: ${props => props.theme.textColor01};
  text-align: left;
  ${getTextStyle}
`;
const HeaderCell = ({ text, title, ...rest }) => (React.createElement(StyledHeaderCell, { ...rest, title: title || `${text}` }, text));
export { HeaderCell };

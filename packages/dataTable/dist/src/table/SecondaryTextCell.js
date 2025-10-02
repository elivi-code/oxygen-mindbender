import React from 'react';
import styled from 'styled-components';
import { ellipsis } from '../styled/mixins/ellipsis';
const StyledSecondaryTextCell = styled.div `
  ${ellipsis};

  /* TODO: update oxygen and no need for CSSObject */
  ${props => ({ ...props.theme.label01 })};
  color: ${props => props.theme.textColor02};
  width: 100%;
  text-align: left;
`;
const SecondaryTextCell = ({ text, title, ...rest }) => (React.createElement(StyledSecondaryTextCell, { ...rest, title: title || `${text}` }, text));
export { SecondaryTextCell };

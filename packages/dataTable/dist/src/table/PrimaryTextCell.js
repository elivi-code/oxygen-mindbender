import React from 'react';
import styled from 'styled-components';
import { ellipsis } from '../styled/mixins/ellipsis';
const StyledPrimaryTextCell = styled.div `
  ${ellipsis};
  ${props => ({ ...props.theme.body01 })};
  color: ${props => props.isInactive ? props.theme.textColor02 : props.theme.textColor01};
  text-align: ${props => props.textAlign || 'left'};
  width: 100%;
`;
const PrimaryTextCell = ({ text, title, isInactive, ...rest }) => (React.createElement(StyledPrimaryTextCell, { ...rest, title: title || `${text}`, isInactive: isInactive }, text));
export { PrimaryTextCell };

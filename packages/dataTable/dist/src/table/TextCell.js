import React from 'react';
import styled from 'styled-components';
import { PrimaryTextCell } from './PrimaryTextCell';
import { SecondaryTextCell } from './SecondaryTextCell';
const TextContainer = styled.div `
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing01};
`;
const TextCell = ({ primaryText, secondaryText, className, isInactive, }) => (React.createElement(TextContainer, { className: className },
    primaryText && (React.createElement(PrimaryTextCell, { isInactive: isInactive, text: primaryText })),
    secondaryText && React.createElement(SecondaryTextCell, { text: secondaryText })));
export { TextCell };

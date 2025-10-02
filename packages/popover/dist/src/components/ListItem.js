import React, { forwardRef } from 'react';
import styled from 'styled-components';
const Item = styled.span `
  display: grid;
  column-gap: 8px;
  grid-template-columns: min-content auto;
`;
const VisualsWrapper = styled.span `
  grid-column: 1;
`;
const ContentWrapper = styled.span `
  grid-column: 2;
  align-self: center;
  display: grid;
  gap: 0;
`;
const ChildrenWrapper = styled.span `
  grid-column: 1;
  grid-row: 1;
  overflow: hidden;
`;
const SecondaryTextWrapper = styled.span `
  ${({ theme }) => ({ ...theme.label01 })}
  color: ${({ theme }) => theme.textColor02};
  grid-column: 1;
  grid-row: 2;
  overflow: hidden;
`;
export const ListItem = forwardRef(function ListItem(props, ref) {
    const { leadingVisuals, secondaryText, children, ...rest } = props;
    return (React.createElement(Item, { ...rest, ref: ref },
        leadingVisuals && React.createElement(VisualsWrapper, null, leadingVisuals),
        React.createElement(ContentWrapper, null,
            React.createElement(ChildrenWrapper, null, children),
            secondaryText && (React.createElement(SecondaryTextWrapper, null, secondaryText)))));
});

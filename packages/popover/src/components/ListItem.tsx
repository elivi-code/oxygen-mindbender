import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { type ListItemProps } from '../types';

const Item = styled.span<ListItemProps>`
  display: grid;
  column-gap: 8px;
  grid-template-columns: min-content auto;
`;

const VisualsWrapper = styled.span`
  grid-column: 1;
`;

const ContentWrapper = styled.span`
  grid-column: 2;
  align-self: center;
  display: grid;
  gap: 0;
`;

const ChildrenWrapper = styled.span`
  grid-column: 1;
  grid-row: 1;
  overflow: hidden;
`;

const SecondaryTextWrapper = styled.span`
  ${({ theme }) => ({ ...theme.label01 })}
  color: ${({ theme }) => theme.textColor02};
  grid-column: 1;
  grid-row: 2;
  overflow: hidden;
`;

export const ListItem = forwardRef<HTMLSpanElement, ListItemProps>(
  function ListItem(props, ref) {
    const { leadingVisuals, secondaryText, children, ...rest } = props;

    return (
      <Item {...rest} ref={ref}>
        {leadingVisuals && <VisualsWrapper>{leadingVisuals}</VisualsWrapper>}
        <ContentWrapper>
          <ChildrenWrapper>{children}</ChildrenWrapper>
          {secondaryText && (
            <SecondaryTextWrapper>{secondaryText}</SecondaryTextWrapper>
          )}
        </ContentWrapper>
      </Item>
    );
  },
);

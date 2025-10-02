import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { type ListProps } from '../types';

const ListContainer = styled.ul<ListProps>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.ui06};
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const List = forwardRef<HTMLUListElement, ListProps>(function List(
  props,
  ref,
) {
  return <ListContainer {...props} ref={ref} />;
});

import React, { forwardRef } from 'react';
import styled from 'styled-components';
const ListContainer = styled.ul `
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.ui06};
  margin: 0;
  padding: 0;
  list-style-type: none;
`;
export const List = forwardRef(function List(props, ref) {
    return React.createElement(ListContainer, { ...props, ref: ref });
});

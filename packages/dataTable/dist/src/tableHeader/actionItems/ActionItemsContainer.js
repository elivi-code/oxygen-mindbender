import React from 'react';
import styled from 'styled-components';
const Container = styled.div `
  justify-self: flex-end;
  display: flex;
  padding: ${({ theme }) => `0px ${theme.spacing05}`};
  align-items: center;
  border-left: ${({ theme }) => `1px solid ${theme.ui01}`};
  gap: ${({ theme }) => theme.spacing05};
`;
const ActionItemsContainer = ({ items }) => (React.createElement(Container, null, items));
export { ActionItemsContainer };

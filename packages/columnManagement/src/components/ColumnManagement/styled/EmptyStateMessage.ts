import styled from 'styled-components';

export const EmptyMessage = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.textColor01};
`;

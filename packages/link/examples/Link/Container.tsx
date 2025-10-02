import styled from 'styled-components';

export const Container = styled.div<{ isChat?: boolean }>`
  padding: 20px;
  background: ${({ isChat, theme }) => (isChat ? theme.ui14 : 'transparent')};
  border-radius: ${({ isChat }) => (isChat ? '4px' : 0)};
  max-width: ${({ isChat }) => (isChat ? '400px' : 'auto')};
`;

import styled from 'styled-components';
export const SidebarContainer = styled.nav `
  box-sizing: border-box;
  ${({ position, theme }) => position === 'left'
    ? `border-right: 1px solid ${theme.ui01};`
    : `border-left: 1px solid ${theme.ui01};`}
  display: flex;
  background-color: ${({ theme }) => theme.ui25};
  color: ${({ theme }) => theme.textColor01};
  flex-direction: column;
  padding: 4px ${({ theme }) => theme.spacing03};
  margin: 0;
  width: ${({ collapsed }) => (collapsed ? '53px' : '217px')};
  min-width: ${({ collapsed }) => (collapsed ? '53px' : '217px')};
  height: 100%;
`;

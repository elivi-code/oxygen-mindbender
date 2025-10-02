import styled, { css } from 'styled-components';
const sharedPopoverStyles = css `
  color: ${({ theme }) => theme.textColor01};
  background: ${({ theme }) => theme.ui06};
  border: 1px solid ${({ theme }) => theme.ui01};
  border-radius: 6px;
  padding: 8px 0;
  box-sizing: content-box;
  max-height: calc(${({ $maxHeight }) => $maxHeight}px - 16px);
  min-width: 80px;
  outline: none;
  box-shadow: ${({ theme }) => theme.shadowLow};
  ${({ theme }) => ({ ...theme.body01 })};
`;
export const PopoverContainer = styled.div `
  ${sharedPopoverStyles}
  max-width: 1064px;
  overflow: auto;
`;
export const PopoverMenuContainer = styled.div `
  ${sharedPopoverStyles}
  height: fit-content;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  overflow: none;
`;
export const MenuList = styled.ul `
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: auto;
  flex: 1;
  min-height: 0;
  max-height: 100%;
`;
export const ContentContainer = styled.div `
  overflow: auto;
`;
export const HeaderContainer = styled.div `
  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.ui01};
  padding: 4px 12px 12px;
`;
export const FooterContainer = styled.div `
  padding: 8px 12px 0;
`;

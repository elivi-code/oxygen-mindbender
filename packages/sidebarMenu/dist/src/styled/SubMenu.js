import styled from 'styled-components';
export const FloatingContainer = styled.div `
  box-sizing: border-box;

  /* width is 200px @ 16px base font size and 268px @ 32px base font-size */
  ${({ hasChildren }) => hasChildren && 'width: calc(132px + 4.25rem);'}
  padding: 4px;

  display: flex;
  flex-direction: column;

  border-radius: 6px;
  border: ${({ theme }) => `1px solid ${theme.ui01}`};
  background-color: ${({ theme }) => theme.ui06};
  box-shadow: ${({ theme }) => theme.shadowLow};
  outline: none;
`;
export const Header = styled.div `
  padding: 8px 12px;
  ${({ theme }) => ({ ...theme.bodyBold01 })};
`;
export const UlCollapsed = styled.ul `
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${({ theme }) => theme.ui01};
  padding-top: 4px;
  gap: 4px;
`;
export const Ul = styled.ul `
  border-left: 1px solid ${({ theme }) => theme.ui01};
  position: relative;
  margin-left: 18px;
  padding-top: 4px;
  padding-left: 7px;
  list-style-type: none;
  display: flex;
  gap: 4px;
  flex-direction: column;
`;
export const Li = styled.li `
  display: block;
`;

import styled from 'styled-components';
export const Button = styled.button `
  appearance: none;
  background: transparent;
  ${({ $isActive, theme }) => $isActive && `background: ${theme.active12}`};
  color: ${({ theme }) => theme.textColor01};
  outline: none;
  cursor: pointer;
  text-decoration: none;
  position: relative;

  box-sizing: border-box;
  padding: ${({ $subItem }) => ($subItem ? '6px 10px' : '0')};
  width: 100%;
  transition: 150ms all;

  ${({ theme }) => ({ ...theme.body01 })};
  ${({ $isActive, theme }) => $isActive && { ...theme.bodyBold01 }}
  text-align: left;
  overflow-wrap: break-word;

  &:hover {
    background: ${({ $isActive, theme }) => $isActive ? theme.active12 : theme.hover13};
  }

  border: 2px solid transparent;
  border-radius: 6px;
  &:focus-visible {
    border-color: ${({ theme }) => theme.focus01};
  }

  display: flex;
  align-items: center;
  justify-items: flex-start;
  gap: 2px;
`;

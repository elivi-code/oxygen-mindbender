// @ts-check
import styled from 'styled-components';

const Wrapper = styled.button`
  background: ${({ theme }) => theme.background};
  border-radius: 6px;
  border: 0;
  box-shadow: 0 0 0 1px ${({ theme }) => theme.borderColor},
    ${({ theme }) => theme.shadow};
  outline: none;
  overflow: hidden;
  width: 100%;
  padding: 0;
  &:hover {
    background: ${({ theme }) => theme.backgroundHover};
  }
  &:focus-visible {
    background: ${({ theme }) => theme.backgroundHover};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.borderFocusColor},
      ${({ theme }) => theme.shadow};
  }
  transition: 200ms ease-out;
`;

const Layout = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gap};
  height: 48px;
`;

export { Layout, Wrapper };

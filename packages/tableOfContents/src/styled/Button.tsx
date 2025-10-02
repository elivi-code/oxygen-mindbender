import styled, { CSSObject, css } from 'styled-components';

export interface Props {
  isActive?: boolean;
}

export const Button = styled.button<Props>`
  & {
    appearance: none;
    background: ${({ isActive, theme }) =>
      isActive ? theme.ui02 : 'transparent'};
    color: ${({ theme }) => theme.textColor01};
    outline: none;
    cursor: pointer;

    padding: 10px 16px;
    width: 100%;
    transition: 150ms all;

    ${({ theme }) => theme.body01 as CSSObject};
    text-align: left;
    overflow-wrap: break-word;

    &:hover {
      background: ${({ theme }) => theme.ui02};
    }

    border: 2px solid transparent;
    border-left-color: ${({ isActive, theme }) => isActive && theme.focus01};

    &:focus-visible {
      border-color: ${({ theme }) => theme.focus01};
    }

    display: flex;
    align-items: center;
    justify-items: flex-start;
    gap: 2px;

    position: relative;
  }

  ${({ isActive }) =>
    isActive &&
    css`
      &::before {
        display: block;
        content: '';
        position: absolute;
        top: -2px;
        left: -2px;
        width: 0;
        height: calc(100% + 4px);
        border-left: inherit;
      }
    `}
`;

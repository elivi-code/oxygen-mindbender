import styled, { css } from 'styled-components';

const ContextMenuItem = styled.div`
  padding: ${({ theme }) => theme.contextMenuItemPadding};
  box-sizing: border-box;
  outline: none;

  ${({ theme }) =>
    theme.isClassic
      ? css`
          width: ${theme.contextMenuItemWidth};

          font-family: ${theme.contextMenuFontFamily};
          font-size: ${theme.contextMenuFontSize};
        `
      : css`
          min-height: 40px;
          display: flex;
          align-items: center;

          font-family: ${theme.fontFamily};
          font-size: ${theme.fontSize};
          font-weight: ${theme.fontWeight};
          letter-spacing: ${theme.letterSpacing};
          line-height: ${theme.lineHeight};
        `}

  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
  color: ${({ theme, isDisabled }) =>
    isDisabled
      ? theme.contextMenuItemDisabledColor
      : theme.contextMenuItemColor};

  &:focus,
  &:hover,
  &:active {
    background-color: ${({ isDisabled, theme }) =>
      isDisabled
        ? theme.contextMenuItemDisabledHoverColor
        : theme.contextMenuItemHoverColor};
    color: ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.contextMenuItemDisabledColor
        : theme.contextMenuItemColorActive};
  }
`;

export default ContextMenuItem;

import styled, { css } from 'styled-components';

const textOverflow = ({ shouldWrapText }) =>
  !shouldWrapText &&
  css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `;

const ListItemStyled = styled.li`
  ${({ theme }) =>
    theme.isClassic
      ? css`
          font-family: ${theme.listItemFontFamily};
          font-size: ${theme.listItemFontSize};
          font-weight: ${theme.listItemFontWeight};
          line-height: ${theme.listItemLineHeight};
        `
      : css`
          font-family: ${theme.fontFamily};
          font-size: ${theme.fontSize};
          font-weight: ${theme.fontWeight};
          line-height: ${theme.lineHeight};
          letter-spacing: ${theme.letterSpacing};

          min-height: 40px;
        `}

  outline: none;
  padding: ${({ theme }) => theme.listItemPadding};
  box-sizing: border-box;
  list-style-position: inside;
  ${textOverflow};

  color: ${({ isDisabled, theme }) =>
    isDisabled ? theme.listItemColorDisabled : theme.listItemColor};

  ${({ isActive, theme }) =>
    isActive &&
    `
    background: ${theme.listItemActiveBackgroundColor};
    color: ${theme.listItemColorActive};
  `}

  ${({ isDisabled, theme }) =>
    !isDisabled &&
    `
    &:hover {
      background: ${theme.listItemHoverColor}; 
    }
    &:active {
      background: ${theme.listItemActiveBackgroundColor};
      color: ${theme.listItemColorActive};
    }
  `}

  &:focus-visible {
    box-shadow: ${({ theme }) =>
      `0 0 0 2px inset ${theme.listItemFocusBorderColor}`};
  }

  cursor: ${({ isDisabled }) => (isDisabled ? 'not-allowed' : 'pointer')};
`;

export default ListItemStyled;

import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';
const getDisabledStyles = ({ theme, isDisabled }) => {
    if (isDisabled) {
        return css `
      color: ${theme.fontColorActionDisabled};
      cursor: not-allowed;
    `;
    }
    return css `
    cursor: pointer;
    color: ${theme.fontColorAction};
    &:hover {
      color: ${theme.fontColorActionHover};
      text-decoration: underline;
    }
  `;
};
const ActionText = styled.a `
  font-size: inherit;
  text-align: left;
  background: transparent;
  border: none;
  outline: none;
  padding: ${({ theme }) => theme.actionLinkPaddingHorizontal}
    ${({ theme }) => theme.actionLinkPaddingVertical};
  margin: 0 -${({ theme }) => theme.actionLinkPaddingVertical} 0 ${({ theme }) => theme.height};
  flex-shrink: 1;
  border-radius: 2px;
  text-decoration: none;
  ${({ shouldWrapText }) => !shouldWrapText && ellipsis()}
  ${getDisabledStyles};

  &:focus-visible {
    text-decoration: underline;
    box-shadow: inset 0 0 0 ${({ theme }) => theme.borderSizeFocus}
      ${({ theme }) => theme.borderColorFocus};
  }
`;
export default ActionText;

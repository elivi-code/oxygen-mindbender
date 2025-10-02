import styled from 'styled-components';
import {
  getColor,
  getBorderColor,
  getFocusedBorderColor,
  getBackgroundColor,
  getTextareaBorderWidth,
  getTextareaBorderRadius,
  getPadding,
} from '../utils';

const TextareaWrapper = styled.textarea`
  font-family: ${({ theme }) => theme.textareaFontFamily};
  font-size: ${({ theme }) => theme.textareaFontSize};
  font-style: ${({ theme }) => theme.textareaFontStyle};
  font-weight: ${({ theme }) => theme.textareaFontWeight};
  letter-spacing: ${({ theme }) => theme.textareaLetterSpacing};
  line-height: ${({ theme }) => theme.textareaLineHeight};
  color: ${getColor};
  -webkit-text-fill-color: ${getColor};
  background: ${getBackgroundColor};
  border: solid ${getBorderColor};
  border-width: ${({ theme, readOnly }) =>
    getTextareaBorderWidth({ theme, readOnly })};
  border-radius: ${({ theme, readOnly }) =>
    getTextareaBorderRadius({ theme, readOnly })};
  box-sizing: border-box;
  width: 100%;
  padding: ${getPadding};
  margin: ${({ theme, readOnly }) => (readOnly ? `-${theme.borderWidth}` : 0)};
  resize: ${({ resize }) => resize};
  transition: border-color ease-in
    ${({ theme }) => theme.textareaTransitionTiming};

  &:focus {
    outline: 0;
    border-color: ${getFocusedBorderColor};
  }

  &::placeholder {
    color: ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.textareaColorDisabled
        : theme.textareaPlaceholderColor};
    -webkit-text-fill-color: ${({ theme, isDisabled }) =>
      isDisabled
        ? theme.textareaColorDisabled
        : theme.textareaPlaceholderColor};
  }
  cursor: ${({ isDisabled }) => isDisabled && 'not-allowed'};
`;

export default TextareaWrapper;

import styled from 'styled-components';

import { getIconColor, getIconSize } from '../utils';

const getRadioButtonDot = ({ isChecked, theme }) => {
  if (isChecked) {
    return `
      &::after {
        min-width: ${theme.iconDotSize};
        min-height: ${theme.iconDotSize};
        border-radius: 100%;
        background: currentColor;
        visibility: visible;
        content: '';
    `;
  }

  return null;
};

const RadioIconClassic = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ theme, isChecked, isFocused, isHovered }) =>
    getIconColor({ theme, isChecked, isFocused, isHovered })};
  border-radius: 100%;
  border: ${({ theme }) =>
    `${theme.borderSize} ${theme.borderStyle} currentColor`};
  ${({ theme, hasLabel }) => getIconSize({ theme, hasLabel })};
  ${({ theme, isChecked }) => getRadioButtonDot({ theme, isChecked })};
`;

export default RadioIconClassic;

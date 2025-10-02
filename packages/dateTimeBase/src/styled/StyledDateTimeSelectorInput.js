import styled from 'styled-components';
import { ellipsis } from 'polished';
import PropTypes from 'prop-types';

const getInputContainerBorderColor = ({ theme, isOpen, hasError }) => {
  if (hasError) {
    return theme.borderColorError;
  }

  return isOpen ? theme.borderColorOpen : theme.borderColor;
};

const getInputContainerHeight = ({ theme, size }) =>
  size === 'large' ? theme.heightLarge : theme.heightSmall;

const getInputContainerPadding = ({ size, theme }) => {
  if (size === 'large') {
    return `padding:
      ${theme.paddingVerticalLarge}
      ${theme.paddingHorizontal}
    `;
  }

  return `padding:
    ${theme.paddingVerticalSmall}
    ${theme.paddingHorizontal}
  `;
};

const getInputCursorStyle = ({ isDisabled }) => {
  if (isDisabled) {
    return `
      pointer-events: none;
    `;
  }

  return 'cursor: pointer;';
};

const getBackgroundColor = ({ isDisabled, theme }) => {
  if (isDisabled) {
    return theme.isClassic
      ? theme.backgroundColorDisabled
      : theme.backgroundColor;
  }

  return theme.backgroundColor;
};

const getInputColor = ({ isDisabled, isPlaceholder, theme }) => {
  if (isDisabled) {
    return theme.colorDisabled;
  }

  if (isPlaceholder) {
    return theme.placeholderColor;
  }

  return theme.color;
};

const InputContainer = styled.div.attrs(({ title }) => ({
  title,
}))`
  position: relative;
  ${getInputContainerPadding};
  border: ${({ theme }) => `${theme.borderSize} solid`};
  border-color: ${getInputContainerBorderColor};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: ${({ theme }) => theme.width};
  min-height: ${getInputContainerHeight};
  background: ${getBackgroundColor};
  color: ${getInputColor};
  ${getInputCursorStyle};
  transition: ${({ theme }) =>
    `border-color ${theme.transitionTiming} ease-in-out, background
    ${theme.transitionTiming} linear`};

  font-size: ${({ theme }) => theme.fontSize};
  line-height: ${({ theme }) => theme.lineHeight};
  font-family: ${({ theme }) => theme.fontFamily};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  font-weight: ${({ theme }) => theme.fontWeight};
  box-sizing: border-box;
  display: inline-flex;
  justify-content: space-between;
  text-align: left;
  align-items: center;
`;

const InputTitle = styled.div`
  ${ellipsis()};
  width: 100%;
  display: inline-flex;
  align-items: center;
`;

const InputIcon = styled.span`
  color: ${({ theme }) => theme.iconColor};
  ${getInputCursorStyle};
  min-width: ${({ theme }) => theme.iconMinSize};
  ${({ theme, reversed }) =>
    theme.isClassic &&
    reversed &&
    `
    transform: rotate(180deg);
    transform-origin: 50%;
  `};
`;

const InputIconLeft = styled.div`
  display: flex;
  justify-content: center;
  margin-right: ${({ theme }) => theme.iconMargin};
`;

InputContainer.propTypes = {
  hasError: PropTypes.bool,
  isOpen: PropTypes.bool,
  isDisabled: PropTypes.bool,
  size: PropTypes.string,
  title: PropTypes.string,
  onClick: PropTypes.func,
};

InputIcon.propTypes = {
  color: PropTypes.string,
  reversed: PropTypes.bool,
};

export { InputContainer, InputIcon, InputIconLeft, InputTitle };

import styled, { keyframes, css } from 'styled-components';

const getContainerAnimationName = () => keyframes`
  from {
    opacity: 0; transform: translateY(-5px);
  }
  to {
    opacity: 1; transform: translateY(0);
  }
`;

const getContainerAnimation = ({ theme }) => css`
  animation-name: ${getContainerAnimationName};
  animation-duration: ${theme.dropdownAnimationDuration};
  animation-timing-function: ease-in;
`;

const PopperContainer = styled.div`
  z-index: ${({ theme }) => `${theme.dropdownZIndex}`};
`;

const DropdownContainer = styled.div`
  background: ${({ theme }) => theme.listItemBackground};
  border: ${({ theme }) =>
    `${theme.dropdownBorderSize} solid ${theme.dropdownBorderColor}`};
  border-radius: ${({ theme }) => theme.dropdownBorderRadius};
  box-sizing: border-box;
  box-shadow: ${({ theme }) =>
    theme.dropdownShadow
      ? theme.dropdownShadow
      : `0 0 ${theme.dropdownShadowBlurRadius} 0 ${theme.dropdownShadowColor}`};
  ${getContainerAnimation};
  font-family: ${({ theme }) => `${theme.dropdownFontFamily}`};
  font-size: ${({ theme }) => `${theme.dropdownFontSize}`};
  line-height: ${({ theme }) => `${theme.dropdownLineHeight}`};
  max-height: ${({ theme }) => theme.dropdownMaxHeight};
  overflow: auto;
  padding: ${({ theme }) => theme.dropdownPadding};
  min-width: ${({ theme }) => theme.dropdownWidth};
`;

const ListItem = styled.div`
  padding: ${({ theme }) => `${theme.listItemPadding}`};
  cursor: pointer;
  background: ${({ theme, isSelected }) =>
    isSelected ? theme.listItemBackgroundSelected : theme.listItemBackground};
  color: ${({ theme }) => `${theme.listItemColor}`};
  text-align: left;

  &:hover {
    background: ${({ theme }) => `${theme.listItemBackgroundHover}`};
  }
`;

export { PopperContainer, DropdownContainer, ListItem };

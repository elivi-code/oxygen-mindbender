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
  animation-duration: ${theme.containerAnimationDuration};
  animation-timing-function: ease-in;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;

  border: ${({ theme }) =>
    `${theme.containerBorderSize} solid ${theme.containerBorderColor}`};
  box-sizing: border-box;
  box-shadow: ${({ theme }) =>
    theme.isClassic
      ? `0 0 ${theme.containerShadowBlurRadius} 0 ${theme.containerShadowColor}`
      : `0 1px 2px ${theme.containerShadowColor}`};
  background: ${({ theme }) => `${theme.containerBackgroundColor}`};
  padding: 0 ${({ theme }) => theme.containerPadding};
  border-radius: ${({ theme }) => theme.containerBorderRadius};

  ${getContainerAnimation};

  line-height: ${({ theme }) => theme.lineHeight};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  font-weight: ${({ theme }) => theme.fontWeight};
`;

const PopperContainer = styled.div`
  max-width: 100%;
  z-index: ${({ theme }) => `${theme.containerZIndex}`};
`;

const DropdownFooter = styled.div`
  box-sizing: border-box;
  justify-content: flex-end;
  padding: ${({ theme }) => theme.footerPadding};
  border-top: ${({ theme }) =>
    `${theme.footerBorderSize} solid ${theme.footerBorderColor}`};
  display: flex;
  width: 100%;
`;

export { DropdownContainer, DropdownFooter, PopperContainer };

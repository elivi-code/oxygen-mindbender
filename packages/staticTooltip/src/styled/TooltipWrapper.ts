import styled from 'styled-components';

const TooltipWrapper = styled.div`
  background-color: ${({ theme }) => theme.backgroundColor};
  border: ${({ theme }) =>
    `${theme.borderWidth} ${theme.borderStyle} ${theme.borderColor}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-sizing: border-box;
  box-shadow: ${({ theme }) => theme.boxShadow};
  color: ${({ theme }) => theme.color};
  font-family: ${({ theme }) => theme.fontFamily};
  font-size: ${({ theme }) => theme.fontSize};
  font-weight: ${({ theme }) => theme.fontWeight};
  font-style: normal;
  font-stretch: normal;
  line-height: ${({ theme }) => theme.lineHeight};
  letter-spacing: ${({ theme }) => theme.letterSpacing};
  text-align: ${({ theme }) => theme.textAlign};
  margin: 0;
  max-height: ${({ theme }) => theme.maxHeight};
  max-width: ${({ theme }) => theme.maxWidth};
  padding: ${({ theme }) => theme.padding};
  position: relative;
  z-index: ${({ theme }) => theme.zIndex};
  ${({ theme }) => theme.animation};
`;

export default TooltipWrapper;

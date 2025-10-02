import styled, { css } from 'styled-components';
const barContainer = css `
  background-color: ${({ theme }) => theme.backgroundContainer};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
const barProgress = css `
  background: ${({ theme, value }) => value >= 100 ? theme.backgroundComplete : theme.backgroundFiller};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: ${({ theme }) => theme.transitionSpeedProgressBar} width linear;
`;
const Bar = styled.progress `
  appearance: none;
  box-sizing: border-box;
  height: ${({ theme }) => theme.height};
  margin-bottom: ${({ theme }) => parseInt(theme.height, 10) - 1}px;
  overflow: hidden;
  width: 100%;

  border: ${({ theme }) => `${theme.borderSize} ${theme.borderStyle} ${theme.borderColor}`};

  ${barContainer}
  &::-webkit-progress-bar {
    ${barContainer}
  }

  &::-webkit-progress-value {
    ${barProgress}
  }
  &::-moz-progress-bar {
    ${barProgress}
  }
`;
export { Bar };

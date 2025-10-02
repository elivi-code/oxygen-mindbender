import styled from 'styled-components';
import { rgba } from 'polished';

const Container = styled.div.attrs(({ isVisible }) => ({
  'aria-hidden': !isVisible,
}))`
  background: ${({ theme }) => theme.background};
  box-shadow: ${({ theme }) =>
    `${theme.boxShadowSize} ${rgba(
      theme.boxShadowColor,
      theme.boxShadowOpacity,
    )}`};
  box-sizing: border-box;
  position: relative;
  ${({ isVisible }) => (isVisible ? '' : 'width: 0 !important')};
  ${({ theme, hasAnimation, resizeInProgress }) =>
    hasAnimation && !resizeInProgress
      ? `transition: width ${theme.animationSpeed} ease-in-out;`
      : ''};
  margin-left: auto;
`;

const Splitter = styled.div`
  min-width: ${({ theme }) => theme.splitterSize};
  cursor: ${({ theme }) => theme.splitterCursor};
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
`;

const Content = styled.div`
  overflow: auto;
`;

export { Container, Content, Splitter };

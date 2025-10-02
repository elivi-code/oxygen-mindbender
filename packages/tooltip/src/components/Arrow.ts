import styled, { css } from 'styled-components';

const common = css`
  position: absolute;
  display: block;
  width: ${({ theme }) => theme.arrowSize};
  height: ${({ theme }) => theme.arrowSize};

  background: inherit;
  border: inherit;
`;

const Arrow = styled.div`
  visibility: hidden;
  ${common}

  &::before {
    content: '';
    visibility: visible;
    transform: rotate(45deg);
    ${common}
  }

  &[data-placement*='bottom'],
  &[data-placement*='bottom']::before {
    border-top-left-radius: ${({ theme }) => theme.arrowBorderRadius};
  }

  &[data-placement*='top'],
  &[data-placement*='top']::before {
    border-bottom-right-radius: ${({ theme }) => theme.arrowBorderRadius};
  }

  &[data-placement*='right'],
  &[data-placement*='right']::before {
    border-bottom-left-radius: ${({ theme }) => theme.arrowBorderRadius};
  }

  &[data-placement*='left'],
  &[data-placement*='left']::before {
    border-top-right-radius: ${({ theme }) => theme.arrowBorderRadius};
  }
`;

Arrow.displayName = 'Arrow';

export default Arrow;

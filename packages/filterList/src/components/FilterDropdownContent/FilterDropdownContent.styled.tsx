import styled from 'styled-components';

const Container = styled.div<{ $maxWidth?: boolean }>`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  ${({ $maxWidth }) => ($maxWidth ? 'max-width: 320px' : '')};
  max-height: inherit;
  ${({ theme }) => ({ ...theme.body01 })};
`;

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-bottom: ${({ theme }) => theme.spacing03};
`;

export { Container, LoaderContainer };

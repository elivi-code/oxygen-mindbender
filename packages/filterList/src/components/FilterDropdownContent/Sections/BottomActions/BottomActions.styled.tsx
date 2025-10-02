import styled from 'styled-components';
import Button from '@8x8/oxygen-button';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.ui01};
  padding-top: ${({ theme }) => theme.spacing03};
`;

const DeleteButton = styled(Button)<{ isDisabled: boolean }>`
  ${({ isDisabled, theme }) =>
    !isDisabled &&
    `color: ${theme.action03};

  &:hover {
    color: ${theme.action03};
  }`}
`;

export const NegativeActions = styled.div`
  display: flex;
`;

export { Container, DeleteButton };

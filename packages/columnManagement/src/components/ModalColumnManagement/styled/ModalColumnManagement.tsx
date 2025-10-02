import { ModalHeader } from '@8x8/oxygen-modal';
import styled from 'styled-components';

export const Description = styled.div`
  ${({ theme }) => ({ ...theme.body01 })};
  padding-bottom: 16px;
`;

export const StyledModalHeader = styled(ModalHeader)`
  padding-bottom: 8px;
`;

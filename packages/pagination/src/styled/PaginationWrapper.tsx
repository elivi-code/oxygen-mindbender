import styled, { CSSObject } from 'styled-components';
import { PaginationSize, PAGINATION_SIZE } from '../types';

const PaginationWrapper = styled.nav<{ size: PaginationSize }>`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-flow: wrap;
  padding: ${({ theme, size }) =>
      size === PAGINATION_SIZE.small ? theme.spacing02 : theme.spacing03}
    ${({ theme }) => theme.spacing05};
  ${({ theme }) => theme.body01 as CSSObject};
`;

export default PaginationWrapper;

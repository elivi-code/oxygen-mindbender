import styled from 'styled-components';
import { PAGINATION_SIZE } from '../types';
const PaginationWrapper = styled.nav `
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  flex-flow: wrap;
  padding: ${({ theme, size }) => size === PAGINATION_SIZE.small ? theme.spacing02 : theme.spacing03}
    ${({ theme }) => theme.spacing05};
  ${({ theme }) => theme.body01};
`;
export default PaginationWrapper;

import styled from 'styled-components';
import { CardStyles } from '../../SearchResultList/styled/CardListWrapper';
const LoadingIndicatorWrapper = styled.div `
  ${CardStyles};
  padding: 18px 0;
  background: ${({ theme }) => theme.ui06};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing04};
`;
export default LoadingIndicatorWrapper;

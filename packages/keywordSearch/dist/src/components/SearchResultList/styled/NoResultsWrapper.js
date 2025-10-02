import styled from 'styled-components';
const NoResultsWrapper = styled.span `
  padding: ${({ theme }) => `20px ${theme.spacing05} 20px ${theme.spacing07}`};
  display: block;
  text-align: left;
  ${({ theme }) => theme.body01};
  color: ${({ theme }) => theme.textColor02};
`;
export default NoResultsWrapper;

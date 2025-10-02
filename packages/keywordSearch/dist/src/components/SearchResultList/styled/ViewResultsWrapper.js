import styled from 'styled-components';
const ViewResultsWrapper = styled.div `
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing04};
  padding: ${({ theme }) => `${theme.spacing04} ${theme.spacing05} ${theme.spacing04} ${theme.spacing05}`};
`;
export default ViewResultsWrapper;

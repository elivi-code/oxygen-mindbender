import styled from 'styled-components';
const AIBadgeWrapper = styled.div `
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.ui23};
  color: ${({ theme }) => theme.textColor10};

  padding: 0 4px 0 3px;
  border-radius: 999rem;

  ${({ theme }) => ({ ...theme.label01 })};

  box-sizing: border-box;
`;
export default AIBadgeWrapper;

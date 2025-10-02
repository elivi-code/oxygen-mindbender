import styled from 'styled-components';

const ListWrapper = styled.ul`
  margin: 0;
  padding: ${({ theme }) =>
    `0 ${theme.spacing05} ${theme.spacing04} ${theme.spacing05}`};
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;

export default ListWrapper;

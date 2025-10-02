import styled from 'styled-components';
const Divider = styled.div `
  display: inline-block;
  width: 100%;
  border-bottom: 1px ${({ theme }) => theme.ui01} solid;
`;
export default Divider;

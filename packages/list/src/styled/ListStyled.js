import styled from 'styled-components';

export const ListStyled = styled.ul`
  padding: ${({ theme }) => theme.listPadding};
  margin: ${({ theme }) => theme.listMargin};
  list-style: ${({ isOrdered, theme }) =>
    isOrdered ? 'decimal' : theme.listStyle};
  max-width: ${({ theme }) => theme.listMaxWidth};
  border-bottom: ${props => (props.isGroup ? '1px' : '0')} solid
    ${({ theme }) => theme.listGroupBorderColor};
  background: ${({ withBackground, theme }) =>
    withBackground ? theme.listBackground : 'transparent'};
`;

export default ListStyled;

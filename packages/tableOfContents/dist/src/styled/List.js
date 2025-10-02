import styled from 'styled-components';
export const TocUnorderedList = styled.ul `
  list-style-type: none;
  margin: 0;
  padding: 0;

  flex-grow: 1;
  overflow: auto;
`;
export const Li = styled.li `
  display: flex;
  flex-direction: column;
  ${({ theme }) => theme.body01};
`;

import styled from 'styled-components';
const FiltersWrapper = styled.div `
  display: flex;
  flex-grow: 1;
  align-items: center;
  gap: ${({ theme }) => theme.spacing03};
`;
const FilterListWrapper = styled.div `
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: ${({ theme }) => theme.spacing03};
  flex-grow: 1;
  max-width: 100%;
  overflow: hidden;
`;
export { FiltersWrapper, FilterListWrapper };

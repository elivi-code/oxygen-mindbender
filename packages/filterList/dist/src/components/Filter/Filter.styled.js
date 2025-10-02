import styled from 'styled-components';
import Button from '@8x8/oxygen-button';
const FilterTag = styled(Button) `
  ${({ theme }) => ({ ...theme.body01 })};
  padding: 6px 12px;
  background-color: ${({ isFilterActive, theme }) => isFilterActive ? theme.ui09 : theme.ui05};
  color: ${({ isFilterActive, theme }) => isFilterActive ? theme.textColor07 : theme.textColor01};

  &:hover {
    background: ${({ theme }) => theme.ui01};
  }

  > svg {
    fill: ${({ isFilterActive, theme }) => isFilterActive ? theme.textColor07 : theme.textColor01};
    flex-shrink: 0;
  }

  max-width: 100%;
`;
const FilterTagTextWrapper = styled.span `
  max-width: 100%;
  white-space: nowrap;
  overflow: hidden;
  display: flex;
  gap: 0.5ch;
`;
export { FilterTag, FilterTagTextWrapper };

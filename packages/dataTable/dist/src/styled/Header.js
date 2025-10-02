import styled from 'styled-components';
import { pinnedCellZIndex } from './Cell';
import { HeaderRow } from './HeaderRow';
const StyledHeader = styled.thead `
  position: sticky;

  /* this is to avoid pinned cells from the body scrolling over the header */
  z-index: ${pinnedCellZIndex + 50};
  top: 0;
  display: flex;
  background-color: ${props => props.theme.ui06};

  /* makes sure it occupies full available width when scroll is present */
  width: fit-content;
  min-width: 100%;

  ${props => props.isLoading &&
    `
    overflow-x: auto;
    width: unset;

    ${HeaderRow} {
      width: fit-content;
      flex-grow: 1;
    }
  `}
`;
export { StyledHeader };

import styled from 'styled-components';

import { pinnedCellZIndex } from './Cell';
import { HeaderRow } from './HeaderRow';

// TODO: when loading state is active the scroll is on the entire table so you will also be scrolling the loading state
// even though it has no overflow
// in that case the horizontal scroll needs to appear on the header only (see vcc Agent Groups table for example)

interface Props {
  isLoading?: boolean;
}

const StyledHeader = styled.thead<Props>`
  position: sticky;

  /* this is to avoid pinned cells from the body scrolling over the header */
  z-index: ${pinnedCellZIndex + 50};
  top: 0;
  display: flex;
  background-color: ${props => props.theme.ui06};

  /* makes sure it occupies full available width when scroll is present */
  width: fit-content;
  min-width: 100%;

  ${props =>
    props.isLoading &&
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

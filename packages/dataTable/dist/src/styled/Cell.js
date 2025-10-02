import styled from 'styled-components';
import { ERROR_INDICATOR_WIDTH } from './ErrorIndicator';
const pinnedCellZIndex = 10;
export const OutlineWidth = 2;
// if during virtualization `position: absolute` is applied to parent
// Cell renders itself differently compared to when parent has `position: relative`
// that's why min-width had to be applied to prevent shrinkage
const Cell = styled.div `
  display: flex;
  align-items: center;
  justify-content: ${props => props.align || 'left'};
  height: 100%;
  box-sizing: border-box;
  background-color: inherit;
  padding: ${props => `${props.theme.spacing02} ${props.theme.spacing05}`};
  width: ${props => `${props.width}px`};
  min-width: ${props => `${props.width}px`}; /* see above comment */
  ${props => props.flexible && 'flex-grow: 1'};
  ${({ pinned, showPinnedBorder, theme }) => {
    // transparent border so content doesn't shift when border appears when resizing the screen
    const color = showPinnedBorder ? theme.ui01 : 'transparent';
    return (pinned?.isLastPinnedColumn &&
        `
    &::after {
      content: "";
      border-right: ${OutlineWidth}px solid ${color};
      position: absolute;
      top: -${OutlineWidth}px;
      right: 0px;
      bottom: -${OutlineWidth}px;
    }
    `);
}}

  ${({ pinned }) => pinned &&
    `
    position: sticky;
    ${pinned.position}: ${pinned.offset}px;
    height: calc(100% - ${2 * OutlineWidth}px);
    margin-top: ${OutlineWidth}px;
    margin-left: ${OutlineWidth}px;
  `}
  ${({ hasError, pinned }) => hasError &&
    pinned &&
    `
    margin-left: -${ERROR_INDICATOR_WIDTH}px;
  `};
`;
export { Cell, pinnedCellZIndex };

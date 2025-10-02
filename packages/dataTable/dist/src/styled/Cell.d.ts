import { AlignTypes, PinnedColumn } from '../table/utils';
declare const pinnedCellZIndex = 10;
export declare const OutlineWidth = 2;
interface Props {
    align?: AlignTypes;
    showPinnedBorder?: boolean;
    width?: number;
    flexible?: boolean;
    pinned?: PinnedColumn;
    hasError?: boolean;
}
declare const Cell: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, Props, never>;
export { Cell, pinnedCellZIndex };
//# sourceMappingURL=Cell.d.ts.map
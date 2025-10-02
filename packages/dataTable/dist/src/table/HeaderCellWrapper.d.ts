import React from 'react';
import { SortDirections } from './sortingUtils';
import { AlignTypes } from './utils';
interface Props {
    align?: AlignTypes;
    children: React.ReactNode;
    isSortable?: boolean;
    onSort?: (event: unknown) => void;
    sortDirection?: SortDirections;
    testId?: string;
}
declare const HeaderCellWrapper: React.FC<Props>;
export { HeaderCellWrapper };
//# sourceMappingURL=HeaderCellWrapper.d.ts.map
import React, { ReactNode } from 'react';
import { NoDataStateProps } from './NoDataState';
interface Props {
    children: ReactNode;
    noData?: NoDataStateProps & {
        hasNoData: boolean;
    };
}
declare const TableContainer: React.FC<Props>;
export { TableContainer };
//# sourceMappingURL=TableContainer.d.ts.map
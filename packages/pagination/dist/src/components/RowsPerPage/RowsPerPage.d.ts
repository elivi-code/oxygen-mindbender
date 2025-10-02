import React from 'react';
import { PaginationSize, Translations } from '../../types';
export interface RowsPerPageProps {
    onRowsPerPageChange: (row: number) => void;
    selectedRowsPerPage: number;
    rowsPerPageOptions: number[];
    size: PaginationSize;
    translations: Partial<Translations>;
    testId: string;
    isDisabled?: boolean;
}
declare const _default: React.NamedExoticComponent<RowsPerPageProps>;
export default _default;
//# sourceMappingURL=RowsPerPage.d.ts.map
import { FunctionComponent } from 'react';
import { PaginationSize, PaginationState, Translations } from './types';
export interface PaginationProps {
    canGoBack: boolean;
    canGoNext: boolean;
    numberOfPages: number;
    pageNumber: number;
    rowsPerPage: number;
    onPaginationChange: (pagination: PaginationState) => void;
    rowsPerPageOptions?: number[];
    size?: PaginationSize;
    translations: Translations;
    testId?: string;
    isDisabled?: boolean;
}
declare const Pagination: FunctionComponent<PaginationProps>;
export default Pagination;
//# sourceMappingURL=Pagination.d.ts.map
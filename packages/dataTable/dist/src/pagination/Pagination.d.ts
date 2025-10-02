import React, { ComponentProps } from 'react';
import OxygenPagination, { PaginationHookProps } from '@8x8/oxygen-pagination';
interface PaginationProps extends Omit<ComponentProps<typeof OxygenPagination>, keyof PaginationHookProps> {
    totalResults?: number;
    loadingData: boolean;
    limit: number;
    offset: number;
    testId?: string;
}
declare const Pagination: React.FC<PaginationProps>;
export { Pagination, PaginationProps };
//# sourceMappingURL=Pagination.d.ts.map
import React from 'react';
import { FilterType } from '@8x8/oxygen-filter-list';
import { SearchResultItemType } from '@8x8/oxygen-keyword-search';
import { SearchInputProps } from './search/SearchInput';
import { FiltersProps } from './filters/Filters';
interface TableHeaderProps {
    actionItems?: React.ReactElement[];
    filter?: Omit<FiltersProps, 'currentFilters'> & {
        filters: FilterType[];
        numActiveFilters: number;
    };
    searchInput?: Omit<SearchInputProps, 'filters'>;
    listTotalResults?: number;
    loadingTotalResults?: boolean;
    totalResultsMessage?: string;
    testId?: string;
}
declare const TableHeader: React.FC<TableHeaderProps>;
export { TableHeader, TableHeaderProps, SearchResultItemType };
//# sourceMappingURL=TableHeader.d.ts.map
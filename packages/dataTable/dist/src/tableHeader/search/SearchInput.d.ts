import React from 'react';
import { SearchResultItemType } from '@8x8/oxygen-keyword-search';
import { FilterType } from '@8x8/oxygen-filter-list';
import { SearchParams, SearchTranslations } from '../tableHeaderIndex';
interface SearchInputProps {
    filters?: FilterType[];
    resultsSizeLimit?: number;
    appliedSearchValue?: string;
    initialSearchResults?: SearchResultItemType[];
    listTotalResults?: number;
    searchTranslations: SearchTranslations;
    onSearchResultSelect: (item: SearchResultItemType) => void;
    onSearchResultsChange?: (results: SearchResultItemType[]) => void;
    onSearchChange: (searchValue: string) => void;
    getSearchResults: (params: SearchParams) => Promise<{
        data: SearchResultItemType[];
        totalResults: number;
    }>;
    onDataRetrievalError: () => void;
    testId?: string;
}
declare const SearchInput: React.FC<SearchInputProps>;
export { SearchInput, SearchInputProps };
//# sourceMappingURL=SearchInput.d.ts.map
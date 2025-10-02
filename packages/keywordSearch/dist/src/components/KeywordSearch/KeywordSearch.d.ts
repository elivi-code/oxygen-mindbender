import { FunctionComponent } from 'react';
import { SearchResultItemType, Translations } from '../../types';
export interface KeywordSearchProps {
    showSuggestionsDropdown?: boolean;
    isLoading: boolean;
    testId: string;
    searchResults: SearchResultItemType[];
    onSearchChange: (value: string) => void;
    onViewAllResults: (value: string) => void;
    onFetchSearchResults: (value: string) => void;
    onSearchResultSelect: (item: SearchResultItemType) => void;
    onClear: () => void;
    searchResultsSizeLimit?: number;
    searchResultsCount: number;
    translations: Translations;
    storedSearchValue?: string;
    size: 'small' | 'default' | 'large';
}
declare const KeywordSearch: FunctionComponent<KeywordSearchProps>;
export default KeywordSearch;
//# sourceMappingURL=KeywordSearch.d.ts.map
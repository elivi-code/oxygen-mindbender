import { FunctionComponent } from 'react';
import { SearchResultItemType, SearchResultTranslations } from '../../types';
export interface SearchResultsProps {
    searchResults: SearchResultItemType[];
    searchValue: string;
    resultsCount: number;
    onClickListItem: (val: SearchResultItemType) => void;
    onChangeActiveItem: (index: number) => void;
    onEnterListItem: (index: number) => void;
    onSearchSelect: (val: string) => void;
    translations: SearchResultTranslations;
    testId: string;
}
export declare const SearchResultList: FunctionComponent<SearchResultsProps>;
export default SearchResultList;
//# sourceMappingURL=SearchResultList.d.ts.map
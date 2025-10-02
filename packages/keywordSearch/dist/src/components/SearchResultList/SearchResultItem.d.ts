import { FunctionComponent } from 'react';
import { SearchResultItemType } from '../../types';
export interface SearchResultItemProps {
    id: string;
    testId: string;
    isActive: boolean;
    item: SearchResultItemType;
    onClick: (item: SearchResultItemType) => void;
}
export declare const SearchResultItem: FunctionComponent<SearchResultItemProps>;
export default SearchResultItem;
//# sourceMappingURL=SearchResultItem.d.ts.map
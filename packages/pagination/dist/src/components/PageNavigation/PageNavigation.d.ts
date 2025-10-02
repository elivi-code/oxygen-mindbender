import React from 'react';
import { PaginationSize, Translations } from '../../types';
export interface PageNavigationProps {
    canGoBack: boolean;
    canGoNext: boolean;
    currentPage: number;
    isCompactMode: boolean;
    numberOfPages: number;
    onPageChange: (value: number) => void;
    size: PaginationSize;
    translations: Partial<Translations>;
    testId: string;
    isDisabled?: boolean;
}
declare const _default: React.NamedExoticComponent<PageNavigationProps>;
export default _default;
//# sourceMappingURL=PageNavigation.d.ts.map
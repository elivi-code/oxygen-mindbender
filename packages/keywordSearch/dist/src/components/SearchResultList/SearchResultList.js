import React, { useEffect, useRef } from 'react';
import { EventKey, useArrowKeyListIndex, useGlobalActionKeyHandler, } from '@8x8/oxygen-utils';
import { getTestAttributes } from '@8x8/oxygen-config';
import NoResultsWrapper from './styled/NoResultsWrapper';
import CardListWrapper from './styled/CardListWrapper';
import ViewResultsWrapper from './styled/ViewResultsWrapper';
import Divider from './styled/Divider';
import SearchResultItem from './SearchResultItem';
import { SEARCH_RESULT_LIST_ID } from '../../utils/constants';
import ListWrapper from './styled/ListWrapper';
import ButtonWrapper from './styled/ButtonWrapper';
import ResultsTextWrapper from './styled/ResultsTextWrapper';
const useArrowKeySearchResultList = (elementCount, searchValue) => {
    const { focusedElementIndex } = useArrowKeyListIndex({
        elementCount,
        initialHighlightedElementIndex: 0,
    });
    return !searchValue ? 0 : focusedElementIndex;
};
export const SearchResultList = ({ searchResults = [], searchValue, resultsCount, onClickListItem, onChangeActiveItem, onEnterListItem, onSearchSelect, translations, testId, }) => {
    const focusedElementIndex = useArrowKeySearchResultList(searchResults.length + 1, searchValue);
    const focusedElIndexRef = useRef(focusedElementIndex);
    useEffect(() => {
        focusedElIndexRef.current = focusedElementIndex;
        const focusedEl = document.getElementById(focusedElementIndex.toString());
        onChangeActiveItem(focusedElIndexRef.current);
        focusedEl?.scrollIntoView({ block: 'nearest' });
    }, [focusedElementIndex, onChangeActiveItem]);
    useGlobalActionKeyHandler({
        actionKeyHandler: () => onEnterListItem(focusedElIndexRef.current),
        fireEvents: [EventKey.Enter],
    });
    if (searchValue && !searchResults.length) {
        return (React.createElement(CardListWrapper, null,
            React.createElement(NoResultsWrapper, null,
                translations.noResultsText,
                "\u00A0",
                React.createElement("strong", null, `"${searchValue}"`))));
    }
    const viewAllResultsText = searchValue
        ? `${translations.viewAllResultsForText} "${searchValue}"`
        : `${translations.viewAllResultsText}`;
    return (React.createElement(CardListWrapper, null,
        React.createElement(ViewResultsWrapper, null,
            React.createElement(ButtonWrapper, { ...getTestAttributes(`${testId}-view-all-results-button`), isInfo: true, id: "0", isActive: focusedElementIndex === 0, onClick: () => onSearchSelect(searchValue), tabIndex: -1 },
                React.createElement(ResultsTextWrapper, null,
                    React.createElement("span", { title: viewAllResultsText }, viewAllResultsText),
                    "\u00A0(",
                    resultsCount,
                    ")")),
            searchValue && React.createElement(Divider, null)),
        searchValue && (React.createElement(ListWrapper, { id: SEARCH_RESULT_LIST_ID }, searchResults.map((item, index) => (React.createElement(SearchResultItem, { key: Object.values(item)[0], testId: `${testId}-list-item-button`, id: (index + 1).toString(), isActive: focusedElementIndex === index + 1, item: item, onClick: onClickListItem })))))));
};
export default SearchResultList;

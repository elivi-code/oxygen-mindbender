import React, { useMemo, useRef, useState } from 'react';
import Input from '@8x8/oxygen-input';
import { CloseCircleIcon, SearchIcon } from '@8x8/oxygen-icon';
import { useOxygen } from '@8x8/oxygen-config';
import { useClickOutside, useGlobalActionKeyHandler, EventKey, } from '@8x8/oxygen-utils';
import SearchFilterWrapper from './styled/SearchFilterWrapper';
import LoadingIndicatorWrapper from './styled/LoadingIndicatorWrapper';
import SearchResultsTextWrapper from './styled/SearchResultsTextWrapper';
import StyledSpinner from './styled/StyledSpinner';
import ClearIconButton from './styled/ClearIconButton';
import SearchResultList from '../SearchResultList';
import { SEARCH_RESULT_LIST_ID, SEARCH_RESULTS_SIZE_LIMIT, } from '../../utils/constants';
const KeywordSearch = ({ showSuggestionsDropdown = true, isLoading, testId, searchResults, onSearchChange, onViewAllResults, onSearchResultSelect, onFetchSearchResults, onClear, searchResultsSizeLimit, searchResultsCount, storedSearchValue, translations, size, }) => {
    const { viewAllResultsText, noResultsText, loadingSearchResultsText, viewAllResultsForText, placeholder, clearButtonTitle, } = translations;
    const { theme } = useOxygen();
    const [searchValue, setSearchValue] = useState(storedSearchValue || '');
    const [activeItem, setActiveItem] = useState(0);
    const [showSearchResults, setShowSearchResults] = useState(false);
    const showSearchResultContent = showSuggestionsDropdown && showSearchResults && !isLoading;
    const handleClickOutside = () => {
        setShowSearchResults(false);
        const isSearchDirty = storedSearchValue && searchValue !== storedSearchValue;
        // when user changes the search input value without applying new search filter,
        // by clicking outside the search input value will be reset to applied filter
        if (isSearchDirty) {
            setSearchValue(storedSearchValue);
            onFetchSearchResults(storedSearchValue);
        }
    };
    const wrapperRef = useClickOutside(handleClickOutside);
    useGlobalActionKeyHandler({
        actionKeyHandler: handleClickOutside,
        fireEvents: [EventKey.Escape],
    });
    const inputRef = useRef(null);
    const handleOnChange = (event) => {
        const { value } = event.target;
        setSearchValue(value);
        if (!showSearchResults) {
            setShowSearchResults(true);
        }
        onSearchChange(value);
    };
    const handleOnEnterItem = (idx) => {
        if (document.activeElement !== inputRef.current) {
            return;
        }
        setShowSearchResults(false);
        if (idx === 0) {
            onViewAllResults(searchValue);
        }
        else {
            setSearchValue('');
            onSearchResultSelect(searchResults[idx - 1]);
        }
    };
    const handleClickListItem = (item) => {
        setShowSearchResults(false);
        setSearchValue('');
        onSearchResultSelect(item);
    };
    const handleOnSearchResults = (val) => {
        setShowSearchResults(false);
        onViewAllResults(val);
    };
    const handleTabKeyPress = (ev) => {
        if (ev.key === EventKey.Tab)
            setShowSearchResults(false);
    };
    const closeIcon = useMemo(
    // eslint-disable-next-line react/no-unstable-nested-components, react/display-name
    () => {
        const handleOnClear = () => {
            setSearchValue('');
            setShowSearchResults(false);
            onClear();
        };
        // eslint-disable-next-line react/display-name
        return () => (React.createElement(ClearIconButton, { testId: `${testId}-clear-input-search`, title: clearButtonTitle, onClick: handleOnClear, onKeyDown: handleTabKeyPress },
            React.createElement(CloseCircleIcon, { size: 16, color: theme.textColor02, "aria-label": clearButtonTitle })));
    }, [onClear, testId, clearButtonTitle, theme.textColor02]);
    const searchIcon = () => React.createElement(SearchIcon, { size: 20, "aria-hidden": "true" });
    return (React.createElement(SearchFilterWrapper, { ref: wrapperRef },
        React.createElement(Input, { testId: `${testId}-input`, size: size, placeholder: placeholder, value: searchValue, onChange: handleOnChange, iconRight: searchValue && closeIcon, iconLeft: searchIcon, onFocus: () => setShowSearchResults(true), onKeyDown: ev => !searchValue && handleTabKeyPress(ev), inputRef: inputRef, inputProps: {
                'aria-activedescendant': activeItem.toString(),
                'aria-owns': SEARCH_RESULT_LIST_ID,
            } }),
        isLoading && (React.createElement(LoadingIndicatorWrapper, null,
            React.createElement(StyledSpinner, { size: "small", strokeWidth: 1.5, "aria-hidden": "true" }),
            searchValue && (React.createElement(SearchResultsTextWrapper, { title: searchValue },
                translations.loadingSearchResultsText,
                ` "${searchValue}"`)))),
        showSearchResultContent && (React.createElement(SearchResultList, { searchValue: searchValue, searchResults: searchResults.slice(0, searchResultsSizeLimit || SEARCH_RESULTS_SIZE_LIMIT), resultsCount: searchResultsCount, onClickListItem: handleClickListItem, onChangeActiveItem: setActiveItem, onEnterListItem: handleOnEnterItem, onSearchSelect: handleOnSearchResults, translations: {
                loadingSearchResultsText,
                viewAllResultsText,
                noResultsText,
                viewAllResultsForText,
            }, testId: testId }))));
};
export default KeywordSearch;

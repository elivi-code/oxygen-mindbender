import React, { useState } from 'react';
import styled from 'styled-components';
import { getTestAttributes } from '@8x8/oxygen-config';
import { ToggleFiltersButton } from './filters/ToggleFiltersButton';
import { SearchInput } from './search/SearchInput';
import { Filters } from './filters/Filters';
import { ActionItemsContainer } from './actionItems/ActionItemsContainer';
const Toolbar = styled.div `
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.ui06};
  border-bottom: ${({ theme }) => `2px solid ${theme.ui01}`};
`;
const ToolbarItems = styled.div `
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ hasSearch, hasFilterWidget, hasActions }) => [
    hasSearch && 'minmax(100px, 700px)',
    hasFilterWidget && '1fr',
    hasActions && '1fr',
]
    .filter(Boolean)
    .join(' ')};
  padding: ${({ theme }) => theme.spacing03};
  align-items: center;
  ${({ showBorder, theme }) => showBorder && `border-bottom: 2px solid ${theme.ui01}`};
`;
const FiltersContainer = styled.div `
  padding: ${({ theme }) => theme.spacing04};
  ${({ isHidden }) => isHidden && 'display: none;'}
`;
const FilterWidgets = styled.div `
  flex: 0.5 0 150px;
  display: flex;
  padding: ${({ theme }) => `0px ${theme.spacing05}`};
  align-items: center;
`;
const ResultsLabel = styled.div `
  ${({ theme }) => ({ ...theme.body01 })};
  padding: ${({ theme }) => `0px ${theme.spacing04}`};
  text-wrap: nowrap;
  visibility: ${({ visible }) => !visible && 'hidden'};
`;
const TableHeader = ({ actionItems, listTotalResults, loadingTotalResults, totalResultsMessage, filter, searchInput, testId = 'data-table-header', }) => {
    const [showFilters, setShowFilters] = useState(false);
    const toggleShowFilters = () => setShowFilters(previous => !previous);
    const hasFilterWidget = Boolean(filter || searchInput);
    return (React.createElement(Toolbar, null,
        React.createElement(ToolbarItems, { showBorder: showFilters, hasSearch: Boolean(searchInput), hasFilterWidget: hasFilterWidget, hasActions: Boolean(actionItems?.length) },
            searchInput && (React.createElement(SearchInput, { testId: `${testId}-search-input`, filters: filter?.filters, appliedSearchValue: searchInput.appliedSearchValue, listTotalResults: listTotalResults, initialSearchResults: searchInput.initialSearchResults, searchTranslations: searchInput.searchTranslations, resultsSizeLimit: searchInput.resultsSizeLimit, getSearchResults: searchInput.getSearchResults, onSearchResultSelect: searchInput.onSearchResultSelect, onSearchResultsChange: searchInput.onSearchResultsChange, onSearchChange: searchInput.onSearchChange, onDataRetrievalError: searchInput.onDataRetrievalError })),
            hasFilterWidget && (React.createElement(FilterWidgets, null,
                filter && (React.createElement(ToggleFiltersButton, { testId: `${testId}-filter-button`, isActive: showFilters, numActiveFilters: filter.numActiveFilters, onClick: toggleShowFilters })),
                React.createElement(ResultsLabel, { ...getTestAttributes(`${testId}-results-label`), visible: !loadingTotalResults && listTotalResults !== undefined }, `${listTotalResults} ${totalResultsMessage}`))),
            actionItems?.length && React.createElement(ActionItemsContainer, { items: actionItems })),
        filter && (React.createElement(FiltersContainer, { isHidden: !showFilters },
            React.createElement(Filters, { ...filter, currentFilters: filter.filters || [] })))));
};
export { TableHeader };

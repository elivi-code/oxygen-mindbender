import React, { useState } from 'react';
import styled from 'styled-components';

import { FilterType } from '@8x8/oxygen-filter-list';
import { SearchResultItemType } from '@8x8/oxygen-keyword-search';
import { getTestAttributes } from '@8x8/oxygen-config';
import { ToggleFiltersButton } from './filters/ToggleFiltersButton';
import { SearchInput, SearchInputProps } from './search/SearchInput';
import { Filters, FiltersProps } from './filters/Filters';
import { ActionItemsContainer } from './actionItems/ActionItemsContainer';

const Toolbar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${props => props.theme.ui06};
  border-bottom: ${({ theme }) => `2px solid ${theme.ui01}`};
`;

const ToolbarItems = styled.div<{
  showBorder: boolean;
  hasSearch: boolean;
  hasFilterWidget: boolean;
  hasActions: boolean;
}>`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: ${({ hasSearch, hasFilterWidget, hasActions }) =>
    [
      hasSearch && 'minmax(100px, 700px)',
      hasFilterWidget && '1fr',
      hasActions && '1fr',
    ]
      .filter(Boolean)
      .join(' ')};
  padding: ${({ theme }) => theme.spacing03};
  align-items: center;
  ${({ showBorder, theme }) =>
    showBorder && `border-bottom: 2px solid ${theme.ui01}`};
`;

const FiltersContainer = styled.div<{ isHidden: boolean }>`
  padding: ${({ theme }) => theme.spacing04};
  ${({ isHidden }) => isHidden && 'display: none;'}
`;

const FilterWidgets = styled.div`
  flex: 0.5 0 150px;
  display: flex;
  padding: ${({ theme }) => `0px ${theme.spacing05}`};
  align-items: center;
`;

const ResultsLabel = styled.div<{ visible: boolean }>`
  ${({ theme }) => ({ ...theme.body01 })};
  padding: ${({ theme }) => `0px ${theme.spacing04}`};
  text-wrap: nowrap;
  visibility: ${({ visible }) => !visible && 'hidden'};
`;

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

const TableHeader: React.FC<TableHeaderProps> = ({
  actionItems,
  listTotalResults,
  loadingTotalResults,
  totalResultsMessage,
  filter,
  searchInput,
  testId = 'data-table-header',
}) => {
  const [showFilters, setShowFilters] = useState(false);
  const toggleShowFilters = () => setShowFilters(previous => !previous);
  const hasFilterWidget = Boolean(filter || searchInput);

  return (
    <Toolbar>
      <ToolbarItems
        showBorder={showFilters}
        hasSearch={Boolean(searchInput)}
        hasFilterWidget={hasFilterWidget}
        hasActions={Boolean(actionItems?.length)}
      >
        {searchInput && (
          <SearchInput
            testId={`${testId}-search-input`}
            filters={filter?.filters}
            appliedSearchValue={searchInput.appliedSearchValue}
            listTotalResults={listTotalResults}
            initialSearchResults={searchInput.initialSearchResults}
            searchTranslations={searchInput.searchTranslations}
            resultsSizeLimit={searchInput.resultsSizeLimit}
            getSearchResults={searchInput.getSearchResults}
            onSearchResultSelect={searchInput.onSearchResultSelect}
            onSearchResultsChange={searchInput.onSearchResultsChange}
            onSearchChange={searchInput.onSearchChange}
            onDataRetrievalError={searchInput.onDataRetrievalError}
          />
        )}
        {hasFilterWidget && (
          <FilterWidgets>
            {filter && (
              <ToggleFiltersButton
                testId={`${testId}-filter-button`}
                isActive={showFilters}
                numActiveFilters={filter.numActiveFilters}
                onClick={toggleShowFilters}
              />
            )}
            {/* listTotalResults can be undefined if the api request fails */}
            <ResultsLabel
              {...getTestAttributes(`${testId}-results-label`)}
              visible={!loadingTotalResults && listTotalResults !== undefined}
            >
              {`${listTotalResults} ${totalResultsMessage}`}
            </ResultsLabel>
          </FilterWidgets>
        )}
        {actionItems?.length && <ActionItemsContainer items={actionItems} />}
      </ToolbarItems>
      {filter && (
        <FiltersContainer isHidden={!showFilters}>
          <Filters {...filter} currentFilters={filter.filters || []} />
        </FiltersContainer>
      )}
    </Toolbar>
  );
};

export { TableHeader, TableHeaderProps, SearchResultItemType };

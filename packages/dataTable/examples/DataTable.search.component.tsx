/* this is a story so don't check unstable nested */
/* eslint-disable react/no-unstable-nested-components */

import React, { useCallback } from 'react';

import {
  useDataRetrieval,
  useTable,
  TableContainer,
  Table,
  TableHeader,
  RefreshAction,
  TableHeaderProps,
  SearchResultItemType,
  useAggregateDataRetrieval,
  SearchParams,
} from '@8x8/oxygen-data-table';

import { action } from 'storybook/actions';
import { Person } from './data/person';
import { Page } from './styled';
import { usePersonMockApi } from './data/personMockAPI/usePersonMockAPI';
import { onDataRetrievalError } from './utils/utils';
import { createPersonColumns } from './utils/createColumns';
import { searchTranslations } from './utils/translations';

export const DataTableSearchComponent: React.FC = () => {
  const columns = createPersonColumns();
  const mockApi = usePersonMockApi({ numData: 8 });
  const getDataAndTotalResults = useAggregateDataRetrieval({ ...mockApi });

  const dataRetrieval = useDataRetrieval<Person>({
    initialDataRetrievalParams: {
      limit: 10,
      offset: 0,
    },
    getDataAndTotalResults,
    onDataRetrievalError,
  });

  const getSearchResults = useCallback(
    async ({ search, filters, offset = 0, limit = 8 }: SearchParams) => {
      const { data, totalResults } = await getDataAndTotalResults({
        search,
        filters,
        offset,
        limit,
        shouldGetTotalResults: true,
      });

      return {
        data: data as SearchResultItemType[], // real world usage should map data retrieved from BE
        totalResults: totalResults as number,
      };
    },
    [getDataAndTotalResults],
  );

  const searchInput: TableHeaderProps['searchInput'] = {
    appliedSearchValue: dataRetrieval.search,
    resultsSizeLimit: 10,
    getSearchResults,
    onSearchChange: dataRetrieval.onSearchChange,
    onDataRetrievalError: () => {},
    onSearchResultSelect: () => {},
    searchTranslations,
  };

  const table = useTable({
    getRowId: row => `${row.firstName}_${row.lastName}`,
    data: dataRetrieval.data,
    columns,
  });

  const actionItems = [
    <RefreshAction
      key="refresh"
      title="Refresh"
      onClick={action('Action Item Refresh')}
    />,
  ];

  return (
    <Page>
      <TableContainer>
        <TableHeader actionItems={actionItems} searchInput={searchInput} />
        <Table tableApi={table} />
      </TableContainer>
    </Page>
  );
};

/* this is a story so don't check unstable nested */
/* eslint-disable react/no-unstable-nested-components */

import React, { useMemo } from 'react';

import {
  useDataRetrieval,
  useTable,
  TableContainer,
  Table,
  TableHeader,
  RefreshAction,
  TableHeaderProps,
  useAggregateDataRetrieval,
} from '@8x8/oxygen-data-table';

import {
  FilterDefinitionType,
  FilterType,
  getActiveFiltersNumber,
  OPERATOR_TYPES,
} from '@8x8/oxygen-filter-list';
import { action } from 'storybook/actions';
import { Person } from './data/person';
import { Page } from './styled';
import { usePersonMockApi } from './data/personMockAPI/usePersonMockAPI';
import { onDataRetrievalError } from './utils/utils';
import { createPersonColumns } from './utils/createColumns';

export interface Props {
  headerHasGlobalApplyButton?: boolean;
}

export const DataTableFilteredComponent: React.FC<Props> = ({
  headerHasGlobalApplyButton,
}) => {
  const columns = createPersonColumns();
  const mockApi = usePersonMockApi({ numData: 8 });
  const getDataAndTotalResults = useAggregateDataRetrieval({ ...mockApi });

  const initialFilters = useMemo(
    (): FilterType[] => [
      {
        id: 'age',
        label: 'Age',
        operator: {
          value: OPERATOR_TYPES.LESS_THAN,
          label: 'Less than',
        },
        values: [{ value: 15 }],
      },
    ],
    [],
  );

  const dataRetrieval = useDataRetrieval<Person>({
    getDataAndTotalResults,
    initialDataRetrievalParams: {
      limit: 10,
      offset: 0,
      filters: initialFilters,
    },
    onDataRetrievalError,
  });
  const numActiveFilters = useMemo(
    () => getActiveFiltersNumber(dataRetrieval.filters || []),
    [dataRetrieval.filters],
  );

  const filterDefinitions = useMemo(
    (): FilterDefinitionType[] => [
      {
        id: 'age',
        label: 'Age',
        operators: [
          {
            value: OPERATOR_TYPES.LESS_THAN,
            label: 'Less than',
          },
          {
            value: OPERATOR_TYPES.GREATER_THAN,
            label: 'Greater than',
          },
        ],
      },
    ],
    [],
  );

  const filter: TableHeaderProps['filter'] = {
    filters: dataRetrieval.filters || [],
    numActiveFilters,
    filterDefinitions,
    onChange: dataRetrieval.onFiltersChange, // filtering is performed on backend; just send relevant data via dataRetrieval to backendAPI
    hasGlobalApplyButton: headerHasGlobalApplyButton,
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
        <TableHeader
          actionItems={actionItems}
          filter={filter}
          listTotalResults={dataRetrieval.totalResults}
          totalResultsMessage="Total filtered results"
        />
        <Table tableApi={table} />
      </TableContainer>
    </Page>
  );
};

// DataTableFilteredComponent.storyName = 'Filtered';

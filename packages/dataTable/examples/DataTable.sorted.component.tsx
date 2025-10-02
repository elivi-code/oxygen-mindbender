import React from 'react';

import {
  useDataRetrieval,
  useTable,
  TableContainer,
  Table,
  useSorting,
  useAggregateDataRetrieval,
} from '@8x8/oxygen-data-table';

import { Person } from './data/person';
import { Page } from './styled';
import { usePersonMockApi } from './data/personMockAPI/usePersonMockAPI';
import { onDataRetrievalError } from './utils/utils';
import { createPersonColumns } from './utils/createColumns';

export const DataTableSortedComponent: React.FC = () => {
  const mockApi = usePersonMockApi({ numData: 5 });
  const getDataAndTotalResults = useAggregateDataRetrieval({ ...mockApi });

  const columns = createPersonColumns({ enableSorting: true });

  const dataRetrieval = useDataRetrieval<Person>({
    initialDataRetrievalParams: {
      limit: 10,
      offset: 0,
    },
    getDataAndTotalResults,
    onDataRetrievalError,
  });

  const sorting = useSorting({
    onSortingChange: dataRetrieval.onSortingChange, // sorting is performed on backed; just send relevant data via dataRetrieval to backendAPI
    sorting: dataRetrieval.sorting,
  });

  const table = useTable({
    ...sorting.sortingOptions,
    getRowId: row => `${row.firstName}_${row.lastName}`,
    data: dataRetrieval.data,
    columns,
    state: {
      ...sorting.sortingState,
    },
  });

  return (
    <Page>
      <TableContainer>
        <Table tableApi={table} />
      </TableContainer>
    </Page>
  );
};

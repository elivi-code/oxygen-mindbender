/* this is a story so don't check unstable nested */
/* eslint-disable react/no-unstable-nested-components */

import React, { useState } from 'react';

import {
  useDataRetrieval,
  useTable,
  TableContainer,
  Table,
  createColumnHelper,
  HeaderCell,
  TextCell,
  RefreshAction,
  TableHeader,
  useAggregateDataRetrieval,
} from '@8x8/oxygen-data-table';

import { makeData } from './data/makedata';
import { Person } from './data/person';
import { Page } from './styled';
import { useMockGetData } from './data/useMockGetData';
import { onDataRetrievalError } from './utils/utils';

const initialData = makeData(50);
const columnHelper = createColumnHelper<Person>();

export const DataTableBasicComponent: React.FC = () => {
  const [data] = useState(initialData);
  const { getData, getTotalResults } = useMockGetData({
    data,
    shouldSimulateLag: true,
  });
  const getDataAndTotalResults = useAggregateDataRetrieval({
    getData,
    getTotalResults,
  });

  const columns = [
    columnHelper.accessor(row => row.firstName, {
      id: 'firstName',
      enableSorting: false,
      header: () => <HeaderCell text="First Name" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
      meta: {
        pinned: false,
        type: 'large',
      },
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      enableSorting: false,
      header: () => <HeaderCell text="Last Name" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
      meta: {
        pinned: true,
        type: 'small',
      },
    }),
    columnHelper.accessor(row => row.age, {
      id: 'age',
      enableSorting: false,
      header: () => <HeaderCell text="Age" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
    }),
    columnHelper.accessor(row => row.visits, {
      id: 'visits',
      enableSorting: false,
      header: () => <HeaderCell text="Visits" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
    }),
    columnHelper.accessor(row => row.status, {
      id: 'Status',
      enableSorting: false,
      header: () => (
        <HeaderCell
          text="Status (some very long text in order to demonstrate header cell text wrap capability. If text does not fit in 3 lines, an overflow Y will be allowed (scrollable Y)"
          wrapText
        />
      ),
      cell: info => <TextCell primaryText={info.getValue()} />,
    }),
  ];

  const dataRetrieval = useDataRetrieval<Person>({
    getDataAndTotalResults,
    initialDataRetrievalParams: {
      limit: 10,
      offset: 0,
    },
    onDataRetrievalError,
  });

  const tableApi = useTable({
    data: dataRetrieval.data,
    columns,
    getRowId: row => `${row.firstName}_${row.lastName}`,
  });

  const actionItems = [
    <RefreshAction
      key="refresh"
      title="Refresh"
      onClick={() => {
        dataRetrieval.refreshData();
      }}
    />,
  ];

  return (
    <Page>
      <TableContainer>
        <TableHeader actionItems={actionItems} />
        <Table
          loading={dataRetrieval.loadingData}
          loadingText="Loading data..."
          tableApi={tableApi}
        />
      </TableContainer>
    </Page>
  );
};

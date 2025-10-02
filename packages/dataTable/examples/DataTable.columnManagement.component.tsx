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
  TableHeader,
  useColumnManagement,
  ColumnInsertAction,
  ColumnManagementModal,
  useAggregateDataRetrieval,
  ColumnDef,
} from '@8x8/oxygen-data-table';

import { makeData } from './data/makedata';
import { Person } from './data/person';
import { Page } from './styled';
import { useMockGetData } from './data/useMockGetData';
import { onDataRetrievalError } from './utils/utils';

const initialData = makeData(5);
const columnHelper = createColumnHelper<Person>();

export const DataTableColumnManagementComponent: React.FC = () => {
  const [data] = useState(initialData);
  const { getData, getTotalResults } = useMockGetData({ data });
  const getDataAndTotalResults = useAggregateDataRetrieval({
    getData,
    getTotalResults,
  });

  const dataRetrieval = useDataRetrieval<Person>({
    getDataAndTotalResults,
    initialDataRetrievalParams: {
      limit: 10,
      offset: 0,
    },
    onDataRetrievalError,
  });

  const columns: ColumnDef<Person, any>[] = [
    columnHelper.accessor(row => row.firstName, {
      id: 'firstName',
      enableSorting: false,
      header: () => <HeaderCell text="First Name" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
      meta: {
        /**
         * if columnManagement missing
         * columnManagement.visibleByDefault is true 'by default'
         */
        columnManagement: {
          label: 'First Name',
          visibleByDefault: true,
          /** won't be able to remove */
          locked: true,
        },
      },
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      enableSorting: false,
      header: () => <HeaderCell text="Last Name" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
    }),
    columnHelper.accessor(row => row.age, {
      id: 'age',
      enableSorting: false,
      header: () => <HeaderCell text="Age" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
      meta: {
        columnManagement: {
          label: 'Age',
          visibleByDefault: false,
        },
      },
    }),
  ];

  const columnManagement = useColumnManagement({
    columnDefinitions: columns,
  });

  const tableApi = useTable({
    data: dataRetrieval.data,
    columns,
    getRowId: row => `${row.firstName}_${row.lastName}`,
    state: {
      ...columnManagement.columnManagementTableState,
    },
  });

  const actionItems = [
    <ColumnInsertAction
      key="insert"
      title="Manage columns"
      onClick={columnManagement.openColumnManagement}
    />,
  ];

  return (
    <Page>
      <ColumnManagementModal {...columnManagement.columnManagementProps} />
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

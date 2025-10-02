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
  CellTypes,
} from '@8x8/oxygen-data-table';

import { makeData } from './data/makedata';
import { Person } from './data/person';
import { ReducedWidth } from './styled';
import { useMockGetData } from './data/useMockGetData';
import { onDataRetrievalError } from './utils/utils';

const initialData = makeData(5);
const columnHelper = createColumnHelper<Person>();

export type Props = {
  firstNameCellType: CellTypes;
  ageCellType: CellTypes;
  lastNameCellType: CellTypes;
};

export const DataTableColumnSizeComponent: React.FC<Props> = ({
  firstNameCellType,
  ageCellType,
  lastNameCellType,
}) => {
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
        type: firstNameCellType,
      },
    }),
    columnHelper.accessor(row => row.age, {
      id: 'age',
      enableSorting: false,
      header: () => <HeaderCell text="Age" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
      meta: {
        type: ageCellType,
      },
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      enableSorting: false,
      header: () => <HeaderCell text="Last Name" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
      meta: {
        type: lastNameCellType,
      },
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
    <ReducedWidth>
      <TableContainer>
        <TableHeader actionItems={actionItems} />
        <Table
          loading={dataRetrieval.loadingData}
          loadingText="Loading data..."
          tableApi={tableApi}
        />
      </TableContainer>
    </ReducedWidth>
  );
};

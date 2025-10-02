/* this is a story so don't check unstable nested */
/* eslint-disable react/no-unstable-nested-components */

/* eslint-disable no-use-before-define */

import React, { useEffect, useState } from 'react';

import {
  useDataRetrieval,
  useTable,
  Table,
  createColumnHelper,
  HeaderCell,
  TextCell,
  RefreshAction,
  TableHeader,
  useAggregateDataRetrieval,
  cellDefinitions,
  useRowSelection,
  ActionProps,
  TableContainer,
  Pagination,
} from '@8x8/oxygen-data-table';

import { PencilIcon } from '@8x8/oxygen-icon';
import { action } from 'storybook/actions';
import { makeData } from './data/makedata';
import { Person } from './data/person';
import { useMockGetData } from './data/useMockGetData';
import { onDataRetrievalError } from './utils/utils';
import { Page } from './styled';
import { paginationTranslations } from './utils/translations';
import { usePersonMockApi } from './data/personMockAPI/usePersonMockAPI';

const columnHelper = createColumnHelper<Person>();
const NUM_DATA = 200;
const INITIAL_LIMIT = 10;

interface Props {
  enableVirtualization?: boolean;
  showRowActions?: boolean;
  isPaginated?: boolean;
  blurOnTab: boolean;
}

export const DataTableVirtualizedComponent: React.FC<Props> = ({
  enableVirtualization = true,
  showRowActions = false,
  isPaginated = false,
  blurOnTab,
}) => {
  const { getData, getTotalResults } = usePersonMockApi({
    numData: NUM_DATA,
    shouldSimulateLag: true,
  });
  const getDataAndTotalResults = useAggregateDataRetrieval({
    getData,
    getTotalResults,
  });

  const columns = [
    columnHelper.display(cellDefinitions.getSelectColumnDef()),
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
      header: () => <HeaderCell text="Status" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
    }),
  ];

  const rowSelection = useRowSelection({
    initialRowSelection: {},
  });

  const dataRetrieval = useDataRetrieval<Person>({
    initialDataRetrievalParams: {
      limit: isPaginated ? INITIAL_LIMIT : NUM_DATA,
      offset: 0,
    },
    getDataAndTotalResults,
    onDataRetrievalError,
  });

  const tableApi = useTable({
    ...rowSelection.rowSelectionTableOptions,
    data: dataRetrieval.data,
    columns,
    getRowId: row => `${row.firstName}_${row.lastName}`,
    state: {
      ...rowSelection.rowSelectionTableState,
    },
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

  const configurableProps = {
    ...(showRowActions && { getRowActions }),
  };
  const pagination = usePagination({
    isPaginated,
    dataRetrieval,
  });

  return (
    <Page>
      <TableContainer>
        <TableHeader actionItems={actionItems} />
        <Table
          {...configurableProps}
          enableVirtualization={enableVirtualization}
          loading={dataRetrieval.loadingData}
          loadingText="Loading data..."
          tableApi={tableApi}
          blurOnTab={blurOnTab}
        />
        {pagination}
      </TableContainer>
    </Page>
  );
};

const getRowActions = (row: Person) => {
  const actionProps: ActionProps[] = [
    {
      label: 'Edit',
      onClick: action('Row action clicked'),
      icon: <PencilIcon />,
      key: 'edit',
      testId: 'edit-action',
    },
  ];

  return actionProps;
};

const usePagination = ({
  isPaginated,
  dataRetrieval,
}: {
  isPaginated: boolean;
  dataRetrieval: ReturnType<typeof useDataRetrieval<Person>>;
}) => {
  useEffect(() => {
    dataRetrieval.onPaginationChange({
      pageNumber: 1,
      rowsPerPage: isPaginated ? INITIAL_LIMIT : NUM_DATA,
    });
  }, [isPaginated]);

  if (isPaginated) {
    return (
      <Pagination
        rowsPerPageOptions={[6, 10, 25, 40]}
        onPaginationChange={dataRetrieval.onPaginationChange}
        limit={dataRetrieval.limit}
        offset={dataRetrieval.offset}
        totalResults={dataRetrieval.totalResults}
        loadingData={dataRetrieval.loadingData}
        translations={paginationTranslations}
      />
    );
  }

  return null;
};

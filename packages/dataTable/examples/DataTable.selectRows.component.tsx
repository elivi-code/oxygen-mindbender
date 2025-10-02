/* this is a story so don't check unstable nested */
/* eslint-disable react/no-unstable-nested-components */

import React, { useCallback, useEffect, useState } from 'react';

import {
  useDataRetrieval,
  useTable,
  TableContainer,
  Table,
  createColumnHelper,
  HeaderCell,
  TextCell,
  cellDefinitions,
  RefreshAction,
  TableHeader,
  useRowSelection,
  RowSelectionState,
  useAggregateDataRetrieval,
} from '@8x8/oxygen-data-table';

import { action } from 'storybook/actions';
import { makeData } from './data/makedata';
import { Person } from './data/person';
import { Page } from './styled';
import { useMockGetData } from './data/useMockGetData';
import { onDataRetrievalError } from './utils/utils';

const NUM_ROWS = 6;
const initialData = makeData(NUM_ROWS);
const columnHelper = createColumnHelper<Person>();

export type Props = {
  rowSelectionType: 'single' | 'multi';
};

const getRowId = (row: Person) => `${row.firstName}_${row.lastName}`;

export const DataTableSelectRowsComponent: React.FC<Props> = ({
  rowSelectionType,
}) => {
  const [data] = useState(initialData);
  const [activeRowId, setActiveRowId] = useState('');
  const mockApi = useMockGetData({ data, shouldSimulateLag: true });
  const getDataAndTotalResults = useAggregateDataRetrieval({ ...mockApi });

  const isMultiSelect = rowSelectionType === 'multi';

  const columns = [
    columnHelper.display(
      isMultiSelect
        ? cellDefinitions.getSelectColumnDef()
        : cellDefinitions.getSingleSelectColumnDef(),
    ),
    columnHelper.accessor(row => row.firstName, {
      id: 'firstName',
      enableSorting: false,
      header: () => <HeaderCell text="First Name" />,
      cell: info => <TextCell primaryText={info.getValue()} isInactive />,
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
    }),
  ];

  const createRandomMultiSelectState = useCallback(
    () =>
      data.reduce(
        (acc, record) => ({
          ...acc,
          [getRowId(record)]: Math.random() < 0.5,
        }),
        {} as RowSelectionState,
      ),
    [data],
  );

  const createRandomSingleSelectState = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * data.length);
    const selectedRowId = getRowId(data[randomIndex]);

    return { [selectedRowId]: true } as RowSelectionState;
  }, [data]);

  const rowSelection = useRowSelection({
    initialRowSelection: isMultiSelect
      ? createRandomMultiSelectState()
      : createRandomSingleSelectState(),
  });

  // update row selection state when selection type changes
  useEffect(() => {
    const newRowSelectionState = isMultiSelect
      ? createRandomMultiSelectState()
      : createRandomSingleSelectState();

    rowSelection.rowSelectionTableOptions.onRowSelectionChange(
      newRowSelectionState,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMultiSelect]);

  useEffect(() => {
    action('Row Selection Change')(rowSelection.rowSelection);
  }, [rowSelection.rowSelection]);

  const dataRetrieval = useDataRetrieval<Person>({
    initialDataRetrievalParams: {
      limit: 10,
      offset: 0,
    },
    getDataAndTotalResults,
    onDataRetrievalError,
  });

  const tableApi = useTable({
    ...rowSelection.rowSelectionTableOptions,
    data: dataRetrieval.data,
    columns,
    getRowId,
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

  return (
    <Page>
      <TableContainer>
        <TableHeader actionItems={actionItems} />
        <Table
          activeRowId={activeRowId}
          loading={dataRetrieval.loadingData}
          loadingText="Loading data..."
          tableApi={tableApi}
          onRowClick={row =>
            setActiveRowId(activeRowId === row.id ? '' : row.id)
          }
        />
      </TableContainer>
    </Page>
  );
};

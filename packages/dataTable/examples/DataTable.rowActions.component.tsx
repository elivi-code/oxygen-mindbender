/* this is a story so don't check unstable nested */
/* eslint-disable react/no-unstable-nested-components */

import React, { useState } from 'react';

import {
  useDataRetrieval,
  useTable,
  TableContainer,
  Table,
  RefreshAction,
  TableHeader,
  useAggregateDataRetrieval,
  ActionProps,
} from '@8x8/oxygen-data-table';

import {
  PencilIcon,
  GearIcon,
  LeaveIcon,
  MusicNoteIcon,
} from '@8x8/oxygen-icon';
import { action } from 'storybook/actions';

import { onDataRetrievalError } from './utils/utils';
import { useMockGetData } from './data/useMockGetData';
import { Page } from './styled';
import { Person } from './data/person';
import { makeData } from './data/makedata';
import { createPersonColumns } from './utils/createColumns';

const makeDateFulfillingRowActionsCriteria = () => {
  // eslint-disable-next-line no-constant-condition
  while (true) {
    const data = makeData(15);
    const hasAgeGreaterThan20 = data.some(person => person.age > 20);
    const hasFirstNameStartingWithVowel = data.some(person =>
      /^[AEIOUaeiou]/.test(person.firstName),
    );

    if (hasAgeGreaterThan20 && hasFirstNameStartingWithVowel) {
      return data;
    }
  }
};
const initialData = makeDateFulfillingRowActionsCriteria();

interface Props {
  blurOnTab: boolean;
}

export const DataTableRowActionsComponent: React.FC<Props> = ({
  blurOnTab,
}) => {
  const [data] = useState(initialData);
  const mockApi = useMockGetData({ data, shouldSimulateLag: true });
  const getDataAndTotalResults = useAggregateDataRetrieval({ ...mockApi });
  const columns = createPersonColumns();

  const dataRetrieval = useDataRetrieval<Person>({
    initialDataRetrievalParams: {
      limit: 6,
      offset: 0,
    },
    getDataAndTotalResults,
    onDataRetrievalError,
  });

  const tableApi = useTable({
    data: dataRetrieval.data,
    columns,
    getRowId: row => `${row.firstName}_${row.lastName}`,
  });

  const headerActionItems = [
    <RefreshAction
      key="refresh"
      title="Refresh"
      onClick={() => {
        dataRetrieval.refreshData();
      }}
    />,
  ];

  const getRowActions = (row: Person) => {
    const actionProps: ActionProps[] = [
      {
        label: 'Edit',
        onClick: action(`RowActions Edit for row.firstName=${row.firstName}`),
        icon: <PencilIcon />,
        key: 'edit',
        testId: 'edit-action',
      },
      {
        label: 'Delete',
        onClick: action('RowActions Delete'),
        icon: <LeaveIcon />,
        key: 'delete',
        testId: 'delete-action',
      },
      {
        label: 'View',
        onClick: action('RowActions View'),
        icon: <GearIcon />,
        disabled: {
          isDisabled: row.age > 20,
          reason: 'Disabled for certain criteria',
        },
        key: 'view',
        testId: 'view-action',
      },
    ];

    // starts with a wovel
    if (/^[AEIOUaeiou]/.test(row.firstName)) {
      actionProps.push({
        label: 'Play song',
        onClick: action('RowActions Play song'),
        icon: <MusicNoteIcon />,
        key: 'Play song',
        testId: 'play-song',
      });
    }

    return actionProps;
  };

  const [activeRowId, setActiveRowId] = useState('');

  return (
    <Page>
      <TableContainer>
        <TableHeader actionItems={headerActionItems} />
        <Table
          loading={dataRetrieval.loadingData}
          loadingText="Loading data..."
          tableApi={tableApi}
          getRowActions={getRowActions}
          onRowClick={row => {
            setActiveRowId(activeRowId === row.id ? '' : row.id);
          }}
          activeRowId={activeRowId}
          blurOnTab={blurOnTab}
        />
      </TableContainer>
    </Page>
  );
};

/* this is a story so don't check unstable nested */
/* eslint-disable react/no-unstable-nested-components */

import React from 'react';

import {
  useDataRetrieval,
  useTable,
  TableContainer,
  Table,
  Pagination,
  useAggregateDataRetrieval,
} from '@8x8/oxygen-data-table';

import { Person } from './data/person';
import { Page } from './styled';
import { usePersonMockApi } from './data/personMockAPI/usePersonMockAPI';
import { onDataRetrievalError } from './utils/utils';
import { paginationTranslations } from './utils/translations';
import { createPersonColumns } from './utils/createColumns';

interface Props {
  blurOnTab: boolean;
}

export const DataTablePaginatedComponent: React.FC<Props> = ({ blurOnTab }) => {
  const { getData, getTotalResults } = usePersonMockApi({
    numData: 26,
    shouldSimulateLag: true,
  });
  const getDataAndTotalResults = useAggregateDataRetrieval({
    getData,
    getTotalResults,
  });
  const columns = createPersonColumns();

  const dataRetrieval = useDataRetrieval<Person>({
    initialDataRetrievalParams: {
      limit: 6,
      offset: 0,
    },
    getDataAndTotalResults,
    onDataRetrievalError,
  });

  const table = useTable({
    getRowId: row => `${row.firstName}_${row.lastName}`,
    data: dataRetrieval.data,
    columns,
  });

  return (
    <Page>
      <TableContainer>
        <Table
          loading={dataRetrieval.loadingData}
          tableApi={table}
          blurOnTab={blurOnTab}
        />
        <Pagination
          rowsPerPageOptions={[6, 10, 25, 40]}
          onPaginationChange={dataRetrieval.onPaginationChange}
          limit={dataRetrieval.limit}
          offset={dataRetrieval.offset}
          totalResults={dataRetrieval.totalResults}
          loadingData={dataRetrieval.loadingData}
          translations={paginationTranslations}
        />
      </TableContainer>
    </Page>
  );
};

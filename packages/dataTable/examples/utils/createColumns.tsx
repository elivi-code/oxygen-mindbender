import {
  HeaderCell,
  TextCell,
  createColumnHelper,
} from '@8x8/oxygen-data-table';
import React from 'react';
import { Person } from '../data/person';

const columnHelper = createColumnHelper<Person>();

interface Props {
  enableSorting?: boolean;
}

const createPersonColumns = ({ enableSorting = false }: Props = {}) => {
  const columns = [
    columnHelper.accessor(row => row.firstName, {
      id: 'firstName',
      enableSorting,
      header: () => <HeaderCell text="First Name" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
    }),
    columnHelper.accessor(row => row.lastName, {
      id: 'lastName',
      enableSorting,
      header: () => <HeaderCell text="Last Name" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
    }),
    columnHelper.accessor(row => row.age, {
      id: 'age',
      enableSorting,
      header: () => <HeaderCell text="Age" />,
      cell: info => <TextCell primaryText={info.getValue()} />,
    }),
  ];

  return columns;
};

export { createPersonColumns };

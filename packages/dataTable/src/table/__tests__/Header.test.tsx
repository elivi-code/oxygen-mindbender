import { screen } from '@testing-library/react';
import React from 'react';
import { ColumnDef, createColumnHelper } from '@tanstack/react-table';
import { useTable } from '../useTable';
import { getMockData, Person } from '../../__tests__/mockData';
import { usePinnedColumns } from '../usePinnedColumns';
import { Header } from '../Header';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import '@testing-library/jest-dom';

const data = getMockData();
const columnHelper = createColumnHelper<Person>();

describe('Header', () => {
  it('should render header cells', () => {
    const columns: ColumnDef<Person, string>[] = [
      columnHelper.accessor(row => row.firstName, {
        id: 'firstName',
        header: jest.fn().mockReturnValue('First Name'), // returns string for sake of the test
      }),
      columnHelper.accessor(row => row.lastName, {
        id: 'lastName',
        header: jest.fn().mockReturnValue('Last Name'),
      }),
    ];

    const HeaderWrapper = () => {
      const tableApi = useTable({
        data,
        columns,
        getRowId: row => `${row.firstName}`,
      });
      const pinnedColumns = usePinnedColumns(tableApi);

      return (
        <table>
          <Header
            loading={false}
            showPinnedBorder={false}
            tableApi={tableApi}
            pinnedColumns={pinnedColumns}
          />
        </table>
      );
    };

    renderWithTheme(<HeaderWrapper />);
    expect(true).toBeTruthy();

    columns.forEach(column => {
      if (column.header) {
        expect(column.header).toHaveBeenCalledTimes(1);
        const fn = column.header as typeof jest.fn;
        const headerStr = fn();

        expect(screen.getByText(headerStr)).toBeInTheDocument();
      }
    });
  });
});

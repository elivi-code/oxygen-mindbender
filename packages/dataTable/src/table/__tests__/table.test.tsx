import { screen } from '@testing-library/react';
import React from 'react';
import { Table } from '../Table';
import { useTable } from '../useTable';
import { getColumns, getMockData } from '../../__tests__/mockData';
import { renderWithTheme } from '../../__tests__/renderWithTheme';

jest.mock('../Body', () => ({
  Body: ({ testId }: any) => (
    <tbody data-test-id={testId}>
      <tr>
        <td>Mocked Body Component</td>
      </tr>
    </tbody>
  ),
}));

const data = getMockData();
const columns = getColumns();

describe('Table', () => {
  it('should render LoadingState if loading=true', () => {
    const loadingText = 'Loading data...';
    const TableWrapper = () => {
      const tableApi = useTable({
        data,
        columns,
        getRowId: row => `${row.firstName}`,
      });

      return (
        <Table
          loading
          loadingText={loadingText}
          tableApi={tableApi}
          testId="test"
        />
      );
    };

    renderWithTheme(<TableWrapper />);

    const loadingStateComponent = screen.queryByText(loadingText);

    expect(loadingStateComponent).not.toBeNull();
  });

  it('should render Body if loading=false', () => {
    const TableWrapper = () => {
      const tableApi = useTable({
        data,
        columns,
        getRowId: row => `${row.firstName}`,
      });

      return <Table loading={false} tableApi={tableApi} testId="test" />;
    };

    renderWithTheme(<TableWrapper />);

    const bodyComponent = screen.queryByText('Mocked Body Component');

    expect(bodyComponent).not.toBeNull();
  });

  it('should render table with given testId', () => {
    const testId = 'test';
    const TableWrapper = () => {
      const tableApi = useTable({
        data,
        columns,
        getRowId: row => `${row.firstName}`,
      });

      return <Table loading={false} tableApi={tableApi} testId={testId} />;
    };

    renderWithTheme(<TableWrapper />);

    const table = screen.getByTestId(`${testId}-body`);

    expect(table).toBeDefined();
  });

  it('should render table with default testId', () => {
    const TableWrapper = () => {
      const tableApi = useTable({
        data,
        columns,
        getRowId: row => `${row.firstName}`,
      });

      return <Table loading={false} tableApi={tableApi} />;
    };

    renderWithTheme(<TableWrapper />);

    const table = screen.getByTestId('data-table-body');

    expect(table).toBeDefined();
  });
});

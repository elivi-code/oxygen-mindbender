import React from 'react';
import { render } from '@testing-library/react';
import { BodyRowComponent } from '../BodyRow';
import '@testing-library/jest-dom';
import { getColumns, getMockData, Person } from '../../__tests__/mockData';
import { useTable } from '../useTable';

const mockData = getMockData();
const columns = getColumns();

describe('BodyRow', () => {
  const getRowId = (row: Person) => `${row.firstName}_${row.lastName}`;

  type BodyRowWrapperProps = {
    data: Person;
    translateY?: number;
    testId: string;
  };

  const BodyRowWrapper = ({
    data, // one row for testing
    translateY,
    testId,
  }: BodyRowWrapperProps) => {
    const tableApi = useTable({
      data: [data],
      columns,
      getRowId,
    });
    const renderableRows = tableApi.getRowModel().rows.map(row => ({
      row,
    }));

    return (
      <table>
        <tbody>
          <BodyRowComponent
            row={renderableRows[0].row}
            hoveredRowId={null}
            focusedRowId={null}
            errorMap={{}}
            translateY={translateY}
            testId={testId}
          />
        </tbody>
      </table>
    );
  };

  it('should render BodyRow with translateY', () => {
    const translateY = 10;
    const { container } = render(
      <BodyRowWrapper
        data={mockData[0]}
        translateY={translateY}
        testId="testId"
      />,
    );

    const bodyRow = container.querySelector('tr');

    expect(bodyRow).toHaveStyle({
      position: 'absolute',
      transform: `translateY(${translateY}px)`,
    });
  });

  it('should render BodyRow without translateY', () => {
    const translateY = 10;
    const { container } = render(
      <BodyRowWrapper data={mockData[0]} testId="testId" />,
    );

    const bodyRow = container.querySelector('tr');

    expect(bodyRow).not.toHaveStyle({
      position: 'absolute',
      transform: `translateY(${translateY}px)`,
    });
  });
});

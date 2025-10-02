import { screen } from '@testing-library/react';
import React, { useRef } from 'react';
import { ColumnDef, Row } from '@tanstack/react-table';
import userEvent from '@testing-library/user-event';
import { useTable } from '../useTable';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import {
  getColumns,
  getMockColumnsWithCustomCell,
  getMockData,
  Person,
} from '../../__tests__/mockData';
import { Body } from '../Body';
import { usePinnedColumns } from '../usePinnedColumns';
import '@testing-library/jest-dom';
import { BodyRowComponent } from '../BodyRow';

jest.mock('../BodyRow', () => {
  const orig = jest.requireActual('../BodyRow');

  const localMock = jest.fn().mockImplementation(props => {
    return orig.BodyRowComponent(props);
  });

  return {
    ...orig,
    /** make this a mock to be spyable, meanwhile keeping original functionality */
    BodyRowComponent: localMock,
  };
});

const mockData = getMockData();
const mockColumns = getColumns();

describe('Body', () => {
  const getRowId = (row: Person) => `${row.firstName}_${row.lastName}`;

  type BodyWrapperProps = {
    data: Person[];
    onRowClick?: (row: Row<Person>) => void;
    columns?: ColumnDef<Person, any>[];
    shouldTrackHoveredRow?: boolean;
    blurOnTab?: boolean;
    testId?: string;
  };

  const BodyWrapper = ({
    data,
    onRowClick,
    columns = mockColumns,
    shouldTrackHoveredRow = false,
    blurOnTab = false,
    testId,
  }: BodyWrapperProps) => {
    const rowActionsPortalTarget: React.RefObject<HTMLDivElement> =
      useRef(null);
    const tableApi = useTable({
      data,
      columns,
      getRowId,
    });
    const pinnedColumns = usePinnedColumns(tableApi);
    const renderableRows = tableApi.getRowModel().rows.map(row => ({
      row,
    }));

    /* eslint-disable jsx-a11y/no-noninteractive-tabindex */
    return (
      <>
        <div data-test-id="tablePredecessor" tabIndex={0} />
        <table>
          <Body
            tableApi={tableApi}
            pinnedColumns={pinnedColumns}
            showPinnedBorder={false}
            rowActionsPortalTarget={rowActionsPortalTarget}
            onRowClick={onRowClick}
            renderableRows={renderableRows}
            shouldTrackHoveredRow={shouldTrackHoveredRow}
            blurOnTab={blurOnTab}
            testId={testId}
          />
        </table>
      </>
    );
  };

  it('should render rows, cells in rows', () => {
    const testId = 'test';

    renderWithTheme(<BodyWrapper data={mockData} testId={testId} />);

    mockData.forEach(row => {
      const rowId = getRowId(row);
      const rowElement = screen.getByTestId(`${testId}-row-${rowId}`);

      // row should be rendered
      expect(rowElement).toBeInTheDocument();

      Object.keys(row).forEach(key => {
        const cellId = `${rowId}_${key}`;
        const cellElement = screen.getByTestId(`${testId}-rowCell-${cellId}`);

        // cell should be rendered
        expect(cellElement).toBeInTheDocument();
      });
    });

    expect(true).toBeTruthy();
  });

  it('should call onRowClick on clicking a row', () => {
    const onRowClick = jest.fn();
    const testId = 'test';

    renderWithTheme(
      <BodyWrapper data={mockData} onRowClick={onRowClick} testId={testId} />,
    );

    mockData.forEach(row => {
      const rowId = getRowId(row);
      const rowElement = screen.getByTestId(`${testId}-row-${rowId}`);

      // click on row
      rowElement.click();

      // onRowClick should be called with current "tanstack/react-table"'s Row wrapper
      const arg = onRowClick.mock.lastCall[0];

      expect(arg.original).toEqual(row);
    });
  });

  it('should render Body with given testId', () => {
    const testId = 'test';

    renderWithTheme(<BodyWrapper data={mockData} testId={testId} />);

    const body = screen.getByTestId(testId);

    expect(body).toBeDefined();
  });

  it('should render Body with default testId', () => {
    renderWithTheme(<BodyWrapper data={mockData} />);

    const body = screen.getByTestId('body');

    expect(body).toBeDefined();
  });

  it('should render Body with hovered row tracking', () => {
    (BodyRowComponent as jest.Mock<typeof BodyRowComponent>).mockClear();

    const testId = 'test';
    const data = mockData.slice(0, 1);

    renderWithTheme(
      <BodyWrapper data={data} shouldTrackHoveredRow testId={testId} />,
    );

    expect(BodyRowComponent).toHaveBeenCalledTimes(1);
    expect(BodyRowComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        hoveredRowId: null,
        setHoveredRowId: expect.any(Function),
      }),
      {},
    );
  });

  it('should focus next BodyRow on ArrowDown key press', async () => {
    const testId = 'test';
    const data = mockData.slice(0, 2);

    renderWithTheme(
      <BodyWrapper data={data} shouldTrackHoveredRow testId={testId} />,
    );

    const firstRow = screen.getByTestId(`${testId}-row-${getRowId(data[0])}`);

    firstRow.focus();
    expect(firstRow).toHaveFocus();

    const user = userEvent.setup();

    await user.keyboard('{ArrowDown}');

    // The second row should be focused
    const secondRow = screen.getByTestId(`${testId}-row-${getRowId(data[1])}`);

    expect(secondRow).toHaveFocus();
  });

  it('should focus previous BodyRow on ArrowUp key press', async () => {
    const testId = 'test';
    const data = mockData.slice(0, 2);

    renderWithTheme(
      <BodyWrapper data={data} shouldTrackHoveredRow testId={testId} />,
    );

    const secondRow = screen.getByTestId(`${testId}-row-${getRowId(data[1])}`);

    secondRow.focus();
    expect(secondRow).toHaveFocus();

    const user = userEvent.setup();

    await user.keyboard('{ArrowUp}');

    // The first row should be focused
    const firstRow = screen.getByTestId(`${testId}-row-${getRowId(data[0])}`);

    expect(firstRow).toHaveFocus();
  });

  it('should focus previous focusable sub-item cell when ArrowLeft is pressed on a cell', async () => {
    const testId = 'test';
    const data = mockData.slice(0, 1);

    // Custom cell with a focusable button
    const columnsWithButton = getMockColumnsWithCustomCell(info => (
      <div>
        <span>{info.getValue()}</span>
        <button type="button" data-test-id={`cell-btn-${info.column.id}`}>
          Action
        </button>
      </div>
    ));

    renderWithTheme(
      <BodyWrapper data={data} columns={columnsWithButton} testId={testId} />,
    );

    const firstRow = screen.getByTestId(`${testId}-row-${getRowId(data[0])}`);

    firstRow.focus();
    expect(firstRow).toHaveFocus();

    // Simulate ArrowLeft key press
    const user = userEvent.setup();

    // The second button should now have focus
    await user.keyboard('{ArrowLeft}');
    let btn = screen.getByTestId(`cell-btn-${mockColumns[1].id}`);

    expect(btn).toHaveFocus();

    // The first button should now have focus
    await user.keyboard('{ArrowLeft}');
    btn = screen.getByTestId(`cell-btn-${mockColumns[0].id}`);

    expect(btn).toHaveFocus();
  });

  it('should focus next focusable sub-item in the same cell when ArrowRight is pressed on a cell', async () => {
    const testId = 'test';
    const data = mockData.slice(0, 1);

    // Custom cell with a focusable button
    const columnsWithButton = getMockColumnsWithCustomCell(info => (
      <div>
        <span>{info.getValue()}</span>
        <button type="button" data-test-id={`cell-btn-${info.column.id}`}>
          Action
        </button>
      </div>
    ));

    renderWithTheme(
      <BodyWrapper data={data} columns={columnsWithButton} testId={testId} />,
    );

    const firstRow = screen.getByTestId(`${testId}-row-${getRowId(data[0])}`);

    firstRow.focus();
    expect(firstRow).toHaveFocus();

    // Simulate ArrowRight key press
    const user = userEvent.setup();

    // The first button inside the cell should now have focus
    await user.keyboard('{ArrowRight}');
    let btn = screen.getByTestId(`cell-btn-${mockColumns[0].id}`);

    expect(btn).toHaveFocus();

    // The second button inside the cell should now have focus
    await user.keyboard('{ArrowRight}');
    btn = screen.getByTestId(`cell-btn-${mockColumns[1].id}`);

    expect(btn).toHaveFocus();
  });

  it('should focus first row if tbody is focused', async () => {
    const testId = 'table-body';
    const data = mockData.slice(0, 1);

    renderWithTheme(
      <BodyWrapper
        data={data}
        shouldTrackHoveredRow
        testId={testId}
        blurOnTab
      />,
    );
    const body = screen.getByTestId(testId);

    const user = userEvent.setup();

    await user.keyboard('{Tab}'); // Simulate a key press to mark navigation as keyboard-based

    body.focus();
    const firstRow = screen.getByTestId(`${testId}-row-${getRowId(data[0])}`);

    expect(firstRow).toHaveFocus();
  });

  it('should focus item preceeding tbody if blurOnTab is true and shift-tab is pressed', async () => {
    const testId = 'table-body';
    const data = mockData.slice(0, 1);

    renderWithTheme(
      <BodyWrapper
        data={data}
        shouldTrackHoveredRow
        testId={testId}
        blurOnTab
      />,
    );

    const body = screen.getByTestId(testId);
    const user = userEvent.setup();

    await user.keyboard('{Tab}'); // Simulate a key press to mark navigation as keyboard-based

    body.focus();
    const firstRow = screen.getByTestId(`${testId}-row-${getRowId(data[0])}`);

    expect(firstRow).toHaveFocus();

    // Simulate Shift + Tab key press
    await user.keyboard('{Shift>}{Tab}{/Shift}');

    // The first row should lose focus and the previous focusable element should be focused
    expect(firstRow).not.toHaveFocus();
    expect(document.activeElement).not.toBe(firstRow);
  });
});

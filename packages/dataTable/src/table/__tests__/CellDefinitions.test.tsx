import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
  getSelectColumnDef,
  getSingleSelectColumnDef,
} from '../CellDefinitions';
import '@testing-library/jest-dom';

// Mock CheckboxCell to observe props and simulate user interaction
jest.mock('../CheckboxCell', () => ({
  __esModule: true,
  CheckboxCell: jest.fn(
    ({ inputProps, checked, onChange, isDisabled, testId }) => (
      <input
        type="checkbox"
        aria-label={inputProps['aria-label']}
        checked={checked}
        data-test-id={testId}
        disabled={isDisabled}
        onChange={e => onChange?.(e.target.checked)}
        readOnly
      />
    ),
  ),
}));

// Mock RadioButton to observe props and simulate user interaction
jest.mock('@8x8/oxygen-radio', () => ({
  __esModule: true,
  default: jest.fn(({ inputProps, isChecked, onChange, testId }) => (
    <input
      type="radio"
      aria-label={inputProps['aria-label']}
      checked={isChecked}
      data-test-id={testId}
      onChange={onChange}
      readOnly
    />
  )),
}));

describe('getSelectColumnDef', () => {
  const mockTable = {
    getIsAllPageRowsSelected: jest.fn(() => false),
    getIsSomePageRowsSelected: jest.fn(() => false),
    getToggleAllPageRowsSelectedHandler: jest.fn(() => jest.fn()),
  };
  const mockRow = {
    index: 1,
    getIsSelected: jest.fn(() => false),
    getToggleSelectedHandler: jest.fn(() => jest.fn()),
  };
  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a column definition with correct id and meta', () => {
    const colDef = getSelectColumnDef();

    expect(colDef.id).toBe('selectRow');
    expect(colDef.enableSorting).toBe(false);
    expect(colDef.meta).toMatchObject({
      columnManagement: expect.any(Object),
      pinned: true,
      type: 'small',
    });
  });

  it('should render CheckboxCell in header with correct props', () => {
    const colDef = getSelectColumnDef();

    render(colDef.header?.({ table: mockTable, isLoading: false }));
    const checkboxCell = screen.getByTestId('HEADER_CHECKBOX_CELL');

    expect(checkboxCell).toBeInTheDocument();
    expect(checkboxCell).toHaveAttribute('aria-label', 'Select all rows');
    expect(checkboxCell).not.toBeChecked();
    expect(checkboxCell).not.toBeDisabled();
  });

  it('should render CheckboxCell in header as disabled when loading', () => {
    const colDef = getSelectColumnDef();

    render(colDef.header?.({ table: mockTable, isLoading: true }));
    const checkboxCell = screen.getByTestId('HEADER_CHECKBOX_CELL');

    expect(checkboxCell).toBeDisabled();
  });

  it('should render CheckboxCell in cell with correct aria-label and checked state', () => {
    const colDef = getSelectColumnDef();

    render(colDef.cell?.({ row: mockRow }));
    const checkboxCell = screen.getByTestId('ROW_CHECKBOX_CELL_1');

    expect(checkboxCell).toBeInTheDocument();
    expect(checkboxCell).toHaveAttribute('aria-label', 'Select row 1');
    expect(checkboxCell).not.toBeChecked();
  });

  it('should call row.getToggleSelectedHandler on cell checkbox change', async () => {
    const handler = jest.fn();

    mockRow.getToggleSelectedHandler.mockReturnValue(handler);
    const colDef = getSelectColumnDef();

    render(colDef.cell?.({ row: mockRow }));

    const checkbox = screen.getByTestId('ROW_CHECKBOX_CELL_1');

    await user.click(checkbox);
    expect(handler).toHaveBeenCalledWith({ target: { checked: true } });
  });

  it('should use custom translations if provided', () => {
    const colDef = getSelectColumnDef({
      selectAllRowsLabel: 'Alle auswählen',
      selectRowLabel: 'Zeile auswählen',
      deselectRowLabel: 'Zeile abwählen',
    });

    render(colDef.header?.({ table: mockTable, isLoading: false }));
    expect(screen.getByTestId('HEADER_CHECKBOX_CELL')).toBeInTheDocument();
    expect(screen.getByTestId('HEADER_CHECKBOX_CELL')).toHaveAttribute(
      'aria-label',
      'Alle auswählen',
    );

    render(colDef.cell?.({ row: mockRow }));
    expect(screen.getByTestId('ROW_CHECKBOX_CELL_1')).toBeInTheDocument();
    expect(screen.getByTestId('ROW_CHECKBOX_CELL_1')).toHaveAttribute(
      'aria-label',
      'Zeile auswählen 1',
    );
  });
});

describe('getSingleSelectColumnDef', () => {
  const mockTable = {
    setRowSelection: jest.fn(),
  };
  const mockRow = {
    index: 2,
    id: 'row2',
    getIsSelected: jest.fn(() => false),
  };
  let user;

  beforeEach(() => {
    user = userEvent.setup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a column definition with correct id and meta', () => {
    const colDef = getSingleSelectColumnDef();

    expect(colDef.id).toBe('singleSelectRow');
    expect(colDef.enableSorting).toBe(false);
    expect(colDef.meta).toMatchObject({
      columnManagement: expect.any(Object),
      pinned: true,
      type: 'small',
    });
  });

  it('should render RadioButton in cell with correct aria-label and checked state', () => {
    const colDef = getSingleSelectColumnDef();

    if (typeof colDef.cell === 'function') {
      render(
        colDef.cell?.({ row: mockRow, table: mockTable }) as React.ReactElement,
      );
      const radio = screen.getByTestId('ROW_RADIO_BUTTON_CELL_2');

      expect(radio).toBeInTheDocument();
      expect(radio).toHaveAttribute('aria-label', 'Select row 2');
      expect(radio).not.toBeChecked();
    }
  });

  it('should call table.setRowSelection on radio change', async () => {
    const colDef = getSingleSelectColumnDef();

    if (typeof colDef.cell === 'function') {
      render(
        colDef.cell?.({ row: mockRow, table: mockTable }) as React.ReactElement,
      );
      const radio = screen.getByTestId('ROW_RADIO_BUTTON_CELL_2');

      await user.click(radio);
      expect(mockTable.setRowSelection).toHaveBeenCalledWith(
        expect.any(Function),
      );
    }
  });

  it('should use custom translation if provided', () => {
    const colDef = getSingleSelectColumnDef({
      selectRowLabel: 'Zeile auswählen',
    });

    if (typeof colDef.cell === 'function') {
      render(
        colDef.cell({ row: mockRow, table: mockTable }) as React.ReactElement,
      );
      expect(screen.getByTestId('ROW_RADIO_BUTTON_CELL_2')).toBeInTheDocument();
      expect(screen.getByTestId('ROW_RADIO_BUTTON_CELL_2')).toHaveAttribute(
        'aria-label',
        'Zeile auswählen 2',
      );
    }
  });
});

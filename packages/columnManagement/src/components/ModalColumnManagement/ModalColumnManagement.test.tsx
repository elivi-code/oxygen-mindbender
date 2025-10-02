import React from 'react';

import {
  screen,
  render,
  RenderResult,
  fireEvent,
} from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';

import {
  MOCK_AVAILABLE_COLUMNS,
  MOCK_CURRENT_COLUMNS,
  MOCK_DEFAULT_COLUMNS,
  MOCK_DEFAULT_COLUMNS_EQUAL_CURRENT,
} from '../../mocks/ColumnManagement';
import {
  MOCK_EDIT_COLUMNS_RESET,
  MOCK_EDIT_COLUMNS_SAVED,
} from '../../mocks/Telemetry';
import { ModalColumnManagement } from './ModalColumnManagement';
import { ColumnInterface } from '../../types/ColumnManagement';

function renderElement(
  defaultColumns: ColumnInterface[] | undefined,
  onSave = () => null,
  onClose = () => null,
  telemetryCallback = () => null,
  onReset = () => null,
): RenderResult {
  return render(
    <OxygenProvider telemetryCallback={telemetryCallback}>
      <ModalColumnManagement
        onSave={onSave}
        onClose={onClose}
        onReset={onReset}
        defaultColumns={defaultColumns}
        availableColumns={MOCK_AVAILABLE_COLUMNS}
        currentColumns={MOCK_CURRENT_COLUMNS}
        telemetryProps={{ uiArea: 'test' }}
      />
    </OxygenProvider>,
  );
}

describe('<ModalColumnManagement>', () => {
  it('renders as expected', () => {
    renderElement(MOCK_DEFAULT_COLUMNS);

    expect(screen.queryByTestId('MODAL_COLUMN_MANAGEMENT')).toBeTruthy();
  });

  it('disables save button when opened modal for the first time', () => {
    renderElement(MOCK_DEFAULT_COLUMNS);

    expect(screen.getByTestId('MODAL_COLUMN_MANAGEMENT_Save')).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  it('disables reset button when active column is equal to the default column', () => {
    renderElement(MOCK_DEFAULT_COLUMNS_EQUAL_CURRENT);

    expect(screen.getByTestId('MODAL_COLUMN_MANAGEMENT_Reset')).toHaveAttribute(
      'aria-disabled',
      'true',
    );
  });

  it('clicks on cancel button', () => {
    const mockOnSave = jest.fn();
    const mockOnCancel = jest.fn();
    const mockOnTelemetry = jest.fn();

    renderElement(
      MOCK_DEFAULT_COLUMNS,
      mockOnSave,
      mockOnCancel,
      mockOnTelemetry,
    );

    fireEvent.click(screen.getByTestId('MODAL_COLUMN_MANAGEMENT_Cancel'));
    expect(mockOnTelemetry).toHaveBeenNthCalledWith(
      1,
      'edit_columns_cancelled',
      { uiArea: 'test' },
    );
  });

  it('resets with defaultColumns', () => {
    const mockOnSave = jest.fn();
    const mockOnClose = jest.fn();
    const mockOnTelemetry = jest.fn();
    const mockOnReset = jest.fn();

    renderElement(
      MOCK_DEFAULT_COLUMNS,
      mockOnSave,
      mockOnClose,
      mockOnTelemetry,
      mockOnReset,
    );

    fireEvent.click(screen.getByTestId('MODAL_COLUMN_MANAGEMENT_Reset'));
    expect(mockOnTelemetry).toHaveBeenNthCalledWith(
      1,
      'edit_columns_reset',
      MOCK_EDIT_COLUMNS_RESET,
    );
    expect(mockOnReset).toBeCalled();

    fireEvent.click(screen.getByTestId('MODAL_COLUMN_MANAGEMENT_Save'));

    expect(mockOnSave).toBeCalled();
    expect(mockOnSave).toBeCalledWith(MOCK_DEFAULT_COLUMNS);
    expect(mockOnTelemetry).toHaveBeenNthCalledWith(
      2,
      'edit_columns_saved',
      MOCK_EDIT_COLUMNS_SAVED,
    );
  });
});

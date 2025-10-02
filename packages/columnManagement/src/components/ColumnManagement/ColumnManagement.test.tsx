import React from 'react';
import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';

import {
  MOCK_AVAILABLE_COLUMNS,
  MOCK_CURRENT_COLUMNS,
  MOCK_CURRENT_COLUMNS_ELEMENT_ADDED,
  MOCK_CURRENT_COLUMNS_ELEMENT_REMOVED,
} from '../../mocks/ColumnManagement';
import { MOCK_COLUMN_ADDED, MOCK_COLUMN_REMOVED } from '../../mocks/Telemetry';
import { ColumnManagement } from './ColumnManagement';

function renderElement(
  onUpdate = () => null,
  telemetryCallback = () => null,
  availableColumns = MOCK_AVAILABLE_COLUMNS,
): RenderResult {
  return render(
    <OxygenProvider telemetryCallback={telemetryCallback}>
      <ColumnManagement
        availableColumns={availableColumns}
        currentColumns={MOCK_CURRENT_COLUMNS}
        onUpdate={onUpdate}
        telemetryProps={{ uiArea: 'test' }}
      />
    </OxygenProvider>,
  );
}

describe('<ColumnManagement>', () => {
  it('renders as expected', () => {
    renderElement();

    expect(screen.queryByTestId('COLUMN_MANAGEMENT')).toBeTruthy();
  });

  it('removes an element from current column when clicked on the trash bin', () => {
    const mockOnUpdate = jest.fn();
    const mockOnTelemetry = jest.fn();

    renderElement(mockOnUpdate, mockOnTelemetry);

    const button = screen.getAllByTestId('COLUMN_MANAGEMENT_TRASH_BIN_BTN')[0];

    fireEvent.click(button);

    expect(mockOnUpdate).toBeCalled();
    expect(mockOnUpdate).toBeCalledWith(MOCK_CURRENT_COLUMNS_ELEMENT_REMOVED);
    expect(mockOnTelemetry).toBeCalled();
    expect(mockOnTelemetry).toBeCalledWith(
      'column_removed',
      MOCK_COLUMN_REMOVED,
    );
  });

  it('adds an element to Current Columns when clicked on the plus icon from available columns', () => {
    const mockOnUpdate = jest.fn();
    const mockOnTelemetry = jest.fn();

    renderElement(mockOnUpdate, mockOnTelemetry);

    const button = screen.getAllByTestId('COLUMN_MANAGEMENT_PLUS_BTN')[0];

    fireEvent.click(button);

    expect(mockOnUpdate).toBeCalled();
    expect(mockOnUpdate).toBeCalledWith(MOCK_CURRENT_COLUMNS_ELEMENT_ADDED);
    expect(mockOnTelemetry).toBeCalled();
    expect(mockOnTelemetry).toBeCalledWith('column_added', MOCK_COLUMN_ADDED);
  });

  it('shows empty message on available columns', () => {
    const mockOnUpdate = jest.fn();
    const mockOnTelemetry = jest.fn();

    renderElement(mockOnUpdate, mockOnTelemetry, []);

    expect(
      screen.getByText('All available columns are being used.'),
    ).toBeInTheDocument();
  });
});

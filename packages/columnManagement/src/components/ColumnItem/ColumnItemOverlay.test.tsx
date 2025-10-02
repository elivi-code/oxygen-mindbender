import React from 'react';
import { act, screen, render, RenderResult } from '@testing-library/react';
import { OxygenProvider } from '@8x8/oxygen-config';
import { MOCK_COLUMNS } from '../../mocks/ColumnManagement';
import { ColumnItemOverlay } from './ColumnItemOverlay';
import { ColumnsType } from '../../types/ColumnManagement';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import { MOCK_COLUMN_MANAGEMENT_CONTEXT } from '../../mocks/ColumnManagementContext';

function renderElement(type: ColumnsType, activeId: string): RenderResult {
  return render(
    <OxygenProvider>
      <ColumnManagementContext.Provider value={MOCK_COLUMN_MANAGEMENT_CONTEXT}>
        <ColumnItemOverlay
          items={MOCK_COLUMNS}
          activeId={activeId}
          type={type}
          testId="COLUMN_MANAGEMENT"
        />
      </ColumnManagementContext.Provider>
    </OxygenProvider>,
  );
}

describe('<ColumnItemOverlay>', () => {
  it('renders as expected for CurrentColumns type', () => {
    act(() => {
      renderElement(ColumnsType.CurrentColumns, '2');
    });
    expect(
      screen.queryByTestId('COLUMN_MANAGEMENT_COLUMN_ITEM_OVERLAY'),
    ).toBeTruthy();
    expect(screen.getByText('Channel')).toBeInTheDocument();
  });

  it('renders as expected for Available type', () => {
    act(() => {
      renderElement(ColumnsType.AvailableColumns, '11');
    });
    expect(
      screen.queryByTestId('COLUMN_MANAGEMENT_COLUMN_ITEM_OVERLAY'),
    ).toBeTruthy();
    expect(screen.getByText('Average Staffing')).toBeInTheDocument();
  });

  it('renders as expected for undefined active item', () => {
    act(() => {
      renderElement(ColumnsType.AvailableColumns, '');
    });
    expect(
      screen.queryByTestId('COLUMN_MANAGEMENT_COLUMN_ITEM_OVERLAY'),
    ).not.toBeInTheDocument();
  });
});

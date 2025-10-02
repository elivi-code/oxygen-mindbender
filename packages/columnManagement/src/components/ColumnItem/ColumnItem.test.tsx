import React from 'react';

import { act, screen, render, RenderResult } from '@testing-library/react';
import noop from 'lodash.noop';

import { OxygenProvider } from '@8x8/oxygen-config';

import { MOCK_AVAILABLE_COLUMNS } from '../../mocks/ColumnManagement';
import { ColumnItem } from './ColumnItem';
import { ColumnsType } from '../../types/ColumnManagement';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import { MOCK_COLUMN_MANAGEMENT_CONTEXT } from '../../mocks/ColumnManagementContext';

function renderElement(): RenderResult {
  return render(
    <OxygenProvider>
      <ColumnManagementContext.Provider value={MOCK_COLUMN_MANAGEMENT_CONTEXT}>
        <ColumnItem
          item={MOCK_AVAILABLE_COLUMNS[0]}
          onAction={noop}
          type={ColumnsType.AvailableColumns}
        />
      </ColumnManagementContext.Provider>
    </OxygenProvider>,
  );
}

describe('<ColumnItem>', () => {
  it('renders as expected', () => {
    act(() => {
      renderElement();
    });
    expect(screen.queryByTestId('COLUMN_MANAGEMENT_COLUMN_ITEM')).toBeTruthy();
  });
});

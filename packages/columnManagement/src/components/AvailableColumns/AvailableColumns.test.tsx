import React from 'react';

import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';

import { MOCK_SORTED_AVAILABLE_COLUMNS } from '../../mocks/ColumnManagement';
import { AvailableColumns } from './AvailableColumns';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import {
  MOCK_COLUMN_MANAGEMENT_CONTEXT,
  MOCK_COLUMN_MANAGEMENT_CONTEXT_TOOLTIP,
} from '../../mocks/ColumnManagementContext';

function renderElement(context = MOCK_COLUMN_MANAGEMENT_CONTEXT): RenderResult {
  return render(
    <OxygenProvider>
      <ColumnManagementContext.Provider value={context}>
        <AvailableColumns />
      </ColumnManagementContext.Provider>
    </OxygenProvider>,
  );
}

describe('<AvailableColumns>', () => {
  it('renders as expected', () => {
    renderElement();

    expect(
      screen.queryByTestId('COLUMN_MANAGEMENT_AVAILABLE_COLUMNS'),
    ).toBeTruthy();
  });

  it('renders with correct title which is linked to the grid via aria-labelledby', () => {
    renderElement();

    const title = screen.getByText('Available Columns (5)');

    expect(title.tagName).toBe('H2');

    const grid = screen.getByRole('grid');

    expect(grid.getAttribute('aria-labelledby')).toBe(title.id);
  });

  it('is sorted alphabetically', async () => {
    renderElement();

    const labelElements = await screen.findAllByTestId(
      'COLUMN_MANAGEMENT_LABEL',
    );

    labelElements.forEach((element, index) => {
      expect(element.textContent).toBe(
        MOCK_SORTED_AVAILABLE_COLUMNS[index].name.toString(),
      );
    });
  });

  it('renders plus icon ', () => {
    renderElement();

    expect(screen.queryAllByTestId('COLUMN_MANAGEMENT_PLUS_BTN')).toBeTruthy();
  });

  it('renders tooltip when hover', () => {
    renderElement(MOCK_COLUMN_MANAGEMENT_CONTEXT_TOOLTIP);

    const sortableItem = screen.getByTestId(
      'COLUMN_MANAGEMENT_SORTABLE_ITEM_11',
    );

    fireEvent.mouseOver(sortableItem);

    const tooltip = screen.findByText('Average Staffing tooltip');

    expect(tooltip).toBeTruthy();
  });
});

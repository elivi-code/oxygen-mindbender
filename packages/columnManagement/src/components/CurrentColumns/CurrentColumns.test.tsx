import React from 'react';

import {
  fireEvent,
  render,
  RenderResult,
  screen,
} from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';

import { CurrentColumns } from './CurrentColumns';
import { ColumnManagementContext } from '../../context/ColumnManagementProvider';
import {
  MOCK_COLUMN_MANAGEMENT_CONTEXT,
  MOCK_COLUMN_MANAGEMENT_CONTEXT_TOOLTIP,
} from '../../mocks/ColumnManagementContext';

function renderElement(context = MOCK_COLUMN_MANAGEMENT_CONTEXT): RenderResult {
  return render(
    <OxygenProvider>
      <ColumnManagementContext.Provider value={context}>
        <CurrentColumns />
      </ColumnManagementContext.Provider>
    </OxygenProvider>,
  );
}

describe('<CurrentColumns>', () => {
  it('renders as expected', () => {
    renderElement();

    expect(
      screen.queryByTestId('COLUMN_MANAGEMENT_CURRENT_COLUMNS'),
    ).toBeTruthy();
  });

  it('renders with correct title which is linked to the grid via aria-labelledby', () => {
    renderElement();

    const title = screen.getByText('Active Columns (10)');

    expect(title.tagName).toBe('H2');

    const grid = screen.getByRole('grid');

    expect(grid.getAttribute('aria-labelledby')).toBe(title.id);
  });

  it('renders with numeric order', async () => {
    renderElement();

    const orderNumberElements = await screen.findAllByTestId(
      'COLUMN_MANAGEMENT_ORDER_NUMBER',
    );

    orderNumberElements.forEach((element, index) => {
      expect(element.textContent).toBe((index + 1).toString());
    });
  });

  it('renders lock icon ', () => {
    renderElement();

    expect(screen.queryByTestId('COLUMN_MANAGEMENT_LOCK_ICON')).toBeTruthy();
  });

  it('renders trash bin icon ', () => {
    renderElement();

    expect(
      screen.queryAllByTestId('COLUMN_MANAGEMENT_TRASH_BIN_BTN'),
    ).toBeTruthy();
  });

  it('renders tooltip when hover', () => {
    renderElement(MOCK_COLUMN_MANAGEMENT_CONTEXT_TOOLTIP);

    const sortableItem = screen.getByTestId(
      'COLUMN_MANAGEMENT_SORTABLE_ITEM_2',
    );

    fireEvent.mouseOver(sortableItem);

    const tooltip = screen.findByText('Channel tooltip');

    expect(tooltip).toBeTruthy();
  });
});

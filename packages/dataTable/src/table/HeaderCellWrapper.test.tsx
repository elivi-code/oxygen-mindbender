import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { HeaderCellWrapper } from './HeaderCellWrapper';
import { renderWithTheme } from '../__tests__/renderWithTheme';

describe('HeaderCellWrapper', () => {
  it('should set tabIndex to 0 when isSortable is true', () => {
    renderWithTheme(
      <table>
        <thead>
          <tr>
            <HeaderCellWrapper isSortable testId="header-cell" />
          </tr>
        </thead>
      </table>,
    );
    const cell = screen.getByTestId('header-cell');

    expect(cell).toHaveAttribute('tabIndex', '0');
  });

  it('should call onSort when isSortable and Enter or Space is pressed', async () => {
    const onSort = jest.fn();

    renderWithTheme(
      <table>
        <thead>
          <tr>
            <HeaderCellWrapper
              isSortable
              onSort={onSort}
              testId="header-cell"
            />
          </tr>
        </thead>
      </table>,
    );
    const cell = screen.getByTestId('header-cell');

    cell.focus();
    await userEvent.keyboard('{Enter}');
    expect(onSort).toHaveBeenCalledTimes(1);
    await userEvent.keyboard(' ');
    expect(onSort).toHaveBeenCalledTimes(2);
  });
});

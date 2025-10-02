import React from 'react';
import { screen } from '@testing-library/react';
import { ToggleFiltersButton } from './ToggleFiltersButton';
import { renderWithTheme } from '../../__tests__/renderWithTheme';

describe('ToggleFiltersButton', () => {
  it('should not show numActiveFilters', () => {
    const onClick = jest.fn();
    const numActiveFilters = 0;

    renderWithTheme(
      <ToggleFiltersButton
        numActiveFilters={numActiveFilters}
        isActive={false}
        onClick={onClick}
      />,
    );

    expect(screen.queryByText(numActiveFilters.toString())).toBeNull();
  });
});

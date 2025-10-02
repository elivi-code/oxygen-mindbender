import React from 'react';
import { screen } from '@testing-library/react';
import { TableContainer } from '../TableContainer';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import { getRowStatusColor } from '../ErrorIndicator';
import { RowStatusType } from '../../actions/ActionTypes';

describe('TableContainer', () => {
  it('should render TableContainer for noData undefined', () => {
    const mockChildren = <div>mockChildren</div>;

    renderWithTheme(<TableContainer>{mockChildren}</TableContainer>);

    expect(screen.getByText('mockChildren')).toBeVisible();
  });

  it('should render NoDataState for hasNoData true', () => {
    const mockNoData = {
      hasNoData: true,
      title: 'mockedNoDataTitle',
      // callToAction: 'mockedCallToAction',
    };
    const mockChildren = <div>mockChildren</div>;

    renderWithTheme(
      <TableContainer noData={mockNoData}> {mockChildren}</TableContainer>,
    );

    expect(screen.queryByText('mockChildren')).toBeNull();
    expect(screen.getByText('mockedNoDataTitle')).toBeVisible();
  });

  it('should show correct indicator background color', () => {
    const mocktheme = {
      error01: 'ERROR',
      warning01: 'WARNING',
      ui10: 'INFO',
    };

    expect(
      getRowStatusColor({
        theme: mocktheme,
        rowStatusType: RowStatusType.ERROR,
      }),
    ).toEqual(mocktheme.error01);

    expect(
      getRowStatusColor({
        theme: mocktheme,
        rowStatusType: RowStatusType.WARNING,
      }),
    ).toEqual(mocktheme.warning01);

    expect(
      getRowStatusColor({
        theme: mocktheme,
        rowStatusType: RowStatusType.INFO,
      }),
    ).toEqual(mocktheme.ui10);

    expect(
      getRowStatusColor({
        theme: mocktheme,
        rowStatusType: undefined,
      }),
    ).toEqual(mocktheme.ui10);
  });
});

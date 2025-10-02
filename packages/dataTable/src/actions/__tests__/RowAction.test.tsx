import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import { Props, RowActions } from '../RowActions';

jest.mock('../MoreRowActions', () => ({
  MoreRowActions: jest.fn(({ testId }: any) => <div data-test-id={testId} />),
}));

describe('RowAction', () => {
  it('should render RowActions with given testId', () => {
    const testId = 'rowActions';
    const props: Props = {
      actions: [],
      show: true,
      rowActionsPortalTarget: { current: document.createElement('div') },
      isActive: true,
      testId,
    };

    renderWithTheme(<RowActions {...props} />);

    const button = screen.getByTestId(`${testId}-moreRowActions`);

    expect(button).toBeDefined();
  });

  it('should render RowActions with default testId', () => {
    const props: Props = {
      actions: [],
      show: true,
      rowActionsPortalTarget: { current: document.createElement('div') },
      isActive: true,
    };

    renderWithTheme(<RowActions {...props} />);

    const testIdDefaultValue = 'rowActions';
    const button = screen.getByTestId(`${testIdDefaultValue}-moreRowActions`);

    expect(button).toBeDefined();
  });
});

import { screen } from '@testing-library/react';
import React from 'react';
import { Action } from '../Action';
import '@testing-library/jest-dom';
import { ActionProps } from '../types';
import { renderWithTheme } from '../../__tests__/renderWithTheme';

describe('Action', () => {
  it('should render as enabled', () => {
    const props: ActionProps = {
      label: 'Edit',
      icon: <svg data-test-id="mock-icon" />,
      key: 'edit',
      onClick: jest.fn(),
    };

    renderWithTheme(<Action {...props} />);

    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByTestId('mock-icon')).toBeDefined();
    expect(screen.queryByTestId('TOOLTIP')).toBeNull();
  });

  it('should render as disabled', () => {
    const props: ActionProps = {
      label: 'Edit',
      icon: <svg data-test-id="mock-icon" />,
      key: 'edit',
      onClick: jest.fn(),
      disabled: { isDisabled: true, reason: 'Disabled for certain criteria' },
    };

    renderWithTheme(<Action {...props} />);

    expect(screen.getByTestId('ANCHOR_FOR_TOOLTIP')).toBeDefined();
  });
});

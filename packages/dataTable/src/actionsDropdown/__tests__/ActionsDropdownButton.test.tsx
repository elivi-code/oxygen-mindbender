import { screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import themes from '@8x8/oxygen-theme';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { ActionProps } from '../types';
import { ActionsDropdownButton } from '../ActionsDropdownButton';
import { ActionsDropdown } from '../ActionsDropdown';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import '@testing-library/jest-dom';

jest.mock('../ActionsDropdown', () => ({
  ActionsDropdown: jest
    .fn()
    .mockImplementation(({ children }: { children: React.ReactNode }) => (
      <div data-testid="mock-actions-dropdown">{children}</div>
    )),
}));

describe('ActionsDropdownButton', () => {
  it('should render a button', () => {
    const actions: ActionProps[] = [
      {
        label: 'Edit',
        icon: <svg data-test-id="mock-icon" />,
        key: 'edit',
        onClick: jest.fn(),
      },
      {
        label: 'Delete',
        icon: <svg data-test-id="mock-icon" />,
        key: 'delete',
        onClick: jest.fn(),
      },
    ];

    renderWithTheme(
      <ActionsDropdownButton actions={actions}>
        <div>Click</div>
      </ActionsDropdownButton>,
    );

    expect(screen.getByText('Click')).toBeInTheDocument();
  });

  it('should render ActionsDropdown on click', async () => {
    const actions: ActionProps[] = [
      {
        label: 'Edit',
        icon: <svg data-test-id="mock-icon" />,
        key: 'edit',
        onClick: jest.fn(),
      },
      {
        label: 'Delete',
        icon: <svg data-test-id="mock-icon" />,
        key: 'delete',
        onClick: jest.fn(),
      },
    ];

    const user = userEvent.setup();

    renderWithTheme(
      <ThemeProvider theme={themes.light}>
        <ActionsDropdownButton actions={actions}>
          <div>Click</div>
        </ActionsDropdownButton>
      </ThemeProvider>,
    );

    // show popover
    const button = screen.getByText('Click');

    await user.click(button);
    expect(ActionsDropdown).toHaveBeenCalled();
  });

  it('should render ActionsDropdown on click with custom testId', async () => {
    const actions: ActionProps[] = [
      {
        label: 'Edit',
        icon: <svg data-test-id="mock-icon" />,
        key: 'edit',
        onClick: jest.fn(),
      },
      {
        label: 'Delete',
        icon: <svg data-test-id="mock-icon" />,
        key: 'delete',
        onClick: jest.fn(),
      },
    ];

    renderWithTheme(
      <ThemeProvider theme={themes.light}>
        <ActionsDropdownButton actions={actions} testId="custom-test-id">
          <div>Click</div>
        </ActionsDropdownButton>
      </ThemeProvider>,
    );

    expect(screen.getByTestId('custom-test-id_BUTTON')).toBeInTheDocument();
  });
});

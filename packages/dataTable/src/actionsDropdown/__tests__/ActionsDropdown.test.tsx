import { screen } from '@testing-library/react';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { ActionsDropdown } from '../ActionsDropdown';
import { ActionProps } from '../types';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import '@testing-library/jest-dom';

describe('ActionsDropdown', () => {
  it('should render dropdown elements on click', async () => {
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
      <ActionsDropdown actions={actions}>
        <div>Click</div>
      </ActionsDropdown>,
    );

    // show popover
    const button = screen.getByText('Click');

    await user.click(button);
    actions.forEach(action => {
      expect(screen.getByText(action.label)).toBeInTheDocument();
    });
    expect.assertions(actions.length);
  });

  it('should call action.onClick when the action is clicked and action is enabled', async () => {
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
      <ActionsDropdown actions={actions}>
        <div>Click</div>
      </ActionsDropdown>,
    );

    // show popover
    screen.getByText('Click').click();
    const buttons = actions.map(action => screen.getByText(action.label));

    buttons[0].click();
    expect(actions[0].onClick).toHaveBeenCalled();

    expect.assertions(1);
  });

  it('should NOT call action.onClick when the action is clicked and action is disabled', async () => {
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
        disabled: { isDisabled: true, reason: 'Disabled for certain criteria' },
      },
    ];

    renderWithTheme(
      <ActionsDropdown actions={actions}>
        <div>Click</div>
      </ActionsDropdown>,
    );

    // show popover
    screen.getByText('Click').click();
    const buttons = actions.map(action => screen.getByText(action.label));

    buttons[1].click();
    expect(actions[1].onClick).not.toHaveBeenCalled();

    expect.assertions(1);
  });

  it('should render the dropdown with a testId', async () => {
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
      <ActionsDropdown actions={actions} testId="actions-dropdown">
        <div>Click</div>
      </ActionsDropdown>,
    );

    // show popover
    screen.getByText('Click').click();
    expect(
      screen.getByTestId('actions-dropdown_POPOVER_MENU'),
    ).toBeInTheDocument();
  });
});

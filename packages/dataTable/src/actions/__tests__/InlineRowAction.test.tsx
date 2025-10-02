import { screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import Tooltip from '@8x8/oxygen-tooltip';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import { InlineRowAction } from '../InlineRowAction';
import { ActionProps } from '../../actionsDropdown/types';

jest.mock('@8x8/oxygen-tooltip', () => ({
  __esModule: true,
  default: jest.fn(({ children }) => <div>{children}</div>),
}));

describe('InlineRowAction', () => {
  beforeEach(() => {
    (Tooltip as unknown as jest.Mock).mockClear();
  });

  it('should render InlineRowAction with given testId', () => {
    const props: ActionProps = {
      label: 'Edit',
      icon: <svg data-test-id="mock-icon" />,
      key: 'edit',
      onClick: jest.fn(),
      testId: 'inline-row-action',
    };

    renderWithTheme(<InlineRowAction {...props} />);

    const button = screen.getByTestId('inline-row-action-iconButton');

    expect(button).toBeDefined();
    expect(button).toHaveAttribute('title', props.label);
  });

  it('should render InlineRowAction as disabled', () => {
    const props: ActionProps = {
      label: 'Edit',
      icon: <svg data-test-id="mock-icon" />,
      key: 'edit',
      onClick: jest.fn(),
      disabled: { isDisabled: true, reason: 'Disabled for certain criteria' },
    };

    renderWithTheme(<InlineRowAction {...props} />);
    expect(Tooltip).toHaveBeenCalledTimes(1);
  });
});

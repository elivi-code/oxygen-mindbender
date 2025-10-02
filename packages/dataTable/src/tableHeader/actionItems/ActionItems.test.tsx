import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import { ActionItem } from './ActionItems';

describe('ActionItem', () => {
  it('should render ActionItem', () => {
    const onClick = jest.fn();
    const title = 'Action Item';
    const icon = <svg data-test-id="mock-icon" />;

    renderWithTheme(<ActionItem icon={icon} title={title} onClick={onClick} />);
    const actionItem = screen.getByTitle(title);
    const renderedIcon = screen.getByTestId('mock-icon');

    expect(actionItem).toBeInTheDocument();
    expect(renderedIcon).toBeInTheDocument();
  });

  it('should call onClick when clicked', () => {
    const onClick = jest.fn();
    const title = 'Action Item';
    const icon = <svg data-test-id="mock-icon" />;

    renderWithTheme(<ActionItem icon={icon} title={title} onClick={onClick} />);
    const actionItem = screen.getByTitle(title);

    actionItem.click();
    expect(onClick).toHaveBeenCalled();
  });
});

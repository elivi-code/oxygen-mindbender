import React from 'react';
import { screen } from '@testing-library/react';
import themes from '@8x8/oxygen-theme';
import { renderWithTheme } from '../../__tests__/renderWithTheme';
import { TextCell } from '../TextCell';

describe('TextCell', () => {
  it('should render primary text with active style', () => {
    const primaryText = 'primary text';

    renderWithTheme(<TextCell primaryText={primaryText} />);
    const primaryTextCell = screen.getByText(primaryText);
    const color = themes.light.textColor01;

    expect(primaryTextCell).toBeVisible();
    expect(primaryTextCell).toHaveStyle(`color: ${color}`);
  });

  it('should render primary text with inactive style', () => {
    const primaryText = 'primary text';

    renderWithTheme(<TextCell primaryText={primaryText} isInactive />);
    const primaryTextCell = screen.getByText(primaryText);

    const color = themes.light.textColor02;

    expect(primaryTextCell).toHaveStyle(`color: ${color}`);
  });

  it('should render secondary text', () => {
    const primaryText = 'primary text';
    const secondaryText = 'secondary text';

    renderWithTheme(
      <TextCell primaryText={primaryText} secondaryText={secondaryText} />,
    );
    const secondaryTextCell = screen.getByText(secondaryText);

    expect(secondaryTextCell).toBeVisible();
  });
});

import React from 'react';
import { render, screen } from '@testing-library/react';

import themes from '@8x8/oxygen-theme';
import { OxygenProvider } from '@8x8/oxygen-config';
import { ListItemWrapper } from './ListItemWrapper';

const { light } = themes;

describe('List', () => {
  it('renders correctly', () => {
    render(
      <OxygenProvider>
        <ListItemWrapper />
      </OxygenProvider>,
    );

    expect(screen.getByRole('menuitem')).toMatchSnapshot();
  });
  it('has the correct styles when isActive', () => {
    const { rerender } = render(
      <OxygenProvider>
        <ListItemWrapper />
      </OxygenProvider>,
    );

    expect(screen.getByRole('menuitem')).toHaveStyleRule(
      'background',
      light.ui06,
    );

    rerender(
      <OxygenProvider>
        <ListItemWrapper isActive />
      </OxygenProvider>,
    );

    expect(screen.getByRole('menuitem')).toHaveStyleRule(
      'background',
      light.ui01,
    );
  });
  it('has the correct styles when isDisabled', () => {
    const { rerender } = render(
      <OxygenProvider>
        <ListItemWrapper />
      </OxygenProvider>,
    );

    expect(screen.getByRole('menuitem')).toHaveStyle({
      color: light.textColor01,
    });

    rerender(
      <OxygenProvider>
        <ListItemWrapper isDisabled />
      </OxygenProvider>,
    );

    expect(screen.getByRole('menuitem')).toHaveStyle({
      color: light.disabled02,
    });
  });
});

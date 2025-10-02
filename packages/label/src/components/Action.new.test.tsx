import React from 'react';
import { render, screen } from '@testing-library/react';

import Action from './Action';

describe('Action', () => {
  it('renders as button when action is a function', () => {
    // test with function action prop
    const { container, rerender } = render(
      <Action action={jest.fn}>action</Action>,
    );

    // it's rendered as `button` (can probably to this check in a better way)
    expect(container.querySelector('button')).toEqual(
      screen.getByText('action'),
    );
    // explicitly check the type attribute
    expect(screen.getByText('action')).toHaveProperty('type', 'button');

    // now test with string action prop
    rerender(<Action action="https://www.8x8.com">action</Action>);
    // it's rendered as `a` (can probably to this check in a better way)
    expect(container.querySelector('a')).toEqual(screen.getByText('action'));
    // explicitly check the type attribute
    expect(screen.getByText('action')).not.toHaveProperty('type', 'button');
  });
});

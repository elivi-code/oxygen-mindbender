import React from 'react';
import { render, screen } from '@testing-library/react';

import { button } from '@8x8/oxygen-constants';

import ButtonGroup from './ButtonGroup';

describe('<ButtonGroup />', () => {
  it('renders the contents', () => {
    render(
      <ButtonGroup>
        <button type="button">one</button>
      </ButtonGroup>,
    );
    expect(screen.getByText('one')).toBeInTheDocument();
  });
  it.each`
    align       | expected
    ${'left'}   | ${'left'}
    ${'center'} | ${'center'}
    ${'right'}  | ${'right'}
  `(
    'propagates the align property to justify-content',
    ({ align, expected }) => {
      render(
        <ButtonGroup align={align} testId="my-group">
          <button type="button">one</button>
        </ButtonGroup>,
      );
      expect(screen.getByTestId('my-group')).toHaveStyle(
        `justify-content: ${expected}`,
      );
    },
  );
  it.each`
    spacing    | expected
    ${'small'} | ${`${button.buttonGroupSpacingSmall} ${button.buttonGroupSpacingSmall}`}
    ${'large'} | ${`${button.buttonGroupSpacingLarge} ${button.buttonGroupSpacingLarge}`}
  `('propagates the spacing property to gap', ({ spacing, expected }) => {
    render(
      <ButtonGroup spacing={spacing} testId="my-group">
        <button type="button">one</button>
      </ButtonGroup>,
    );
    expect(screen.getByTestId('my-group')).toHaveStyle(`gap: ${expected}`);
  });
});

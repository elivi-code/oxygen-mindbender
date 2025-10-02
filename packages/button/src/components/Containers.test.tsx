import React from 'react';
import { render, screen } from '@testing-library/react';
import { buttonNovo } from '@8x8/oxygen-constants';

import { ButtonCircular } from './Containers';

// test CircularButton props override
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const Icon = props => <div {...props}>icon</div>;

describe('<ButtonCircular /> props', () => {
  it.each`
    variant               | color                                   | colorHover                                   | colorActive
    ${'primary'}          | ${buttonNovo.fontColorPrimary}          | ${buttonNovo.fontColorPrimary}               | ${buttonNovo.fontColorPrimary}
    ${'tertiary'}         | ${buttonNovo.fontColorTertiary}         | ${buttonNovo.fontColorTertiaryHover}         | ${buttonNovo.fontColorTertiaryActive}
    ${'tertiaryReversed'} | ${buttonNovo.fontColorTertiaryReversed} | ${buttonNovo.fontColorTertiaryReversedHover} | ${buttonNovo.fontColorTertiaryReversedActive}
  `(
    'renders active and hover states only when enabled and for the variants for which they are defined',
    ({ variant, color, colorHover, colorActive }) => {
      // regular state
      const { rerender } = render(
        <ButtonCircular theme={buttonNovo} variant={variant}>
          <Icon />
        </ButtonCircular>,
      );

      expect(screen.getByText('icon')).toHaveAttribute('color', color);

      // hover state
      rerender(
        <ButtonCircular theme={buttonNovo} variant={variant} isHovered>
          <Icon />
        </ButtonCircular>,
      );
      expect(screen.getByText('icon')).toHaveAttribute('color', colorHover);

      // active state
      rerender(
        <ButtonCircular theme={buttonNovo} variant={variant} isActive>
          <Icon />
        </ButtonCircular>,
      );
      expect(screen.getByText('icon')).toHaveAttribute('color', colorActive);
    },
  );
});

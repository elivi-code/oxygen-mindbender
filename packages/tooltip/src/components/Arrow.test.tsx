import React from 'react';
import { ThemeProvider } from 'styled-components';
import { render } from '@testing-library/react';

import { staticTooltip as theme } from '@8x8/oxygen-constants';

import Arrow from './Arrow';

describe('Tooltip - Arrow', () => {
  test('it should render', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Arrow />
      </ThemeProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

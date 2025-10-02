import React from 'react';
import { render } from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';
import { List } from './List';

describe('List', () => {
  it('renders correctly', () => {
    const { container } = render(
      <OxygenProvider>
        <List />
      </OxygenProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});

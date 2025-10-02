import React from 'react';
import { render, screen } from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';
import Avatar from '@8x8/oxygen-avatar';
import { ListItem } from './ListItem';

describe('List', () => {
  it('renders correctly', () => {
    render(
      <OxygenProvider>
        <ListItem
          data-test-id="list-item"
          leadingVisuals={<Avatar size="2xsmall" />}
          secondaryText="secondary text sample"
        >
          Sample text
        </ListItem>
      </OxygenProvider>,
    );

    expect(screen.getByTestId('list-item')).toMatchSnapshot();
  });
  it('renders correctly without leadingVisuals and without secondaryText', () => {
    render(
      <OxygenProvider>
        <ListItem data-test-id="list-item">Sample text</ListItem>
      </OxygenProvider>,
    );

    expect(screen.getByTestId('list-item')).toMatchSnapshot();
  });
});

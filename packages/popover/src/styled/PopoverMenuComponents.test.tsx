import React from 'react';
import { render } from '@testing-library/react';

import { OxygenProvider } from '@8x8/oxygen-config';
import { Spinner } from '@8x8/oxygen-loaders';
import {
  SectionHeader,
  Divider,
  EmptyState,
  EmptyStateContainer,
} from './PopoverMenuComponents';

describe('PopoverMenuComponents', () => {
  it('renders correctly', () => {
    const { container } = render(
      <OxygenProvider>
        <SectionHeader />
        <Divider />
        <EmptyStateContainer />
      </OxygenProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders SectionHeader with isBold correctly', () => {
    const { container } = render(
      <OxygenProvider>
        <SectionHeader isBold />
      </OxygenProvider>,
    );

    expect(container).toMatchSnapshot();
  });

  it('renders EmptyState correctly', () => {
    const { container } = render(
      <OxygenProvider>
        <EmptyState
          primaryMessage="No results found"
          secondaryMessage="Try a different search item"
          icon={<Spinner aria-label="Loading" />}
        />
      </OxygenProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});

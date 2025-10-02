import React from 'react';
import { render } from '@testing-library/react';
import { OxygenProvider } from '@8x8/oxygen-config';

import { Container } from './AccordionGroup';

describe('AccordionGroup styled components', () => {
  it('should render Container', () => {
    const { container } = render(
      <OxygenProvider themeName="light">
        <Container hasFixedHeight />
      </OxygenProvider>,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});

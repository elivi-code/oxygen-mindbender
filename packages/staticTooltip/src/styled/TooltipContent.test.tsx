import React from 'react';
import { render } from '@testing-library/react';

import { staticTooltip as theme } from '@8x8/oxygen-constants';

import TooltipContent from './TooltipContent';

describe('<TooltipContent>', () => {
  it('should render correctly with a default theme', () => {
    const { container } = render(<TooltipContent theme={theme} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

import React from 'react';
import { render } from '@testing-library/react';

import { staticTooltip as theme } from '@8x8/oxygen-constants';

import TooltipWrapper from './TooltipWrapper';

describe('<TooltipWrapper>', () => {
  it('should render correctly with a default theme', () => {
    const { container } = render(<TooltipWrapper theme={theme} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

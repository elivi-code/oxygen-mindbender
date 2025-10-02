import React from 'react';
import { render } from '@testing-library/react';
import { toast, toastNovo } from '@8x8/oxygen-constants';

import { ActionsContainer } from './ActionsContainer';

describe('<ActionsContainer>', () => {
  it('should render correctly for Classic', () => {
    const { container } = render(<ActionsContainer theme={toast} />);

    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly for Novo', () => {
    const { container } = render(<ActionsContainer theme={toastNovo} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

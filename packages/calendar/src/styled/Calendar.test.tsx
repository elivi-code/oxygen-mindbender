import React from 'react';
import { render } from '@testing-library/react';

import { MonthWrapper } from './Calendar';

describe('MonthWrapper', () => {
  it('should render', () => {
    const { container } = render(<MonthWrapper />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).not.toHaveStyleRule('overflow', 'auto');
    expect(container.firstChild).not.toHaveStyleRule('max-width', '100vw');
  });

  it('should render with enableMaxWidth', () => {
    const { container } = render(<MonthWrapper enableMaxWidth />);

    expect(container.firstChild).toMatchSnapshot();
    expect(container.firstChild).toHaveStyleRule('overflow', 'auto');
    expect(container.firstChild).toHaveStyleRule('max-width', '100vw');
  });
});

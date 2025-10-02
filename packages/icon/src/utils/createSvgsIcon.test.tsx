import React from 'react';
import { render } from '@testing-library/react';

import createSvgIcon from './createSvgIcon';

describe('Icon', () => {
  it('should render', () => {
    const Icon = createSvgIcon(<path />, 'test');
    const { container } = render(<Icon />);

    expect(container.firstChild).toMatchSnapshot();
  });
});

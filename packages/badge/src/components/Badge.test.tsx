import React from 'react';
import renderer from 'react-test-renderer';

import Badge from './Badge';
import { BadgeProps } from '../types';

jest.mock('../styled/BadgeWrapper', () => 'BadgeWrapper');

const mockProps: Partial<BadgeProps> = {
  theme: {},
  type: 'primary',
  size: 'medium',
  position: 'top-start',
  isInner: false,
  testId: 'BADGE',
};

describe('<Badge>', () => {
  let wrapper;

  function setup(props: Partial<BadgeProps>) {
    return renderer.create(<Badge {...props}>2</Badge>).toJSON();
  }

  it('should render correctly as type primary', () => {
    wrapper = setup({
      ...mockProps,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly as type secondary', () => {
    wrapper = setup({
      type: 'secondary',
    });
    expect(wrapper).toMatchSnapshot();
  });
});

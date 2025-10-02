import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import BreadcrumbsList from './BreadcrumbsList';

describe('<BreadcrumbsList>', () => {
  it('should render correctly', () => {
    const wrapper = renderer.create(<BreadcrumbsList />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

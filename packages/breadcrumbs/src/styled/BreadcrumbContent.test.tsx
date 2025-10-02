import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import BreadcrumbContent from './BreadcrumbContent';

describe('<BreadcrumbContent>', () => {
  it('should render correctly', () => {
    const wrapper = renderer.create(<BreadcrumbContent />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import BreadcrumbsListItem from './BreadcrumbsListItem';

describe('<BreadcrumbsListItem>', () => {
  it('should render correctly', () => {
    const wrapper = renderer.create(<BreadcrumbsListItem />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

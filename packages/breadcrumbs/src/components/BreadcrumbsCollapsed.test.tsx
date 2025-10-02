import * as React from 'react';
import noop from 'lodash.noop';
import * as renderer from 'react-test-renderer';

import BreadcrumbsCollapsed from './BreadcrumbsCollapsed';

jest.mock('@8x8/oxygen-text-link', () => 'TextLink');
jest.mock('../styled/BreadcrumbsListItem', () => 'BreadcrumbsListItem');
jest.mock('../styled/BreadcrumbsSeparator', () => 'BreadcrumbsSeparator');
jest.mock('../styled/BreadcrumbContent', () => 'BreadcrumbContent');

describe('<BreadcrumbsCollapsed>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <BreadcrumbsCollapsed
          separator="/"
          title="Show links"
          onClick={noop}
          {...props}
        />,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

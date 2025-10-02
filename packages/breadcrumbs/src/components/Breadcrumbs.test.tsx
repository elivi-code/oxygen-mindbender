import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Breadcrumbs from './Breadcrumbs';

jest.mock('@8x8/oxygen-text-link', () => 'TextLink');
jest.mock('../styled', () => ({
  BreadcrumbsList: 'BreadcrumbsList',
  BreadcrumbsListItem: 'BreadcrumbsListItem',
  BreadcrumbsSeparator: 'BreadcrumbsSeparator',
  BreadcrumbsCollapsed: 'BreadcrumbsCollapsed',
  BreadcrumbContent: 'BreadcrumbContent',
}));

describe('<Breadcrumbs>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <Breadcrumbs collapsedTitle="Example title" {...props}>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
        </Breadcrumbs>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with custom separator', () => {
    wrapper = setup({ separator: '*' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with three items before collapse', () => {
    wrapper = setup({ itemsBeforeCollapse: 3 });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with three items after collapse', () => {
    wrapper = setup({ itemsBeforeCollapse: 1, itemsAfterCollapse: 3 });
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import List from './List';

jest.mock('../styled/ListStyled', () => 'ListStyled');

describe('<List>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(
        <List {...props}>
          <li>item 2</li>
          <li>item 2</li>
        </List>,
      )
      .toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when list isGroup', () => {
    wrapper = setup({ isGroup: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when list isOrdered', () => {
    wrapper = setup({ isOrdered: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly withBackground', () => {
    wrapper = setup({ withBackground: true });
    expect(wrapper).toMatchSnapshot();
  });
});

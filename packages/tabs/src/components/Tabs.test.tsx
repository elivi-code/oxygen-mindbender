import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import Tabs from './Tabs';

jest.mock('../styled/TabsBar', () => 'TabsBar');

describe('<Tabs>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<Tabs {...props}>Content</Tabs>).toJSON();
  }

  it('should render correctly', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is `dark`', () => {
    wrapper = setup({ color: 'dark' });
    expect(wrapper).toMatchSnapshot();
  });
});

import React from 'react';
import renderer from 'react-test-renderer';

import { checkboxGroup as theme } from '@8x8/oxygen-constants';

import { CheckboxGroup } from './CheckboxGroup';

describe('<CheckboxGroup>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<CheckboxGroup theme={theme} {...props} />).toJSON();
  }

  it('should render the checkbox group component', () => {
    wrapper = setup({
      children: 'mockedChildren',
    });
    expect(wrapper).toMatchSnapshot();
  });
});

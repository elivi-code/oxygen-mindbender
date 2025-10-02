import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import TextFieldContainer from './TextFieldContainer';

describe('<TextFieldContainer>', () => {
  it('should render correctly', () => {
    const wrapper = renderer.create(<TextFieldContainer />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

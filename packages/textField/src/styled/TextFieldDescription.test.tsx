import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { textField as theme } from '@8x8/oxygen-constants';

import TextFieldDescription from './TextFieldDescription';

describe('<TextFieldDescription>', () => {
  it('should render correctly', () => {
    const wrapper = renderer
      .create(<TextFieldDescription theme={theme} />)
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

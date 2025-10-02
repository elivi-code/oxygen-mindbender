import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { textField as theme } from '@8x8/oxygen-constants';
import TextFieldLabel from './TextFieldLabel';

jest.mock('@8x8/oxygen-label', () => 'Label');

describe('<TextFieldLabel>', () => {
  it('should render correctly', () => {
    const wrapper = renderer.create(<TextFieldLabel theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

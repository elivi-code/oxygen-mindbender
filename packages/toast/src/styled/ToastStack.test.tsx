import * as React from 'react';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';
import { toast as theme } from '@8x8/oxygen-constants';

import ToastStack from './ToastStack';

describe('<ToastStack>', () => {
  it('should render correctly', () => {
    const wrapper = renderer.create(<ToastStack theme={theme} />).toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

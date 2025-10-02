import React from 'react';
import { shallow } from 'enzyme';

import { toast } from '@8x8/oxygen-constants';

import ToastStack from './ToastStack';
import Toast from './Toast';

describe('<ToastStack>', () => {
  it('renders a stack of toasts', () => {
    const stackedWrapper = props =>
      shallow(
        <ToastStack theme={toast}>
          <Toast {...props} />
          <Toast {...props} />
          <Toast {...props} />
        </ToastStack>,
      );

    expect(stackedWrapper()).toMatchSnapshot();
  });
});

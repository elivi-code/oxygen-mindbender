import React from 'react';
import { ThemeProvider } from 'styled-components';
import * as renderer from 'react-test-renderer';
import 'jest-styled-components';

import {
  toast,
  toastNovo,
  toastSizes,
  toastTypes,
} from '@8x8/oxygen-constants';

import ToastWrapper from './ToastWrapper';

jest.mock('react-pose', () => ({ div: () => 'div' }));

describe('<ToastWrapper>', () => {
  it('should render correctly', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={toast}>
          <ToastWrapper type={toastTypes.success} size={toastSizes.small} />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
  it('should render correctly with Novo', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={toastNovo}>
          <ToastWrapper type={toastTypes.success} size={toastSizes.small} />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});

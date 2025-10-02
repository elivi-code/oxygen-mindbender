import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { ThemeProvider } from 'styled-components';
import {
  checkbox,
  checkboxNovo,
  checkboxNovoDark,
} from '@8x8/oxygen-constants';

import CheckboxIconWrapper from './CheckboxIconWrapper';
import { CheckboxIconWrapperProps } from './CheckboxIconWrapperProps';
import { CheckboxTheme } from '../types';

describe('<CheckboxIconWrapper />', () => {
  let wrapper;
  const setup = (
    theme: CheckboxTheme,
    props: Partial<CheckboxIconWrapperProps> = {},
  ) =>
    renderer
      .create(
        <ThemeProvider theme={theme}>
          <CheckboxIconWrapper {...props} />
        </ThemeProvider>,
      )
      .toJSON();

  it('should render correctly with default props', () => {
    wrapper = setup(checkbox);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with novo theme', () => {
    wrapper = setup(checkboxNovo);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with NovoDark theme', () => {
    wrapper = setup(checkboxNovoDark);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a focus ring when hasLabel is false and isFocused is true', () => {
    const tree = setup(checkbox, { hasLabel: false, isFocused: true });

    expect(tree).toMatchSnapshot();
  });

  it('should render a cursor with "not-allowed" when isDisabled is true', () => {
    const tree = setup(checkbox, { isDisabled: true });

    expect(tree).toMatchSnapshot();
  });
});

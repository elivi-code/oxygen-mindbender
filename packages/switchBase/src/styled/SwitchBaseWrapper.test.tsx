import React from 'react';
import renderer from 'react-test-renderer';
import { DefaultTheme, ThemeProvider } from 'styled-components';

import { checkbox as theme } from '@8x8/oxygen-constants';
import SwitchBaseWrapper, { Props } from './SwitchBaseWrapper';

describe('<SwitchBaseWrapper>', () => {
  let wrapper;

  function setup(props: Props = { isDisabled: false }) {
    return renderer
      .create(
        <ThemeProvider theme={theme as DefaultTheme}>
          <SwitchBaseWrapper {...props} />
        </ThemeProvider>,
      )
      .toJSON();
  }

  it('should render correctly with default props', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a focus ring when isFocused and hasLabel is set to true', () => {
    wrapper = setup({ isFocused: true, hasLabel: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render a focus ring when isFocused and isToggleButton is set to true and hasLabel is false', () => {
    wrapper = setup({ isFocused: true, hasLabel: false, isToggleButton: true });
    expect(wrapper).toMatchSnapshot();
  });
});

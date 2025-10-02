import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { radio, radioNovo, radioNovoDark } from '@8x8/oxygen-constants';

import RadioContainer from './RadioContainer';

describe('<RadioContainer> with Classic theme', () => {
  let wrapper;

  const setup = (props = {}) =>
    renderer.create(<RadioContainer theme={radio} {...props} />).toJSON();

  it('should style correctly the radio container when the radio is enabled', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the radio container when the radio is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<RadioContainer> with Novo theme', () => {
  let wrapper;
  const setup = (props = {}) =>
    renderer.create(<RadioContainer theme={radioNovo} {...props} />).toJSON();

  it('should style correctly the radio container when the radio is enabled', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the radio container when the radio is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render element with focus ring  when isFocused is true', () => {
    wrapper = setup({ isFocused: true });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<RadioContainer> with NovoDark theme', () => {
  let wrapper;

  const setup = (props = {}) =>
    renderer
      .create(<RadioContainer theme={radioNovoDark} {...props} />)
      .toJSON();

  it('should style correctly the radio container when the radio is enabled', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the radio container when the radio is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render element with focus ring  when isFocused is true', () => {
    wrapper = setup({ isFocused: true });
    expect(wrapper).toMatchSnapshot();
  });
});

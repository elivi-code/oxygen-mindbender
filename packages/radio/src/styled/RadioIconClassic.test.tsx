import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { radio } from '@8x8/oxygen-constants';

import RadioIconClassic from './RadioIconClassic';

describe('<RadioIconClassic>', () => {
  let wrapper;

  const setup = (props = {}) =>
    renderer.create(<RadioIconClassic theme={radio} {...props} />).toJSON();

  it('should render correctly with classic theme', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is checked', () => {
    wrapper = setup({ isChecked: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is focused', () => {
    wrapper = setup({ isFocused: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly when is mouse is over', () => {
    wrapper = setup({ isMouseEntered: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    wrapper = setup({ hasLabel: true });
    expect(wrapper).toMatchSnapshot();
  });
});

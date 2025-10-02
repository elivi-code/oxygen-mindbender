import React from 'react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';

import { toggleButton as theme } from '@8x8/oxygen-constants';

import ToggleButtonIcon from './ToggleButtonIcon';
import { Props, PropsWithTheme } from './styledProps';
import { ToggleButtonTheme } from '../types';

describe('<ToggleButtonIcon/>', () => {
  let wrapper;

  function setup(props: Partial<PropsWithTheme> = {}) {
    return renderer
      .create(<ToggleButtonIcon theme={theme} {...(props as Props)} />)
      .toJSON() as renderer.ReactTestRendererJSON;
  }

  it('should style correctly the toggle-button icon for the checked state', () => {
    wrapper = setup({
      isChecked: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the toggle-button icon for the unchecked state', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the toggle-button icon for the indeterminate state', () => {
    wrapper = setup({
      isIndeterminate: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the toggle-button icon for the disabled checked state', () => {
    wrapper = setup({
      isChecked: true,
      isDisabled: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the toggle-button icon for the disabled unchecked state', () => {
    wrapper = setup({
      isDisabled: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly the toggle-button icon for the disabled indeterminate state', () => {
    wrapper = setup({
      isDisabled: true,
      isIndeterminate: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('should add a focus ring on the icon when isFocused is true', () => {
    wrapper = setup({
      isFocused: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it.each`
    iconSet      | isDisabled | opacity
    ${'classic'} | ${false}   | ${'1'}
    ${'classic'} | ${true}    | ${'0.5'}
    ${'novo'}    | ${false}   | ${'1'}
    ${'novo'}    | ${true}    | ${'1'}
  `(
    'should have opacity: $opactiy for iconSet: $iconSet & isDisabled: $isDisabled',
    ({ iconSet, isDisabled, opacity }) => {
      wrapper = setup({ isDisabled, theme: { iconSet } as ToggleButtonTheme });
      expect(wrapper).toHaveStyleRule('opacity', opacity);
    },
  );
});

import React from 'react';
import { shallow } from 'enzyme';

import { select as theme } from '@8x8/oxygen-constants';

import Option from './Option';

jest.mock('react-select', () => ({
  components: {
    Option: 'Option',
  },
}));

jest.mock('../styled', () => ({
  AvatarIcon: 'AvatarIcon',
  CheckboxWrapper: 'CheckboxWrapper',
  OptionWrapper: 'OptionWrapper',
  OptionCheckboxLayer: 'OptionCheckboxLayer',
}));

describe('<Option />', () => {
  let wrapper;

  function setupShallow(props = {}) {
    return shallow(<Option theme={theme} {...props} />);
  }

  it('renders correctly the option', () => {
    wrapper = setupShallow({ selectProps: {}, data: {} });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the option when disabled', () => {
    wrapper = setupShallow({ selectProps: {}, data: {}, isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the option with icon', () => {
    wrapper = setupShallow({
      selectProps: { hasIcons: true },
      data: { iconProps: {} },
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the option when disabled with icon', () => {
    wrapper = setupShallow({
      selectProps: { hasIcons: true },
      data: {},
      isDisabled: true,
    });
  });

  it('renders correctly the option with checkbox', () => {
    wrapper = setupShallow({ selectProps: { hasCheckbox: true }, data: {} });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the option with checkbox checked', () => {
    wrapper = setupShallow({
      selectProps: { hasCheckbox: true },
      data: {},
      isSelected: true,
    });
    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly the option with checkbox when disabled', () => {
    wrapper = setupShallow({
      selectProps: { hasCheckbox: true },
      data: {},
      isDisabled: true,
    });
  });
});

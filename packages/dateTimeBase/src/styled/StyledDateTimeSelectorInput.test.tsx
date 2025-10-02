import React from 'react';
import renderer from 'react-test-renderer';

import { dateTimeRangeSelector as theme } from '@8x8/oxygen-constants';

import {
  InputContainer,
  InputIcon,
  InputTitle,
} from './StyledDateTimeSelectorInput';

describe('<InputContainer>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<InputContainer theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when size is small', () => {
    wrapper = setup({ size: 'small' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when size is large', () => {
    wrapper = setup({ size: 'large' });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when input is open', () => {
    wrapper = setup({ isOpen: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when input is closed', () => {
    wrapper = setup({ isOpen: false });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when input is disabled', () => {
    wrapper = setup({ isDisabled: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when input is not disabled', () => {
    wrapper = setup({ isDisabled: false });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<InputIcon>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer.create(<InputIcon theme={theme} {...props} />).toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when reversed', () => {
    wrapper = setup({ reversed: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when not reversed', () => {
    wrapper = setup({ reversed: false });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<InputTitle>', () => {
  function setup(props = {}) {
    return renderer.create(<InputTitle theme={theme} {...props} />).toJSON();
  }

  it('default styles', () => {
    const wrapper = setup();

    expect(wrapper).toMatchSnapshot();
  });

  it('should change color when isPlaceholder is true', () => {
    const wrapper = setup({ isPlaceholder: true });

    expect(wrapper).toMatchSnapshot();
  });
});

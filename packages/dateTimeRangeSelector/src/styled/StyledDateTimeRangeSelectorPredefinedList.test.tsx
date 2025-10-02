import React from 'react';
import renderer from 'react-test-renderer';

import { dateTimeRangeSelector as theme } from '@8x8/oxygen-constants';

import {
  PredefinedList,
  PredefinedListItem,
  PredefinedListInputWrapper,
} from './StyledDateTimeRangeSelectorPredefinedList';

describe('<PredefinedListItem>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<PredefinedListItem theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when selected', () => {
    wrapper = setup({ isSelected: true });
    expect(wrapper).toMatchSnapshot();
  });

  it('should style correctly when not selected', () => {
    wrapper = setup({ isSelected: true });
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<PredefinedList>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<PredefinedList theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<PredefinedListInputWrapper>', () => {
  let wrapper;

  function setup(props = {}) {
    return renderer
      .create(<PredefinedListInputWrapper theme={theme} {...props} />)
      .toJSON();
  }

  it('should style correctly by default', () => {
    wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
